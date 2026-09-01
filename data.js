// Brand Portfolio Hub — tab, link, social, and contact data.

const TABS = [
  { id: "yatendra", label: "Yatendra Chandra" },
  { id: "vikas", label: "Vikas Gupta" },
  { id: "anant", label: "Anant Deodar" },
  { id: "shloka", label: "Shloka Svara" },
  { id: "soulvani", label: "Soulvani Music" },
  { id: "brands", label: "GrowthOriginator" },
  { id: "directory", label: "Directory" },
];

const DEFAULT_TAB = "brands";
const PERSON_IDS = ["yatendra", "vikas", "anant", "shloka", "soulvani"];

const PLATFORMS = {
  Facebook: { bg: "#12213f", color: "#5b8fff" },
  Instagram: { bg: "#2a1025", color: "#e06090" },
  YouTube: { bg: "#2a1010", color: "#ff6060" },
  Spotify: { bg: "#0a2018", color: "#1db954" },
  "Apple Music": { bg: "#2a1018", color: "#fc6e7a" },
};

function social(name, url, platform) {
  const p = PLATFORMS[platform];
  return { name, url, platform, platformBg: p.bg, platformColor: p.color };
}

const PEOPLE = {
  yatendra: {
    name: "Yatendra Chandra", initials: "YC",
    color: "oklch(0.65 0.18 350)", avatarBg: "oklch(0.38 0.18 350)",
    domain: "yatendrachandra.in",
    websites: [
      { name: "Solitude Ink", url: "https://solitudeink.yatendrachandra.in/", domain: "solitudeink.yatendrachandra.in" },
      { name: "TSOHC",        url: "https://tsohc.yatendrachandra.in/",       domain: "tsohc.yatendrachandra.in" },
      { name: "WOI",          url: "https://woi.yatendrachandra.in/",         domain: "woi.yatendrachandra.in" },
      { name: "Mansi",        url: "https://mansi.yatendrachandra.in/",       domain: "mansi.yatendrachandra.in" },
    ],
    social: [
      social("Yatendra Chandra", "https://www.facebook.com/yatendrachandraofficial/", "Facebook"),
    ],
    emails: ["yatendra.chandra@gmail.com"],
  },
  vikas: {
    name: "Vikas Gupta", initials: "VG",
    color: "oklch(0.65 0.18 220)", avatarBg: "oklch(0.38 0.18 220)",
    domain: "vikasgupta.world",
    websites: [
      { name: "Flawed Frame",  url: "https://flawedframe.vikasgupta.world/",   domain: "flawedframe.vikasgupta.world" },
      { name: "Author",        url: "https://author.vikasgupta.world/",        domain: "author.vikasgupta.world" },
      { name: "Columnist",     url: "https://columnist.vikasgupta.world/",     domain: "columnist.vikasgupta.world" },
      { name: "AI Impact",     url: "https://aiimpact.vikasgupta.world/",      domain: "aiimpact.vikasgupta.world" },
      { name: "AI Trilogy",    url: "https://aitrilogy.vikasgupta.world/",     domain: "aitrilogy.vikasgupta.world" },
      { name: "Equicore",      url: "https://equicore.vikasgupta.world/",      domain: "equicore.vikasgupta.world" },
      { name: "Employability", url: "https://employability.vikasgupta.world/", domain: "employability.vikasgupta.world" },
    ],
    social: [
      social("Fault Line Ideas", "https://www.instagram.com/faultlineideas/", "Instagram"),
      social("VRV Gupta", "https://www.facebook.com/vrv.gupta/", "Facebook"),
      social("Fault Line Ideas", "https://www.facebook.com/faultlineideas/", "Facebook"),
    ],
    emails: ["faultlineideas@gmail.com", "equicorepractice@gmail.com"],
  },
  anant: {
    name: "Anant Deodar", initials: "AD",
    color: "oklch(0.65 0.18 185)", avatarBg: "oklch(0.38 0.18 185)",
    domain: "anantdeodar.ink",
    websites: [
      { name: "Democracy", url: "https://democracy.anantdeodar.ink/", domain: "democracy.anantdeodar.ink" },
    ],
    social: [
      social("Anant Deodar", "https://www.facebook.com/anantdeodar/", "Facebook"),
      social("The Rights Question", "https://www.facebook.com/therightsquestion/", "Facebook"),
      social("The Rights Question", "https://www.youtube.com/@TheRightsQuestion", "YouTube"),
    ],
    emails: ["anant.deodar@gmail.com", "indiandrc2025@gmail.com"],
  },
  shloka: {
    name: "Shloka Svara", initials: "SS",
    color: "oklch(0.65 0.18 290)", avatarBg: "oklch(0.38 0.18 290)",
    domain: "shlokasvara.com",
    websites: [
      { name: "Shloka Svara", url: "https://start.shlokasvara.com/", domain: "start.shlokasvara.com" },
    ],
    social: [
      social("Shloka Svara", "https://www.facebook.com/ShlokaSvara/", "Facebook"),
      social("Shloka Svara", "https://www.youtube.com/@ShlokaSvara", "YouTube"),
    ],
    emails: ["shloka.svara@gmail.com"],
  },
  soulvani: {
    name: "Soulvani Music", initials: "♪",
    color: "oklch(0.65 0.18 40)", avatarBg: "oklch(0.38 0.18 40)",
    domain: "soulvanimusic.com",
    websites: [
      { name: "Albums", url: "https://albums.soulvanimusic.com/", domain: "albums.soulvanimusic.com" },
      { name: "Listen", url: "https://listen.soulvanimusic.com/", domain: "listen.soulvanimusic.com" },
    ],
    social: [
      social("Soulvani Music", "https://www.instagram.com/soulvani.music/", "Instagram"),
      social("Soulvani", "https://www.facebook.com/soulvani/", "Facebook"),
      social("Listen N Love", "https://www.facebook.com/listennlove1/", "Facebook"),
      social("SoulVani", "https://www.youtube.com/@SoulVani", "YouTube"),
      social("Soulvani", "https://open.spotify.com/artist/7DhyDSfyDzUJoaEHMr6jFK", "Spotify"),
      social("Soulvani", "https://music.apple.com/us/artist/soulvani/1878376351", "Apple Music"),
    ],
    emails: ["soulvani.music@gmail.com"],
  },
};

