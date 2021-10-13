import { Switch, Route } from 'react-router';
import { PrivateRoute } from 'ui';
import { Header, Footer } from 'layout';
import { Home, Err404, Contacts, Admin } from 'pages';
import { WilderRow } from 'business';

function App() {
  return (
    <>
      <Header />
      <WilderRow />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <PrivateRoute path='/admin' component={Admin} />
        <Route path='/' component={Err404} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
