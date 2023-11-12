import Button from "../common/Button";

const About = () => {
  return (
    <section className="about">
      <>
        <div className="headingDiv">
          <h2>
            About <span>Us</span>
          </h2>

          <p>
            Boungbai Computers, a next level Software, Website Development,
            Cloud Computing, Artificial Intelligence and Ethical Hacking firm
            believes in constantly experimenting and inventing newer
            technologies and methodologies...
          </p>

          <Button
            href="/about"
            title="Read More"
            style={{ background: "white", color: "black" }}
          />
        </div>
      </>

      <>
        <div className="imgDiv"></div>
      </>
    </section>
  );
};

export default About;
