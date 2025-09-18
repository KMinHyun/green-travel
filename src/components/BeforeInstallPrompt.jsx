import { useEffect, useState } from "react";
import './BeforeInstallPrompt.css';

function BeforeInstallPrompt() {
  const [defferdPrompt, setDefferdPrompt] = useState(null);

  function handleBeforeInstallPrompt(e) {
    e.preventDefault(); // 브라우저가 자동으로 설치 팝업을 띄우는 것을 막아줌

    setDefferdPrompt(e); // 이벤트 객체를 state에 저장(저장 안 하면 사라지기 때문에 나중에 설치 과정을 진행하기 위해 미리 저장)
  } 

  async function handleInstall() {
    if(defferdPrompt) {
      // 설치 다이얼로그 띄우기
      defferdPrompt.prompt();

      // 유저 응답(accepted | dismissed로 옴)을 기다리는 처리(비동기 처리)
      const result = await defferdPrompt.userChoice;

      if(result.outcome === 'accepted') {
        console.log('동의');
      } else {
        console.log('거부');
      }

      // 한번 사용한 prompt 이벤트는 재사용이 불가해서 스테이트를 초기화를 해줘야 함
      setDefferdPrompt(null);
    }
  }

  useEffect(() => {
    // 'beforeinstallprompt' 이벤트
    //    > 브라우저가 '앱 설치가 가능하다'는 조건이 충족되면 발생함(=앱 설치가 안 돼있을 때 +      PWA처럼 앱 설치 가능한 환경일 때)
    //    > 이벤트 객체를 state에 저장해두고 나중에 사용자가 설치 버튼을 눌렀을 때, 설치 과정을 진행하도록 유도할 수 있음
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }
  }, [])

  return(
    <>
      {
        // 설치 가능한 상태(defferdPrompt가 null이 아닐 때 = beforeInstallPrompt가 한번도 실행이 안 된 상태)일 때만 버튼 출력
        defferdPrompt && // <button type="button" onClick={handleInstall}>다운로드</button>
        ( // 사칙연산할 때처럼 여러 ui를 묶어두기 위한 소괄호
          <div className="prompt-container">
            <p className="prompt-info">다운로드 하여 사용할 수 있습니다.</p>
            <button className="prompt-btn" type="button" onClick={handleInstall}>다운로드</button>
          </div>
        )
      }
    </>
  )
}

export default BeforeInstallPrompt;