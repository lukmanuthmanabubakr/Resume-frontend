import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import BuildIt from "./pages/BuildIt";
import Preview from "./pages/Preview";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/app" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="builder/:resumeId" element={<BuildIt />} />
      </Route>

      <Route path="/view/:resumeId" element={<Preview />} />
    </Routes>
  );
};

export default App;


// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App