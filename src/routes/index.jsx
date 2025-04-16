import { Route, Routes } from 'react-router';

import Welcome from '../pages/welcome/Welcome.jsx';
import Dashboard from '../pages/dashboard/Dashboard.jsx';

export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Welcome />} />
      <Route index path="/dashboard/" element={<Dashboard />} />
    </Routes>
  );
};
