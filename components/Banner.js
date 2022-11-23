import { Slide, Fade, Rotate } from "react-reveal";
import Button from "common/Button";

const Banner = () => {
  return (
    <>
      <section className="firstSection">
        <div className="custom-jumbo">
          <Fade bottom cascade>
            <div className="content">
              <h2>ICT DIFFICULTY?</h2>
              <h3>WE GOT YOU COVERED!</h3>
              <p>...YES, WE DELIVER</p>
            </div>
          </Fade>
        </div>
      </section>

      <section className="about">
        <Slide>
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
              href="/corporate-overview"
              title="Read More"
              style={{ background: "white", color: "black" }}
            />
          </div>
        </Slide>

        <Rotate top right>
          <div className="imgDiv"></div>
        </Rotate>
      </section>
    </>
  );
};

export default Banner;
