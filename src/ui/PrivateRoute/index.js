import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  let auth = false; // Change this behaviour, of course !

  if (auth) {
    return <Route {...rest} render={() => children} />;
  } else {
    return <Redirect to='/' />;
  }
}
