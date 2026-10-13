export const roles = [
  "Android Developer.",
  "Website Developer.",
  "Vector Illustrator & Motion Designer.",
  "Let's grab some coffee and build something together :)",
] as const;

export const skills = [
  { name: "Kotlin",             color: "#7F52FF" },
  { name: "Jetpack Compose",    color: "#4285F4" },
  { name: "Android SDK",        color: "#3DDC84" },
  { name: "React",              color: "#61DAFB" },
  { name: "Next.js",            color: "#666666" },
  { name: "Node.js",            color: "#5FA04E" },
  { name: "Firebase",           color: "#DD2C00" },
  { name: "Figma",              color: "#F24E1E" },
  { name: "Git",                color: "#F05032" },
  { name: "Adobe Illustrator",  color: "#FF9A00" },
  { name: "After Effects",      color: "#9999FF" },
  { name: "Laravel",            color: "#FF2D20" },
] as const;

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#certs", label: "Training" },
  { href: "#contact", label: "Contact" },
] as const;

export const contact = {
  email: "ayyash.jibril@gmail.com",
  phone: "+62 851-5780-0626",
  whatsapp: "https://wa.me/6285157800626",
  linkedin: "https://linkedin.com/in/ayyashjibril",
  github: "https://github.com/miregitgud",
  location: "Depok, Jawa Barat, Indonesia",
  cv: "/cv-ayyash-jibril.pdf",
  steam: "https://steamcommunity.com/id/mirethegame/",
} as const;

export const disciplines = [
  {
    tag: "01",
    title: "Android",
    copy: "Kotlin-first, Compose-native. Built and shipped apps for real users — from a field ops platform for tower technicians to a university community app for my thesis. Clean architecture, Coroutines, Flow.",
    icons: [
      { type: "inline" as const, label: "Android" },
      { type: "si" as const, slug: "kotlin",         label: "Kotlin",          color: "#7F52FF" },
      { type: "si" as const, slug: "jetpackcompose", label: "Jetpack Compose", color: "#4285F4" },
    ],
  },
  {
    tag: "02",
    title: "Websites",
    copy: "Laravel for backend-heavy builds, Next.js and React for modern frontends. Comfortable moving from database schema to UI without losing the thread.",
    icons: [
      { type: "si" as const, slug: "laravel",  label: "Laravel",  color: "#FF2D20" },
      { type: "si" as const, slug: "nextdotjs", label: "Next.js", color: "#000000", opacity: 0.15 },
      { type: "si" as const, slug: "react",    label: "React",    color: "#61DAFB" },
    ],
  },
  {
    tag: "03",
    title: "Backend Services/Scripts",
    copy: "Node.js, Python, and Go for services, scripts, and glue. REST APIs, Firebase functions, and lightweight automation that stays out of the way.",
    icons: [
      { type: "si" as const, slug: "python",      label: "Python",     color: "#3776AB" },
      { type: "si" as const, slug: "javascript",  label: "JavaScript", color: "#F7DF1E" },
      { type: "si" as const, slug: "go",          label: "Go",         color: "#00ADD8" },
      { type: "si" as const, slug: "php",         label: "PHP",        color: "#777BB4" },
    ],
  },
  {
    tag: "04",
    title: "Vector & Motion",
    copy: "Adobe Illustrator for marks, grids, and illustration systems. After Effects for UI reveal sequences, looping motion graphics, and product launch animations.",
    icons: [
      // Adobe removed from Simple Icons — using inline SVG paths
      { type: "svg" as const, label: "Adobe Illustrator", color: "#FF9A00",
        // Ai lettermark
        path: "M19.07 0H4.93A4.93 4.93 0 0 0 0 4.93v14.14A4.93 4.93 0 0 0 4.93 24h14.14A4.93 4.93 0 0 0 24 19.07V4.93A4.93 4.93 0 0 0 19.07 0zm-6.44 17.27h-1.8l-.69-2.21H7.8l-.66 2.21H5.38l2.68-8.54h2.04l2.53 8.54zm3.96 0h-1.72V9.25h1.72v8.02zm-.86-9.1a1.02 1.02 0 1 1 0-2.04 1.02 1.02 0 0 1 0 2.04zM9.93 9.72 8.4 14.35h3.02L9.93 9.72z" },
      { type: "svg" as const, label: "Adobe After Effects", color: "#9999FF",
        // Ae lettermark
        path: "M19.07 0H4.93A4.93 4.93 0 0 0 0 4.93v14.14A4.93 4.93 0 0 0 4.93 24h14.14A4.93 4.93 0 0 0 24 19.07V4.93A4.93 4.93 0 0 0 19.07 0zM8.09 17.29c-.34 0-.51-.17-.51-.52v-.3c-.67.63-1.52.95-2.56.95-.74 0-1.32-.2-1.76-.6-.44-.4-.66-.95-.66-1.64 0-.73.28-1.3.85-1.7.57-.4 1.38-.6 2.43-.6h1.55v-.7c0-.88-.46-1.32-1.39-1.32-.6 0-1.27.17-2.01.51l-.43-1.13c.89-.43 1.79-.64 2.7-.64 1.87 0 2.81.88 2.81 2.64v4.05h-.02zm4.45.13c-.87 0-1.57-.27-2.09-.82-.52-.55-.78-1.28-.78-2.18 0-.94.27-1.69.82-2.25.55-.56 1.27-.84 2.18-.84.87 0 1.55.26 2.05.79.5.53.74 1.24.74 2.14v.47h-4.05c.04.5.19.89.45 1.16.26.27.63.4 1.1.4.36 0 .69-.05.99-.14.3-.1.62-.25.97-.47v1.25c-.63.33-1.37.49-2.38.49zm4.07-.13c-.34 0-.51-.17-.51-.52v-.3c-.67.63-1.52.95-2.56.95-.74 0-1.32-.2-1.76-.6-.44-.4-.66-.95-.66-1.64 0-.73.28-1.3.85-1.7.57-.4 1.38-.6 2.43-.6h1.55v-.7c0-.88-.46-1.32-1.39-1.32-.6 0-1.27.17-2.01.51l-.43-1.13c.89-.43 1.79-.64 2.7-.64 1.87 0 2.81.88 2.81 2.64v4.05h-.02zM13.3 13.3c-.38 0-.68.12-.9.36-.22.24-.35.57-.39 1h2.5c-.02-.44-.13-.77-.33-1-.2-.24-.5-.36-.88-.36zM6.64 15.05H5.25c-.52 0-.91.1-1.17.3-.26.2-.39.48-.39.85 0 .67.38 1 1.13 1 .38 0 .72-.1 1.01-.31.29-.21.52-.5.69-.87l.12-.7v-.27zm10.02 0h-1.39c-.52 0-.91.1-1.17.3-.26.2-.39.48-.39.85 0 .67.38 1 1.13 1 .38 0 .72-.1 1.01-.31.29-.21.52-.5.69-.87l.12-.7v-.27z" },
    ],
  },
] as const;

