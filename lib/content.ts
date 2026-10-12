export const roles = [
  "Android Developer.",
  "Frontend Developer.",
  "Vector Illustrator & Motion Designer.",
  "Let's grab some coffee and build something. :)",
] as const;

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Contact" },
] as const;

export const contact = {
  email: "ayyash.jibril@gmail.com",
  phone: "+62 851-5780-0626",
  whatsapp: "https://wa.me/6285157800626",
  linkedin: "https://linkedin.com/in/ayyashjibril",
  github: "https://github.com/miregitgud",
  location: "Depok, Jawa Barat, Indonesia",
  cv: "/cv-ayyash-jibril.pdf", // drop the PDF into /public
} as const;

export const disciplines = [
  {
    tag: "01",
    title: "Android",
    copy: "Excels in Kotlin XML and Jetpack Compose, all while keeping the codebase clean using standardized industrial structure.",
  },
  {
    tag: "02",
    title: "Websites",
    copy: "Familiar in using stacks such as Laravel and Next.js. According to the client's preferences and needs.",
  },
  {
    tag: "03",
    title: "Backend Services/Scripts",
    copy: "Some experiences in writing backend services and scripts using Python, JS, and Go.",
  },
  {
    tag: "04",
    title: "Vector Illustrations and Motion Graphics",
    copy: "Strokes, eases, and graphic sequences that make interfaces even more alive.",
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
    glow: "rgba(190, 131, 221, 0.13)",
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
  },
  {
    issuer: "Jarvis Academy",
    title: "Web Development",
    year: "Jul – Sep 2023",
    location: "Jakarta Selatan, Indonesia",
    href: "#",
  },
  {
    issuer: "NF Computer Training Center",
    title: "Cloud and Web Design",
    year: "Sep 2022 – Jan 2023",
    location: "Jakarta Selatan, Indonesia",
    href: "#",
  },
  {
    issuer: "NF Computer Training Center",
    title: "Graphic Design",
    year: "Feb – Aug 2022",
    location: "Jakarta Selatan, Indonesia",
    href: "#",
  },
] as const;
