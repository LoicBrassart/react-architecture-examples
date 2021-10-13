import './style.css';

export default function Wilder({ name, cursus }) {
  return (
    <>
      <h2>{name}</h2>
      <p>Studies {cursus}</p>
    </>
  );
}
