"use client";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function watchAuth(
  callback: (user: typeof auth.currentUser) => void
) {
  return onAuthStateChanged(auth, callback);
}