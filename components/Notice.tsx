export default function Notice() {
  return (
    <section className="bg-blue-700 text-white py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12">
          Latest Notices
        </h2>

        <div className="space-y-6">

          <div className="bg-white text-black rounded-xl p-6 shadow">
            📢 Annual General Meeting on 20 August 2026.
          </div>

          <div className="bg-white text-black rounded-xl p-6 shadow">
            📢 Volunteer Registration Open.
          </div>

          <div className="bg-white text-black rounded-xl p-6 shadow">
            📢 Scholarship Application Starts Next Month.
          </div>

        </div>

      </div>

    </section>
  );
}