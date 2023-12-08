import React from 'react';
import { useRoutes } from 'react-router-dom';
import appRoutes from './routes';

const App = () => {
  const View = useRoutes(appRoutes);
  return View
}

export default App;
