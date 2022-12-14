import Banner from "components/Banner";
import InfoSection from "components/InfoSection";

import Head from "components/Head";
import Layout from "components/Layout";

const Main = () => {
  /*  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 4000);
  }, [showModal]); */

  return (
    <Layout>
      <Head
        title="Boungbai | Home"
        description="Boungbai Computers, a next level Software, Website Development, Cloud Computing, Artificial Intelligence and Ethical Hacking firm believes in constantly experimenting and inventing newer technologies and methodologies"
        image="/images/web-logo.png"
      />

      <Banner />
      <InfoSection />
      {/*  <Modal showModal={showModal} setShowModal={setShowModal} /> */}
    </Layout>
  );
};

export default Main;
