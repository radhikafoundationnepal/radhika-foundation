export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mt-5">
            About Our Foundation
          </h2>

          <p className="text-gray-600 text-lg mt-5 leading-8">
            Radhika Foundation Nepal is committed to creating
            opportunities and building a better future for
            underprivileged communities.
          </p>

        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

          {/* LEFT */}
          <div className="bg-blue-50 rounded-3xl p-8 md:p-10">

            <div className="w-16 h-16 bg-blue-700 text-white rounded-2xl flex items-center justify-center text-3xl mb-6">
              ❤️
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8">
              We work to uplift underprivileged communities
              through education, healthcare, women's empowerment,
              disaster relief, environmental conservation and
              sustainable development.
            </p>

          </div>

          {/* RIGHT */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10">

            <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-6">
              🌱
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8">
              We believe every individual deserves equal
              opportunity to learn, grow and live with dignity.
              Together, we can create stronger, healthier and
              more sustainable communities.
            </p>

          </div>

        </div>

        {/* VALUES */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div className="text-center p-7 rounded-2xl border hover:shadow-lg transition">
            <div className="text-4xl mb-4">
              📚
            </div>

            <h3 className="text-xl font-bold text-gray-800">
              Education
            </h3>

            <p className="text-gray-500 mt-2">
              Creating better educational opportunities for children.
            </p>
          </div>

          <div className="text-center p-7 rounded-2xl border hover:shadow-lg transition">
            <div className="text-4xl mb-4">
              🤝
            </div>

            <h3 className="text-xl font-bold text-gray-800">
              Empowerment
            </h3>

            <p className="text-gray-500 mt-2">
              Supporting people to become independent and confident.
            </p>
          </div>

          <div className="text-center p-7 rounded-2xl border hover:shadow-lg transition">
            <div className="text-4xl mb-4">
              🌍
            </div>

            <h3 className="text-xl font-bold text-gray-800">
              Sustainability
            </h3>

            <p className="text-gray-500 mt-2">
              Working for a cleaner and sustainable future.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}