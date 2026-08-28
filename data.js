// Brand Portfolio Hub — tab and link data.

const TABS = [
  { id: "yatendra", label: "Yatendra Chandra" },
  { id: "vikas", label: "Vikas Gupta" },
  { id: "brands", label: "GrowthOriginator" },
];

const DEFAULT_TAB = "brands";

const PEOPLE = {
  yatendra: {
    name: "Yatendra Chandra",
    initials: "YC",
    domain: "yatendrachandra.in",
    accentColor: "oklch(0.65 0.18 350)",
    gradient: "linear-gradient(135deg, oklch(0.55 0.18 350), oklch(0.4 0.14 310))",
    links: [
      { name: "Solitude Ink", url: "https://solitudeink.yatendrachandra.in/", domain: "solitudeink.yatendrachandra.in" },
      { name: "TSOHC",        url: "https://tsohc.yatendrachandra.in/",       domain: "tsohc.yatendrachandra.in" },
      { name: "WOI",          url: "https://woi.yatendrachandra.in/",         domain: "woi.yatendrachandra.in" },
      { name: "Mansi",        url: "https://mansi.yatendrachandra.in/",       domain: "mansi.yatendrachandra.in" },
    ]
  },
  vikas: {
    name: "Vikas Gupta",
    initials: "VG",
    domain: "vikasgupta.world",
    accentColor: "oklch(0.65 0.18 220)",
    gradient: "linear-gradient(135deg, oklch(0.55 0.18 220), oklch(0.4 0.14 260))",
    links: [
      { name: "Flawed Frame", url: "https://flawedframe.vikasgupta.world/",  domain: "flawedframe.vikasgupta.world" },
      { name: "Author",       url: "https://author.vikasgupta.world/",       domain: "author.vikasgupta.world" },
      { name: "Columnist",    url: "https://columnist.vikasgupta.world/",    domain: "columnist.vikasgupta.world" },
      { name: "AI Impact",    url: "https://aiimpact.vikasgupta.world/",     domain: "aiimpact.vikasgupta.world" },
      { name: "AI Trilogy",   url: "https://aitrilogy.vikasgupta.world/",    domain: "aitrilogy.vikasgupta.world" },
      { name: "Equicore",     url: "https://equicore.vikasgupta.world/",     domain: "equicore.vikasgupta.world" },
    ]
  }
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
      { name: "Quizykoo",        url: "https://quizykoo.growthoriginator.in",                    domain: "quizykoo.growthoriginator.in" },
      { name: "Quizykoo (Dev)",  url: "https://vrvgupta-dotcom.github.io/quizykoo/#about",       domain: "vrvgupta-dotcom.github.io" },
      { name: "IMO Tracker App", url: "https://digitalsmartdesk-cmyk.github.io/imotrackerapp/", domain: "digitalsmartdesk-cmyk.github.io" },
      { name: "IMO Tracker",     url: "https://imotracker01.vercel.app/login?next=%2Ftests",    domain: "imotracker01.vercel.app" },
    ]
  },
  {
    name: "Events, Arts & Music", color: "oklch(0.72 0.16 15)",
    links: [
      { name: "Wedding Pass",   url: "https://weddingpass.growthoriginator.in",       domain: "weddingpass.growthoriginator.in" },
      { name: "Soulvani Music", url: "https://albums.soulvanimusic.com/",             domain: "albums.soulvanimusic.com" },
      { name: "Cadence",        url: "https://cadence-five-zeta.vercel.app/portrait", domain: "cadence-five-zeta.vercel.app" },
    ]
  },
];
