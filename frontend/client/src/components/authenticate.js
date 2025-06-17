import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Or use context/auth state

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
