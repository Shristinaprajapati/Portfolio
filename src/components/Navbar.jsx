import { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const handleClick = (id) => {
    if (location.pathname !== "/") {
      // navigate to home first
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) setIsVisible(false);
      else setIsVisible(true);

      setIsTop(currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl
      ${isTop ? "bg-transparent text-white" : "bg-black/70 backdrop-blur-md text-white"}
      rounded-2xl z-50 transition-all duration-500
      ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <ul className="flex space-x-6 font-medium">
          {["home", "about", "portfolio", "experience", "contact"].map((id) => (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                className="cursor-pointer hover:text-blue-400 capitalize"
              >
                {id}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleClick("contact")}
          className="ml-4 px-5 py-2 rounded-full bg-blue-500/80 hover:bg-blue-600 transition-all"
        >
          Get In Touch
        </button>
      </div>
    </nav>
  );
}
