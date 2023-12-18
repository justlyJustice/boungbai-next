import CoverSection from "@/ui/common/Cover";

export const generateStaticParams = () => {
  const slugs = ["html", "css"];
  return slugs.map((slug) => ({ slug }));
};

const CourseDetails = () => {
  return (
    <>
      <CoverSection headingText="Course Details" span="Course details" />
    </>
  );
};

export default CourseDetails;
