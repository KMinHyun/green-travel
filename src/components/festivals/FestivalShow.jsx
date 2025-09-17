import { useNavigate, useParams } from "react-router-dom";
import './FestivalShow.css';
import { useDispatch, useSelector } from "react-redux";
import { dateFormatter } from "../../utils/dateFormatterUtil.js";
import { useEffect } from "react";
import { setFestivalInfo } from "../../store/slices/festivalShowSlice";

function FestivalShow() {
  const festivalInfo = useSelector(state => state.festivalShow.festivalInfo);
  const festivalList = useSelector(state => state.festival.list)
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    // show에 info스테이트 저장 => info스테이트에 저장할 값이 필요 = 클릭한 카드의 정보 1개 => 이 정보는 어디서 가져와야 하는데, 이 정보 1개는 전체 리스트 정보에 있는 것 중에 1개 => 전체 리스트 정보는 festivalSlice.festivalList에 있음. 이걸 show에 가져와야 함 => 클릭한 카드의 정보를 특정할 수 있는 값이 있어야 하는데, 이게 segment parameter에 있음 => 갖고 와서 쓰려면 변수에 담아야 함
    const item = festivalList.find(item => params.id === item.contentid);
    dispatch(setFestivalInfo(item));
  }, []);

  function redirectBack() {
    navigate(-1);
  }

  return (
    <>
      {/* 객체가 비어 있는 상태에서 출력하려고 하면 안 되기 때문에 조건부 렌더링을 넣어줌 */}
      { festivalInfo.title && 
        <div className="show-container">
          <button type="button" onClick={redirectBack}>되돌아가기</button>
          <p className="show-title">{festivalInfo.title}</p>
          <p className="show-period">{dateFormatter.withHyphenYMD(festivalInfo.eventstartdate)} ~ {dateFormatter.withHyphenYMD(festivalInfo.eventenddate)}</p>
          <img className="show-img" src={festivalInfo.firstimage} alt={`${festivalInfo.title} 사진`}/>
          <p className="show-addr">{`${festivalInfo.addr1}, ${festivalInfo.addr2}`}</p>
        </div>
       } 
    </>
  )
}

export default FestivalShow;