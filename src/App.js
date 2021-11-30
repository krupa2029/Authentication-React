import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import UserProfile from './components/Profile/UserProfile';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
