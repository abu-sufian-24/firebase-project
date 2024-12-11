
import { Outlet } from "react-router";
import Header from "./component/Header";


const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
