export type Option = {
  id: string;
  text: string;
  icon: string;
  career: string;
  color: string;
};

export type Question = {
  id: number;
  categoryId: number;
  category: string;
  emoji: string;
  question: string;
  options: Option[];
};

export const careerResults: Record<
  string,
  { title: string; area: string; desc: string; match: number; color: string; emoji: string; salary: string; skills: string[] }
> = {
  software: {
    title: "Ingeniería de Software",
    area: "Tecnología",
    desc: "Tienes mente analítica y te apasiona construir soluciones digitales. Eres el perfil clave de la economía moderna.",
    match: 94, color: "#534AB7", emoji: "💻", salary: "S/. 4,000 – 12,000",
    skills: ["Lógica", "Resolución de problemas", "Trabajo en equipo", "Aprendizaje continuo"],
  },
  ingenieria: {
    title: "Ingeniería de Sistemas",
    area: "Tecnología & Sistemas",
    desc: "Diseñas y gestionas infraestructura tecnológica. Tu perfil combina visión técnica con capacidad de optimización.",
    match: 93, color: "#2E7D32", emoji: "🖥️", salary: "S/. 3,500 – 10,000",
    skills: ["Redes", "Bases de datos", "Seguridad informática", "Gestión de proyectos TI"],
  },
  medicina: {
    title: "Medicina Humana",
    area: "Salud",
    desc: "Tu vocación es cuidar personas. Tienes empatía profunda y resistencia bajo presión.",
    match: 92, color: "#1D9E75", emoji: "🩺", salary: "S/. 5,000 – 15,000",
    skills: ["Empatía", "Precisión", "Toma de decisiones", "Resistencia"],
  },
  diseno: {
    title: "Diseño UX/UI",
    area: "Creatividad & Tecnología",
    desc: "Piensas visualmente. Te obsesiona que las cosas sean bonitas y funcionales al mismo tiempo.",
    match: 89, color: "#D4537E", emoji: "🎨", salary: "S/. 3,000 – 8,000",
    skills: ["Creatividad", "Empatía con usuario", "Herramientas digitales", "Comunicación visual"],
  },
  derecho: {
    title: "Derecho",
    area: "Jurídico",
    desc: "Eres argumentativo y apasionado por la justicia. Tu perfil encaja con el mundo legal.",
    match: 88, color: "#BA7517", emoji: "⚖️", salary: "S/. 3,500 – 10,000",
    skills: ["Argumentación", "Lectura crítica", "Negociación", "Ética"],
  },
  psicologia: {
    title: "Psicología",
    area: "Salud Mental",
    desc: "Entiendes a las personas con facilidad. Te apasiona el comportamiento humano y acompañar a otros.",
    match: 91, color: "#7A5A9A", emoji: "🧠", salary: "S/. 2,500 – 7,000",
    skills: ["Escucha activa", "Empatía", "Observación", "Paciencia"],
  },
  marketing: {
    title: "Marketing & Comunicación",
    area: "Negocios & Creatividad",
    desc: "Combinas creatividad con estrategia. Sabes conectar ideas con personas y generar impacto.",
    match: 87, color: "#D85A30", emoji: "📣", salary: "S/. 2,800 – 8,000",
    skills: ["Creatividad", "Análisis", "Comunicación", "Tendencias digitales"],
  },
  arquitectura: {
    title: "Arquitectura",
    area: "Diseño & Construcción",
    desc: "Combinas arte con ingeniería. Te apasiona crear espacios que mejoran la vida de las personas.",
    match: 86, color: "#5A7A5A", emoji: "🏛️", salary: "S/. 3,000 – 9,000",
    skills: ["Visión espacial", "Creatividad", "Precisión técnica", "Gestión de proyectos"],
  },
  matematicas: {
    title: "Matemáticas / Ciencia de Datos",
    area: "Ciencias Exactas",
    desc: "Tu cerebro procesa abstracciones con naturalidad. Disfrutas resolver problemas con lógica y precisión.",
    match: 90, color: "#5C3AB7", emoji: "∑", salary: "S/. 4,000 – 11,000",
    skills: ["Análisis", "Abstracción", "Pensamiento lógico", "Modelado"],
  },
  administracion: {
    title: "Administración de Empresas",
    area: "Negocios & Gestión",
    desc: "Lideras con naturalidad. Sabes organizar personas y recursos para alcanzar metas.",
    match: 88, color: "#1565C0", emoji: "💼", salary: "S/. 3,000 – 10,000",
    skills: ["Liderazgo", "Planificación", "Comunicación", "Toma de decisiones"],
  },
  gastronomia: {
    title: "Gastronomía",
    area: "Artes Culinarias",
    desc: "Eres creativo con los sentidos. Transformas ingredientes en experiencias memorables.",
    match: 85, color: "#D85A30", emoji: "🍳", salary: "S/. 2,500 – 8,000",
    skills: ["Creatividad", "Técnica culinaria", "Gestión de cocina", "Innovación"],
  },
  musica: {
    title: "Música & Producción Musical",
    area: "Artes",
    desc: "Expresas emociones a través del sonido. Tienes sensibilidad artística y disciplina creativa.",
    match: 84, color: "#C2185B", emoji: "🎵", salary: "S/. 2,000 – 7,000",
    skills: ["Oído musical", "Creatividad", "Disciplina", "Interpretación"],
  },
  astronauta: {
    title: "Astronáutica & Aeroespacial",
    area: "Ciencias & Exploración",
    desc: "Tu curiosidad no tiene límites. Quieres entender el universo y ser parte de la exploración espacial.",
    match: 88, color: "#1565C0", emoji: "🚀", salary: "S/. 6,000 – 20,000",
    skills: ["Física", "Matemáticas avanzadas", "Resistencia", "Trabajo en equipo"],
  },
  literatura: {
    title: "Literatura & Comunicación",
    area: "Humanidades",
    desc: "Tienes un don para las palabras. Piensas narrativamente y conectas ideas con humanidad.",
    match: 83, color: "#795548", emoji: "✍️", salary: "S/. 2,000 – 6,000",
    skills: ["Redacción", "Análisis crítico", "Creatividad narrativa", "Comunicación"],
  },
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

const LETTERS = ["A", "B", "C", "D", "E", "F"];

function buildOptions(
  raw: { career: string; icon: string; text: string }[],
): Option[] {
  return shuffle(raw).map((o, i) => ({
    id: LETTERS[i],
    text: o.text,
    icon: o.icon,
    career: o.career,
    color: careerResults[o.career]?.color ?? "#999",
  }));
}

// ── Pool de 30 preguntas (3 por categoría × 10 categorías) ───────────────────
// Las respuestas son intencionalmente discretas: hablan de rasgos de
// personalidad y enfoques, no de actividades literales de cada carrera.

type RawQuestion = {
  categoryId: number;
  category: string;
  emoji: string;
  question: string;
  options: { career: string; icon: string; text: string }[];
};

const RAW_POOL: RawQuestion[] = [
  // ── CATEGORÍA 1: Personalidad / Forma de pensar ──────────────────────────
  {
    categoryId: 1, category: "Personalidad", emoji: "🧩",
    question: "Cuando enfrentas un problema complejo, ¿cuál es tu primer instinto?",
    options: [
      { career: "software",     icon: "🔍", text: "Busco el patrón oculto e imagino cómo sistematizarlo" },
      { career: "medicina",     icon: "🔬", text: "Observo todos los indicios antes de actuar" },
      { career: "psicologia",   icon: "👂", text: "Primero entiendo cómo afecta a las personas involucradas" },
      { career: "derecho",      icon: "📋", text: "Busco normas o precedentes que ya definan la situación" },
      { career: "matematicas",  icon: "∑",  text: "Lo descompongo en partes más pequeñas y analizo cada una" },
      { career: "ingenieria",   icon: "⚙️", text: "Diseño un proceso estructurado paso a paso para resolverlo" },
    ],
  },
  {
    categoryId: 1, category: "Personalidad", emoji: "💭",
    question: "¿Cuál de estas frases describe mejor cómo funciona tu mente?",
    options: [
      { career: "arquitectura",  icon: "📐", text: "Pienso en estructuras, formas y cómo encajan entre sí" },
      { career: "diseno",        icon: "🖌️", text: "Si no lo veo visualmente, me cuesta entenderlo del todo" },
      { career: "literatura",    icon: "📖", text: "Pienso en historias y metáforas para explicar todo" },
      { career: "marketing",     icon: "🎯", text: "Siempre pienso en a quién va dirigido algo y por qué" },
      { career: "musica",        icon: "🎵", text: "Percibo ritmos, patrones y emociones en lo cotidiano" },
      { career: "administracion",icon: "📊", text: "Pienso en objetivos, recursos y cuánto tiempo tenemos" },
    ],
  },
  {
    categoryId: 1, category: "Personalidad", emoji: "🔄",
    question: "Cuando algo no funciona como esperas, ¿cuál es tu reacción más natural?",
    options: [
      { career: "medicina",     icon: "🔄", text: "Reviso el proceso completo desde el principio" },
      { career: "ingenieria",   icon: "🖥️", text: "Diagnostico componente por componente hasta encontrar el fallo" },
      { career: "derecho",      icon: "⚖️", text: "Verifico si hay alguna regla que no se esté cumpliendo" },
      { career: "gastronomia",  icon: "🍳", text: "Experimento con variaciones hasta dar con lo que falló" },
      { career: "astronauta",   icon: "🌌", text: "Recopilo datos y formulo hipótesis verificables" },
      { career: "psicologia",   icon: "🧠", text: "Reflexiono sobre qué factores humanos pudieron influir" },
    ],
  },

  // ── CATEGORÍA 2: Afinidad / Lo que disfrutas ─────────────────────────────
  {
    categoryId: 2, category: "Afinidad", emoji: "⚡",
    question: "¿En qué actividad pierdes la noción del tiempo con más facilidad?",
    options: [
      { career: "diseno",       icon: "🎨", text: "Cuando creo algo que es bonito y funcional al mismo tiempo" },
      { career: "musica",       icon: "🎸", text: "Cuando toco, compongo o escucho música con atención total" },
      { career: "arquitectura", icon: "📐", text: "Cuando imagino espacios y los llevo al papel o pantalla" },
      { career: "literatura",   icon: "📚", text: "Cuando leo o escribo de forma creativa sin restricciones" },
      { career: "gastronomia",  icon: "🍽️", text: "Cuando cocino y combino ingredientes hasta lograr algo especial" },
      { career: "astronauta",   icon: "🔭", text: "Cuando aprendo sobre el universo, astrofísica o exploración" },
    ],
  },
  {
    categoryId: 2, category: "Afinidad", emoji: "🎮",
    question: "¿Cuál de estas actividades disfrutas más en tu tiempo libre?",
    options: [
      { career: "software",      icon: "💻", text: "Armar pequeños proyectos con tecnología o automatizar algo" },
      { career: "matematicas",   icon: "🧩", text: "Resolver puzzles, acertijos o retos lógicos difíciles" },
      { career: "psicologia",    icon: "👀", text: "Observar el comportamiento y las motivaciones de las personas" },
      { career: "derecho",       icon: "🗣️", text: "Debatir ideas o defender posturas en conversaciones" },
      { career: "marketing",     icon: "📱", text: "Analizar tendencias, campañas y por qué funcionan" },
      { career: "administracion",icon: "🗂️", text: "Organizar eventos, grupos o proyectos con otras personas" },
    ],
  },
  {
    categoryId: 2, category: "Afinidad", emoji: "🌀",
    question: "Si pudieras hacer lo mismo todos los días sin aburrirte, ¿qué sería?",
    options: [
      { career: "medicina",     icon: "❤️", text: "Ayudar a personas a sentirse mejor, cada caso sería distinto" },
      { career: "literatura",   icon: "✍️", text: "Escribir historias que conecten con quien las lea" },
      { career: "musica",       icon: "🎶", text: "Crear o interpretar música para audiencias distintas" },
      { career: "arquitectura", icon: "🏛️", text: "Diseñar y ver cómo mis creaciones toman forma real" },
      { career: "ingenieria",   icon: "🔧", text: "Optimizar sistemas para que funcionen cada vez mejor" },
      { career: "marketing",    icon: "📣", text: "Crear mensajes y estrategias que lleguen a miles de personas" },
    ],
  },

  // ── CATEGORÍA 3: Entorno / Dónde trabajar ────────────────────────────────
  {
    categoryId: 3, category: "Entorno", emoji: "🌍",
    question: "¿Dónde te imaginas trabajando en el día a día?",
    options: [
      { career: "medicina",      icon: "🏥", text: "En un entorno clínico, cerca de quienes necesitan ayuda" },
      { career: "marketing",     icon: "🎯", text: "En un espacio creativo con ritmo rápido y proyectos nuevos" },
      { career: "administracion",icon: "🏢", text: "En una empresa coordinando equipos y tomando decisiones" },
      { career: "diseno",        icon: "💡", text: "En un estudio o de forma remota con libertad creativa" },
      { career: "gastronomia",   icon: "👨‍🍳",text: "En una cocina profesional con mi equipo y mis recetas" },
      { career: "astronauta",    icon: "🛸", text: "En un laboratorio o centro de investigación científica" },
    ],
  },
  {
    categoryId: 3, category: "Entorno", emoji: "⚡",
    question: "¿Qué tipo de ambiente de trabajo te genera más energía?",
    options: [
      { career: "software",      icon: "🛠️", text: "Uno donde haya problemas técnicos complejos por resolver" },
      { career: "arquitectura",  icon: "🌆", text: "Uno donde pueda ver mis ideas materializarse en el mundo real" },
      { career: "psicologia",    icon: "💬", text: "Uno donde pueda conectar profundamente con personas" },
      { career: "matematicas",   icon: "🧮", text: "Uno tranquilo con libertad total para pensar y modelar" },
      { career: "derecho",       icon: "⚖️", text: "Uno dinámico con retos intelectuales y debates frecuentes" },
      { career: "literatura",    icon: "📝", text: "Uno creativo donde expresar ideas con total libertad" },
    ],
  },
  {
    categoryId: 3, category: "Entorno", emoji: "👥",
    question: "¿Con quiénes preferirías interactuar principalmente en tu trabajo?",
    options: [
      { career: "medicina",     icon: "🩺", text: "Con pacientes y familias en momentos que importan de verdad" },
      { career: "ingenieria",   icon: "🖥️", text: "Con equipos técnicos resolviendo problemas de sistemas" },
      { career: "marketing",    icon: "📊", text: "Con creativos y estrategas buscando impactar audiencias" },
      { career: "derecho",      icon: "🏛️", text: "Con clientes que necesitan defensa o asesoría legal" },
      { career: "gastronomia",  icon: "🍽️", text: "Con un equipo en cocina creando experiencias culinarias" },
      { career: "musica",       icon: "🎤", text: "Con artistas y músicos creando y produciendo juntos" },
    ],
  },

  // ── CATEGORÍA 4: Valores / Lo que más importa ────────────────────────────
  {
    categoryId: 4, category: "Valores", emoji: "🎯",
    question: "¿Qué es lo más importante para ti en tu vida profesional?",
    options: [
      { career: "derecho",       icon: "🛡️", text: "Que se respeten los derechos de las personas" },
      { career: "psicologia",    icon: "🌱", text: "Ser parte del crecimiento personal y emocional de otros" },
      { career: "matematicas",   icon: "🔢", text: "Contribuir al conocimiento con exactitud y rigor" },
      { career: "administracion",icon: "🏆", text: "Construir organizaciones que perduren y prosperen" },
      { career: "musica",        icon: "🎵", text: "Crear arte que emocione y trascienda el tiempo" },
      { career: "literatura",    icon: "📖", text: "Contar historias que cambien cómo la gente ve el mundo" },
    ],
  },
  {
    categoryId: 4, category: "Valores", emoji: "💪",
    question: "¿Qué te motivaría más a esforzarte al máximo en tu trabajo?",
    options: [
      { career: "software",      icon: "🌐", text: "Saber que millones de personas usan algo que construí" },
      { career: "medicina",      icon: "❤️", text: "Saber que mi trabajo directamente mejoró o salvó una vida" },
      { career: "arquitectura",  icon: "🏛️", text: "Ver un espacio o edificio que diseñé completamente terminado" },
      { career: "gastronomia",   icon: "😊", text: "Ver la satisfacción genuina de quien prueba mis platos" },
      { career: "astronauta",    icon: "🌠", text: "Contribuir a descubrir algo que nadie sabía antes" },
      { career: "administracion",icon: "👥", text: "Ver a mi equipo alcanzar metas que parecían imposibles" },
    ],
  },
  {
    categoryId: 4, category: "Valores", emoji: "🌟",
    question: "¿Qué tipo de impacto quieres tener en el mundo?",
    options: [
      { career: "medicina",     icon: "🏥", text: "Mejorar el bienestar físico de personas directamente" },
      { career: "derecho",      icon: "⚖️", text: "Proteger a quienes más lo necesitan ante el sistema" },
      { career: "ingenieria",   icon: "⚙️", text: "Hacer que la tecnología funcione mejor para todos" },
      { career: "diseno",       icon: "🎨", text: "Hacer el mundo más accesible y agradable visualmente" },
      { career: "literatura",   icon: "✍️", text: "Despertar emociones e ideas nuevas en quien me lea" },
      { career: "astronauta",   icon: "🔭", text: "Ampliar los límites de lo que la humanidad puede conocer" },
    ],
  },

  // ── CATEGORÍA 5: Situación / Rol en equipo ───────────────────────────────
  {
    categoryId: 5, category: "Situación", emoji: "🚨",
    question: "En un proyecto grupal bajo presión, ¿qué rol adoptas naturalmente?",
    options: [
      { career: "software",      icon: "💻", text: "Me ocupo de la parte técnica más difícil del proyecto" },
      { career: "psicologia",    icon: "🤝", text: "Me aseguro de que el equipo esté unido y con ánimo" },
      { career: "marketing",     icon: "📢", text: "Motivo al grupo y comunico el avance hacia afuera" },
      { career: "derecho",       icon: "📋", text: "Establezco acuerdos claros y distribuyo responsabilidades" },
      { career: "ingenieria",    icon: "🔧", text: "Diseño el flujo de trabajo más eficiente para entregar" },
      { career: "administracion",icon: "🗂️", text: "Coordino personas y recursos para que todo fluya" },
    ],
  },
  {
    categoryId: 5, category: "Situación", emoji: "💡",
    question: "Cuando tu equipo está perdido o bloqueado, ¿qué haces?",
    options: [
      { career: "matematicas",  icon: "🧮", text: "Explico la lógica del problema con precisión hasta que quede claro" },
      { career: "arquitectura", icon: "📐", text: "Dibujo o visualizo el plan para que todos lo entiendan" },
      { career: "medicina",     icon: "🩺", text: "Propongo seguir un protocolo claro paso a paso" },
      { career: "marketing",    icon: "🎯", text: "Reformulo el mensaje de forma que conecte con todos" },
      { career: "literatura",   icon: "📖", text: "Cuento una analogía o historia que aclare el panorama" },
      { career: "musica",       icon: "🎶", text: "Propongo un enfoque completamente distinto que rompa el bloqueo" },
    ],
  },
  {
    categoryId: 5, category: "Situación", emoji: "🤝",
    question: "¿Cómo prefieres contribuir en un proyecto de grupo?",
    options: [
      { career: "software",    icon: "🛠️", text: "Desarrollando la solución técnica central del proyecto" },
      { career: "diseno",      icon: "🎨", text: "Diseñando la experiencia visual o la interfaz del producto" },
      { career: "derecho",     icon: "📑", text: "Revisando que todo esté en regla y nadie infrinja nada" },
      { career: "gastronomia", icon: "🍳", text: "Aportando creatividad y cuidado en los detalles de ejecución" },
      { career: "astronauta",  icon: "🌌", text: "Investigando y aportando datos que nadie más buscó" },
      { career: "psicologia",  icon: "💬", text: "Facilitando que el equipo colabore y se entienda mejor" },
    ],
  },

  // ── CATEGORÍA 6: Intereses / Contenido y hobbies ─────────────────────────
  {
    categoryId: 6, category: "Intereses", emoji: "📚",
    question: "¿Qué tipo de contenido consumes cuando tienes tiempo libre?",
    options: [
      { career: "musica",       icon: "🎧", text: "Música en distintos géneros o tutoriales de producción" },
      { career: "literatura",   icon: "📚", text: "Libros, novelas, ensayos o artículos de opinión" },
      { career: "arquitectura", icon: "🏛️", text: "Arte, diseño de interiores y arquitectura de distintas épocas" },
      { career: "astronauta",   icon: "🔭", text: "Documentales científicos o ciencia ficción con base real" },
      { career: "marketing",    icon: "📱", text: "Campañas virales, tendencias y psicología del consumidor" },
      { career: "diseno",       icon: "🖌️", text: "Portfolios de diseño, tipografía y tendencias visuales" },
    ],
  },
  {
    categoryId: 6, category: "Intereses", emoji: "⏰",
    question: "Si tuvieras 3 horas libres inesperadas hoy, ¿cómo las usarías?",
    options: [
      { career: "software",      icon: "💻", text: "Aprendiendo algo nuevo de tecnología o haciendo un challenge" },
      { career: "matematicas",   icon: "🧩", text: "Resolviendo un problema difícil que nadie te pidió" },
      { career: "psicologia",    icon: "💬", text: "Escuchando a alguien que necesite ser escuchado" },
      { career: "gastronomia",   icon: "🍳", text: "Cocinando algo nuevo o explorando un restaurante" },
      { career: "medicina",      icon: "🔬", text: "Investigando sobre algún tema de salud que te llama la atención" },
      { career: "administracion",icon: "📋", text: "Organizando algo o aprendiendo sobre gestión y liderazgo" },
    ],
  },
  {
    categoryId: 6, category: "Intereses", emoji: "🔎",
    question: "¿Qué tema te entusiasmaría estudiar más a fondo solo por placer?",
    options: [
      { career: "derecho",      icon: "⚖️", text: "Las leyes que moldean la sociedad y la historia de la justicia" },
      { career: "diseno",       icon: "🎨", text: "Cómo el diseño influye en las decisiones y emociones humanas" },
      { career: "arquitectura", icon: "🏛️", text: "Los principios detrás de los edificios más icónicos del mundo" },
      { career: "musica",       icon: "🎵", text: "La historia de la música y cómo se produce profesionalmente" },
      { career: "ingenieria",   icon: "🌐", text: "Cómo funcionan los sistemas y redes que conectan el mundo" },
      { career: "literatura",   icon: "✍️", text: "Los grandes autores y los movimientos literarios que cambiaron culturas" },
    ],
  },

  // ── CATEGORÍA 7: Tecnología / Cómo la usas ───────────────────────────────
  {
    categoryId: 7, category: "Tecnología", emoji: "🤖",
    question: "¿Cómo te ves relacionándote con la tecnología en tu trabajo?",
    options: [
      { career: "software",      icon: "🛠️", text: "Creándola desde cero — código, algoritmos, plataformas" },
      { career: "medicina",      icon: "🔬", text: "Usándola para diagnósticos más rápidos y personalizados" },
      { career: "ingenieria",    icon: "🖥️", text: "Administrando la infraestructura que hace funcionar todo" },
      { career: "matematicas",   icon: "📊", text: "Aplicándola para modelar datos y predecir comportamientos" },
      { career: "arquitectura",  icon: "📐", text: "Usando software 3D para llevar mis diseños al límite" },
      { career: "gastronomia",   icon: "🍽️", text: "Aplicando técnicas modernas para elevar la experiencia culinaria" },
    ],
  },
  {
    categoryId: 7, category: "Tecnología", emoji: "✨",
    question: "¿Qué aspecto de la tecnología te parece más fascinante?",
    options: [
      { career: "software",      icon: "💡", text: "La capacidad de crear herramientas que cambien cómo vivimos" },
      { career: "astronauta",    icon: "🛸", text: "Los satélites, telescopios y sistemas que exploran el cosmos" },
      { career: "diseno",        icon: "📱", text: "Cómo hace que los productos sean más intuitivos y accesibles" },
      { career: "matematicas",   icon: "🤖", text: "Los algoritmos que toman decisiones complejas en milisegundos" },
      { career: "medicina",      icon: "🧬", text: "Los avances en diagnóstico, genómica y medicina personalizada" },
      { career: "administracion",icon: "📈", text: "Las herramientas que optimizan cómo funcionan las organizaciones" },
    ],
  },
  {
    categoryId: 7, category: "Tecnología", emoji: "🌐",
    question: "Si pudieras usar tecnología para resolver cualquier problema, ¿cuál elegirías?",
    options: [
      { career: "medicina",     icon: "🩺", text: "Detectar enfermedades antes de que causen daño real" },
      { career: "derecho",      icon: "🏛️", text: "Garantizar acceso igualitario a la justicia para todos" },
      { career: "marketing",    icon: "📣", text: "Conectar a personas exactamente con lo que necesitan" },
      { career: "ingenieria",   icon: "🔒", text: "Hacer que los sistemas críticos nunca fallen ni sean vulnerados" },
      { career: "psicologia",   icon: "💙", text: "Identificar y apoyar a personas con problemas de salud mental" },
      { career: "astronauta",   icon: "🌌", text: "Encontrar señales de vida o recursos en otros planetas" },
    ],
  },

  // ── CATEGORÍA 8: Futuro / Visión a largo plazo ───────────────────────────
  {
    categoryId: 8, category: "Futuro", emoji: "🚀",
    question: "¿Cómo te imaginas en 10 años?",
    options: [
      { career: "software",      icon: "💡", text: "Fundando o liderando una empresa de tecnología propia" },
      { career: "medicina",      icon: "🏆", text: "Como especialista médico reconocido en mi campo" },
      { career: "arquitectura",  icon: "🌆", text: "Diseñando proyectos urbanos o edificios emblemáticos" },
      { career: "literatura",    icon: "📗", text: "Con libros publicados o dirigiendo una editorial" },
      { career: "gastronomia",   icon: "⭐", text: "Con mi propio restaurante o empresa gastronómica exitosa" },
      { career: "marketing",     icon: "🌍", text: "Liderando la estrategia de comunicación de una gran marca" },
    ],
  },
  {
    categoryId: 8, category: "Futuro", emoji: "🏆",
    question: "¿Cuál sería tu mayor logro profesional si logras alcanzarlo?",
    options: [
      { career: "ingenieria",    icon: "🌐", text: "Diseñar un sistema de infraestructura que usen millones" },
      { career: "derecho",       icon: "⚖️", text: "Ganar un caso que cambie una ley injusta" },
      { career: "musica",        icon: "🎶", text: "Componer algo que trascienda generaciones enteras" },
      { career: "psicologia",    icon: "🌱", text: "Haber acompañado a cientos de personas a superar traumas" },
      { career: "astronauta",    icon: "🌠", text: "Participar en una misión espacial histórica" },
      { career: "administracion",icon: "🏢", text: "Construir una empresa que emplee y motive a cientos de personas" },
    ],
  },
  {
    categoryId: 8, category: "Futuro", emoji: "💫",
    question: "¿Qué tipo de proyecto soñarías con liderar algún día?",
    options: [
      { career: "arquitectura",  icon: "🌿", text: "El diseño de un barrio o ciudad completamente sostenible" },
      { career: "software",      icon: "🌐", text: "Una plataforma digital que resuelva un problema global" },
      { career: "medicina",      icon: "🧬", text: "Una investigación que lleve a la cura de una enfermedad" },
      { career: "gastronomia",   icon: "🍽️", text: "Un restaurante que sea referente gastronómico en Perú" },
      { career: "marketing",     icon: "📣", text: "Una campaña que genere un cambio cultural real" },
      { career: "matematicas",   icon: "📊", text: "Un modelo predictivo que transforme una industria entera" },
    ],
  },

  // ── CATEGORÍA 9: Impacto / Legado ────────────────────────────────────────
  {
    categoryId: 9, category: "Impacto", emoji: "🌱",
    question: "¿Qué quieres que digan de ti cuando te retires?",
    options: [
      { career: "medicina",    icon: "💚", text: "Que salvó y mejoró la vida de muchas personas" },
      { career: "derecho",     icon: "🛡️", text: "Que defendió a quienes más lo necesitaban" },
      { career: "psicologia",  icon: "🌟", text: "Que acompañó el bienestar emocional de cientos" },
      { career: "musica",      icon: "🎶", text: "Que su música emocionó a generaciones enteras" },
      { career: "astronauta",  icon: "🌠", text: "Que contribuyó a expandir el conocimiento del cosmos" },
      { career: "ingenieria",  icon: "🖥️", text: "Que los sistemas que diseñó transformaron cómo trabaja la gente" },
    ],
  },
  {
    categoryId: 9, category: "Impacto", emoji: "🏅",
    question: "¿Qué tipo de huella quieres dejar en el mundo?",
    options: [
      { career: "literatura",    icon: "📖", text: "Que mis palabras e ideas sigan inspirando personas" },
      { career: "arquitectura",  icon: "🏛️", text: "Que los espacios que diseñé mejoren la vida de quienes los habitan" },
      { career: "administracion",icon: "🏢", text: "Que las organizaciones que construí aún prosperen sin mí" },
      { career: "diseno",        icon: "🎨", text: "Que las interfaces que creé hicieron la tecnología más humana" },
      { career: "gastronomia",   icon: "🍳", text: "Que elevé la gastronomía peruana a nivel internacional" },
      { career: "matematicas",   icon: "∑",  text: "Que mis modelos avanzaron el conocimiento científico" },
    ],
  },
  {
    categoryId: 9, category: "Impacto", emoji: "💙",
    question: "¿A quién principalmente te gustaría que tu trabajo ayudara?",
    options: [
      { career: "medicina",      icon: "🩺", text: "A enfermos y familias en momentos de mayor vulnerabilidad" },
      { career: "psicologia",    icon: "💬", text: "A personas que atraviesan momentos emocionalmente difíciles" },
      { career: "derecho",       icon: "⚖️", text: "A personas sin recursos que no tienen acceso a la justicia" },
      { career: "marketing",     icon: "🚀", text: "A emprendedores para que sus ideas lleguen a más personas" },
      { career: "software",      icon: "🌐", text: "A personas en todo el mundo a través de herramientas que construí" },
      { career: "administracion",icon: "👥", text: "A equipos y empresas que quieren crecer de forma sostenible" },
    ],
  },

  // ── CATEGORÍA 10: Decisión final / Qué estudiar ──────────────────────────
  {
    categoryId: 10, category: "Decisión final", emoji: "🎓",
    question: "Si pudieras estudiar solo una cosa el resto de tu vida, ¿qué elegirías?",
    options: [
      { career: "software",      icon: "🤖", text: "Inteligencia Artificial y desarrollo de software" },
      { career: "diseno",        icon: "📱", text: "Diseño de experiencias digitales y productos" },
      { career: "derecho",       icon: "🏛️", text: "Derecho penal, civil o internacional" },
      { career: "administracion",icon: "📊", text: "Gestión empresarial y liderazgo organizacional" },
      { career: "matematicas",   icon: "🔢", text: "Matemáticas, estadística o ciencia de datos" },
      { career: "ingenieria",    icon: "🔒", text: "Sistemas de información, redes y ciberseguridad" },
    ],
  },
  {
    categoryId: 10, category: "Decisión final", emoji: "📖",
    question: "¿Cuál de estas áreas del conocimiento te llama más la atención?",
    options: [
      { career: "medicina",     icon: "🧬", text: "Biología, anatomía y el funcionamiento del cuerpo humano" },
      { career: "psicologia",   icon: "🧠", text: "La mente humana, las emociones y el comportamiento social" },
      { career: "arquitectura", icon: "🏛️", text: "El diseño del espacio y su relación con la experiencia humana" },
      { career: "musica",       icon: "🎵", text: "La teoría musical, la composición y la producción" },
      { career: "literatura",   icon: "📚", text: "La escritura creativa, la narrativa y los clásicos literarios" },
      { career: "astronauta",   icon: "🌌", text: "La física, la astrofísica y la exploración del cosmos" },
    ],
  },
  {
    categoryId: 10, category: "Decisión final", emoji: "✈️",
    question: "Si te dieran una beca para estudiar lo que quieras en cualquier parte del mundo, ¿qué estudiarías?",
    options: [
      { career: "ingenieria",    icon: "🖥️", text: "Ciberseguridad e infraestructura de sistemas en el MIT" },
      { career: "gastronomia",   icon: "🍽️", text: "Alta cocina y gastronomía molecular en Le Cordon Bleu" },
      { career: "derecho",       icon: "⚖️", text: "Derecho Internacional en La Haya" },
      { career: "marketing",     icon: "📣", text: "Marketing digital y neuromarketing en Harvard" },
      { career: "arquitectura",  icon: "🌿", text: "Arquitectura sostenible y urbanismo en Barcelona" },
      { career: "musica",        icon: "🎸", text: "Composición y producción musical en Berklee College" },
    ],
  },
];

// ── generateTest: selecciona 1 pregunta aleatoria por cada categoría ─────────
// Garantiza que siempre haya exactamente 10 preguntas con diversidad temática.

export function generateTest(): Question[] {
  const categoryIds = [...new Set(RAW_POOL.map((q) => q.categoryId))].sort(
    (a, b) => a - b,
  );

  return categoryIds.map((catId, idx) => {
    const pool = RAW_POOL.filter((q) => q.categoryId === catId);
    const picked = pool[Math.floor(Math.random() * pool.length)];
    return {
      ...picked,
      id: idx + 1, // renumera 1-10
      options: buildOptions(picked.options),
    };
  });
}

// Compatibilidad con imports existentes que usan `questions` directamente
export const questions: Question[] = generateTest();
