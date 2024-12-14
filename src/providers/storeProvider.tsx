"use client";
import React, { useEffect } from "react";
import { useFieldStore } from "@/store/fieldStore";

export function StoreInitializer() {
  useEffect(() => {
    // Hydrate store if needed
    useFieldStore.persist.rehydrate();
  }, []);

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
