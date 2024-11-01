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
