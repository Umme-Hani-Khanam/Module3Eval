import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/AdminDashboard";
import CustomerDashboard from "./Pages/CustomerDashboard";

import ProtectedRoute from "./Routes/ProtectedRoute";
import { RestroProvider } from "./context/RestroContext";

const App = () => {
  return (
    <BrowserRouter>
      <RestroProvider>
        <Routes>
        
          <Route path="/" element={<Login />} />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/restaurants/update/:id"
            element={
              <ProtectedRoute>
                <UpdateRestaurant />
              </ProtectedRoute>
            }
          />

          
          <Route
            path="/customers/dashboard"
            element={
              <ProtectedRoute>
                <CustomerDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </RestroProvider>
    </BrowserRouter>
  );
};

export default App;
