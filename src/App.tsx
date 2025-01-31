import Home from "./pages/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import About from "./pages/About";
import Product from "./pages/Product";
import RootLayout from "./layout/RootLayout";
import Signin from "./pages/Signin";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
