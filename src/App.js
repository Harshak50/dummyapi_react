import { Routes, Route } from "react-router-dom";
import Register from "./auth/Register";
import Home from "./Home";
import { LoginPage } from "./auth/Login";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./protectedRoute";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
