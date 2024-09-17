import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { HomePage } from '../pages/HomePage';
import { DesignsGalleryPage } from '../pages/DesignsGalleryPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { DesignPage } from '../pages/DesignPage';
import ConstructorNailsPage from "../pages/ConstructorNailsPage";
import VirtualFitting from "../pages/VirtualFitting";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
    errorElement: <Suspense fallback={<div>Loading...</div>}><NotFoundPage /></Suspense>,
  },
  {
    path: "/designs",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <DesignsGalleryPage />
      </Suspense>
    ),
    errorElement: <Suspense fallback={<div>Loading...</div>}><NotFoundPage /></Suspense>,
  },
  {
    path: "/designs/:designId",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <DesignPage />
      </Suspense>
    ),
  },
  {
    path: "/constructor",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ConstructorNailsPage />
      </Suspense>
    ),
  },
  {
    path: "/fitting",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <VirtualFitting />
      </Suspense>
    ),
  },
]);
