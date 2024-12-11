

const NewsCard = ({ title, description, image, author, date, rating, views }) => {
  return (
    <div className="border-b py-4">
      <div className="flex space-x-4">
        <img src={image} alt={title} className="w-32 h-32 object-cover" />
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-500 mb-2">{description}</p>
          <p className="text-sm text-gray-400">
            {author} - {date}
          </p>
          <p className="text-sm mt-2">
            ⭐ {rating} | 👀 {views}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
