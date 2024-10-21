export interface TicketPrice {
  cost: number;
  seatType: string;
  available: boolean;
}

export interface TicketTimeAndPrice {
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
        time: "06:40 PM",
        price: [{ cost: 730, seatType: "Insignia", available: true }],
      },
    ],
  },
  {
    id: 2,
    name: "INOX: Nexus Indore Central Mall, Regal Square",
    time: [
      {
        time: "05:00 PM",
        price: [
          {
            cost: 300,
            seatType: "CLUB",
            available: true,
          },
          {
            cost: 280,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
      {
        time: "10:10 PM",
        price: [
          {
            cost: 330,
            seatType: "CLUB",
            available: true,
          },
          {
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
        time: "05:05 PM",
        price: [
          {
            cost: 400,
            seatType: "Royal Club",
            available: true,
          },
          {
            cost: 380,
            seatType: "Royal",
            available: true,
          },
          {
            cost: 360,
            seatType: "CLUB",
            available: true,
          },
          {
            cost: 340,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
      {
        time: "06:40 PM",
        price: [
          {
            cost: 730,
            seatType: "Insignia",
            available: true,
          },
          {
            cost: 300,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
      {
        time: "10:15 PM",
        price: [
          {
            cost: 430,
            seatType: "Royal Club",
            available: true,
          },
          {
            cost: 410,
            seatType: "Royal",
            available: true,
          },
          {
            cost: 380,
            seatType: "CLUB",
            available: true,
          },
          {
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
        time: "05:00 PM",
        price: [
          {
            cost: 300,
            seatType: "CLUB",
            available: true,
          },
          {
            cost: 280,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
      {
        time: "10:10 PM",
        price: [
          {
            cost: 330,
            seatType: "CLUB",
            available: true,
          },
          {
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
        time: "05:05 PM",
        price: [
          {
            cost: 400,
            seatType: "Royal Club",
            available: true,
          },
          {
            cost: 380,
            seatType: "Royal",
            available: true,
          },
          {
            cost: 360,
            seatType: "CLUB",
            available: true,
          },
          {
            cost: 340,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
      {
        time: "06:40 PM",
        price: [
          {
            cost: 730,
            seatType: "Insignia",
            available: true,
          },
          {
            cost: 300,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
      {
        time: "10:15 PM",
        price: [
          {
            cost: 430,
            seatType: "Royal Club",
            available: true,
          },
          {
            cost: 410,
            seatType: "Royal",
            available: true,
          },
          {
            cost: 380,
            seatType: "CLUB",
            available: true,
          },
          {
            cost: 360,
            seatType: "EXECUTIVE",
            available: true,
          },
        ],
      },
    ],
  },
];
