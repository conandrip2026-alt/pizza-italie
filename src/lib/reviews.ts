export type Review = {
  id: string;
  name: string;
  quote: { fr: string; en: string };
  placeholder?: boolean;
};

export const REVIEWS: Review[] = [
  {
    id: "abbey",
    name: "Abbey C.",
    quote: {
      en: "This place is amazing! Late night eat after the club:) The workers are constantly at work, making sure everyone is fed and happy. My friend wasn’t feeling well and they made sure we were all set before going home. The compassion that comes from the staff and owners remind me of family.",
      fr: "This place is amazing! Late night eat after the club:) The workers are constantly at work, making sure everyone is fed and happy. My friend wasn’t feeling well and they made sure we were all set before going home. The compassion that comes from the staff and owners remind me of family.",
    },
  },
  {
    id: "melinah",
    name: "Melinah R.",
    quote: {
      en: "Ordered the most delicious pepperoni pizza, it arrived on time and tasted absolutely amazing. All workers were so kind and accommodating with our order.",
      fr: "Ordered the most delicious pepperoni pizza, it arrived on time and tasted absolutely amazing. All workers were so kind and accommodating with our order.",
    },
  },
  {
    id: "alex",
    name: "Alex D.",
    quote: {
      en: "Pick up order — excellent and generous portions. The sauce is so good and the pizza was fresh and cheesy. They waited to do the poutine until I came in so when I got it home it was still nice and crisp.",
      fr: "Pick up order — excellent and generous portions. The sauce is so good and the pizza was fresh and cheesy. They waited to do the poutine until I came in so when I got it home it was still nice and crisp.",
    },
  },
  // PLACEHOLDER: replace with live Google reviews
  {
    id: "marc",
    name: "Marc T.",
    placeholder: true,
    quote: {
      fr: "3 h du matin après le casino, Roberto nous a reçus comme de la famille. Pizza encore fumante, bacon vrai, portions généreuses. Hull a de la chance.",
      en: "3am after the casino, Roberto treated us like family. Pizza still steaming, real bacon, generous portions. Hull is lucky.",
    },
  },
  // PLACEHOLDER: replace with live Google reviews
  {
    id: "sophie",
    name: "Sophie L.",
    placeholder: true,
    quote: {
      fr: "La poutine est énorme et ils l’ont faite seulement à mon arrivée. Croustillante jusqu’à la maison. Je recommande les ailes aussi.",
      en: "The poutine is huge and they only made it when I arrived. Still crisp when I got home. The wings are a must too.",
    },
  },
  // PLACEHOLDER: replace with live Google reviews
  {
    id: "jordan",
    name: "Jordan K.",
    placeholder: true,
    quote: {
      fr: "Ailes parfaites, sauce qui tient, pizza pepperoni-bacon trop garnie. Service gentil même à minuit pile.",
      en: "Perfect wings, sauce that stays on, pepperoni-bacon pizza loaded to the edge. Kind service even at midnight on the nose.",
    },
  },
  // PLACEHOLDER: replace with live Google reviews
  {
    id: "nadia",
    name: "Nadia B.",
    placeholder: true,
    quote: {
      fr: "On sent le vrai bacon, pas le bacon-dinde. Fromage généreux, pâte qui a du corps. Notre arrêt après les bars depuis des années.",
      en: "You can taste real bacon, not the imitation. Generous cheese, dough with backbone. Our after-bar stop for years.",
    },
  },
  // PLACEHOLDER: replace with live Google reviews
  {
    id: "chris",
    name: "Chris P.",
    placeholder: true,
    quote: {
      fr: "Livraison rapide vers le casino, pizza encore chaude. L’équipe est aux petits soins. 4,7 étoiles méritées.",
      en: "Fast delivery toward the casino, pizza still hot. The crew takes care of you. 4.7 stars, earned.",
    },
  },
  // PLACEHOLDER: replace with live Google reviews
  {
    id: "isabelle",
    name: "Isabelle R.",
    placeholder: true,
    quote: {
      fr: "Ambiance de famille, portions de resto de quartier qui n’a rien à prouver. La Québécoise et une grande poutine, c’est le combo.",
      en: "Family feeling, neighbourhood portions with nothing to prove. The Québécoise plus a large poutine is the move.",
    },
  },
];
