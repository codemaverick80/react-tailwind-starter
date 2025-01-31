import React from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight ">404 | Not Found</h1>
      <br />
      <button
        className="rounded-md w-64 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => navigate("/")}
      >
        <span>
          <FaArrowLeft />
        </span>
        Go to homepage
      </button>
    </div>
  );
};

export default NotFound;
