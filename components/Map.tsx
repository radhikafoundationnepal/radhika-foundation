export default function Map() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}

        <div className="text-center mb-10">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
            हाम्रो स्थान
          </h2>

          <p className="text-gray-600 mt-3">
            Radhika Foundation Nepal कहाँ अवस्थित छ?
          </p>

        </div>


        {/* MAP */}

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          <iframe
            src="https://www.google.com/maps?q=26.6214878,87.9186209&z=15&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Radhika Foundation Location"
          />

        </div>


        {/* OPEN GOOGLE MAP */}

        <div className="text-center mt-6">

          <a
            href="https://www.google.com/maps/place/Radhika+Foundation/@26.6214878,87.9186209,1016m/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-lg font-bold transition"
          >
            📍 Google Maps मा हेर्नुहोस् →
          </a>

        </div>

      </div>
    </section>
  );
}