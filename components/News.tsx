const news = [
  {
    title: "Health Camp Successfully Completed",
    date: "August 2026",
    description:
      "Free health checkup and medicine distribution program completed successfully."
  },
  {
    title: "Education Support Program",
    date: "July 2026",
    description:
      "Educational materials distributed to students from underprivileged communities."
  },
  {
    title: "Tree Plantation Campaign",
    date: "June 2026",
    description:
      "More than 1000 trees planted to promote environmental conservation."
  }
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-700 mb-14">
          Latest News
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {news.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg border p-8 hover:shadow-2xl transition"
            >
              <span className="text-blue-600 font-semibold">
                {item.date}
              </span>

              <h3 className="text-2xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {item.description}
              </p>

              <button className="mt-6 text-blue-700 font-bold">
                Read More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}