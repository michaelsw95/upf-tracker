import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col dark:bg-gray-950 dark:text-white">
      <main className="flex-1 mx-auto w-full max-w-md px-4 py-6 pb-24">
        <h1 className="text-2xl font-semibold mb-6">Scan</h1>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 border-t bg-white dark:bg-gray-950 dark:text-white">
        <div className="mx-auto max-w-md flex justify-around py-3">
          <button className="flex flex-col items-center text-sm">
            <span>Scan</span>
          </button>

          <button className="flex flex-col items-center text-sm">
            <span>History</span>
          </button>

          <button className="flex flex-col items-center text-sm">
            <span>Insights</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default App
