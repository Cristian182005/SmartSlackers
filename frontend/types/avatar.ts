// Tipos para las carreras que ya maneja el test (careerKey en useTestLogic)
export type Career =
  | "software"
  | "medicina"
  | "ingenieria"
  | "ingenieria-civil"
  | "ingenieria-industrial"
  | "ingenieria-minas"
  | "ingenieria-ambiental"
  | "ingenieria-sistemas"
  | "ingenieria-mecatronica"
  | "ingenieria-electronica"
  | "ingenieria-aeronautica"
  | "ingenieria-automotriz"
  | "ingenieria-biomedica"
  | "ingenieria-electrica"
  | "ingenieria-empresarial"
  | "ingenieria-mecanica"
  | "ingenieria-seguridad-industrial"
  | "ingenieria-telecomunicaciones"
  | "matematicas"
  | "diseno"
  | "diseno-ux"
  | "diseno-digital"
  | "diseno-grafico"
  | "diseno-interiores"
  | "literatura"
  | "musica"
  | "administracion"
  | "administracion-banca"
  | "psicologia"
  | "derecho"
  | "arquitectura"
  | "astronauta"
  | "gastronomia"
  | "marketing"
  | "contabilidad"
  | "economia"
  | "enfermeria"
  | "odontologia"
  | "farmacia"
  | "nutricion"
  | "obstetricia"
  | "terapia-fisica"
  | "comunicacion"
  | "comunicacion-publicidad"
  | "educacion"
  | "educacion-primaria"
  | "turismo"
  | "relaciones-internacionales"
  | "veterinaria"
  | "periodismo"
  | "sistemas";

export type SkinTone = "light" | "medium-light" | "medium" | "medium-dark" | "dark";
export type HairStyle = "short" | "medium" | "long" | "curly" | "bun" | "braids";
export type HairColor = "black" | "brown" | "blonde" | "red" | "gray" | "white";
export type EyeColor = "brown" | "hazel" | "green" | "blue" | "gray";
export type OutfitBase = "casual" | "formal" | "sporty";
export type Background = "sky" | "library" | "lab" | "city" | "nature" | "abstract";

export interface CareerCosmetic {
  career: Career;
  label: string;
  accessory: string;
  accessoryColor: string;
  hat: string;
  badge: string;
  background: Background;
  accentColor: string;
  description: string;
}

export interface AvatarConfig {
  skinTone: SkinTone;
  hairStyle: HairStyle;
  hairColor: HairColor;
  eyeColor: EyeColor;
  outfitBase: OutfitBase;
  background: Background;
  careerCosmetic?: CareerCosmetic;
  unlockedCareers?: Career[];
  avatarType?: "person" | "dino";
}

export interface SavedAvatar {
  uid: string;
  config: AvatarConfig;
  career: Career | null;
  updatedAt: number;
}
