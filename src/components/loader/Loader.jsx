import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      <ScaleLoader color="#000" className="loader" />
    </div>
  );
};

export default Loader;
