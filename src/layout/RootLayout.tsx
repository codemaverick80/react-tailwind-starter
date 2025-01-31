import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="min-h-svh w-full">
      <Navbar />

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
