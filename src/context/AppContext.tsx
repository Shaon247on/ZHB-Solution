"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types for your context
interface AppContextType {
  navTitle: string | "Home";
  setNavTitle: (navTitle: string | "Home") => void;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [navTitle, setNavTitle] = useState<string | "Home">("Home");

  return (
    <AppContext.Provider value={{ navTitle, setNavTitle }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook for consuming the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return context;
}
