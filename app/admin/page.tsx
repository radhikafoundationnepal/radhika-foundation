"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/admin/login");
      } else {
        setChecking(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  async function handleLogout() {
    await signOut(auth);
    router.replace("/admin/login");
  }

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Checking login...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-blue-700">
            Radhika Foundation CMS
          </h1>

          <p className="text-gray-600 mt-2">
            Welcome to Admin Dashboard
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-lg">News</h2>
          <p className="text-3xl mt-3">0</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-lg">Notices</h2>
          <p className="text-3xl mt-3">0</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-lg">Gallery</h2>
          <p className="text-3xl mt-3">0</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-lg">Donations</h2>
          <p className="text-3xl mt-3">0</p>
        </div>

      </div>
    </div>
  );
}