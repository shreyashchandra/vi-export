import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

function Navbar() {
  const [currentnum, setCurrentnum] = useState(1);

  return (
    <div className="w-full flex items-center justify-between p-5 fixed top-0 text-white bg-slate-500">
      <div>
        <img src="vi.export.jpeg" alt="Logo" className="w-12" />
      </div>
      <div className="flex items-center gap-4 px-16 text-lg font-semibold">
        <Link
          to="/"
          onClick={() => setCurrentnum(1)}
          className={currentnum === 1 ? "underline" : ""}
        >
          USER
        </Link>
        <Link
          to="/admin"
          onClick={() => setCurrentnum(2)}
          className={currentnum === 2 ? "underline" : ""}
        >
          ADMIN
        </Link>
        <Link
          to="/bid"
          onClick={() => setCurrentnum(3)}
          className={currentnum === 3 ? "underline" : ""}
        >
          BID
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
