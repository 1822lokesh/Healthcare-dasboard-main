import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from '../mockData';

const AppRoutes = () => (
  <Routes>
    {routesConfig?.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);

export default AppRoutes;