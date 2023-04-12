import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home'
import MainLayout from './Layout/MainLayout';
import AboutPage from "./pages/About/About";
import TestimonialsPage from "./pages/Testimonials/TestimonialsPage";
import BuyTicketPage from "./pages/BuyTicketPage/BuyTicketPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import Speakers from "./pages/Speakers/Speakers";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import SpeakerDetails from "./pages/SpeakerDetails/SpeakerDetails";
import NotFound from './Components/NotFound/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/testimonials', element: <TestimonialsPage /> },
      { path: '/buy-ticket', element: <BuyTicketPage /> },
      { path: '/gallery', element: <GalleryPage /> },
      { path: '/speakers', element: <Speakers /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/contact', element: <Contact /> },
      { path: '/speakers/:slug', element: <SpeakerDetails /> },
    ]
  },
]);

export default router;