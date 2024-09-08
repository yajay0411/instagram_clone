import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated: boolean = true;
  return (
    <>
      {isAuthenticated ? (
        <section>
          <Outlet />
        </section>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
