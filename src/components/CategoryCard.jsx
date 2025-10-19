
export default function CategoryCard({ title, desc }) {
  return (
    <div className="border p-5 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{desc}</p>
      <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700">
        Explore
      </button>
    </div>
  );
}
