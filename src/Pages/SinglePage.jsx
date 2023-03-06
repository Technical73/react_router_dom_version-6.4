import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LaCompomenet from "../Layout/LaComponent";
import CareerLayout from "../Layout/CareerLayout";
import {
  Home,
  Contact,
  About,
  Mail,
  Phone,
  PageNot,
  Careers,
  CareerError,
  CareerDetails,
} from "../components";
import { Container } from "react-bootstrap";
import { DataLoader } from "../components/Careers";
import { DetailsofCareer } from "../components/CareerDetails";

const SinglePage = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LaCompomenet />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />}>
          <Route path="Mail" element={<Mail />} />
          <Route path="Phone" element={<Phone />} />
        </Route>
        <Route path="/Car" element={<CareerLayout />}>
          <Route
            index
            element={<Careers />}
            loader={DataLoader}
            errorElement={<CareerError />}
          />
          <Route
            path=":id"
            element={<CareerDetails />}
            loader={DetailsofCareer}
            errorElement={<CareerError />}
          ></Route>
        </Route>

        <Route path="*" element={<PageNot />} />
      </Route>
    )
  );

  return (
    <>
      <Container className="py-5">
        <RouterProvider router={router}></RouterProvider>
      </Container>
    </>
  );
};

export default SinglePage;
