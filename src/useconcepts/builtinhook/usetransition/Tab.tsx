import Button from 'react-bootstrap/Button';

export default function Tab({ children, handleClick, isActive }:{ children:(React.ReactElement|String), handleClick:()=>void, isActive:boolean }) {
  return (
    <>
      <Button variant={isActive?"primary":"outline-primary"} onClick={handleClick}>{children}</Button>{' '}
    </>
  );
}
