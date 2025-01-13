import { Route, Routes } from 'react-router';

import Welcome from '../pages/welcome';

export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Welcome />} />
    </Routes>
  );
};