export const projects = [
  {
    year: "2026",
    title: "FOP — Field Operation App",
    kind: "Android · Compose · Firebase · OneSignal · Python · PHP",
    copy: "A ground-up rebuilt ticketing system for Balitower technicians from Kotlin XML to a modern Jetpack Compose stack, preserving full business logic.",
    href: "https://play.google.com/store/apps/details?id=id.jds.mobilefop&pcampaignid=web_share",
    icon: "icons/fop.png" as string | null,
    initials: "FOP",
    accent: "#3ddc84", // lime
    glow: "rgba(61, 220, 133, 0.17)",
  },
  {
    year: "2025",
    title: "Nufian App",
    kind: "Android · Compose · Firebase",
    copy: "Community-driven mobile application for Nurul Fikri community. Made for my thesis.",
    href: "https://github.com/miregitgud/nufian-app",
    icon: "/icons/nufian.png" as string | null,
    initials: "NFN",
    accent: "#4a90d9",
    glow: "rgba(30,100,220,0.16)",
  },
  {
    year: "2024",
    title: "Infinitee",
    kind: "Android · Compose · Firebase",
    copy: "Internal community app built with Jetpack Compose & Firebase. Showcased at Developer Festival 6.0 Infinite Learning.",
    href: "#",
    icon: null as string | null,
    initials: "IC",
    accent: "#868ee3",
    glow: "rgba(239, 245, 59, 0.13)",
  },
  {
    year: "2023",
    title: "Eduvion",
    kind: "Android · XML",
    copy: "An android project idea built to assist both lecturers and students in thesis supervision system. Made for my final challenge project at Infinite Learning.",
    href: "#",
    icon: null as string | null,
    initials: "WP",
    accent: "#3ddc84",
    glow: "rgba(61,220,132,0.13)",
  },
] as const;

export const certs = [
  {
    issuer: "PT. Kinema Systrans Multimedia",
    title: "Mobile Development",
    year: "Aug – Dec 2023",
    location: "Batam, Indonesia",
    href: "#",
    icons: [
      { type: "si" as const, slug: "kotlin",         label: "Kotlin",          color: "#7F52FF" },
      { type: "si" as const, slug: "jetpackcompose", label: "Jetpack Compose", color: "#4285F4" },
      { type: "si" as const, slug: "android",        label: "Android",         color: "#3DDC84" },
    ],
  },
  {
    issuer: "Jarvis Academy",
    title: "Web Development",
    year: "Jul – Sep 2023",
    location: "Jakarta Selatan, Indonesia",
    href: "#",
    icons: [
      { type: "si" as const, slug: "laravel",    label: "Laravel",    color: "#FF2D20" },
      { type: "si" as const, slug: "php",        label: "PHP",        color: "#777BB4" },
      { type: "si" as const, slug: "javascript", label: "JavaScript", color: "#F7DF1E" },
    ],
  },
  {
    issuer: "NF Computer Training Center",
    title: "Cloud and Web Design",
    year: "Sep 2022 – Jan 2023",
    location: "Jakarta Selatan, Indonesia",
    href: "#",
    icons: [
      { type: "si" as const, slug: "wordpress",  label: "WordPress",  color: "#21759B" },
      { type: "si" as const, slug: "elementor",  label: "Elementor",  color: "#92003B" },
      { type: "si" as const, slug: "googlechrome", label: "SEO/Web",  color: "#4285F4" },
    ],
  },
  {
    issuer: "NF Computer Training Center",
    title: "Graphic Design",
    year: "Feb – Aug 2022",
    location: "Jakarta Selatan, Indonesia",
    href: "#",
    icons: [
      { type: "si" as const, slug: "gimp",      label: "GIMP",      color: "#5C5543" },
      { type: "si" as const, slug: "inkscape",  label: "Inkscape",  color: "#000000", opacity: 0.5 },
      { type: "si" as const, slug: "canva",     label: "Canva",     color: "#00C4CC" },
    ],
  },
] as const;
