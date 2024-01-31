import bgImg from "../../assets/backgrounds/looperbg.svg";

const AuthTemplate = (props) => {
  return (
    <div className="h-screen w-full overflow-hidden relative flex justify-center items-center  bg-black ">
      <div className="absolute w-[600px] h-[600px] lg:h-[165%] lg:w-[130%] -top-[30%] lg:-top-[50%]  -left-[10%]   rotate-[-30.23deg]  scale-x-[-1]">
        <img src={bgImg} className="overflow-hidden max-w-full max-h-full" alt="bg" />
      </div>

      <div className="absolute w-[600px] h-[800px] -bottom-[50%] lg:-bottom-[85%]  -left-[30%] lg:-left-[20%]  lg:h-[145%] lg:w-[120%] rotate-[30deg] opacity-80">
        <img src={bgImg} className="overflow-hidden  max-w-full max-h-full " alt="bg" />
      </div>

      <section className="bg-black  z-10 bg-opacity-80 w-full h-full flex justify-center items-center">
        <aside className="mx-auto w-min flex flex-col gap-6 -mt-16">
          <div className="text-6xl font-semibold font-['Poppins'] gradient-text ">Accelno</div>
          <p className="text-zinc-500 w-[440px] leading-relaxed text-justify text-lg font-['Poppins']">
            In the world of numbers, where fortunes rise and fall, Where markets dance to time's
            unyielding call. In ledgers and graphs, stories are told, Of ventures bold, and silver
            and gold.
          </p>
        </aside>
      </section>
    </div>
  );
};

export default AuthTemplate;
