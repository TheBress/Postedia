import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { IsAuth } from "./functions";
import { NotFoundPage } from "./pages/404";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { PostPage } from "./pages/Post";
import { Profile } from "./pages/Profile";
import { Register } from "./pages/Register";

function App() {
  const isAuth: boolean = IsAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={isAuth ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile/:userId"
          element={isAuth ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/post/:postId"
          element={isAuth ? <PostPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
