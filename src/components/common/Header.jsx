import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <h1><span className="Header-title" onClick={() => { navigate('/') }}>Green Travel</span></h1>
    </>
  )
}

export default Header;