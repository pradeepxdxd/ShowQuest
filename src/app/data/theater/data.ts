export interface TicketPrice {
  id: number;
  cost: number;
  seatType: string;
  available: boolean;
}

export interface TicketTimeAndPrice {
  id: number;
  time: string;
  price: TicketPrice[];
}

export interface Theater {
  name: string;
  id: number;
  time: TicketTimeAndPrice[];
}

export const theaterData: Theater[] = [
  {
    id: 1,
    name: "INOX: C-21 Mall",
    time: [
      {
        id: 1,
        time: "06:40 PM",
        price: [
          { id: 1, cost: 730, seatType: "Insignia", available: true },
          { id: 2, cost: 530, seatType: "Royal", available: true }
        ],
      },
    ],
  },
  {
    id: 2,
    name: "INOX: Nexus Indore Central Mall, Regal Square",
    time: [
      {
        id: 1,
        time: "05:00 PM",
        price: [
          {
            id: 1,
            cost: 300,
            seatType: "CLUB",
            available: true,
          },
          {
            id: 2,
            cost: 280,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
      {
        id: 2,
        time: "10:10 PM",
        price: [
          {
            id: 1,
            cost: 330,
            seatType: "CLUB",
            available: true,
          },
          {
            id: 2,
            cost: 300,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "INOX: Phoenix Citadel Mall, Indore",
    time: [
      {
        id: 1,
        time: "05:05 PM",
        price: [
          {
            id: 1,
            cost: 400,
            seatType: "Royal Club",
            available: true,
          },
          {
            id: 2,
            cost: 380,
            seatType: "Royal",
            available: true,
          },
          {
            id: 3,
            cost: 360,
            seatType: "CLUB",
            available: true,
          },
          {
            id: 4,
            cost: 340,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
      {
        id: 2,
        time: "06:40 PM",
        price: [
          {
            id: 1,
            cost: 730,
            seatType: "Insignia",
            available: true,
          },
          {
            id: 2,
            cost: 300,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
      {
        id: 3,
        time: "10:15 PM",
        price: [
          {
            id: 1,
            cost: 430,
            seatType: "Royal Club",
            available: true,
          },
          {
            id: 2,
            cost: 410,
            seatType: "Royal",
            available: true,
          },
          {
            id: 3,
            cost: 380,
            seatType: "CLUB",
            available: true,
          },
          {
            id: 4,
            cost: 360,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "PVR: Treasure Island Mall, Indore",
    time: [
      {
        id: 1,
        time: "05:00 PM",
        price: [
          {
            id: 1,
            cost: 300,
            seatType: "CLUB",
            available: true,
          },
          {
            id: 2,
            cost: 280,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
      {
        id: 2,
        time: "10:10 PM",
        price: [
          {
            id: 1,
            cost: 330,
            seatType: "CLUB",
            available: true,
          },
          {
            id: 2,
            cost: 300,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Velocity III: Miraj Cinemas, Indore",
    time: [
      {
        id: 1,
        time: "05:05 PM",
        price: [
          {
            id: 1,
            cost: 400,
            seatType: "Royal Club",
            available: true,
          },
          {
            id: 2,
            cost: 380,
            seatType: "Royal",
            available: true,
          },
          {
            id: 3,
            cost: 360,
            seatType: "CLUB",
            available: true,
          },
          {
            id: 4,
            cost: 340,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
      {
        id: 2,
        time: "06:40 PM",
        price: [
          {
            id: 1,
            cost: 730,
            seatType: "Insignia",
            available: true,
          },
          {
            id: 2,
            cost: 300,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
      {
        id: 3,
        time: "10:15 PM",
        price: [
          {
            id: 1,
            cost: 430,
            seatType: "Royal Club",
            available: true,
          },
          {
            id: 2,
            cost: 410,
            seatType: "Royal",
            available: true,
          },
          {
            id: 3,
            cost: 380,
            seatType: "CLUB",
            available: true,
          },
          {
            id: 4,
            cost: 360,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
    ],
  },
];
