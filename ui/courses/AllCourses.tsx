import Card from "./Card";

import Category from "@/models/Category";

const AllCourses = ({
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
  return (
    <>
      {categories.map((category) => (
        <section className="courses">
          <h2>{category.name}</h2>

          <div className="containerDiv">
            {category.courses.map((course) => (
              <h2>Hello World</h2>
            ))}
          </div>
        </section>
      ))}

      <section className="courses">
        <h2>Web Development</h2>

        <div className="containerDiv">
          <Card
            name="HTML For Beginners"
            href="/courses/web-dev"
            description="HTML is the basic and foundational language to start with when delving into Web Development."
            img="/assets/images/posters/html-poster.jpg"
          />

          <Card
            name="CSS For Beginners"
            href="/courses/web-dev"
            img="/assets/images/posters/css-poster.jpg"
          />

          <Card
            name="JavaScript for Web Development"
            href="/courses/web-dev"
            img="/assets/images/2.jpg"
          />
        </div>
      </section>

      <section className="courses">
        <h2>Graphic Design</h2>

        <div className="containerDiv">
          <Card
            name="HTML For Beginners"
            href="/courses/web-dev"
            img="/assets/images/2.jpg"
          />

          <Card
            name="CSS For Beginners"
            href="/courses/web-dev"
            img="/assets/images/2.jpg"
          />

          <Card
            name="JavaScript for Web Development"
            href="/courses/web-dev"
            img="/assets/images/2.jpg"
          />
        </div>
      </section>
    </>
  );
};

export default AllCourses;
