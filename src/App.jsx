import Header from './components/common/Header';
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { localStorageUtil } from './utils/localStorageUtil.js';
import { dateFormatter } from './utils/dateFormatterUtil.js';
import { useEffect } from 'react';
import BeforeInstallPrompt from './components/BeforeInstallPrompt.jsx';

function App() {

  //   >오늘 날짜랑 비교
  //    >>날짜가 과거면 로컬 스토리지 및 스테이트 초기화
  //    >>아직 과거가 아니면 패스
  useEffect(() => {
    // 여기저기 쓰일 예정이므로 App에다가 작성
    // 로컬 스토리지에 저장된 날짜를 획득
    const clearDate = localStorageUtil.getClearDate();
    const nowDate = dateFormatter.formatDateToYMD(new Date());

    // 로컬 스토리지의 날짜와 오늘 날짜가 다를 경우
    if(clearDate !== nowDate) {
      localStorageUtil.clearLocalStorage();
      localStorageUtil.setClearDate(nowDate);
      
      // state가 초기화 되지 않는 현상을 해결하기 위해, 강제로 화면 새로고침
      window.location.reload(); // <= 화면 새로고침 = state 초기화가 목적
    }
  }, []);
    
  return (
    <>
      <BeforeInstallPrompt />
      <Header></Header>
      <main>
        <Outlet />
      </main>

      {/* 스크롤 초기화, 최상위 컴포넌트에 한번만 추가하면 됨 */}
      <ScrollRestoration></ScrollRestoration>
    </>
  )
}

export default App
