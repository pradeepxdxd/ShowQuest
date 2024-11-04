export interface Order {
  userId: string;
  createdAt?: string;
  food_beverage: number;
  seat: string;
  show_name: string;
  theater: string;
  ticket_price: number;
  total_paid: number;
}

export interface OrderLists {
  id?: string;
  createdAt?: string;
  food_beverage: number;
  seat: string;
  show_name: string;
  theater: string;
  ticket_price: number;
  total_paid: number;
}

export type Role = "USER" | "ADMIN";

export interface ResponseUser {
  id?: string;
  name: string;
  email: string;
  photo?: string;
  role: Role;
  createdAt?: string;
}

export interface Show {
  title: string;
  rating: number;
  votes?: number;
  genre?: string[];
  type: string;
  image?: null | string;
}

export interface ShowResponse {
  id: string;
  title: string;
  rating: number;
  votes?: number;
  genre?: string[];
  type: string;
  image?: null | string;
}
