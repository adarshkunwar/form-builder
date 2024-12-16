"use client";
import React from "react";

export function StoreInitializer() {
  return null;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <StoreInitializer />
    </>
  );
}
