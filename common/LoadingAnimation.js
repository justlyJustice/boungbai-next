import { lazy, Suspense } from "react";
import styled from "styled-components";

const Lottie = lazy(() => import("lottie-react"));

const AnimationContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  bottom: 0;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100000;

  .animation {
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;

    .animation {
      max-width: 100%;
      width: auto;
    }
  }
`;

const LoadingAnimation = ({ loading }) => {
  return (
    <Suspense fallback={<div />}>
      {loading && (
        <AnimationContainer>
          <Lottie
            className="animation"
            autoPlay
            animationData={require("assets/animations/loading.json")}
            loop
          />
        </AnimationContainer>
      )}
    </Suspense>
  );
};

export default LoadingAnimation;
