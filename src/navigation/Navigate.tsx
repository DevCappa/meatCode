import Inicio from '../screens/Inicio';
import * as React from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

export default function Navigate() {
  let location = useLocation();
  let state = location.state as { backgroundLocation?: Location };

  return (
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Inicio />}>
          <Route index element={<Inicio />} />
          <Route path="Home" element={<Inicio />} />
          <Route path="*" element={<Inicio />} />
        </Route>
      </Routes>
  );
}