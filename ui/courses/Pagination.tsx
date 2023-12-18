import { Dispatch, SetStateAction } from "react";

type Props = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const Pagination = ({ selected, setSelected }: Props) => {
  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return (
    <div className="course-pagination">
      <button
        className={selected === "all-courses" ? "active" : ""}
        onClick={() => handleSelect("all-courses")}
      >
        All Courses
      </button>

      {/* <button
        className={selected === "301-ict-savvy-youths" ? "active" : ""}
        onClick={() => handleSelect("301-ict-savvy-youths")}
      >
        301 ICT Savvy Youths
      </button> */}

      <button
        className={selected === "youtube" ? "active" : ""}
        onClick={() => handleSelect("youtube")}
      >
        YouTube
      </button>

      <button
        className={selected === "bit-classes" ? "active" : ""}
        onClick={() => handleSelect("bit-classes")}
      >
        BIT Classes
      </button>
    </div>
  );
};

export default Pagination;
