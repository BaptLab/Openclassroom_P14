import { Routes, Route, HashRouter } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Error404 from "../pages/Error404";
import Employees from "../pages/Employees";

/**
 * Routing Component
 *
 * This component defines the routing for the application using React Router.
 * It specifies the routes and their corresponding components.
 *
 * @returns {JSX.Element} The Routing component JSX.
 */
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;
