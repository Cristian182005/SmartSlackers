"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import AvatarPreview from "./AvatarPreview";

const SKIN_COLORS = ["#FFDBAC", "#F1C27D", "#E0AC69", "#C68642", "#8D5524"];
const HATS = [
  { id: "ingenieria_casco", name: "Casco de Ingeniero" },
  { id: "ciencias_bata", name: "Gorro Clínico" },
];
const EYES = [
  { id: "lentes_inteligentes", name: "Lentes de Científico" },
  { id: "monoculo", name: "Monóculo de Historiador" },
];

export default function AvatarCustomizer() {
  const [skinColor, setSkinColor] = useState(SKIN_COLORS[0]);
  const [equippedHat, setEquippedHat] = useState<string | null>(null);
  const [equippedEyes, setEquippedEyes] = useState<string | null>(null);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-6 max-w-4xl mx-auto">
      
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-lg font-bold">Tu Avatar</h3>
        <AvatarPreview 
          skinColor={skinColor} 
          equippedHat={equippedHat} 
          equippedEyes={equippedEyes} 
        />
      </div>

      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <Tabs defaultValue="skin" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="skin">Piel</TabsTrigger>
              <TabsTrigger value="hats">Cabezas</TabsTrigger>
              <TabsTrigger value="eyes">Ojos</TabsTrigger>
            </TabsList>

            <TabsContent value="skin" className="flex gap-3 justify-center py-4">
              {SKIN_COLORS.map((color) => (
                <button
                  key={color}
                  className={`w-10 h-10 rounded-full border-2 ${skinColor === color ? 'border-primary scale-110' : 'border-transparent'}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSkinColor(color)}
                />
              ))}
            </TabsContent>

            <TabsContent value="hats" className="grid grid-cols-2 gap-2">
              <button 
                className={`p-3 text-sm rounded-lg border ${!equippedHat ? 'bg-secondary font-medium' : 'bg-background'}`}
                onClick={() => setEquippedHat(null)}
              >
                Ninguno
              </button>
              {HATS.map((hat) => (
                <button
                  key={hat.id}
                  className={`p-3 text-sm rounded-lg border text-left ${equippedHat === hat.id ? 'border-primary bg-primary/10' : 'bg-background'}`}
                  onClick={() => setEquippedHat(hat.id)}
                >
                  {hat.name}
                </button>
              ))}
            </TabsContent>

            <TabsContent value="eyes" className="grid grid-cols-2 gap-2">
              <button 
                className={`p-3 text-sm rounded-lg border ${!equippedEyes ? 'bg-secondary font-medium' : 'bg-background'}`}
                onClick={() => setEquippedEyes(null)}
              >
                Ninguno
              </button>
              {EYES.map((eye) => (
                <button
                  key={eye.id}
                  className={`p-3 text-sm rounded-lg border text-left ${equippedEyes === eye.id ? 'border-primary bg-primary/10' : 'bg-background'}`}
                  onClick={() => setEquippedEyes(eye.id)}
                >
                  {eye.name}
                </button>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

    </div>
  );
}