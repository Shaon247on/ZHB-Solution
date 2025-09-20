import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Token is required' }, 
        { status: 400 }
      );
    }

    // Verify with Google reCAPTCHA API
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    
    console.log('reCAPTCHA verification result:', data);
    
    return NextResponse.json({ 
      success: data.success,
      ...(data['error-codes'] && { errors: data['error-codes'] })
    });

  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json(
      { success: false, message: 'Verification failed' }, 
      { status: 500 }
    );
  }
}