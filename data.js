// Brand Portfolio Hub — tab, link, social, and contact data.

const TABS = [
  { id: "author",    label: "Author" },
  { id: "vikas",    label: "Vikas Gupta" },
  { id: "music",    label: "Music" },
  { id: "education",label: "Education" },
  { id: "brands",   label: "GrowthOriginator" },
  { id: "directory",label: "Directory" },
  { id: "private",  label: "Private" },
];

const DEFAULT_TAB = "brands";

const TAB_GROUPS = {
  author: ["yatendra", "anant"],
  vikas:  ["vikas"],
  music:  ["shloka", "soulvani"],
};

const PLATFORMS = {
  Facebook:    { bg: "#12213f", color: "#3461d6" },
  Instagram:   { bg: "#2a1025", color: "#c2366b" },
  YouTube:     { bg: "#2a1010", color: "#d6342f" },
  Spotify:     { bg: "#0a2018", color: "#19883f" },
  "Apple Music": { bg: "#2a1018", color: "#c43c4c" },
};

function social(name, url, platform) {
  const p = PLATFORMS[platform];
  return { name, url, platform, platformBg: p.bg, platformColor: p.color };
}

const PEOPLE = {
  yatendra: {
    name: "Yatendra Chandra", initials: "YC",
    color: "oklch(0.5 0.17 350)", avatarBg: "oklch(0.5 0.18 350)",
    domain: "yatendrachandra.in",
    websites: [
      { name: "Solitude Ink", url: "https://solitudeink.yatendrachandra.in/", domain: "solitudeink.yatendrachandra.in" },
      { name: "TSOHC",        url: "https://tsohc.yatendrachandra.in/",       domain: "tsohc.yatendrachandra.in" },
      { name: "WOI",          url: "https://woi.yatendrachandra.in/",         domain: "woi.yatendrachandra.in" },
      { name: "Mansi",        url: "https://mansi.yatendrachandra.in/",       domain: "mansi.yatendrachandra.in" },
      { name: "Home",         url: "https://home.yatendrachandra.in/",        domain: "home.yatendrachandra.in" },
    ],
    social: [
      social("Yatendra Chandra", "https://www.facebook.com/yatendrachandraofficial/", "Facebook"),
    ],
    emails: ["yatendra.chandra@gmail.com"],
  },
  vikas: {
    name: "Vikas Gupta", initials: "VG",
    color: "oklch(0.48 0.17 220)", avatarBg: "oklch(0.5 0.18 220)",
    domain: "vikasgupta.world",
    websites: [
      { name: "Author",        url: "https://author.vikasgupta.world/",        domain: "author.vikasgupta.world" },
      { name: "AI Impact",     url: "https://aiimpact.vikasgupta.world/",      domain: "aiimpact.vikasgupta.world" },
      { name: "AI Trilogy",    url: "https://aitrilogy.vikasgupta.world/",     domain: "aitrilogy.vikasgupta.world" },
      { name: "Employability", url: "https://employability.vikasgupta.world/", domain: "employability.vikasgupta.world" },
      { name: "Columnist",     url: "https://columnist.vikasgupta.world/",     domain: "columnist.vikasgupta.world" },
      { name: "Articles",      url: "https://articles.vikasgupta.world/",      domain: "articles.vikasgupta.world" },
      { name: "Flawed Frame",  url: "https://flawedframe.vikasgupta.world/",   domain: "flawedframe.vikasgupta.world" },
      { name: "Equicore",      url: "https://equicore.vikasgupta.world/",      domain: "equicore.vikasgupta.world" },
    ],
    profileLinks: [
      { name: "DEI",        url: "https://dei.vikasgupta.world/",        domain: "dei.vikasgupta.world" },
      { name: "Law",        url: "https://law.vikasgupta.world/",        domain: "law.vikasgupta.world" },
      { name: "Policy",     url: "https://policy.vikasgupta.world/",     domain: "policy.vikasgupta.world" },
      { name: "Leadership", url: "https://leadership.vikasgupta.world/", domain: "leadership.vikasgupta.world" },
      { name: "Bio",        url: "https://bio.vikasgupta.world/",        domain: "bio.vikasgupta.world" },
      { name: "Educator",   url: "https://educator.vikasgupta.world/",   domain: "educator.vikasgupta.world" },
    ],
    social: [
      social("Fault Line Ideas", "https://www.instagram.com/faultlineideas/", "Instagram"),
      social("VRV Gupta",        "https://www.facebook.com/vrv.gupta/",       "Facebook"),
      social("Fault Line Ideas", "https://www.facebook.com/faultlineideas/",  "Facebook"),
    ],
    emails: ["faultlineideas@gmail.com", "equicorepractice@gmail.com"],
  },
  anant: {
    name: "Anant Deodar", initials: "AD",
    color: "oklch(0.45 0.15 185)", avatarBg: "oklch(0.5 0.18 185)",
    domain: "anantdeodar.ink",
    websites: [
      { name: "Democracy", url: "https://democracy.anantdeodar.ink/", domain: "democracy.anantdeodar.ink" },
    ],
    social: [
      social("Anant Deodar",        "https://www.facebook.com/anantdeodar/",         "Facebook"),
      social("The Rights Question", "https://www.facebook.com/therightsquestion/",    "Facebook"),
      social("The Rights Question", "https://www.youtube.com/@TheRightsQuestion",     "YouTube"),
    ],
    emails: ["anant.deodar@gmail.com"],
  },
  shloka: {
    name: "Shloka Svara", initials: "SS",
    color: "oklch(0.48 0.17 290)", avatarBg: "oklch(0.5 0.18 290)",
    domain: "shlokasvara.com",
    websites: [
      { name: "Shloka Svara", url: "https://start.shlokasvara.com/", domain: "start.shlokasvara.com" },
    ],
    social: [
      social("Shloka Svara", "https://www.facebook.com/ShlokaSvara/", "Facebook"),
      social("Shloka Svara", "https://www.youtube.com/@ShlokaSvara",  "YouTube"),
    ],
    emails: ["shloka.svara@gmail.com"],
  },
  soulvani: {
    name: "Soulvani Music", initials: "♪",
    color: "oklch(0.5 0.17 40)", avatarBg: "oklch(0.5 0.18 40)",
    domain: "soulvanimusic.com",
    websites: [
      { name: "Albums", url: "https://albums.soulvanimusic.com/", domain: "albums.soulvanimusic.com" },
      { name: "Listen", url: "https://listen.soulvanimusic.com/", domain: "listen.soulvanimusic.com" },
    ],
    social: [
      social("Soulvani Music", "https://www.instagram.com/soulvani.music/",               "Instagram"),
      social("Soulvani",       "https://www.facebook.com/soulvani/",                      "Facebook"),
      social("Listen N Love",  "https://www.facebook.com/listennlove1/",                  "Facebook"),
      social("SoulVani",       "https://www.youtube.com/@SoulVani",                       "YouTube"),
      social("Soulvani",       "https://open.spotify.com/artist/7DhyDSfyDzUJoaEHMr6jFK", "Spotify"),
      social("Soulvani",       "https://music.apple.com/us/artist/soulvani/1878376351",   "Apple Music"),
    ],
    emails: ["soulvani.music@gmail.com"],
  },
};

