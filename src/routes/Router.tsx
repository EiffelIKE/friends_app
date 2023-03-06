import { lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/Home'));
const DetailsPage = lazy(() => import('../pages/Details'));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
