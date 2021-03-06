import React from "react";
import { Route } from "react-router-dom";
import { MoviesList, MovieId  } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={MoviesList} />
    <Route path="/movie/:id" exact component={MovieId} />
  </>
);