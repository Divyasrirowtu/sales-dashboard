export type Sale = {
  id: number
  product: string
  category: string
  region: string
  amount: number
  date: string
}

export const salesData: Sale[] = [
  { id: 1, product: "Laptop", category: "Electronics", region: "North", amount: 1200, date: "2024-01-10" },
  { id: 2, product: "Phone", category: "Electronics", region: "South", amount: 800, date: "2024-01-15" },
  { id: 3, product: "Table", category: "Furniture", region: "East", amount: 400, date: "2024-02-05" },
  { id: 4, product: "Chair", category: "Furniture", region: "West", amount: 150, date: "2024-02-12" },
  { id: 5, product: "Headphones", category: "Electronics", region: "North", amount: 200, date: "2024-03-01" },
  { id: 6, product: "Monitor", category: "Electronics", region: "South", amount: 300, date: "2024-03-10" },
  { id: 7, product: "Desk", category: "Furniture", region: "East", amount: 500, date: "2024-03-20" },
  { id: 8, product: "Keyboard", category: "Electronics", region: "West", amount: 100, date: "2024-04-05" },
]