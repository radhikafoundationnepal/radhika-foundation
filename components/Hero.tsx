export default function Hero() {
  return (
    <section
      className="h-[90vh] flex items-center bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500"
    >
      <div className="max-w-7xl mx-auto px-6">

        <span className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold">
          Welcome
        </span>

        <h1 className="text-6xl font-bold text-white mt-8 leading-tight">

          Together We Build
          <br />

          Better Communities

        </h1>

        <p className="text-blue-100 text-xl mt-8 max-w-2xl">

          Radhika Foundation Nepal is dedicated to education,
          health, women empowerment, environmental protection
          and sustainable development.

        </p>

        <div className="mt-10 flex gap-5">

          <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold">

            Donate Now

          </button>

          <button className="border border-white text-white px-8 py-4 rounded-full">

            Learn More

          </button>

        </div>

      </div>
    </section>
  );
}