const EDUCATION_SECTIONS = [
  {
    label: "Quizykoo Brands", color: "oklch(0.5 0.13 262)",
    links: [
      { name: "Quiz Books",  url: "https://quizbooks.quizykoo.com",   domain: "quizbooks.quizykoo.com" },
      { name: "Skill Books", url: "https://skillbooks.quizykoo.com",  domain: "skillbooks.quizykoo.com" },
      { name: "Mythokoo",    url: "https://mythokoo.quizykoo.com",    domain: "mythokoo.quizykoo.com" },
      { name: "Wonderkoo",   url: "https://wonderkoo.quizykoo.com",   domain: "wonderkoo.quizykoo.com" },
      { name: "Champskoo",   url: "https://champskoo.quizykoo.com",   domain: "champskoo.quizykoo.com" },
      { name: "Filmykoo",    url: "https://filmykoo.quizykoo.com",    domain: "filmykoo.quizykoo.com" },
      { name: "Digital",     url: "https://digital.quizykoo.com",     domain: "digital.quizykoo.com" },
    ]
  },
  {
    label: "Trackers", color: "oklch(0.5 0.12 190)",
    links: [
      { name: "IMO Tracker App", url: "https://digitalsmartdesk-cmyk.github.io/imotrackerapp/",  domain: "digitalsmartdesk-cmyk.github.io" },
      { name: "IMO Tracker",     url: "https://imotracker01.vercel.app/login?next=%2Ftests",     domain: "imotracker01.vercel.app" },
      { name: "Cadence",         url: "https://cadence-five-zeta.vercel.app/portrait",           domain: "cadence-five-zeta.vercel.app" },
      { name: "Heu Verticals",   url: "https://heuverticals.growthoriginator.in",                domain: "heuverticals.growthoriginator.in" },
    ]
  },
  {
    label: "Quizykoo Sites", color: "oklch(0.5 0.14 310)",
    links: [
      { name: "Quizykoo (Home)", url: "https://home.quizykoo.com",                         domain: "home.quizykoo.com" },
      { name: "Quizykoo (GO)",   url: "https://quizykoo.growthoriginator.in",              domain: "quizykoo.growthoriginator.in" },
      { name: "Quizykoo (Dev)",  url: "https://vrvgupta-dotcom.github.io/quizykoo/#about", domain: "vrvgupta-dotcom.github.io" },
    ]
  },
];

