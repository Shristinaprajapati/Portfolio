export default function Home() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-white"
    >
      <div className="relative w-[98%] h-[96vh] max-w-[1600px] overflow-hidden rounded-[20px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-[20px] blur-lg scale-105"
          style={{
            backgroundImage: "url('/Images/bg-top.jpg')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 rounded-[20px]"></div>

        {/* Foreground Text */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-8 py-16 h-full">
          <h1
            className="text-[1.5rem] md:text-[4rem] font-light leading-tight tracking-tight text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
             <span className="font-normal text-white">Shristina Prajapati</span>
          </h1>

          <p
            className="mt-4 text-lg md:text-1xl font-extralight text-gray-200 max-w-3xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Software Developer | Designer & WordPress Developer
          </p>
        </div>

        {/* Bottom-left note */}
        <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md text-sm md:text-base text-white px-4 py-2 rounded-full shadow-md font-light tracking-wide">
          ✨ Passion for clean design
        </div>

        {/* Bottom-right note */}
        <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md text-sm md:text-base text-white px-4 py-2 rounded-full shadow-md font-light tracking-wide">
          💻 Always learning
        </div>
      </div>
    </section>
  );
}
