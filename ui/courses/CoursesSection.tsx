"use client";

import { useMemo, useState } from "react";

import Pagination from "./Pagination";
import Search from "./Search";

import Youtube from "./Youtube";
import AllCourses from "./AllCourses";
import IctSavvyIjawYouths from "./301IctSavvyIjawYouths";
import BitClasses from "./BitClasses";
import Category from "@/models/Category";

const CoursesSection = ({
  categories,
}: {
  categories: {
    _id: string;
    name: string;
    image: string;
    courses: [];
    slug: string;
  }[];
}) => {
  const [selected, setSelected] = useState("all-courses");

  return (
    <>
      <Search />

      <Pagination selected={selected} setSelected={setSelected} />

      <div>
        {selected === "all-courses" && <AllCourses categories={categories} />}

        {selected === "301-ict-savvy-youths" && <IctSavvyIjawYouths />}

        {selected === "youtube" && <Youtube />}

        {selected === "bit-classes" && <BitClasses />}
      </div>
    </>
  );
};

export default CoursesSection;
