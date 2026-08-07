export default function Gallery() {

  return (

    <section id="gallery" className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-700 mb-14">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[1,2,3,4,5,6,7,8].map((item)=>(
            <div
              key={item}
              className="bg-blue-200 rounded-2xl h-56 flex items-center justify-center text-3xl font-bold text-blue-700 hover:scale-105 transition"
            >
              Image {item}
            </div>
          ))}

        </div>

      </div>

    </section>

  );

}