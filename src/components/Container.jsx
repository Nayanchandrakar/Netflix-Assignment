import React from "react"
import { NavLink } from "react-router-dom"
import {noimage} from '../FIle/Exporter.js'

const Container = ({ score, show }) => {
  const { image, name, language, genres, rating, id } = show

  return (
    <div className="text-white bg-white/[.1] backdrop-blur-4xl w-full  h-[30rem] rounded-xl p-4">
      <div className="flex justify-center items-center sm:w-full w-[20rem]  h-[75%]">
        <img
          className="sm:w-fit w-[20rem] h-full object-cover rounded-xl"
          src={image?.medium || noimage}
          alt={image?.medium}
        />
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <span className="text-xl text-white font-bold">{name}</span>
        <span className="text-sm font-semibold text-gray-400">
          rating:{" "}
          {rating?.average ? (
            <strong className="text-yellow-300">{rating?.average} ⭐</strong>
          ) : (
            "No rating"
          )}
        </span>
        <NavLink
          to={`/details/${id}`}
          className="w-fit flex flex-row items-center  p-1 rounded-md bg-pink-600"
        >
          Summary
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </NavLink>
      </div>
    </div>
  )
}

export default Container
