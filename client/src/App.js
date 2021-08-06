import Layout from "./pages/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MenusPage from "./pages/MenusPage/MenusPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { LoginContext } from "./utilities/contexts/login-context";
import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <div className="App">
      <LoginContext.Provider value={{ userInfo, setUserInfo }}>
        <Layout>
          <Switch>
            <Route path="/menu">
              <MenusPage />
            </Route>
            <Route path="/bookings">Bookings</Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Layout>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
