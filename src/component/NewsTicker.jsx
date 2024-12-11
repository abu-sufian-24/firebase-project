const NewsTicker = () => {
  return (
    <div className="bg-slate-200 container mx-auto text-gray-950 py-6 overflow-hidden flex items-center sticky top-12 shadow-lg">
      {/* Static part */}
      <strong className="bg-red-600 text-white py-2 px-4 text-2xl  flex-shrink-0 z-40">
        Latest:
      </strong>

      {/* Scrolling content */}
      <div className="whitespace-nowrap animate-marquee flex items-center">
        <p className="inline-block text-2xl">
          Match Highlights: Germany vs Spain — as it happened! Match Highlights:
          Germany vs Spain — as it happened! Match Highlights: Germany vs Spain — as it happened!
        </p>
      </div>
    </div>
  );
};

export default NewsTicker;
