"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { checkCoverage } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import { Search, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const initialState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      className="w-full flex justify-center items-center gap-2"
    >
      {pending ? (
        "Checking..."
      ) : (
        <>
          <Search className="w-4 h-4" /> Check Availability
        </>
      )}
    </Button>
  );
}

export function HeroCell() {
  const [state, formAction] = useActionState(checkCoverage, initialState);

  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      className="bento-card col-span-1 md:col-span-2 min-h-[400px] flex flex-col justify-center items-center text-center p-8 group"
    >
      {/* Background Image / Video */}
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1542385151-ef2b2521f7c8?q=80&w=2626&auto=format&fit=crop')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-brand-deep/50 to-brand-deep/90" />

      <div className="z-10 w-full max-w-md space-y-8">
        <div>
          <h1 className="text-6xl font-black tracking-tighter text-white mb-2 drop-shadow-lg">
            Bariloche<span className="text-brand-accent">Link</span>
          </h1>
          <p className="text-xl text-white/90 font-light">
            Fiber optics for the Patagonian frontier.
          </p>
        </div>

        <form
          action={formAction}
          className="bg-brand-deep/40 p-3 rounded-2xl border border-white/10 backdrop-blur-xl flex flex-col gap-3 shadow-2xl"
        >
          <div className="relative">
            <MapPin className="absolute left-4 top-3.5 text-white/60 w-5 h-5" />
            <input
              name="address"
              placeholder="Enter your address..."
              className="w-full bg-transparent border-none text-white placeholder:text-white/40 pl-12 h-12 focus:ring-0 outline-none font-medium"
              required
            />
          </div>
          <SubmitButton />
        </form>

        {state.message && (
          <div className="text-brand-accent text-sm font-medium animate-pulse bg-brand-deep/50 py-2 px-4 rounded-full inline-block">
            {state.message}
          </div>
        )}
      </div>
    </motion.div>
  );
}
