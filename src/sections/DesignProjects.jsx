export default function DesignProjects() {
  const designs = [
    {
      title: "PUBG Community Website UI",
      desc: "UI/UX design for a PUBG community platform in Nepal.",
      link: "https://www.figma.com/design/ejm7SqcQI51KwM6Hvd6FZL/Figma(Pubg-Community)?node-id=1-438&t=kBYlCUkOKV4HwhIi-1",
    },
    {
      title: "Client Panel Design",
      desc: "UI/UX design for a client panel interface.",
      link: "https://www.figma.com/design/xrg0EJo7pk3FBJ4XdokC7e/Client-Panel?node-id=0-1&t=rJxWFsOtzyBu3XEX-1",
    },
    {
      title: "Tag Wheel Design",
      desc: "UI/UX design for Tag Wheel interface.",
      link: "https://www.figma.com/design/4ZOH5ufkFDtKXBebLWZtTb/Tag-Wheel-?node-id=0-1&t=wUdKGzuVIiJozk53-1",
    },
    {
      title: "HomeFriend Company Website",
      desc: "Corporate website design built in Figma.",
      link: "https://www.figma.com/design/cLd5pHLwmqivdiqVjJOqKK/HomeFriend?node-id=0-1&t=GymmBDifSJy30GxG-1",
    },
    {
      title: "Rem Work",
      desc: "UI/UX design for Rem Work Company.",
      link: "https://www.figma.com/design/ed1fWigeM2PmHNTeMNteOk/Rem-Work--Copy-?t=jcwPAhD4YXQLHfc4-0",
    },
    {
      title: "XCosmopolitan Website Design",
      desc: "Modern, minimalistic company website design.",
      link: "https://www.figma.com/design/6Nmmuv4U08Xd0z7yJdx5NT/Xcosmopolitan-?node-id=1-2&t=Z0dK91lOF9R6mQmT-1",
    },
    {
      title: "Aide Ascent Company Website",
      desc: "Corporate website design built in Figma.",
      link: "https://www.figma.com/design/nTD6vBf8dVPNs0u2HcpkIC/Aide-Ascent-Website-?node-id=1-7407&t=Z0dK91lOF9R6mQmT-1",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f6f8fb] py-3 px-3 sm:px-4 lg:px-6">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] rounded-3xl overflow-hidden mb-8 mt-1">
        <img
          src="/Images/figmabg.png"
          alt="Design Project Hero"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

        {/* Overlay content */}
        <div className="absolute bottom-8 left-8 bg-opacity-40 p-4 rounded">
          <h1 className="text-white text-left text-4xl font-semibold">
            Design Projects
          </h1>
          <p className="text-white text-lg mt-2 max-w-xl">
            Showcasing a collection of my recent UI/UX design projects.
          </p>
        </div>
      </div>

   {/* About My Design Work Section */}
<section className="bg-[#f6f8fb] py-20 px-6 sm:px-12 lg:px-20">
  {/* Centered Top Heading */}
  <div className="text-center mb-14">
    <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900">
      Crafting Digital Experiences
    </h2>
    <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
      Blending creativity, clarity, and purpose to create meaningful user experiences.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

    <div>
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
        Designer Concept
      </h3>
      <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
         Every design starts with understanding people, their goals, emotions,
  and how they interact. I create clean, intuitive interfaces that feel
  natural and help users connect with digital experiences effortlessly.
      </p>
    </div>


    <div>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
         Each project is a chance to solve real problems through creativity and
    thoughtful design making sure every detail supports the user’s journey
    and reflects the brand’s purpose.
      </p>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4">
        My aim is to balance beauty and usability, creating designs that are
    clear, engaging, and built to last.
      </p>
    </div>
  </div>
</section>




<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 sm:px-8 lg:px-16 mt-2 mb-20">
  {designs.map((d, i) => {
  
    const colors = [
            "bg-[#e8edf3]", 
      "bg-[#f3e7e9]", 
      "bg-[#e8f2ec]", 
      "bg-[#f4ede8]", 
      "bg-[#e9ebf5]", 
      "bg-[#f1ebe7]", 
      "bg-[#eaf4f0]", 
    ];
    const bgColor = colors[i % colors.length];

    return (
      <a
        key={i}
        href={d.link}
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </div>
</div>


        {/* Text Content */}
        <div className="absolute bottom-4 left-4 right-4 text-left z-10">
          <h2 className="text-lg font-medium text-gray-900">{d.title}</h2>
          <p className="text-gray-600 text-sm mt-1">{d.desc}</p>
        </div>
      </a>
    );
  })}
</div>


    </section>
  );
}
