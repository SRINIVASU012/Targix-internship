import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Courses from "../pages/Courses";
import AdminDashboard from "../pages/AdminDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import MyCourses from "../pages/MyCourses";
import Profile from "../pages/Profile";
import ManageStudents from "../pages/ManageStudents";
import AdminCourses from "../pages/AdminCourses";
import ProtectedRoute from "../components/ProtectedRoute";
import CourseStats from "../pages/CourseStats";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/courses" element={<Courses />} />

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/students"
        element={
          <ProtectedRoute role="ADMIN">
            <ManageStudents />
          </ProtectedRoute>
        }
      />

      {/* Student Routes */}
      <Route
        path="/student"
        element={
          <ProtectedRoute role="STUDENT">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-courses"
        element={
          <ProtectedRoute role="STUDENT">
            <MyCourses />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute role="STUDENT">
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/courses"
        element={
          <ProtectedRoute role="ADMIN">
            <AdminCourses />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/course-stats"
        element={
          <ProtectedRoute role="ADMIN">
            <CourseStats />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
