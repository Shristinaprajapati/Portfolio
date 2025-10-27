import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Law Firm Management System",
      desc: "Automated legal document system with booking and reminder features.",
      year: "2025",
      tag: "MERN Stack",
      image: "/Images/legaljustice-dashboard.png",
      github: "https://github.com/Shristinaprajapati/LegalJustice",
      live: "https://legal-justice-phi.vercel.app/main",
    },
    {
      title: "Design Projects",
      desc: "UI/UX design projects and Figma concepts for clients.",
      year: "2024",
      tag: "UI/UX Design",
      navigateTo: "/design-projects",
      image: "/Images/figma-2.png",
    },
    {
      title: "WordPress Client Websites",
      desc: "Business websites and blogs built using Elementor and WordPress CMS.",
      year: "2024",
      tag: "WordPress",
      navigateTo: "/wordpress-projects",
      image: "/Images/wordpress-bg.png",
    },
    //  {
    //   title: "Course Managemnet System",
    //   desc: "Business websites and blogs built using Elementor and WordPress CMS.",
    //   year: "2024",
    //   tag: "WordPress",
    //   navigateTo: "/wordpress-projects",
    //   image: "/Images/wordpress-bg.png",
    // },
  
  ];

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  // Text scroll animation
  const yText = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", `-${(projects.length - 10) * 20}%`]
  );

  // Automatically select based on scroll position
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      const index = Math.round(v * (projects.length - 1));
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [smoothProgress, projects.length]);

  const handleImageClick = (project) => {
    if (project.navigateTo) navigate(project.navigateTo);
    else if (project.live) window.open(project.live, "_blank");
  };

  const handleTitleClick = (project) => {
    if (project.github) window.open(project.github, "_blank");
    else if (project.navigateTo) navigate(project.navigateTo);
  };

 
  const displayedIndex = hoveredIndex ?? activeIndex;

  return (
    <section className="relative w-full bg-white py-10 px-4">
      <div
        ref={containerRef}
        style={{ height: `${(projects.length - 1) * 100}vh` }}
        className="relative w-full max-w-[95%] mx-auto"
      >
        {/* Sticky Section */}
        <div className="sticky top-0 h-screen bg-[#f6f8fb] text-gray-900 rounded-[1.5rem] px-6 lg:px-12 py-16 flex flex-col lg:flex-row overflow-hidden shadow-lg border border-gray-100">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 py-10 overflow-hidden">
            <h2 className="text-sm font-medium text-gray-400 mb-10 uppercase tracking-widest">
              Featured Work
            </h2>

            <div className="relative h-[60vh] overflow-hidden">
              <motion.div
                style={{ y: yText }}
                className="flex flex-col space-y-14 will-change-transform"
              >
                {projects.map((project, i) => (
                  <motion.div
                    key={i}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    animate={{
                      x: displayedIndex === i ? 15 : 0,
                      opacity: displayedIndex === i ? 1 : 0.55,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="cursor-pointer"
                  >
                    <div
                      className="flex items-end gap-3"
                      onClick={() => handleTitleClick(project)}
                    >
                      <h3
                        className={`text-[1.9rem] md:text-[2.1rem] font-light leading-none hover:text-black transition ${
                          displayedIndex === i ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 mt-3 max-w-md leading-relaxed">
                      {project.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

<div className="hidden lg:flex w-1/2 items-center justify-center relative overflow-hidden">
  <motion.div
    style={{
      y: useTransform(
        smoothProgress,
        [0, 1],
        ["0%", `-${(projects.length - 1) * 20}%`]
      ),
    }}
    className="flex flex-col items-center gap-4"
  >
    {projects.map((project, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.02 }}
        className={`relative w-[85%] h-[55%] rounded-xl overflow-hidden cursor-pointer border`}
        style={{
          paddingTop: i === 0 ? "90vh" : 0,
          backgroundColor: "transparent",
          boxShadow: "none",
          borderColor: "transparent",
        }}
        onClick={() => handleImageClick(project)}
        onMouseEnter={() => setHoveredIndex(i)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-xl transition-transform duration-300"
        />

        {/* OVERLAY */}
        {(displayedIndex === i || hoveredIndex === i) && (
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            {/* Slight dark overlay */}
            <div className="absolute inset-0 bg-white/8 backdrop-blur-[1px] transition-opacity duration-300" />

            {/* Arrow button */}
            <div
              className={`absolute inset-0 flex items-start justify-end rounded-xl`}
              style={{ paddingTop: i === 0 ? "90vh" : "0" }}
            >
              <div className="m-4 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-md hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  style={{ transform: "rotate(-45deg)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    ))}
  </motion.div>
</div>





        </div>
      </div>
    </section>
  );
}
