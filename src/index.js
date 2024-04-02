import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepages from './Pages/Homepages';
import Search1 from './Pages/Search1';
import Explore from './Pages/Explore';
import Messages from './Pages/Messages';
import Reels from './Pages/Reels';
import Notification from './Pages/Notification';
import Profile from './Pages/Profile';
import Thread from './Pages/Thread';
import Login from './Pages/Login';
import Create from './Pages/Create';
import ErrorPage from './Pages/ErrorPage';

//only one url in the entire website
// createBrowserRouter({
//   path:'/',
//   element:<App />,
// })
const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <ErrorPage/>},
  { path: '/home', element: <App /> },
  { path: '/search', element: <Search1 /> },
  { path: '/explore', element: <Explore /> },
  { path: '/reels', element: <Reels /> },
  { path: '/messages', element: <Messages /> },
  { path: '/notification', element: <Notification /> },
  { path: '/profile', element: <Profile /> },
  { path: '/thread', element: <Thread /> },
  { path: '/login', element: <Login /> },
  { path: '/create', element: <Create /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
