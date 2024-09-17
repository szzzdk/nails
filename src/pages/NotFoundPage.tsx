import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <>
      <div>404 Not Found</div>
      <Link to="/">Home from Link</Link>
    </>
  );
};