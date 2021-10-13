import { useLocation } from 'react-router';

export default function Err404() {
  let location = useLocation();

  return (
    <main>
      I'm the error page 404, you tried to go to {location.pathname} but this
      page does not exist ¯\_(ツ)_/¯
    </main>
  );
}
