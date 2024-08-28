import { useState } from "react";
import { useEffect } from "react";

const Cards = () => {
  const [allCard, setAllCard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cards")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCard(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(allCard);
  return (
    <div className=" mt-40">
      <div className=" w-4/6 mx-auto  grid grid-cols-2 gap-14">
        {allCard?.data?.map((card, index) => {
          return (
            <div
              key={index}
              className=" bg-[#f4f6f8] border border-[#e4eaf0] rounded-2xl"
            >
              <h2 className="text-2xl font-semibold px-5 pt-4 pb-3 text-[#4a4c4b] ">
                {card.title}
              </h2>
              <hr className="bg-[#e4eaf0] font-semibold" />
              <p className="mx-5 pt-3 pb-5 text-[#6a716c]">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

//bannaer bg- #dadbf0
//white text = #ededed
//navbar button border = #4c4c4c
