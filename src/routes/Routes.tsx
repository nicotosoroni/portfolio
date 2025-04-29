import { Route, Routes } from 'react-router';
import App from '../App';
import Training from '../pages/Training';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/training" element={<Training />} />
    </Routes>
  );
};

export default AppRoutes;
