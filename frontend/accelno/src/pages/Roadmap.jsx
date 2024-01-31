import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Roadmap = () => {
  const [selected, setSelected] = useState(true);
  return (
    <section className=" min-h-screen w-screen bg-darkGrey  px-8 py-3">
      <aside className="w-min">
        <p className="gradient-text text-4xl font-medium font-['Poppins'] w-full  ">Accelno</p>
      </aside>

      <aside className="w-fit mx-auto flex flex-col mt-4 lg:mt-0">
        <p className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] w-full  ">
          Finance Is Becoming Faster
        </p>
        <p className="text-neutral-400 font-poppins text-lg w-full text-center">
          We’re making sure of it
        </p>
      </aside>

      <section>
        <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] mt-20 mb-6">
          Our Roadmap
        </div>

        <aside className="w-full flex gap-20">
          {/* left section */}
          <article className="w-1/2 flex flex-col gap-8">
            <h1 className="gradient-text w-min text-2xl md:text-3xl lg:text-4xl font-semibold font-['Poppins'] py-6">
              Valuation
            </h1>
            <aside className="text-white text-2xl md:text-3xl font-bold font-['Poppins'] ">
              <h2> DCF Automation - Public Companies</h2>
              <div className="w-full ml-16 flex flex-col gap-2 mt-3 text-2xl">
                <h3
                  className={`text-white -ml-10 font-normal font-['Poppins']  flex items-center gap-3 ${
                    selected && "text-blue-500"
                  }`}
                >
                  {selected && (
                    <span className="w-4 h-4 rounded bg-indigo-700 flex items-center justify-center rotate-90">
                      <IoIosArrowUp className="text-white" />
                    </span>
                  )}
                  Private Companies
                </h3>
                <h3 className="text-white  font-normal font-['Poppins']">Private Companies</h3>
                <h3 className="text-white  font-normal font-['Poppins']">Private Companies</h3>
              </div>
            </aside>

            <aside className="text-white text-2xl md:text-3xl font-bold font-['Poppins'] ">
              <h2> More Financial Models</h2>
              <div className="w-full ml-16 flex flex-col gap-2 mt-3 text-2xl">
                <h3 className="text-white  font-normal font-['Poppins']">Private Companies</h3>
                <h3 className="text-white  font-normal font-['Poppins']">Private Companies</h3>
              </div>
            </aside>

            <aside className="text-white text-2xl md:text-3xl font-bold font-['Poppins'] ">
              <h2>Built-In Training</h2>
            </aside>
          </article>
          {/* right */}
          <article className="w-1/2 flex flex-col gap-8">
            <h1 className="gradient-text w-min text-2xl md:text-3xl lg:text-4xl font-semibold font-['Poppins'] py-6">
              Valuation
            </h1>
            <aside className="text-white text-3xl font-bold font-['Poppins'] ">
              <h2> DCF Automation - Public Companies</h2>
              <div className="w-full ml-16 flex flex-col gap-2 mt-3 text-2xl">
                <h3
                  className={`text-white -ml-10 font-normal font-['Poppins']  flex items-center gap-3 ${
                    selected && "text-blue-500"
                  }`}
                >
                  {selected && (
                    <span className="w-4 h-4 rounded bg-indigo-700 flex items-center justify-center rotate-90">
                      <IoIosArrowUp className="text-white" />
                    </span>
                  )}
                  Private Companies
                </h3>
                <h3 className="text-white  font-normal font-['Poppins']">Private Companies</h3>
                <h3 className="text-white  font-normal font-['Poppins']">Private Companies</h3>
              </div>
            </aside>

            <aside className="text-white text-3xl font-bold font-['Poppins'] ">
              <h2> More Financial Models</h2>
              <div className="w-full ml-16 flex flex-col gap-2 mt-3 text-2xl">
                <h3 className="text-white  font-normal font-['Poppins']">Private Companies</h3>
                <h3 className="text-white  font-normal font-['Poppins']">Private Companies</h3>
              </div>
            </aside>

            <aside className="text-white text-3xl font-bold font-['Poppins'] ">
              <h2>Built-In Training</h2>
            </aside>
          </article>
        </aside>
      </section>
    </section>
  );
};

export default Roadmap;