const BRAND_CATEGORIES = [
  {
    name: "Food & Wellness", color: "oklch(0.72 0.16 55)",
    links: [
      { name: "Yummykeenz",     url: "https://yummykeenz.growthoriginator.in",    domain: "yummykeenz.growthoriginator.in" },
      { name: "Aaharva",        url: "https://aaharva.growthoriginator.in",       domain: "aaharva.growthoriginator.in" },
      { name: "Organic Cabana", url: "https://organiccabana.growthoriginator.in", domain: "organiccabana.growthoriginator.in" },
      { name: "Healthy Mijo",   url: "https://healthymijo.growthoriginator.in",   domain: "healthymijo.growthoriginator.in" },
      { name: "Medhavat",       url: "https://medhavat.growthoriginator.in",      domain: "medhavat.growthoriginator.in" },
      { name: "Tropico Nuts",   url: "https://tropiconuts.vercel.app/",           domain: "tropiconuts.vercel.app" },
      { name: "Cafe Firo",      url: "https://cafefiro.growthoriginator.in/",     domain: "cafefiro.growthoriginator.in" },
      { name: "Farm Puro",      url: "https://farmpuro.growthoriginator.in/",     domain: "farmpuro.growthoriginator.in" },
    ]
  },
  {
    name: "Commerce & Business", color: "oklch(0.72 0.16 230)",
    links: [
      { name: "Urban Supermart", url: "https://urbansupermart.growthoriginator.in", domain: "urbansupermart.growthoriginator.in" },
      { name: "D2C Brands",      url: "https://d2cbrands.growthoriginator.in",      domain: "d2cbrands.growthoriginator.in" },
      { name: "Brand Mesh",      url: "https://brandmesh.growthoriginator.in",      domain: "brandmesh.growthoriginator.in" },
      { name: "Land Edge",       url: "https://landedge.growthoriginator.in",       domain: "landedge.growthoriginator.in" },
      { name: "Bill Pay Box",    url: "https://billpaybox.growthoriginator.in",     domain: "billpaybox.growthoriginator.in" },
      { name: "Artha Merge",     url: "https://arthamerge.growthoriginator.in",     domain: "arthamerge.growthoriginator.in" },
      { name: "Heu Verticals",   url: "https://heuverticals.growthoriginator.in",   domain: "heuverticals.growthoriginator.in" },
      { name: "Nexora",          url: "https://nexora.growthoriginator.in",         domain: "nexora.growthoriginator.in" },
      { name: "Noyora",          url: "https://noyora.growthoriginator.in",         domain: "noyora.growthoriginator.in" },
    ]
  },
  {
    name: "Education & Tools", color: "oklch(0.72 0.16 262)",
    links: [
      { name: "Quizykoo",        url: "https://quizykoo.growthoriginator.in",                   domain: "quizykoo.growthoriginator.in" },
      { name: "Quizykoo (Dev)",  url: "https://vrvgupta-dotcom.github.io/quizykoo/#about",      domain: "vrvgupta-dotcom.github.io" },
      { name: "IMO Tracker App", url: "https://digitalsmartdesk-cmyk.github.io/imotrackerapp/", domain: "digitalsmartdesk-cmyk.github.io" },
      { name: "IMO Tracker",     url: "https://imotracker01.vercel.app/login?next=%2Ftests",    domain: "imotracker01.vercel.app" },
    ]
  },
  {
    name: "Events & Lifestyle", color: "oklch(0.72 0.16 15)",
    links: [
      { name: "Wedding Pass", url: "https://weddingpass.growthoriginator.in",       domain: "weddingpass.growthoriginator.in" },
      { name: "Cadence",      url: "https://cadence-five-zeta.vercel.app/portrait", domain: "cadence-five-zeta.vercel.app" },
    ]
  },
];

