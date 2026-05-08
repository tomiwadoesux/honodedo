// Books by Hon. Charles Odedo. The image paths are real cover scans
// stored in /public/assets/images/books/.
//
// `coverColor` is the major colour pulled from each cover; it's used as
// the bg of the printed "title page" behind the cover when the book
// hinges open on /books, with a black overlay layered on top so any
// content sitting on it stays legible.

export const books = [
  {
    id: "politics-power-and-purpose",
    title: "Politics, Power & Purpose",
    subtitle: "Lessons from a political life shaped by resilience and service",
    year: null,
    summary:
      "Reflections from two terms in the National Assembly on what political life teaches you about people, principle, and the long arc of public service.",
    cover: "/assets/images/books/politics-power-and-purpose.webp",
    coverColor: "#1a2752", // deep navy — pulled from his suit
    tag: "Memoir",
  },
  {
    id: "the-biafran-child",
    title: 'The "Biafran" Child',
    subtitle:
      "Overcoming the war environment and poverty to become Honourable Charles Odedo",
    year: null,
    summary:
      "A personal account of growing up in the shadow of war and finding a path through hardship into public service and enterprise.",
    cover: "/assets/images/books/the-biafran-child.webp",
    coverColor: "#7a2a1a", // burnt sienna — fire / earth on the cover
    tag: "Memoir",
  },
  {
    id: "odedo-vs-inec",
    title: "Odedo vs INEC",
    subtitle: "The long fight to reclaim a mandate and a legacy (SC/208/2007)",
    year: null,
    summary:
      "The legal and personal record of the Supreme Court judgment of 11th July, 2008 and what it took to defend a mandate to its conclusion.",
    cover: "/assets/images/books/odedo-vs-inec.webp",
    coverColor: "#8c1f1f", // crimson — the cover's red title
    tag: "Legal",
  },
  {
    id: "building-wealth-through-real-estate",
    title: "Building Wealth Through Real Estate",
    subtitle: "A practical guide to real estate investment in Abuja",
    year: null,
    summary:
      "Field-tested guidance for first-time and seasoned investors on how to read titles, weigh master plans, and put capital to work in the FCT.",
    cover: "/assets/images/books/building-wealth-through-real-estate.webp",
    coverColor: "#1f4530", // forest green — the lush trees on the cover
    tag: "Guide",
  },
  {
    id: "abuja-hotel-evaluation",
    title: "Abuja Hotel Evaluation",
    subtitle:
      "Investors guide to small and medium size hotels in Abuja real estate & hospitality",
    year: null,
    summary:
      "An evaluator's manual for the small and medium hotel segment in Abuja, written from years inside the city's hospitality market.",
    cover: "/assets/images/books/abuja-hotel-evaluation.webp",
    coverColor: "#1f2538", // charcoal — the dark cover bg
    tag: "Guide",
  },
];

export const press = [
  {
    id: "p1",
    outlet: "BusinessDay",
    title: "Why the FCT will out-perform Lagos for the next decade",
    date: "March 2024",
    href: "#",
  },
  {
    id: "p2",
    outlet: "The Guardian Nigeria",
    title: "An interview on land tenure, trust, and the diaspora investor",
    date: "October 2023",
    href: "#",
  },
  {
    id: "p3",
    outlet: "Premium Times",
    title: "After politics: a quieter second act in property",
    date: "April 2023",
    href: "#",
  },
];