const PRIVATE_COLOR = "oklch(0.48 0.14 300)";
const PRIVATE_LINKS = [
  { name: "Task",    url: "https://claude.ai/artifact/UJ41rjpNUyqwiDcYhfdhLd", domain: "claude.ai/artifact/UJ41rjpN…" },
  { name: "Money",   url: "https://claude.ai/artifact/JtugJPqvTsXVBrEnfG26Yd", domain: "claude.ai/artifact/JtugJPqv…" },
  { name: "Writing", url: "https://claude.ai/artifact/JXRHkAzYX3HtXLjzTAWD6H", domain: "claude.ai/artifact/JXRHkAzY…" },
];

const BRAND_CATEGORIES = [
  {
    name: "Food & Wellness", color: "oklch(0.52 0.15 55)",
    links: [
      { name: "Yummykeenz",     url: "https://yummykeenz.growthoriginator.in",    domain: "yummykeenz.growthoriginator.in" },
      { name: "Aaharva",        url: "https://aaharva.growthoriginator.in",       domain: "aaharva.growthoriginator.in" },
      { name: "Organic Cabana", url: "https://organiccabana.growthoriginator.in", domain: "organiccabana.growthoriginator.in" },
      { name: "Healthy Mijo",   url: "https://healthymijo.growthoriginator.in",   domain: "healthymijo.growthoriginator.in" },
      { name: "Medhavat",       url: "https://medhavat.growthoriginator.in",      domain: "medhavat.growthoriginator.in" },
      { name: "Tropico Nuts",   url: "https://tropiconuts.vercel.app/",           domain: "tropiconuts.vercel.app" },
      { name: "Cafe Firo",      url: "https://cafefiro.growthoriginator.in/",     domain: "cafefiro.growthoriginator.in" },
      { name: "Farm Puro",      url: "https://farmpuro.growthoriginator.in/",     domain: "farmpuro.growthoriginator.in" },
      { name: "D2C Brands",     url: "https://d2cbrands.growthoriginator.in",     domain: "d2cbrands.growthoriginator.in" },
    ]
  },
  {
    name: "Commerce", color: "oklch(0.48 0.13 230)",
    links: [
      { name: "Urban Supermart", url: "https://urbansupermart.growthoriginator.in", domain: "urbansupermart.growthoriginator.in" },
      { name: "Bill Pay Box",    url: "https://billpaybox.growthoriginator.in",     domain: "billpaybox.growthoriginator.in" },
      { name: "Books",           url: "https://booksurl.growthoriginator.in",       domain: "booksurl.growthoriginator.in" },
    ]
  },
  {
    name: "Real Estate", color: "oklch(0.5 0.12 75)",
    links: [
      { name: "Land Edge",         url: "https://landedge.growthoriginator.in",          domain: "landedge.growthoriginator.in" },
      { name: "Nirantar Vadodara", url: "https://nirantar-vadodara.growthoriginator.in", domain: "nirantar-vadodara.growthoriginator.in" },
      { name: "Nirantar Vasudha",  url: "https://nirantarvasudha.growthoriginator.in",   domain: "nirantarvasudha.growthoriginator.in" },
    ]
  },
  {
    name: "Consulting", color: "oklch(0.5 0.12 195)",
    links: [
      { name: "Artha Merge",    url: "https://arthamerge.growthoriginator.in",    domain: "arthamerge.growthoriginator.in" },
      { name: "Brand Mesh",     url: "https://brandmesh.growthoriginator.in",     domain: "brandmesh.growthoriginator.in" },
      { name: "Franchise Vista",url: "https://franchisevista.growthoriginator.in",domain: "franchisevista.growthoriginator.in" },
      { name: "Medhavant",      url: "https://medhavant.growthoriginator.in",     domain: "medhavant.growthoriginator.in" },
    ]
  },
  {
    name: "Tech & Energy", color: "oklch(0.48 0.15 290)",
    links: [
      { name: "Nexora", url: "https://nexora.growthoriginator.in", domain: "nexora.growthoriginator.in" },
      { name: "Noyora", url: "https://noyora.growthoriginator.in", domain: "noyora.growthoriginator.in" },
    ]
  },
  {
    name: "Public Policy", color: "oklch(0.48 0.13 160)",
    links: [
      { name: "Public Policy",              url: "https://publicpolicy.growthoriginator.in/",                            domain: "publicpolicy.growthoriginator.in" },
      { name: "Rich Country Poor Citizens", url: "https://publicpolicy.growthoriginator.in/rich-country-poor-citizens/", domain: "publicpolicy.growthoriginator.in" },
      { name: "AI Squeeze",                 url: "https://publicpolicy.growthoriginator.in/ai-squeeze/",                 domain: "publicpolicy.growthoriginator.in" },
      { name: "HH Bal Sheet — Book",        url: "https://publicpolicy.growthoriginator.in/hhbalsheet/book/",            domain: "publicpolicy.growthoriginator.in" },
      { name: "HH Bal Sheet — Tracker",     url: "https://publicpolicy.growthoriginator.in/hhbalsheet/tracker/",         domain: "publicpolicy.growthoriginator.in" },
      { name: "Money and Seats",            url: "https://publicpolicy.growthoriginator.in/money-and-seats/",            domain: "publicpolicy.growthoriginator.in" },
      { name: "IDRC",                       url: "https://idrc.growthoriginator.in",                                       domain: "idrc.growthoriginator.in" },
    ]
  },
  {
    name: "Outreach", color: "oklch(0.5 0.13 120)",
    links: [
      { name: "Anarva Atelier", url: "https://anarvaatelier.growthoriginator.in",  domain: "anarvaatelier.growthoriginator.in" },
      { name: "Resonant House", url: "https://resonanthouse.growthoriginator.in",  domain: "resonanthouse.growthoriginator.in" },
    ]
  },
  {
    name: "Lifestyle & Fashion", color: "oklch(0.52 0.15 15)",
    links: [
      { name: "Wedding Pass", url: "https://weddingpass.growthoriginator.in",  domain: "weddingpass.growthoriginator.in" },
      { name: "Navsaaj",      url: "https://navsaaj.growthoriginator.in/",     domain: "navsaaj.growthoriginator.in" },
      { name: "Rupanya",      url: "https://rupanya.growthoriginator.in/",     domain: "rupanya.growthoriginator.in" },
      { name: "Lalitya",      url: "https://lalitya.growthoriginator.in/",     domain: "lalitya.growthoriginator.in" },
      { name: "Blush Layers", url: "https://blushlayers.growthoriginator.in/", domain: "blushlayers.growthoriginator.in" },
    ]
  },
  {
    name: "Profile", color: "oklch(0.5 0.13 335)",
    links: [
      { name: "Akash", url: "https://akash.growthoriginator.in/", domain: "akash.growthoriginator.in" },
    ]
  },
];

