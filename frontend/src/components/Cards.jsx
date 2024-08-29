// import { useState } from "react";
// import { useEffect } from "react";
const Cards = (allCard) => {
  return (
    <div>
      <div className=" mt-40">
        <div className=" w-4/6 mx-auto  grid grid-cols-2 gap-24">
          {allCard?.allCard?.data?.map((card, index) => {
            return (
              <div
                key={index}
                className=" bg-[#f4f6f8] border-2 border-[#e4eaf0] rounded-2xl h-[200px]"
              >
                <h2 className="text-2xl font-semibold px-5 pt-4 pb-3 text-[#4a4c4b] ">
                  {card.title}
                </h2>
                <hr className="bg-[#e4eaf0] h-[2px]" />
                <p className="mx-5 pt-3 pb-5 text-[#6a716c] text-xl">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;

//bannaer bg- #dadbf0
//white text = #ededed
//navbar button border = #4c4c4c
