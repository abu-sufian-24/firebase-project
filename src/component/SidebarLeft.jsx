import LeftSide from "./LeftSide";

const SidebarLeft = () => {
  const categories = [
    "National News",
    "Breaking News",
    "Regular News",
    "International News",
    "Sports",
    "Entertainment",
    "Culture",
    "Arts",
    "All News",
  ];


  return (
    <aside className="bg-gray-50 p-4">
      <h2 className="font-bold mb-4 text-2xl">All Category</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="hover:bg-slate-300 py-2 px-6 cursor-pointer text-2xl">
            {category}
          </li>
        ))}
      </ul>

      <LeftSide />
      <LeftSide />
      <LeftSide />
    </aside>
  );
};

export default SidebarLeft;