const BRAND_SOCIAL = [
  social("Quizykoo",           "https://www.facebook.com/quizykoo/",                      "Facebook"),
  social("Urban Supermart",    "https://www.facebook.com/urbansupermart/",                 "Facebook"),
  social("Urban Wholesale",    "https://www.facebook.com/urbanwholesaleindia/",            "Facebook"),
  social("Noyora",             "https://www.facebook.com/noyoraofficial/",                 "Facebook"),
  social("Cashout Property",   "https://www.facebook.com/cashoutproperty/",                "Facebook"),
  social("Umber Electric",     "https://www.facebook.com/umberelectric/",                  "Facebook"),
  social("Envomoto",           "https://www.facebook.com/envomoto/",                       "Facebook"),
  social("GrowthOriginator",   "https://www.facebook.com/profile.php?id=100064705879364", "Facebook"),
  social("Ignite Crest",       "https://www.facebook.com/ignitecrest/",                    "Facebook"),
  social("Franchise Vista",    "https://www.facebook.com/franchisevista/",                  "Facebook"),
  social("The Ignite Angels",  "https://www.facebook.com/theigniteangels/",                "Facebook"),
  social("Social Impact Vyoo", "https://www.youtube.com/@socialimpactvyoo",                "YouTube"),
];

const BRAND_EMAILS = [
  "landedge.projects@gmail.com",
  "arthamerge@gmail.com",
  "franchisevista@growthoriginator.in",
  "brandmesh@growthoriginator.in",
  "nv@growthoriginator.in",
  "publicpolicyfoundation@gmail.com",
  "medhavant@growthoriginator.in",
  "quizykoo@gmail.com",
];

