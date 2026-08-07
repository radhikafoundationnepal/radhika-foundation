export default function AdminDashboard() {
  return (
    <>
      <h1 className="text-4xl font-bold text-blue-700">
        Dashboard
      </h1>

      <p className="mt-4 text-gray-600">
        Welcome to Radhika Foundation CMS
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-10">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-bold">News</h2>
          <p className="text-3xl mt-3">0</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-bold">Notices</h2>
          <p className="text-3xl mt-3">0</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-bold">Gallery</h2>
          <p className="text-3xl mt-3">0</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-bold">Donations</h2>
          <p className="text-3xl mt-3">0</p>
        </div>

      </div>
    </>
  );
}