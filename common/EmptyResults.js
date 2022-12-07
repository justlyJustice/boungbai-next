import LottieView from "lottie-react";

const EmptyResults = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <style>
        {`
        .animation {
          width: 300px;
          display: block;
        }
        `}
      </style>

      <LottieView
        className="animation"
        autoPlay
        animationData={require("public/animations/empty.json")}
        loop
      />

      <h4>Sorry! No Results.</h4>
    </div>
  );
};

export default EmptyResults;
