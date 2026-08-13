export default function Programs() {
  const programs = [
    {
      icon: "📚",
      title: "Education",
      description:
        "Scholarships, school support and educational awareness programs to create better opportunities for children and students.",
    },
    {
      icon: "❤️",
      title: "Health",
      description:
        "Health camps, blood donation programs and medical support for people and communities in need.",
    },
    {
      icon: "👩‍💼",
      title: "Women Empowerment",
      description:
        "Skill development, entrepreneurship and income-generating programs to help women become independent.",
    },
    {
      icon: "🌱",
      title: "Environment",
      description:
        "Tree plantation, environmental awareness and conservation activities for a cleaner and greener future.",
    },
    {
      icon: "🤝",
      title: "Community Support",
      description:
        "Support and assistance for underprivileged, vulnerable and disadvantaged members of our communities.",
    },
    {
      icon: "🆘",
      title: "Disaster Relief",
      description:
        "Emergency assistance and relief support for families and communities affected by natural disasters.",
    },
  ];

  return (
    <section
      id="programs"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
            What We Do
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mt-5">
            Our Programs
          </h2>

          <p className="text-gray-600 text-lg mt-5 leading-8">
            We work across different areas to support people,
            strengthen communities and create a better future.
          </p>

        </div>

        {/* PROGRAMS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {programs.map((program) => (
            <div
              key={program.title}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl group-hover:bg-blue-700 group-hover:scale-110 transition duration-300">
                {program.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-gray-800 mt-6">
                {program.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mt-4 leading-7">
                {program.description}
              </p>

              {/* SMALL LINK */}
              <div className="mt-6 text-blue-700 font-semibold">
                Learn More →
              </div>

            </div>
          ))}

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mt-14 bg-blue-700 rounded-3xl p-8 md:p-10 text-center">

          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Together, We Can Make a Difference
          </h3>

          <p className="text-blue-100 mt-3 max-w-2xl mx-auto leading-7">
            Every contribution, every volunteer and every act of
            kindness can help create meaningful change in society.
          </p>

        </div>

      </div>
    </section>
  );
}