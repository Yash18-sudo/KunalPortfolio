import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import { AppContextProvider } from './context/AppContext';

import Contact from './pages/Contact';
import { QueryClient, QueryClientProvider } from 'react-query';
import Resources from './pages/Resources';


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'projects', element: <Projects /> },
      { path: 'contact', element: <Contact /> },
      { path: 'resources', element: <Resources /> },
      // { path: 'feedback', element: <Feedback /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
