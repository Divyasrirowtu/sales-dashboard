import { create } from "zustand"
import { salesData, Sale } from "../data/salesData"

type Filters = {
  region?: string
  category?: string
  startDate?: string
  endDate?: string
}

type DashboardState = {
  data: Sale[]
  filters: Filters
  setRegion: (region?: string) => void
  setCategory: (category?: string) => void
  setDateRange: (start?: string, end?: string) => void
  resetFilters: () => void
  filteredData: () => Sale[]
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  data: salesData,

  filters: {},

  setRegion: (region) =>
    set((state) => ({
      filters: { ...state.filters, region },
    })),

  setCategory: (category) =>
    set((state) => ({
      filters: { ...state.filters, category },
    })),

  setDateRange: (startDate, endDate) =>
    set((state) => ({
      filters: { ...state.filters, startDate, endDate },
    })),

  resetFilters: () => set({ filters: {} }),

  filteredData: () => {
    const { data, filters } = get()

    return data.filter((sale) => {
      const matchRegion =
        !filters.region || sale.region === filters.region

      const matchCategory =
        !filters.category || sale.category === filters.category

      const matchStart =
        !filters.startDate ||
        new Date(sale.date) >= new Date(filters.startDate)

      const matchEnd =
        !filters.endDate ||
        new Date(sale.date) <= new Date(filters.endDate)

      return matchRegion && matchCategory && matchStart && matchEnd
    })
  },
}))