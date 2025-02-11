import { Route, Routes } from 'react-router';

import Welcome from '../pages/Welcome.jsx';

export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Welcome />} />
    </Routes>
  );
};
