import { useDispatch, useSelector } from 'react-redux';
import './StayList.css';
import { useEffect } from 'react';
import { setScrollEventFlg } from '../../store/slices/festivalSlice';
import { stayListIndex } from '../../store/thunks/stayThunk';
import { useNavigate } from 'react-router-dom';

function StayList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const StayList = useSelector(state => state.stayList.list);
  const scrollEventFlg = useSelector(state => state.stayList.scrollEventFlg);

  useEffect(() => {
    window.addEventListener('scroll', addNextPage);
    
    if(StayList.length === 0) {
      dispatch(stayListIndex());
    }

    return () => {
      window.removeEventListener('scroll', addNextPage);
    }
  }, []);

  function addNextPage() {
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const nowHeight = Math.ceil(window.scrollY);
    const showHeight = docHeight - windowHeight;

    if(showHeight === nowHeight && scrollEventFlg) {
      dispatch(setScrollEventFlg(false));
      dispatch(stayListIndex());
    }
  }

  function redirectDetail(item) {
    navigate(`/stays/${item.contentid}`);
  }

  return (
    <>
      <div className="container">
        {
          StayList && StayList.map(item => {
            return (
              <div className="card" onClick={() => {redirectDetail(item)}} key={item.contentid}>
                <div className="card-img" style={{backgroundImage: `url('${item.firstimage}')`}}></div>
                <p className="stay-name">{item.title}</p>
                <p className="stay-address">{item.addr1}</p>
            </div>
            );
          })
        }
      </div>
    </>
  )
}

export default StayList;