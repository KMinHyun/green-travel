import { useDispatch, useSelector } from 'react-redux';
import './stayDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setStayInfo } from '../../store/slices/stayDetailSlice';

function StayDetail() {
  const stayInfo = useSelector(state => state.stayDetail.stayInfo);
  const stayList = useSelector(state => state.stayList.list);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const item = stayList.find(item => params.id === item.contentid);
    dispatch(setStayInfo(item));
  }, []);

  function redirectBack() {
    navigate(-1);
  }

  return(
    <>
      { stayInfo.title &&
        <div className="detail-container">
          <button type="button" onClick={redirectBack}>되돌아가기</button>
          <p className="detail-title">{stayInfo.title}</p>
          <img src={stayInfo.firstimage} alt={`${stayInfo.title} 사진`} className="detail-img" />
          <p className="detail-address">{`${stayInfo.addr1} ${stayInfo.addr2}`}</p>
          <p className="detail-tel">{`Tel: ${stayInfo.tel}`}</p>
        </div>
        }
    </>
  );
}

export default StayDetail;