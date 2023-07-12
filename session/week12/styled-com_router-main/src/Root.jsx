import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Root() {

  return (
    <>
      <Header />
      <Outlet />
      {/* <div>하이</div> */}
    </>
  )
}

export default Root;
