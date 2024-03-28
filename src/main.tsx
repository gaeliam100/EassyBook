import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './Components/ErrorPage';
import Contact, {
  loader as contactLoader,
} from './Components/Contact';
import Root,{ loader as rootLoader,action as rootAction }  from './routes/root';  
import EditContact,{action as editAction} from './routes/edit'
import LoginPage from './containers/LoginPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>, 
)
