export interface SeatKey {
  key: number;
  value: number;
}

export interface Seat {
  id: string;
  left: SeatKey[];
  middle: SeatKey[];
  right: SeatKey[];
}

export const insigniaSeats: Seat[] = [
  {
    id: "X",
    left: [
      { key: 1, value: 1 },
      { key: 2, value: 2 },
      { key: 3, value: 3 },
      { key: 4, value: 4 },
    ],
    middle: [
      { key: 5, value: 5 },
      { key: 6, value: 6 },
      { key: 7, value: 7 },
      { key: 8, value: 8 },
      { key: 9, value: 9 },
      { key: 10, value: 10 },
      { key: 11, value: 11 },
      { key: 12, value: 12 },
      { key: 13, value: 13 },
      { key: 14, value: 14 },
      { key: 15, value: 15 },
      { key: 16, value: 16 },
    ],
    right: [
      { key: 17, value: 17 },
      { key: 18, value: 18 },
      { key: 19, value: 19 },
      { key: 20, value: 20 },
    ],
  },
];

export const royalSeats: Seat[] = [
  {
    id: "A",
    left: [
      { key: 1, value: 1 },
      { key: 2, value: 2 },
      { key: 3, value: 3 },
      { key: 4, value: 4 },
    ],
    middle: [
      { key: 5, value: 5 },
      { key: 6, value: 6 },
      { key: 7, value: 7 },
      { key: 8, value: 8 },
      { key: 9, value: 9 },
      { key: 10, value: 10 },
      { key: 11, value: 11 },
      { key: 12, value: 12 },
      { key: 13, value: 13 },
      { key: 14, value: 14 },
      { key: 15, value: 15 },
      { key: 16, value: 16 },
    ],
    right: [
      { key: 17, value: 17 },
      { key: 18, value: 18 },
      { key: 19, value: 19 },
      { key: 20, value: 20 },
    ],
  },
  {
    id: "B",
    left: [
      { key: 21, value: 1 },
      { key: 22, value: 2 },
      { key: 23, value: 3 },
      { key: 24, value: 4 },
    ],
    middle: [
      { key: 25, value: 5 },
      { key: 26, value: 6 },
      { key: 27, value: 7 },
      { key: 28, value: 8 },
      { key: 29, value: 9 },
      { key: 30, value: 10 },
      { key: 31, value: 11 },
      { key: 32, value: 12 },
      { key: 33, value: 13 },
      { key: 34, value: 14 },
      { key: 35, value: 15 },
      { key: 36, value: 16 },
    ],
    right: [
      { key: 37, value: 17 },
      { key: 38, value: 18 },
      { key: 39, value: 19 },
      { key: 40, value: 20 },
    ],
  },
  {
    id: "C",
    left: [
      { key: 41, value: 1 },
      { key: 42, value: 2 },
      { key: 43, value: 3 },
      { key: 44, value: 4 },
    ],
    middle: [
      { key: 45, value: 5 },
      { key: 46, value: 6 },
      { key: 47, value: 7 },
      { key: 48, value: 8 },
      { key: 49, value: 9 },
      { key: 50, value: 10 },
      { key: 51, value: 11 },
      { key: 52, value: 12 },
      { key: 53, value: 13 },
      { key: 54, value: 14 },
      { key: 55, value: 15 },
      { key: 56, value: 16 },
    ],
    right: [
      { key: 57, value: 17 },
      { key: 58, value: 18 },
      { key: 59, value: 19 },
      { key: 60, value: 20 },
    ],
  },
  {
    id: "D",
    left: [
      { key: 61, value: 1 },
      { key: 62, value: 2 },
      { key: 63, value: 3 },
      { key: 64, value: 4 },
    ],
    middle: [
      { key: 65, value: 5 },
      { key: 66, value: 6 },
      { key: 67, value: 7 },
      { key: 68, value: 8 },
      { key: 69, value: 9 },
      { key: 70, value: 10 },
      { key: 71, value: 11 },
      { key: 72, value: 12 },
      { key: 73, value: 13 },
      { key: 74, value: 14 },
      { key: 75, value: 15 },
      { key: 76, value: 16 },
    ],
    right: [
      { key: 77, value: 17 },
      { key: 78, value: 18 },
      { key: 79, value: 19 },
      { key: 80, value: 20 },
    ],
  },
  {
    id: "E",
    left: [
      { key: 81, value: 1 },
      { key: 82, value: 2 },
      { key: 83, value: 3 },
      { key: 84, value: 4 },
    ],
    middle: [
      { key: 85, value: 5 },
      { key: 86, value: 6 },
      { key: 87, value: 7 },
      { key: 88, value: 8 },
      { key: 89, value: 9 },
      { key: 90, value: 10 },
      { key: 91, value: 11 },
      { key: 92, value: 12 },
      { key: 93, value: 13 },
      { key: 94, value: 14 },
      { key: 95, value: 15 },
      { key: 96, value: 16 },
    ],
    right: [
      { key: 97, value: 17 },
      { key: 98, value: 18 },
      { key: 99, value: 19 },
      { key: 100, value: 20 },
    ],
  },
  {
    id: "F",
    left: [],
    middle: [
      { key: 101, value: 5 },
      { key: 102, value: 6 },
      { key: 103, value: 7 },
      { key: 104, value: 8 },
      { key: 105, value: 9 },
      { key: 106, value: 10 },
      { key: 107, value: 11 },
      { key: 108, value: 12 },
      { key: 109, value: 13 },
      { key: 110, value: 14 },
      { key: 111, value: 15 },
      { key: 112, value: 16 },
    ],
    right: [
      { key: 113, value: 17 },
      { key: 114, value: 18 },
      { key: 115, value: 19 },
      { key: 116, value: 20 },
    ],
  },
  {
    id: "G",
    left: [],
    middle: [
      { key: 117, value: 5 },
      { key: 118, value: 6 },
      { key: 119, value: 7 },
      { key: 120, value: 8 },
      { key: 121, value: 9 },
      { key: 122, value: 10 },
      { key: 123, value: 11 },
      { key: 124, value: 12 },
      { key: 125, value: 13 },
      { key: 126, value: 14 },
      { key: 127, value: 15 },
      { key: 128, value: 16 },
    ],
    right: [
      { key: 129, value: 17 },
      { key: 130, value: 18 },
      { key: 131, value: 19 },
      { key: 132, value: 20 },
    ],
  },
];

