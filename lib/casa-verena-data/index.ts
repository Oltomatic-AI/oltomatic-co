// Casa Verena demo data — shared types and helpers.
// Loads fictional product/order data for the Vapi demo agent webhooks.
// Mock data only — no real customer information lives here.

import productsData from "./products.json";
import ordersData from "./orders.json";

export type StockStatus = "in_stock" | "low" | "out_of_stock";

export type Product = {
  sku: string;
  name: string;
  category: string;
  price: number;
  stock: StockStatus;
  stock_quantity: number;
  description: string;
};

export type CustomerType = "consumer" | "promotora";

export type OrderItem = {
  sku: string;
  quantity: number;
};

export type Order = {
  order_number: string;
  customer_type: CustomerType;
  customer_name: string;
  items: OrderItem[];
  total: number;
  status: string;
  status_es: string;
  eta_es: string;
  carrier: string | null;
  tracking_number: string | null;
  shipping_city: string;
  ordered_date: string;
  notes?: string;
};

export const products: Product[] = productsData.products as Product[];
export const orders: Order[] = ordersData.orders as Order[];

// Format COP with thousands separator using dot (Colombian convention)
export function formatCOP(amount: number): string {
  return `$${amount.toLocaleString("es-CO")}`;
}

// Translate stock status to Spanish for agent responses
export function stockLabel(status: StockStatus): string {
  switch (status) {
    case "in_stock": return "Disponible";
    case "low": return "Pocas unidades";
    case "out_of_stock": return "Agotado";
  }
}

// Normalised search — strips accents, lowercases, for fuzzy product matching
export function normalise(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}
