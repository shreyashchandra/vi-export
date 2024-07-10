import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <Navbar />

        <Outlet />

        <div className="w-full mt-14 ">
          <Footer />
        </div>
      </div>
    </>
  );
}
