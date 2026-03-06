import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"

import { useDashboardStore } from "../store/dashboardStore"

function SalesTrendChart() {

  const data = useDashboardStore((state) => state.filteredData())

  // convert dataset for chart
  const chartData = data.map((sale) => ({
    date: sale.date,
    revenue: sale.amount
  }))

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="font-semibold mb-4">Sales Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default SalesTrendChart