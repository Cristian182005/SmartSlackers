"use client";

import { motion, AnimatePresence } from "framer-motion";

interface AvatarPreviewProps {
  skinColor: string;
  equippedHat: string | null;
  equippedEyes: string | null;
}

export default function AvatarPreview({ skinColor, equippedHat, equippedEyes }: AvatarPreviewProps) {
  return (
    <div className="relative w-64 h-64 bg-card rounded-xl border border-border shadow-inner flex items-center justify-center overflow-hidden">
      
      {/* CAPA 1: Cuerpo base */}
      <div 
        className="w-32 h-32 rounded-full transition-colors duration-300 relative flex items-center justify-center"
        style={{ backgroundColor: skinColor }}
      >
        <div className="absolute top-12 left-8 w-3 h-3 bg-slate-900 rounded-full" />
        <div className="absolute top-12 right-8 w-3 h-3 bg-slate-900 rounded-full" />
        <div className="absolute bottom-8 w-8 h-4 border-b-2 border-slate-950 rounded-b-full" />
      </div>

      {/* CAPA 2: Ojos */}
      <AnimatePresence>
        {equippedEyes && (
          <motion.img
            key={equippedEyes}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            src={`/cosmetics/${equippedEyes}.svg`}
            className="absolute inset-0 w-full h-full p-12 object-contain pointer-events-none"
            alt="Accesorio ojos"
            onError={(e) => (e.currentTarget.style.display = 'none')} 
          />
        )}
      </AnimatePresence>

      {/* CAPA 3: Cabeza */}
      <AnimatePresence>
        {equippedHat && (
          <motion.img
            key={equippedHat}
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
            src={`/cosmetics/${equippedHat}.svg`}
            className="absolute inset-0 w-full h-full p-12 object-contain pointer-events-none"
            alt="Accesorio cabeza"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        )}
      </AnimatePresence>
      
    </div>
  );
}