export const clubSeats: Seat[] = [
  {
    id: "H",
    left: [],
    middle: [
      { key: 133, value: 5 },
      { key: 134, value: 6 },
      { key: 135, value: 7 },
      { key: 136, value: 8 },
      { key: 137, value: 9 },
      { key: 138, value: 10 },
      { key: 139, value: 11 },
      { key: 140, value: 12 },
      { key: 141, value: 13 },
      { key: 142, value: 14 },
      { key: 143, value: 15 },
      { key: 144, value: 16 },
    ],
    right: [
      { key: 145, value: 17 },
      { key: 146, value: 18 },
      { key: 147, value: 19 },
      { key: 148, value: 20 },
    ],
  },
  {
    id: "I",
    left: [],
    middle: [
      { key: 149, value: 5 },
      { key: 150, value: 6 },
      { key: 151, value: 7 },
      { key: 152, value: 8 },
      { key: 153, value: 9 },
      { key: 154, value: 10 },
      { key: 155, value: 11 },
      { key: 156, value: 12 },
      { key: 157, value: 13 },
      { key: 158, value: 14 },
      { key: 159, value: 15 },
      { key: 160, value: 16 },
    ],
    right: [
      { key: 161, value: 17 },
      { key: 162, value: 18 },
      { key: 163, value: 19 },
      { key: 164, value: 20 },
    ],
  },
  {
    id: "J",
    left: [],
    middle: [
      { key: 165, value: 5 },
      { key: 166, value: 6 },
      { key: 167, value: 7 },
      { key: 168, value: 8 },
      { key: 169, value: 9 },
      { key: 170, value: 10 },
      { key: 171, value: 11 },
      { key: 172, value: 12 },
      { key: 173, value: 13 },
      { key: 174, value: 14 },
      { key: 175, value: 15 },
      { key: 176, value: 16 },
    ],
    right: [
      { key: 177, value: 17 },
      { key: 178, value: 18 },
      { key: 179, value: 19 },
      { key: 180, value: 20 },
    ],
  },
  {
    id: "K",
    left: [],
    middle: [],
    right: [
      { key: 181, value: 17 },
      { key: 182, value: 18 },
      { key: 183, value: 19 },
      { key: 184, value: 20 },
    ],
  },
  {
    id: "L",
    left: [
      { key: 185, value: 1 },
      { key: 186, value: 2 },
      { key: 187, value: 3 },
      { key: 188, value: 4 },
    ],
    middle: [
      { key: 189, value: 5 },
      { key: 190, value: 6 },
      { key: 191, value: 7 },
      { key: 192, value: 8 },
      { key: 193, value: 9 },
      { key: 194, value: 10 },
      { key: 195, value: 11 },
      { key: 196, value: 12 },
      { key: 197, value: 13 },
      { key: 198, value: 14 },
      { key: 199, value: 15 },
      { key: 200, value: 16 },
    ],
    right: [
      { key: 201, value: 17 },
      { key: 202, value: 18 },
      { key: 203, value: 19 },
      { key: 204, value: 20 },
    ],
  },
  {
    id: "M",
    left: [
      { key: 205, value: 1 },
      { key: 206, value: 2 },
      { key: 207, value: 3 },
      { key: 208, value: 4 },
    ],
    middle: [
      { key: 209, value: 5 },
      { key: 210, value: 6 },
      { key: 211, value: 7 },
      { key: 212, value: 8 },
      { key: 213, value: 9 },
      { key: 214, value: 10 },
      { key: 215, value: 11 },
      { key: 216, value: 12 },
      { key: 217, value: 13 },
      { key: 218, value: 14 },
      { key: 219, value: 15 },
      { key: 220, value: 16 },
    ],
    right: [
      { key: 221, value: 17 },
      { key: 222, value: 18 },
      { key: 223, value: 19 },
      { key: 224, value: 20 },
    ],
  },
];

