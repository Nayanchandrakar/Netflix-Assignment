import React from "react"
import { Container, ContentWrapper, hero } from "../FIle/Exporter.js"

const Home = ({ data }) => {
  return (
    <section className="">
      <div className="w-full h-[33rem] overflow-hidden relative flex justify-center items-center">
        <span className="bg-black/[.4] w-full h-full absolute" />
        <img
          src={hero}
          className="w-full object-cover h-full"
          alt=""
        />
        <span
          className="w-full h-[14rem] 
          bg-gradient-to-t from-[#050817] absolute bottom-0"
        />
      </div>
      <ContentWrapper>
        <h2 id="features" className="text-white text-2xl font-bold pb-8 pt-12">
          Featured Movies..
        </h2>

        <div className="w-full h-full flex justify-center items-center">
          <span className=" w-full h-[55rem] absolute bg-gradient-to-b from-transparent via-blue-800/[.4] to-transparent z-20 " />

          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center md:grid-cols-5 gap-8 md:gap-6 z-20 ">
            {data?.map((elem, index) => {
              return <Container {...elem} key={index + 2312} />
            })}
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Home
