import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import BuildIt from "./pages/BuildIt";
import Preview from "./pages/Preview";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CheckVerEmail from "./pages/CheckVerEmail";
import Loader from "./components/Loader";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./app/features/authSlice";
import { Toaster } from "react-hot-toast";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";

const App = () => {
  const dispatch = useDispatch();
  const { initialLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Routes */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="builder/:resumeId" element={<BuildIt />} />
        </Route>

        <Route path="/view/:resumeId" element={<Preview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/check-email" element={<CheckVerEmail />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
                <Route path="/verify/:token" element={<VerifyEmail />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default App;
