import Layout from "./pages/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MenusPage from "./pages/MenusPage/MenusPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/menu"><MenusPage /></Route>
          <Route path="/bookings">Bookings</Route>
          <Route path="/login">Login</Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
