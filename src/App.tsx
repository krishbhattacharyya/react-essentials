import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BigSpinner from "./components/bigspinner/big-spinner";

import Nav from "./components/nav/navigation";
import "./App.css";

const ReactPortalExample = lazy(() => import("./usage/modal/react-portal"));
const ReactSmartSearch = lazy(
  () => import("./usage/search/react-smart-search")
);
const ReactHOC = lazy(() => import("./usage/hoc/react-hoc"));
const ReactCustomHooks = lazy(() => import("./usage/customhook/react--custom-hook"));

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <div>
              <h1>All essential usecases in react</h1>
              <p>Right way to implement the react code</p>
            </div>
          </Suspense>
        ),
      },
      {
        path: "/customhooks",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ReactCustomHooks />
          </Suspense>
        ),
      },
      {
        path: "/hocs",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ReactHOC />
          </Suspense>
        ),
      },
      {
        path: "/smartsearch",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ReactSmartSearch />
          </Suspense>
        ),
      },
      {
        path: "/portal",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ReactPortalExample />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<BigSpinner />} />
    </>
  );
}

export default App;
