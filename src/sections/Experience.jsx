export default function Experience() {
  const experiences = [
    {
      role: "Frontend Designer & Developer / WordPress Developer",
      company: "Aide Ascent Pvt. Ltd.",
      period: "Present",
      details: [
        "Designing and developing user-friendly web interfaces and applications.",
        "Creating responsive, visually appealing websites using WordPress and custom front-end code.",
        "Collaborating with cross-functional teams to ensure design consistency and usability.",
        "Managing domains, web hosting, and website deployment for client projects.",
        "Optimizing website performance and implementing SEO-friendly practices.",
      ],
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white py-10 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-thin text-gray-900 mb-6 leading-tight">
          Experience<br />
        </h1>
          <p
            className="text-gray-500 text-lg font-extralight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            My professional journey and key contributions
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-start md:gap-10"
            >
              {/* Left side */}
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h2
                  className="text-2xl font-normal text-gray-800 mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {exp.role}
                </h2>
                <p
                  className="text-gray-500 text-base font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {exp.company}
                </p>
                <span
                  className="text-gray-400 text-sm font-extralight"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Right side */}
              <div
                className="md:w-2/3 space-y-2 text-gray-600 font-extralight leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {exp.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