export const executiveSeats: Seat[] = [
  {
    id: "N",
    left: [
      { key: 225, value: 1 },
      { key: 226, value: 2 },
      { key: 227, value: 3 },
      { key: 228, value: 4 },
    ],
    middle: [
      { key: 229, value: 5 },
      { key: 230, value: 6 },
      { key: 231, value: 7 },
      { key: 232, value: 8 },
      { key: 233, value: 9 },
      { key: 234, value: 10 },
      { key: 235, value: 11 },
      { key: 236, value: 12 },
      { key: 237, value: 13 },
      { key: 238, value: 14 },
      { key: 239, value: 15 },
      { key: 240, value: 16 },
    ],
    right: [
      { key: 241, value: 17 },
      { key: 242, value: 18 },
      { key: 243, value: 19 },
      { key: 244, value: 20 },
    ],
  },
  {
    id: "O",
    left: [
      { key: 245, value: 1 },
      { key: 246, value: 2 },
      { key: 247, value: 3 },
      { key: 248, value: 4 },
    ],
    middle: [
      { key: 249, value: 5 },
      { key: 250, value: 6 },
      { key: 251, value: 7 },
      { key: 252, value: 8 },
      { key: 253, value: 9 },
      { key: 254, value: 10 },
      { key: 255, value: 11 },
      { key: 256, value: 12 },
      { key: 257, value: 13 },
      { key: 258, value: 14 },
      { key: 259, value: 15 },
      { key: 260, value: 16 },
    ],
    right: [
      { key: 261, value: 17 },
      { key: 262, value: 18 },
      { key: 263, value: 19 },
      { key: 264, value: 20 },
    ],
  },
];
