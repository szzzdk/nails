import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { HomePage } from '../pages/HomePage';
import { DesignsGalleryPage } from '../pages/DesignsGalleryPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { DesignPage } from '../pages/DesignPage';


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
]);
