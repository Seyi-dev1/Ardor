import React from 'react'
import { HashLoader } from 'react-spinners'

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
          background: "linear-gradient(to bottom, rgba(17, 30, 102), rgba(17, 30, 102))"
        }}
      >
        <HashLoader color="#ffd700" className="loader" />
      </div>
  )
}

export default Loader