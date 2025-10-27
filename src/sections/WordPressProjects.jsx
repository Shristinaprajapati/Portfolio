export default function WordPressProjects() {
  const wordpressSites = [
    {
      title: "XPashmina",
      desc: "E-commerce website powered by WordPress and WooCommerce.",
      link: "https://xpashmina.com/",
    },
    {
      title: "Reach IT Consultancy",
      desc: "Corporate website built with WordPress and Elementor.",
      link: "https://reachitconsultancy.com/",
    },
    {
      title: "Kathmandu Arbitration",
      desc: "Professional services website built on WordPress.",
      link: "https://kathmanduarbitration.com/",
    },
    {
      title: "Lawyers in Nepal",
      desc: "Law firm website built using WordPress and Elementor.",
      link: "https://lawyersinnepal.aideascent.com/",
    },
    {
      title: "Aide Ascent Pvt. Ltd.",
      desc: "Corporate WordPress website with Elementor.",
      link: "https://aideascent.com/",
    },
   
    {
      title: "USL Hasa Trip",
      desc: "Travel and services website built on WordPress.",
      link: "https://uslhasatrip.com/",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f6f8fb] py-3 px-3 sm:px-4 lg:px-6">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] rounded-3xl overflow-hidden mb-8 mt-1">
        <img
          src="/Images/wordpress-bg.png" 
          alt="WordPress Projects Hero"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

        {/* Overlay content */}
        <div className="absolute bottom-8 left-8 bg-opacity-40 p-4 rounded">
          <h1 className="text-white text-left text-4xl font-semibold">
            WordPress Projects
          </h1>
          <p className="text-white text-lg mt-2 max-w-xl">
            Showcasing professional WordPress websites and solutions.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#f6f8fb] py-20 px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-1 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900">
            Professional WordPress Development
          </h2>
          <p className="text-gray-600 text-lg mt-8 leading-relaxed">
            WordPress developer specializing in professional, responsive 
            websites built with Elementor and WooCommerce. Skilled in WPForms, 
            Fluent Forms, SCF, and migration tools, with expertise in domain and 
            hosting management, SSL configuration, SMTP/email setup, payment gateway 
            integration, SEO optimization, caching for performance, and website security hardening.
          </p>
        </div>
      </section>

      {/* WordPress Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-8 lg:px-16 mt-1 mb-20">
        {wordpressSites.map((site, i) => {
          const colors = [
            "bg-[#e8edf3]",
            "bg-[#f3e7e9]",
            "bg-[#e8f2ec]",
            "bg-[#f4ede8]",
            "bg-[#e9ebf5]",
            "bg-[#f1ebe7]",
          ];
          const bgColor = colors[i % colors.length];

          return (
            <a
              key={i}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative ${bgColor} rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden group`}
              style={{ minHeight: "200px" }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/80 backdrop-blur-md rounded-full p-2 shadow-sm group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700 transition-transform duration-300"
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

              {/* Text Content */}
              <div className="absolute bottom-4 left-4 right-4 text-left z-10">
                <h2 className="text-lg font-medium text-gray-900">{site.title}</h2>
                <p className="text-gray-600 text-sm mt-1">{site.desc}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
