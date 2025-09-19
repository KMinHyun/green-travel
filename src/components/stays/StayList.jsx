import { useDispatch, useSelector } from 'react-redux';
import './StayList.css';

function StayList() {
  const dispatch = useDispatch();
  
  const StayList = useSelector(state => state.stayList.list);

  return (
    <>
      <div className="container">
        {
          StayList && StayList.map(item => {
            return (
              <div className="card" key={item.contentid}>
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