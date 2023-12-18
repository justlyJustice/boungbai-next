import Pagination from "@/ui/courses/Pagination";
import CoverSection from "../../ui/common/Cover";
import CoursesSection from "@/ui/courses/CoursesSection";
import Category from "@/models/Category";

export default async function CoursesPage() {
  const res = await fetch("http://localhost:3000/api/categories");
  const data = await res.json();

  const categories: {
    _id: string;
    name: string;
    image: string;
    courses: [];
    slug: string;
  }[] = data.data;

  return (
    <>
      <CoverSection headingText="Our Courses" span="Courses" />

      <div className="pages">
        <CoursesSection categories={categories} />
      </div>
    </>
  );
}
