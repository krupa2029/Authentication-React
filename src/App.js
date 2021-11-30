import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path='/auth'>
          <AuthPage />
        </Route>
    </Switch>
  </Layout>
  );
}

export default App;
