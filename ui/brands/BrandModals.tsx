import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
} from "react";
import styled from "styled-components";
// import { useSpring, animated } from "react-spring";

const Background = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  background: rgb(238, 240, 240);
  box-shadow: 8px 10px 20px 10px rgba(0, 0, 0, 0.5);
  border-bottom: 5px solid rgb(1, 95, 172);
  padding: 30px 50px;
  position: relative;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 350px;
  }
`;

const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h5 {
    color: rgb(1, 95, 172);
    font-size: 35px;
    font-weight: bolder;
    text-transform: capitalize;
    font-family: Raleway;
  }

  h5 hr {
    width: 80px;
    border: solid rgb(1, 95, 172) 3px;
  }

  @media screen and (max-width: 768px) {
    h5 {
      font-size: 20px;
    }
  }
`;

const Icon = styled.i`
  font-size: 35px;
  color: rgb(1, 95, 172);
  cursor: pointer;
  transition: ease-in-out 0.3s all;

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: bolder;
  }
`;

const ModalBody = styled.div`
  line-height: 30px;

  p {
    text-align: capitalize;
    font-family: Raleway;
    text-align: justify;
    font-size: 15px;

    @media screen and (max-width: 768px) {
      p {
        font-size: inherit;
      }
    }
  }

  @media screen and (max-width: 768px) {
    overflow: scroll;
  }
`;

interface PropTypes {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const FirstModal = ({ showModal, setShowModal }: PropTypes) => {
  const modalRef = useRef();

  const hideModal = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal((prev: boolean) => !prev);
  };

  return (
    <>
      {showModal ? (
        <Background
          ref={modalRef}
          onClick={(e) => hideModal(e)}
          style={{ overflowY: "scroll" }}
        >
          <ModalWrapper>
            <WrapperHeader>
              <h5>
                WHOBEWHO IN I.C.T.
                <hr />
              </h5>

              <Icon className="fa-solid xmark" onClick={closeModal} />
            </WrapperHeader>

            <ModalBody>
              <p>
                This is an annual contest among I.C.T talents to be awarded and
                encourage to stand tall in the world. It serves as a talent
                hunting ground for firms to pick individuals who fit into their
                activities. This encourages local content/craftsmanship by
                building I.C.T inventions to solve our problems based on our
                environment and its challenges and export such (Software,
                Hardware and Multimedia) to other parts of the world. The
                contest stand to bridge the gaps between companies in need of
                capable labour and individuals with the required skill, thus;
                solving the problem of unemployment and reducing the cost of
                running companies locally. Who be who in I.C.T stand as a
                show-ground for investors to build new companies in the industry
                by leveraging on talents on-the-spot basis and build them to be
                the world beaters.
              </p>
            </ModalBody>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export const SecondModal = ({ showModal, setShowModal }: PropTypes) => {
  const modalRef = useRef<HTMLDivElement>();

  const hideModal = (e: Event) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={hideModal}>
          <>
            <ModalWrapper>
              <WrapperHeader>
                <h5>
                  IZONCODE KIDS
                  <hr />
                </h5>
                <Icon className="fa-solid fa-xmark" onClick={closeModal} />
              </WrapperHeader>

              <ModalBody>
                <p>
                  The best way to build any society is to begin with the young
                  and make them just as good as possible ‘Socrates’.
                  IzonCodeKids indoctrinates the young ones the unending
                  benefits of IT and keep them on track to proffer solutions to
                  local and global problems. With IzonCodeKids we are a well
                  nursed bed for a greater future for the Izon nation, Nigeria
                  and the Globe. Young talents are hunted for, harnessed and
                  built upon in other to get the best out of them.
                </p>
              </ModalBody>
            </ModalWrapper>
          </>
        </Background>
      ) : null}
    </>
  );
};

export const ThirdModal = ({ showModal, setShowModal }: PropTypes) => {
  const modalRef = useRef();

  // const animation = useSpring({
  //   config: {
  //     duration: 300,
  //   },
  //   opacity: showModal ? 1 : 0,
  //   transition: `ease-in-out all 0.3s`,
  //   transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  // });

  const hideModal = (e: Event) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={hideModal}>
          <>
            <ModalWrapper>
              <WrapperHeader>
                <h5>
                  BAYELSA WOMEN IN I.C.T.
                  <hr />
                </h5>
                <Icon className="fa-solid fa-xmark" onClick={closeModal} />
              </WrapperHeader>

              <ModalBody>
                <p>
                  Women are encouraged to be proactive in the industry by doing
                  the needful to compete anywhere around the globe. The
                  contribution of women is needed in the world and this stands a
                  platform or such. Female talents and harnessed and built upon
                  in other to get the best out of them.
                </p>
              </ModalBody>
            </ModalWrapper>
          </>
        </Background>
      ) : null}
    </>
  );
};
