import { FaEye, FaStar } from "react-icons/fa";

const NewsCart = (props = {}) => {
    const { news } = props || {};
    console.log(news.author.name);
    return (
        <div className="card bg-base-100 shadow-xl p-4">
            {/* Author Info */}
            <div className="flex items-center gap-3">
                <img
                    src={news.author.img}
                    alt={news.author.name}
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <h3 className="font-bold">{news.author.name}</h3>
                    <p className="text-sm text-gray-500">{news.author.published_date}</p>
                </div>
            </div>

            {/* News Title */}
            <h2 className="text-lg font-bold mt-3">{news.title}</h2>

            {/* Full-Width Image */}
            <img
                src={news.image_url}
                alt={news.title}
                className="w-full object-cover rounded-lg mt-3"
            />

            {/* Description */}
            <p className="text-gray-600 mt-3">
                {news.details.length > 100
                    ? `${news.details.substring(0, 100)}...`
                    : news.details}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
                {/* Rating with Stars */}
                <div className="flex items-center text-orange-500">
                    {[...Array(Math.floor(news.rating.number))].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="ml-1 text-gray-700">{news.rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-1 text-gray-500">
                    <FaEye />
                    {news.total_view}
                </div>
            </div>
        </div>
    );
};


export default NewsCart;