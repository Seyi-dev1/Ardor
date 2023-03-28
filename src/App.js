import React from "react";
import './App.css'
import Home from "./pages/Home/Home";
// import { useDispatch } from "react-redux";
// import { checkUserSession } from "./redux/user/userReducer";

function App() {
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(checkUserSession());
  // }, [dispatch]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

// rgb(100, 138, 255);
// rgb(131, 214, 252)