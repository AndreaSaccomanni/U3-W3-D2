import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavbarComponent from "./components/NavbarComponent";
import MyFooterComponent from "./components/MyFooterComponent";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <NavbarComponent />
      <Welcome />
      <AllTheBooks />
      <MyFooterComponent />
    </>
  );
}

export default App;
