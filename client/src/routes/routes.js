import { Home, Cart, ItemDetails, NotFound, Favorites, Login, Register, Profile } from 'pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from 'routes/PrivateRoute';
import { Header, Footer } from 'layout';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products/:slug',
    element: <ItemDetails />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    element: <PrivateRoute />,
    routes: [
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
];

const MainRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map((route, index) => {
          if (route.routes) {
            return (
              <Route element={route.element} key={index}>
                {route.routes.map((subRoute, subIndex) => (
                  <Route element={subRoute.element} path={subRoute.path} key={subIndex} />
                ))}
              </Route>
            );
          }
          return <Route key={index} path={route.path} element={route.element} />;
        })}
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainRouter;
