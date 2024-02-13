import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
// import classes from "./Root.Module.css";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
