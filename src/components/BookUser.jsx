import { useState, useEffect } from "react"
import { close } from "../FIle/Exporter.js"

const BookUser = ({ maindata, setopen }) => {
  const [screen, setscreen] = useState(false)
  const [task, setTask] = useState([])
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (localStorage.getItem("BookedTickets")) {
      const storedList = JSON.parse(localStorage.getItem("BookedTickets"))
      setTasks(storedList)
    }
  }, [])

  setTimeout(() => {
    setscreen(true)
  }, 300)

  const handleclose = () => {
    setscreen(false), setopen(false)
  }

  const handleform = (e) => {
    e.preventDefault()
    const Name = e.target[0].value
    const Ticket = e.target[1].value

    const newTask = {
      id: new Date().getTime().toString(),
      movieName: maindata?.name,
      Ended: maindata?.ended,
      language: maindata?.language,
      runtime: maindata?.averageRuntime,
      premierein: maindata?.premiered || "No data",
      rating: maindata?.rating?.average || "No data",
      name: Name,
      NoofTickets: Ticket,
    }
    setTasks([...tasks, newTask])
    localStorage.setItem("BookedTickets", JSON.stringify([...tasks, newTask]))
    setTask([])

    window.alert("Ticket Booked Succefully")
    setscreen(false), setopen(false)
  }

  return (
    <div className="w-full transition-color h-full fixed top-0 flex justify-center items-center">
      <div
        className={`bg-white w-[30rem] p-6 rounded-xl
                transition-all ${
                  screen ? "translate-y-0" : "translate-y-[40rem]"
                } shadow-2xl shadow-black`}
      >
        <div className="flex justify-between pb-2 items-center border-b border-b-gray-300/[.7]">
          <img
            src={close}
            onClick={handleclose}
            className="w-4 h-4 cursor-pointer"
            alt=""
          />
          <span className="text-base font-semibold">Book Ticket Now!</span>
          <span />
        </div>
        <div className="mt-3 flex gap-4 flex-col">
          <span className="text-sm text-gray-500">
            Movie name: {maindata?.name}
            <strong></strong>
          </span>

          <span className="text-gray-600 text-sm">
            Ended: <strong className="text-pink-700">{maindata?.ended}</strong>
          </span>

          <span className="text-gray-600 text-sm">
            Language:{" "}
            <strong className="text-red-700">{maindata?.language}</strong>
          </span>

          <span className="text-gray-600 text-sm">
            Runtime:{" "}
            <strong className="text-green-700">
              {maindata?.averageRuntime} minutes
            </strong>
          </span>

          <span className="text-gray-600 text-sm">
            premieredin:{" "}
            <strong className="text-sky-500">
              {maindata?.premiered || "No data"}{" "}
            </strong>
          </span>

          <span className="text-gray-600 text-sm">
            Rating:{" "}
            <strong className="text-yellow-500">
              {maindata?.rating?.average || "No data"} ⭐
            </strong>
          </span>

          <form
            onSubmit={handleform}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex gap-2 flex-row items-center w-full">
              <label className="text-sm text-gray-500">Name:</label>
              <input
                name="name"
                placeholder="Enter your Name"
                className="p-1 border-gray-500 border rounded-lg w-full placeholder:text-sm"
                required={true}
                type="text"
              />
            </div>

            <div className="flex gap-2 flex-row items-center w-full">
              <label className="text-sm text-gray-500">tickets:</label>
              <input
                name="ticket"
                placeholder="No. of tickets"
                className="p-1 border-gray-500 border rounded-lg w-full placeholder:text-sm"
                required={true}
                type="number"
              />
            </div>

            <button className="px-4 py-2 bg-pink-600 w-full rounded-lg text-white font-bold text-sm cursor-pointer">
              Book Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookUser
