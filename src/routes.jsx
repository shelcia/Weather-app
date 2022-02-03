import { lazy, Suspense } from "react";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<p>Loading...</p>}>
      <Component {...props} />
    </Suspense>
  );

const HomePage = Loadable(lazy(() => import("./pages/HomePage")));
const CountryPage = Loadable(lazy(() => import("./pages/CountryPage")));
const AboutPage = Loadable(lazy(() => import("./pages/AboutPage")));

const routes = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: ":id",
    element: <CountryPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
];

export default routes;