const BRAND_SOCIAL = [
  social("Quizykoo", "https://www.facebook.com/quizykoo/", "Facebook"),
  social("Urban Supermart", "https://www.facebook.com/urbansupermart/", "Facebook"),
  social("Urban Wholesale", "https://www.facebook.com/urbanwholesaleindia/", "Facebook"),
  social("Noyora", "https://www.facebook.com/noyoraofficial/", "Facebook"),
  social("Cashout Property", "https://www.facebook.com/cashoutproperty/", "Facebook"),
  social("Umber Electric", "https://www.facebook.com/umberelectric/", "Facebook"),
  social("Envomoto", "https://www.facebook.com/envomoto/", "Facebook"),
  social("GrowthOriginator", "https://www.facebook.com/profile.php?id=100064705879364", "Facebook"),
  social("Ignite Crest", "https://www.facebook.com/ignitecrest/", "Facebook"),
  social("Franchise Vista", "https://www.facebook.com/franchisevista/", "Facebook"),
  social("The Ignite Angels", "https://www.facebook.com/theigniteangels/", "Facebook"),
  social("Social Impact Vyoo", "https://www.youtube.com/@socialimpactvyoo", "YouTube"),
];

const BRAND_EMAILS = ["landedge.projects@gmail.com", "arthamerge@gmail.com"];

const DOMAINS = [
  { name: "growthoriginator.in", url: "https://growthoriginator.in" },
  { name: "vikasgupta.world",    url: "https://vikasgupta.world" },
  { name: "yatendrachandra.in",  url: "https://yatendrachandra.in" },
  { name: "anantdeodar.ink",     url: "https://anantdeodar.ink" },
  { name: "soulvanimusic.com",   url: "https://soulvanimusic.com" },
  { name: "shlokasvara.com",     url: "https://shlokasvara.com" },
];

const ALL_EMAILS = [
  { label: "Yatendra Chandra",          email: "yatendra.chandra@gmail.com" },
  { label: "Vikas Gupta — Fault Line",  email: "faultlineideas@gmail.com" },
  { label: "Vikas Gupta — Equicore",    email: "equicorepractice@gmail.com" },
  { label: "Anant Deodar",              email: "anant.deodar@gmail.com" },
  { label: "Anant Deodar — Indian DRC", email: "indiandrc2025@gmail.com" },
  { label: "Shloka Svara",              email: "shloka.svara@gmail.com" },
  { label: "Soulvani Music",            email: "soulvani.music@gmail.com" },
  { label: "Land Edge",                 email: "landedge.projects@gmail.com" },
  { label: "Artha Merge",               email: "arthamerge@gmail.com" },
];
