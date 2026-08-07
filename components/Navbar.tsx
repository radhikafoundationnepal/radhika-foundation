export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-700 text-xl font-bold">
            R
          </div>

          <div>
            <h1 className="text-white text-2xl font-bold">
              Radhika Foundation
            </h1>

            <p className="text-blue-100 text-sm">
              Nepal
            </p>
          </div>

        </div>

        <nav>

          <ul className="flex items-center gap-8 text-white font-medium">

            <li><a href="#">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#programs">Programs</a></li>

            <li><a href="#news">News</a></li>

            <li><a href="#gallery">Gallery</a></li>

            <li><a href="#contact">Contact</a></li>

            <li>
              <button className="bg-white text-blue-700 px-5 py-2 rounded-full font-bold hover:bg-yellow-300">
                Donate
              </button>
            </li>

          </ul>

        </nav>

      </div>
    </header>
  );
}