import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import './pages/pageStyles.scss'
import './primary.css';
import { Route, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import RouteHandler, { router } from './router/router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import ScrollTop from './components/ScrollTop';
import './responsive.scss';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>

<ScrollTop />
      <Header />
        <RouteHandler />
      <Footer />
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
