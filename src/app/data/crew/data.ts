export interface Crew {
  id: number;
  name: string;
  image: string;
  role: string;
}

export const crewData: Crew[] = [
  {
    id: 1,
    name: "T.J. Gnanavel",
    image:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tj-gnanavel-2013773-1727921323.jpg",
    role: "Director",
  },
  {
    id: 2,
    name: "A. Subaskaran",
    image:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/a-subaskaran-1080445-14-08-2018-11-47-43.jpg",
    role: "Producer",
  },
  {
    id: 3,
    name: "Anirudh Ravichander",
    image:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anirudh-ravichander-34897-24-03-2017-13-54-49.jpg",
    role: "Musician",
  },
  {
    id: 4,
    name: "S. R. Kathiir",
    image:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/s.-r.-kathiir-iein016753-24-03-2017-15-39-11.jpg",
    role: "Cinematographer",
  },
  {
    id: 5,
    name: "Philomin Raj",
    image:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/philomin-raj-2017575-1665748194.jpg",
    role: "Editor",
  },
];
