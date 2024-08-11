import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { Homepage } from "../pages/homepage/homepage";
import { Method } from "../pages/method/method";
import { Page } from "../pages/helpers/pageCreator";
import { Therapy } from "../pages/therapy/therapy";
import { Prices } from "../pages/prices/prices";
import { Equipment } from "../pages/equipment/equipment";
import { AdditionalMethods } from "../pages/additionalMethods/additionalMethods";
import { Contacts } from "../pages/contacts/contacts";
import { Reviews } from "../pages/reviews/reviews";
import { AboutUs } from "../pages/aboutUs/aboutUs";
import { HeaderMain } from "../header/headerMain";
import { HeaderTomatis } from "../header/headerTomatis";

// Layout for the root path (with HeaderMain)
const LayoutMain: React.FC = () => (
  <>
    <HeaderMain />
    <main>
      <Outlet />
    </main>
  </>
);

// Layout for the /tomatis path (with HeaderTomatis)
const LayoutTomatis: React.FC = () => (
  <>
    <HeaderTomatis />
    <main>
      <Outlet />
    </main>
  </>
);

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Root Path */}
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Homepage />} />
        {/* Additional root routes can be added here */}
      </Route>

      {/* /tomatis Path */}
      <Route path="/tomatis" element={<LayoutTomatis />}>
        <Route index element={<Homepage />} />
        <Route path="method" element={<Method />} />
        <Route path="therapy" element={<Therapy />} />
        <Route path="page" element={<Page />} />
        <Route path="price" element={<Prices />} />
        <Route path="equipment" element={<Equipment />} />
        <Route path="additional_methods" element={<AdditionalMethods />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="about_us" element={<AboutUs />} />
      </Route>
    </Routes>
  );
};
