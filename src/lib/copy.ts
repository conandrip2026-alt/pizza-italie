import type { Lang } from "./i18n";

type Pair = { fr: string; en: string };

export const t = (pair: Pair, lang: Lang) => pair[lang];

export const copy = {
  skip: { fr: "Aller au contenu", en: "Skip to content" },
  brand: "Pizza Italie",
  tagline: {
    fr: "La pizzeria incontournable de Gatineau depuis 1995",
    en: "Gatineau’s favourite spot for authentic, delicious pizza",
  },
  sectionLine: "GOOD FOOD & GREAT VIBES",
  nav: {
    home: { fr: "Accueil", en: "Home" },
    menu: { fr: "Menu", en: "Menu" },
    story: { fr: "Histoire", en: "Story" },
    reviews: { fr: "Avis", en: "Reviews" },
    contact: { fr: "Contact", en: "Contact" },
  },
  cta: {
    pickup: { fr: "Commander", en: "Pickup" },
    delivery: { fr: "Livraison", en: "Delivery" },
    orderNow: { fr: "Commander maintenant", en: "Order now" },
    call: { fr: "Appeler", en: "Call" },
  },
  open: {
    now: { fr: "Ouvert maintenant", en: "Open now" },
    later: { fr: "Ouvre à 16h", en: "Opens at 4pm" },
  },
  hero: {
    kicker: { fr: "Hull · Gatineau", en: "Hull · Gatineau" },
    title: "Pizza Italie",
    sub: { fr: "Hull, depuis 1995", en: "Hull, since 1995" },
    line: {
      fr: "Pizza authentique, poutine et ailes — ouverts jusqu’à 4 h.",
      en: "Authentic pizza, poutine and wings — open until 4am.",
    },
    scroll: { fr: "Menu", en: "Menu" },
  },
  stats: {
    year: { fr: "Année d’ouverture", en: "Established" },
    years: { fr: "Années à Hull", en: "Years in Hull" },
    rating: { fr: "Note Google", en: "Google rating" },
    until: { fr: "Ouvert jusqu’à", en: "Open until" },
  },
  signatures: {
    kicker: { fr: "Les incontournables", en: "House signatures" },
    title: { fr: "Ce qu’on commande à 2 h du matin", en: "What Hull orders at 2am" },
  },
  menu: {
    kicker: { fr: "La carte", en: "The board" },
    title: { fr: "Menu", en: "Menu" },
    all: { fr: "Tout", en: "All" },
    ribbonTitle: { fr: "Grand Spécial — 2 pizzas", en: "Grand Special — 2 pizzas" },
    ribbonSizes: {
      fr: "Petite 2  ·  Moyenne 2  ·  Grande 2",
      en: "Small pair  ·  Medium pair  ·  Large pair",
    },
    ribbonPrices: {
      fr: "à partir de ~40 $ / ~55 $ / ~70 $ — selon le tableau du jour, confirmer à la commande",
      en: "from ~$40 / ~$55 / ~$70 — from the current board, confirm on order",
    },
    footnote: {
      fr: "Prix indicatifs — confirmer à la commande.",
      en: "Prices may vary at checkout.",
    },
    cats: {
      specials: { fr: "Spéciaux", en: "Specials" },
      pizzas: { fr: "Pizzas", en: "Pizzas" },
      poutines: { fr: "Poutines", en: "Poutines" },
      wings: { fr: "Ailes", en: "Wings" },
      subs: { fr: "Sous-marins", en: "Subs" },
      burgers: { fr: "Burgers", en: "Burgers" },
      salads: { fr: "Salades", en: "Salads" },
      sides: { fr: "Accompagnements", en: "Sides" },
    },
  },
  story: {
    kicker: { fr: "Depuis 1995", en: "Since 1995" },
    title: { fr: "Une tradition de Hull, encore ouverte à 4 h", en: "A Hull tradition, still open at 4am" },
    p1: {
      fr: "Ouvert depuis 1995 au cœur de Hull, Pizza Italie sert des pizzas généreuses, des poutines croustillantes et des ailes jusqu’au petit matin. Ingrédients de qualité, saveurs traditionnelles, portions qui n’ont jamais appris à se rationner.",
      en: "Open since 1995 in the heart of Hull, Pizza Italie serves generous pizza, crisp poutine and wings until the small hours. Quality ingredients, traditional flavours, portions that never learned to be shy.",
    },
    p2: {
      fr: "On est au 101 Promenade du Portage — à deux pas des bars, à une course du Casino du Lac-Leamy. Pickup, livraison, et une équipe chaleureuse (demandez Roberto) qui traite les 3 h du matin comme le service du midi.",
      en: "You’ll find us at 101 Promenade du Portage — steps from the bars, a short hop from Casino du Lac-Leamy. Pickup, delivery, and a warm crew (ask for Roberto) who treat 3am like the lunch rush.",
    },
    p3: {
      fr: "Classiques et spécialités, sous-marins, burgers, salades. Une pizzeria de quartier qui est devenue le rituel tardif de l’Outaouais.",
      en: "Classics and specialties, subs, burgers, salads. A neighbourhood pizzeria that became the Outaouais late-night ritual.",
    },
    marks: [
      { year: "1995", fr: "Ouverture", en: "Opening" },
      { year: "Hull", fr: "Promenade du Portage", en: "Promenade du Portage" },
      { year: "30+", fr: "Ans à table", en: "Years at the table" },
      { year: "4 h", fr: "On ferme à l’aube", en: "We close at dawn" },
    ],
  },
  reviews: {
    kicker: { fr: "Les avis", en: "The word" },
    title: { fr: "sur Google", en: "on Google" },
    all: { fr: "Voir tous les avis", en: "See all reviews" },
    source: { fr: "Avis Google", en: "Google review" },
    prev: { fr: "Avis précédent", en: "Previous review" },
    next: { fr: "Avis suivant", en: "Next review" },
  },
  banner: {
    title: { fr: "Faim à 3 h du matin? On est ouverts.", en: "Hungry at 3am? We’re open." },
    sub: {
      fr: "Pickup au 101 Promenade du Portage, ou livraison partout à Gatineau.",
      en: "Pickup at 101 Promenade du Portage, or delivery across Gatineau.",
    },
  },
  contact: {
    kicker: { fr: "Nous trouver", en: "Find us" },
    title: { fr: "Contact", en: "Contact" },
    address: { fr: "Adresse", en: "Address" },
    hours: { fr: "Heures", en: "Hours" },
    phone: { fr: "Téléphone", en: "Phone" },
    email: { fr: "Courriel", en: "Email" },
    how: {
      fr: "Au cœur de Hull, à deux pas de la vie nocturne de la Promenade du Portage.",
      en: "In the heart of Hull, steps from Promenade du Portage nightlife.",
    },
    directions: { fr: "Itinéraire", en: "Directions" },
    days: [
      { fr: "Lundi", en: "Monday" },
      { fr: "Mardi", en: "Tuesday" },
      { fr: "Mercredi", en: "Wednesday" },
      { fr: "Jeudi", en: "Thursday" },
      { fr: "Vendredi", en: "Friday" },
      { fr: "Samedi", en: "Saturday" },
      { fr: "Dimanche", en: "Sunday" },
    ],
    hoursValue: "16:00 – 04:00",
  },
  footer: {
    blurb: {
      fr: "Pizzeria de Hull depuis 1995. Pizza, poutine, ailes — jusqu’à 4 h.",
      en: "Hull’s pizzeria since 1995. Pizza, poutine, wings — until 4am.",
    },
    powered: "Powered by OlivePOS",
    rights: { fr: "Tous droits réservés.", en: "All rights reserved." },
  },
} as const;
