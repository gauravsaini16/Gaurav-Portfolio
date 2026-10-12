"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Cursor from "@/components/Cursor";

const Dither = dynamic(() => import("@/components/Dither"), { ssr: false });

export default function ComingSoonPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passStatus, setPassStatus] = useState("idle");

  const handlePassword = async (event) => {
    event.preventDefault();
    setPassStatus("checking");

    try {
      const response = await fetch("/api/settings/bypass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.push("/");
        router.refresh();
        return;
      }
    } catch {
      // Show the same message for invalid credentials and network failures.
    }

    setPassStatus("wrong");
    setTimeout(() => setPassStatus("idle"), 2500);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#080808]">
      <Cursor />

      <div className="absolute inset-0 z-0">
        <Dither
          waveColor={[1, 0.42, 0.1]}
          waveSpeed={0.04}
          waveFrequency={2.5}
          waveAmplitude={0.35}
          colorNum={5}
          pixelSize={3}
          enableMouseInteraction
          mouseRadius={0.35}
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#080808]/95 via-[#080808]/55 to-[#080808]/25" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-16 text-center">
        <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.6em] text-[#ff6b1a] md:mb-10 md:text-[10px]">
          Gaurav
        </p>

        <h1
          className="mb-4 font-black leading-[0.88] tracking-tighter text-white md:mb-6"
          style={{ fontSize: "clamp(3rem, 14vw, 9rem)" }}
        >
          Coming
          <br />
          <span className="ghost-orange">Soon.</span>
        </h1>

        <p className="mb-8 max-w-xs text-xs font-light leading-relaxed text-white/35 md:mb-12 md:max-w-sm md:text-sm">
          Something cinematic is being built. The portfolio will be available soon.
        </p>

        <div className="mb-7 h-7 w-px bg-white/15 md:mb-10 md:h-10" />

        <form onSubmit={handlePassword} className="flex w-full max-w-[260px] gap-0 sm:max-w-xs">
          <input
            type="password"
            placeholder="Access password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={`min-w-0 flex-1 rounded-l-full border border-r-0 bg-white/5 px-4 py-2.5 text-xs text-white/60 placeholder:text-white/20 focus:outline-none transition-colors ${
              passStatus === "wrong" ? "border-red-500/40" : "border-white/10 focus:border-white/25"
            }`}
          />
          <button
            type="submit"
            disabled={passStatus === "checking"}
            className="shrink-0 whitespace-nowrap rounded-r-full border border-white/10 bg-white/5 px-4 py-2.5 text-[9px] font-medium uppercase tracking-widest text-white/40 transition-all hover:bg-white/10 hover:text-white"
          >
            {passStatus === "checking" ? "…" : passStatus === "wrong" ? "Wrong" : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}