const DOMAINS = [
  { name: "growthoriginator.in", url: "https://growthoriginator.in" },
  { name: "vikasgupta.world",    url: "https://vikasgupta.world" },
  { name: "yatendrachandra.in",  url: "https://yatendrachandra.in" },
  { name: "anantdeodar.ink",     url: "https://anantdeodar.ink" },
  { name: "soulvanimusic.com",   url: "https://soulvanimusic.com" },
  { name: "shlokasvara.com",     url: "https://shlokasvara.com" },
  { name: "quizykoo.com",        url: "https://quizykoo.com" },
  { name: "quizykoo.online",     url: "https://quizykoo.online" },
];

const ALL_EMAILS = [
  { label: "Yatendra Chandra",             email: "yatendra.chandra@gmail.com" },
  { label: "Vikas Gupta — Fault Line",     email: "faultlineideas@gmail.com" },
  { label: "Vikas Gupta — Equicore",       email: "equicorepractice@gmail.com" },
  { label: "Anant Deodar",                 email: "anant.deodar@gmail.com" },
  { label: "Shloka Svara",                 email: "shloka.svara@gmail.com" },
  { label: "Soulvani Music",               email: "soulvani.music@gmail.com" },
  { label: "Land Edge",                    email: "landedge.projects@gmail.com" },
  { label: "Artha Merge",                  email: "arthamerge@gmail.com" },
  { label: "Franchise Vista",              email: "franchisevista@growthoriginator.in" },
  { label: "Brand Mesh",                   email: "brandmesh@growthoriginator.in" },
  { label: "Nirantar Vasudha",             email: "nv@growthoriginator.in" },
  { label: "Public Policy Foundation",     email: "publicpolicyfoundation@gmail.com" },
  { label: "Medhavant",                    email: "medhavant@growthoriginator.in" },
  { label: "Quizykoo",                     email: "quizykoo@gmail.com" },
];
