"use client";

/* Tiny event bus so isolated client islands can talk to each other. */
export const openPalette = () => window.dispatchEvent(new CustomEvent("vikas:open-palette"));
export const openLogin = () => window.dispatchEvent(new CustomEvent("vikas:open-login"));
export const showToast = (message: string) =>
  window.dispatchEvent(new CustomEvent<string>("vikas:toast", { detail: message }));
