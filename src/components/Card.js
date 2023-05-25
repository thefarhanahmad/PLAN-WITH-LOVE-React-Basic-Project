import { useState } from "react";

function Card({ id, image, name, info, price, removeCard }) {
  const [readMore, showLess] = useState(false);
  const description = readMore ? info : info.substring(0, 235);
  function readMoreHandler() {
    showLess(!readMore);
  }
  return (
    <div className="bg-white w-[400px] flex flex-col gap-1 shadow-xl rounded-xl p-4">
      <img src={image} alt="img" className="w-[380px] aspect-square" />
      <h2 className="text-green-900 font-bold">&#x20B9; {price}</h2>
      <h2 className="font-bold text-lg">{name}</h2>
      <p className="text-xs">
        {description}
        <span
          onClick={readMoreHandler}
          className="text-sky-600 font-semibold cursor-pointer"
        >
          {readMore ? ` ...Show Less` : ` ...Read More`}
        </span>
      </p>

      <button
        onClick={() => removeCard(id)}
        className="bg-red-50 transition-all duration-300 w-[65%] py-1 font-semibold hover:bg-red-500 hover:text-white m-auto my-4 rounded-lg border border-red-800"
      >
        Not Interested
      </button>
    </div>
  );
}
export default Card;
