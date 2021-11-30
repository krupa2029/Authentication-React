import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <HomePage />
      </Route>
    </Switch>
  </Layout>
  );
}

export default App;
