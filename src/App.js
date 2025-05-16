import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import './pages/pageStyles.scss'
import './primary.scss';
import { Route, Router, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import RouteHandler, { router } from './router/router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import ScrollTop from './components/ScrollTop';
import './responsive.scss';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import PHeader from './components/header/PHeader';
import PFooter from './components/footer/PFooter';
function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location.pathname]);

  const panelexRoutes = ['/panelex','/panelex/about','/panelex/mission','/panelex/products','/panelex/contact',]
  return (
    <>
      {loading && <Loader />}

      <ScrollTop />
      {panelexRoutes.includes(location.pathname) ? <PHeader /> : <Header />}
     
      <RouteHandler />
      {panelexRoutes.includes(location.pathname) ? <PFooter /> : <Footer />}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </>

  );
}

export default App;
