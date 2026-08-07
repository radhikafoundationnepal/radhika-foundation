export default function Programs() {
  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Education
            </h3>

            <p>
              Scholarships, school support and educational awareness.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Health
            </h3>

            <p>
              Health camps, blood donation and medical support.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Women Empowerment
            </h3>

            <p>
              Skill development and entrepreneurship programs.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}