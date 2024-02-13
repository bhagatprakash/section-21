import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/Home";
import Productspage from "./Pages/Product";
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import ProductDetailPage from "./Pages/ProductDetail";

const routeDefinions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/product" element={<Productspage />} />
  </Route>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product",
        element: <Productspage />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetailPage />,
      },
    ],
  },
]);
// const router = createBrowserRouter(routeDefinions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
