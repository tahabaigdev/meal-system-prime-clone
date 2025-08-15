import LoginPage from "@/features/auth/LoginPage";
import MyDashboardPage from "@/features/dashboards/MyDashboardPage";
import LogframePage from "@/features/log-frame/LogframePage";
import ProjectInformationPage from "@/features/projects/ProjectInformationPage";
import ProjectOverviewPage from "@/features/projects/ProjectOverviewPage";
import ProjectsPage from "@/features/projects/ProjectsPage";
import AuthLayout from "@/layout/AuthLayout";
import MainLayout from "@/layout/MainLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Main app routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/projects" replace />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/projects/project-overview"
          element={<ProjectOverviewPage />}
        />
        <Route
          path="/projects/project-information"
          element={<ProjectInformationPage />}
        />
        <Route path="/projects/log-frame" element={<LogframePage />} />
        <Route path="/dashboards" element={<MyDashboardPage />} />

        {/* Add more feature routes here */}
      </Route>
    </>,
  ),
);
