import { Switch, Route } from 'react-router';
import { Header, Footer } from './layout';
import { Home, Err404, Contacts } from './pages';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/' component={Err404} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
