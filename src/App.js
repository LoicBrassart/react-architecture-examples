import Title from './components/Title';
import Wilder from './components/Wilder';

function App() {
  return (
    <>
      <Title label='Hello!' />
      <Wilder name='Marie' cursus='JS' />
      <Wilder name='Pierre' cursus='Data Analysis' />
    </>
  );
}

export default App;
