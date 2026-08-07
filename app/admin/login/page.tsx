"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
    const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
router.push("/admin");
    } catch (error) {
      console.error(error);
      alert("Email or password गलत छ।");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center text-2xl font-bold">
            R
          </div>

          <h1 className="text-3xl font-bold mt-4">
            Radhika CMS
          </h1>

          <p className="text-gray-500 mt-2">
            Administrator Login
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <label className="block font-semibold mb-2">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Admin Email"
            required
            className="w-full border rounded-lg p-3 mb-5"
          />

          <label className="block font-semibold mb-2">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full border rounded-lg p-3 mb-6"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg"
          >
            Login
          </button>

        </form>

      </div>
    </main>
  );
}