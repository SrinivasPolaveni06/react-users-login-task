import "bootstrap/dist/css/bootstrap.min.css";
import LoginHome from "./components/LoginHome";
import NotFound from "./Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogdinLayout from "./components/LogdinLayout";
import Dashboard from "./components/Dashboard";
import UsersList from "./components/UsersList";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import EditPage from "./components/EditPage";
import Samplepage from "./components/Samplepage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginHome />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/user" element={<LogdinLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="userslist" element={<UsersList />} />
          <Route path="samplepage" element={<Samplepage />} />
          <Route path=":id" element={<EditPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
