import { useDashboardStore } from "./store/dashboardStore"

function App() {
  const filteredData = useDashboardStore((state) => state.filteredData())

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Sales Dashboard
      </h1>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Sales Records</h2>

        {filteredData.map((sale) => (
          <div key={sale.id} className="border-b py-2">
            {sale.product} - {sale.region} - ${sale.amount}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App