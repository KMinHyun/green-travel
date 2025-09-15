import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { festivalIndex } from '../../store/thunks/festivalThunk.js';
import './FestivalList.css';
import { dateFormatter } from '../../utils/dateFormatterUtil.js';
import { setScrollEventFlg } from '../../store/slices/festivalSlice.js';

function FestivalList() {
  const dispatch = useDispatch();

  const FestivalList = useSelector(state => state.festival.list);
  const page = useSelector(state => state.festival.page);
  const scrollEventFlg = useSelector(state => state.festival.scrollEventFlg);

  // 스크롤 이벤트 처리를 위한 useEffect
  useEffect(() => {
    dispatch(festivalIndex(1));
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', addNextPage); // 윈도우(브라우저)에서 작동하는 거라 List 페이지를 벗어나서도 작동함

    return () => {
      window.removeEventListener('scroll', addNextPage); // List페이지에서만 작동하도록 제거 필수
    }
  }, [page, scrollEventFlg]);

  // 다음 페이지 가져오기
  function addNextPage() {
    // 스크롤 이벤트 처리
    const docHeight = document.documentElement.scrollHeight; // 문서의 y축 총 길이
    const winHeight = window.innerHeight; // 윈도우(창)의 y축 총 길이
    const nowHeight = window.scrollY; // 현재 스크롤 y축 위치
    const viewHeight = docHeight - winHeight; // 스크롤을 끝까지 내렸을 때의 y축 위치

    if(viewHeight === nowHeight && scrollEventFlg) {
      dispatch(setScrollEventFlg(false))
      dispatch(festivalIndex(page +1));
    }
    // dispatch(festivalIndex(page +1));
  }

  return (
    <>
      <div className="container">
        {
          FestivalList && FestivalList.map(item => {
            return (
              <div className="card" key={item.contentid}>
                <div className="card-img" style={{backgroundImage: `url('${item.firstimage}')`}}></div>
                <p className="card-title">{item.title}</p>
                <p className="card-period">{dateFormatter.withHyphenYMD(item.eventstartdate)} ~ {dateFormatter.withHyphenYMD(item.eventenddate)}</p>
              </div>
            );
          })
        }
        <button type="button" onClick={addNextPage}>더보기</button>
        {/* <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">25-09-01 ~ 25-09-10</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">25-09-01 ~ 25-09-10</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">25-09-01 ~ 25-09-10</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">25-09-01 ~ 25-09-10</p>
        </div> */}
      </div>
    </>
  )
}

export default FestivalList;