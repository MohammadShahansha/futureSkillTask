import icon from "../assets/image/icon.png";
const Navbar = () => {
  return (
    <div className="py-5 bg-black text-white fixed top-0 z-50 w-full">
      <div className="mx-40  text-white flex justify-between ">
        <div className="flex items-center gap-2 w-[300px]">
          <img src={icon} alt="icon" />
          <p className="">
            {" "}
            <span className="font-semibold">Abstruct</span> | Help Center
          </p>
        </div>
        <div className="">
          <button className="border-2 border-[#4c4c4c] px-2 py-1 rounded-md ">
            Submit a request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
