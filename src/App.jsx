import React, { useEffect, useState, lazy, Suspense } from "react"
import { Header, Home, fetchData } from "./FIle/Exporter.js"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  const [data, setdata] = useState([])

  const Details = lazy(() => import("./pages/Details"))

  const callApi = async () => {
    const data = await fetchData()
    setdata(data)
  }

  useEffect(() => {
    callApi()
  }, [])

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <header className=" bg-black text-white sticky top-0 z-30 border-b-[1px] border-gray-800">
          <Header />
        </header>
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/details/:id" element={<Details data={data} />} />
          </Routes>
        </main>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
