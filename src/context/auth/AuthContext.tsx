"use client";

import { createContext, useState, useEffect, useContext, ReactNode } from "react";

type User = {
  name: string;
  email?: string;
  // add more user fields here
} | null;

type AuthContextType = {
  user: User;
  setUser: (user: User) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // in real case -> decode token or fetch /me
      setUser({ name: "John Doe", email: "john@example.com" });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
