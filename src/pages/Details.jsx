import React, { useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import {
  BookUser,
  Container,
  ContentWrapper,
  filterdata,
  noimage,
} from "../FIle/Exporter.js"

const Details = ({ data }) => {
  const { id } = useParams()
  const [open, setopen] = useState(false)
  let Detailsdata = filterdata(id, data)
  const maindata = Detailsdata[0]?.show

  const removeCurrentData = data.filter((elem) => {
    if (elem?.show?.id !== Number(id)) {
      return elem?.show?.id
    }
  })

  return (
    <ContentWrapper>
      <div className="pt-14 w-full  h-full">
        <div className="grid grid-rows-1 md:grid-cols-30/70  gap-5 h-full w-full ">
          <div className="w-full h-full flex justify-center items-center">
            <img
              className="rounded-xl w-[20rem] h-full object-cover"
              src={maindata?.image?.original || noimage}
              alt=""
            />
          </div>
          <div className="text-white flex gap-3 flex-col">
            <h3 className="text-2xl font-bold">{maindata?.name}</h3>
            <span className="text-gray-400 text-sm">
              Ended:{" "}
              <strong className="text-pink-700">{maindata?.ended}</strong>
            </span>

            <span className="text-gray-400 text-sm">
              Language:{" "}
              <strong className="text-red-700">{maindata?.language}</strong>
            </span>

            <span className="text-gray-400 text-sm">
              Runtime:{" "}
              <strong className="text-green-700">
                {maindata?.averageRuntime} minutes
              </strong>
            </span>

            <span className="text-gray-400 text-sm">
              ChannelName:{" "}
              <strong className="text-yellow-500">
                {maindata?.network?.name}{" "}
                {maindata?.network?.country?.code || "Empty"}
              </strong>
            </span>

            <span className="text-gray-400 text-sm">
              premieredin:{" "}
              <strong className="text-sky-500">{maindata?.premiered} </strong>
            </span>
            <p
              className="text-gray-400"
              dangerouslySetInnerHTML={{ __html: maindata?.summary }}
            ></p>
            <div className="flex flex-row gap-3">
              <span className="text-gray-400 text-sm">
                Status:{" "}
                <strong className="text-red-500">{maindata?.status}</strong>
              </span>

              <span className="text-gray-400 text-sm">
                Rating:{" "}
                <strong className="text-yellow-300">
                  {maindata?.rating?.average} ⭐
                </strong>
              </span>
              <NavLink
                className="text-sm text-teal-400"
                to={maindata?.officialSite}
                target="_blanck"
              >
                officialSite
              </NavLink>
            </div>
            <NavLink
              className="px-4 py-2 bg-pink-600 w-fit rounded-lg text-sm cursor-pointer"
              onClick={() => setopen(true)}
            >
              Book Now
            </NavLink>
          </div>
        </div>
      </div>

      <h4 className="mt-[4rem] md:mt-[8rem] text-white text-2xl font-bold mb-[2rem]">
        Trending Now..
      </h4>

      <div className="flex flex-row gap-6 overflow-x-scroll">
        {removeCurrentData?.map((elem, index) => {
          return (
            <div className="w-full sm:min-w-[17rem]">
              <Container {...elem} key={Number(index) + 6234} />
            </div>
          )
        })}
      </div>
      {open ? (
        <div className="w-full h-full flex justify-center items-center">
          <BookUser maindata={maindata} setopen={setopen} />
        </div>
      ) : null}
    </ContentWrapper>
  )
}

export default Details
