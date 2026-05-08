// Team members. The CEO stays at index 0 (Hon. Odedo's row is the
// featured block on /about). The remaining members are the working team.
//
// `image` paths point to `/assets/images/team/empty-profile.svg` for any
// member who hasn't supplied a photo yet — a calm sand-toned silhouette
// placeholder that fits the rest of the editorial palette.
//
// Members without a stated name use literal "NO NAME".

const PLACEHOLDER = "/assets/images/team/empty-profile.svg";

export const teamMembers = [
  {
    id: "ceo",
    name: "Hon. Odedo",
    role: "Founder & CEO",
    image: "/assets/images/hon.jpg",
    bio: "Real estate expert, entrepreneur, and former House of Representatives member. A graduate of Estate Management from UNN and Marketing from Portland State University, USA, with decades of experience building businesses both in Nigeria and abroad.",
    socials: {
      x: "https://x.com/",
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    id: "exec-director",
    name: "Benny Amarachukwu Odedo",
    role: "Executive Director",
    image: "/assets/images/team/benny.jpg",
    bio: "Executive Director leading operations and strategy. Holds a B.Sc. in Business Administration from Babcock University and joined from the Bank of Industry, where he built experience in HR, customer service, and credit and risk management.",
    socials: {
      x: "https://x.com/",
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    id: "ict-director",
    name: "Uche",
    role: "ICT Director",
    image: PLACEHOLDER,
    bio: "Software engineer with a B.Sc. from Baze University and NYSC experience at the National Export Promotion Council. Builds the digital systems and technology strategy behind Honourable Odedo & Co.",
    socials: {
      x: "https://x.com/",
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    id: "legal-adviser",
    name: "Sandra John",
    role: "Legal Adviser",
    image: "/assets/images/team/sandra.jpg",
    bio: "Barrister and Solicitor of the Supreme Court of Nigeria with an LL.B from the University of Jos and certification as an Arbitrator. Handles property development, land documentation, regulatory compliance, and contract management.",
    socials: {
      x: "https://x.com/",
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    id: "design-architect",
    name: "Adomi Joshua Ejiro",
    role: "Design Architect",
    image: "/assets/images/team/adomi.jpg",
    bio: "Design architect with six years of experience and a B.Sc. and M.Sc. in Architecture. Delivers functional, considered design solutions from concept through execution.",
    socials: {
      x: "https://x.com/",
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    id: "project-manager",
    name: "Olufemi Joy Oluwamayowa",
    role: "Project Manager",
    image: PLACEHOLDER,
    bio: "Plans and supervises property and investment projects from start to finish — coordinating teams, managing budgets, and handling regulatory requirements. Holds a B.Sc. in Microbiology from Landmark University.",
    socials: {
      x: "https://x.com/",
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];
