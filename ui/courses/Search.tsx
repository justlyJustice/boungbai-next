import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  return (
    <div className="search-input">
      <input placeholder="Search for a course" type="text" />

      <button>
        <MagnifyingGlassIcon color="#ffffff" className="icon" />
      </button>
    </div>
  );
};

export default Search;
