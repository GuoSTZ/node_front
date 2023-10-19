import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';


const App = () => {
  const View = useRoutes(routes);
  return View
}

export default App;
