import { useEffect, useState } from "react";
import Cards from "./Cards";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fetch data whenever the search term changes
  useEffect(() => {
    if (searchTerm) {
      fetch(`https://future-skills-task.vercel.app/cards?query=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setSearchResults(data);
        })
        .catch((err) => console.error("Error fetching data:", err));
    } else {
      fetch("https://future-skills-task.vercel.app/cards")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setSearchResults(data);
        });
    }
  }, [searchTerm]);
  console.log(searchResults);
  return (
    <div>
      <div className="h-[400px] bg-[#dadbf0] flex items-center justify-center">
        <div className="w-full ">
          <div className="my-auto">
            <h2 className="text-5xl font-semibold text-black text-center ">
              How can we help?
            </h2>
          </div>
          <div className="w-2/5 mx-auto mt-5">
            <label className="input rounded-none border-1 border-black flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
      <Cards allCard={searchResults} />
    </div>
  );
};

export default Home;
