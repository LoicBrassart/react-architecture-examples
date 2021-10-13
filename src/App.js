import { Switch, Route } from 'react-router';
import { Header, Footer } from './layout';
import { Home, Err404 } from './pages';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/' component={Err404} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
