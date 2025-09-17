import { NextRequest, NextResponse } from "next/server";


 interface RecaptchaResponse {
   success: boolean;
   score: number;
   action: string;
   challenge_ts: string;
   hostname: string;
   'error-codes'?: string[];
 }

 export async function POST(req: NextRequest) {
   try {
     const { token, action } = await req.json();

     if (!token) {
       return NextResponse.json({ message: 'Token is required' }, { status: 400 });
     }

     if (!action) {
       return NextResponse.json({ message: 'Action is required' }, { status: 400 });
     }

     const response = await fetch(
       `https://www.google.com/recaptcha/api/siteverify`,
       {
         method: 'POST',
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
       }
     );

     const data: RecaptchaResponse = await response.json();

     if (data.success) {
       // Verify the action matches what we expect
       if (data.action !== action) {
         return NextResponse.json({ 
           success: false, 
           message: 'Action mismatch',
           expectedAction: action,
           receivedAction: data.action
         }, { status: 400 });
       }

      //  Return success with score for further processing
       return NextResponse.json({ 
         success: true, 
         score: data.score,
         action: data.action,
         hostname: data.hostname
       });
     } else {
       return NextResponse.json({ 
         success: false, 
         errors: data['error-codes'] || ['Unknown error']
       }, { status: 400 });
     }
   } catch (error) {
     console.error('reCAPTCHA verification error:', error);
     return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
   }
 }