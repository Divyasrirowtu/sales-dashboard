import { useDashboardStore } from "../store/dashboardStore"

function KPICards() {
  const data = useDashboardStore((state) => state.filteredData())

  const totalRevenue = data.reduce((sum, sale) => sum + sale.amount, 0)

  const totalSales = data.length

  const uniqueProducts = new Set(data.map((s) => s.product)).size

  const regions = new Set(data.map((s) => s.region)).size

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-gray-500">Total Revenue</h3>
        <p className="text-2xl font-bold">${totalRevenue}</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-gray-500">Total Sales</h3>
        <p className="text-2xl font-bold">{totalSales}</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-gray-500">Products</h3>
        <p className="text-2xl font-bold">{uniqueProducts}</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-gray-500">Regions</h3>
        <p className="text-2xl font-bold">{regions}</p>
      </div>

    </div>
  )
}

export default KPICards