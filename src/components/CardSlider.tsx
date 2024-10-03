import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

const images = [
  "https://mksolusi.id/wp-content/uploads/2019/07/logistic.png",
  "https://mksolusi.id/wp-content/uploads/2019/07/pemda.png",
  "https://mksolusi.id/wp-content/uploads/2019/07/rindo.png",
  "https://mksolusi.id/wp-content/uploads/2019/07/sulsel.png",
  "https://mksolusi.id/wp-content/uploads/2019/07/xxx.png",
  "https://mksolusi.id/wp-content/uploads/2019/07/ita.png",
  "https://mksolusi.id/wp-content/uploads/2019/07/linkfpx.png",
];

export default function CardSlider() {
  const itemsPerDisplay = 6;
  const totalDots = Math.ceil(images.length / itemsPerDisplay);
  const [activeItems, setActiveItems] = useState({
    start: 0,
    end: itemsPerDisplay,
  });

  const handleOnClick = () => {
    const lastItem = images.length === activeItems.end;

    if (lastItem) {
      setActiveItems({
        start: 0,
        end: itemsPerDisplay,
      });

      return;
    }

    setActiveItems({
      start: activeItems.start + 1,
      end: activeItems.end + 1,
    });
  };

  useEffect(() => {
    setInterval(() => {
      handleOnClick();
    }, 30000);
  }, []);

  return (
    <div>
      <div className="flex my-5">
        {images
          .slice(activeItems.start, activeItems.end)
          .map((image, index) => (
            <div className="w-96 flex justify-center gap-5" key={index}>
              <img src={image} alt="alt" className="object-contain" />
            </div>
          ))}
      </div>

      <div className="flex flex-row justify-center mt-4">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              handleOnClick();
            }}
          >
            <GoDotFill
              className={`mx-1 cursor-pointer ${
                Math.ceil(activeItems.start / itemsPerDisplay) === index
                  ? "text-blue-500"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
