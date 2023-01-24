import { useSelector } from "react-redux/es/exports";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotFoundPage } from "./components/404";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { InitialState } from "./types";

function App() {
  const isAuth: boolean = Boolean(
    useSelector((state: InitialState) => state.token)
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={isAuth ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile/:userId"
          element={isAuth ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
