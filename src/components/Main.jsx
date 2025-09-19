import { useNavigate } from 'react-router-dom';
import './Main.css';



function Main() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="img-and-title-box">
          <img className='title-img' onClick={() => { navigate('/festivals') }} src='/base/traditional_village_1.png' alt="대문" />
          <p className="festival-list-link" onClick={() => { navigate('/festivals') }}>축제 리스트</p>
        </div>
        <div className="img-and-title-box">
          <img className='title-img' onClick={() => { navigate('/stays') }} src='/base/traditional_village_1.png' alt="대문" />
          <p className="stay-list-link" onClick={() => { navigate('/stays') }}>숙소 리스트</p>
        </div>
      </div>
    </>
  )
}

export default Main;