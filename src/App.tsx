import { Routes, Route } from "react-router-dom";
import "./global.css";
import { Home, LogInForm, SignUpForm } from "./pages";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LogInForm />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
