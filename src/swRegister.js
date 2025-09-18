const swRegister = () => {
  if('serviceWorker' in navigator) {
    // A in B => B란 배열 안에 A 값이 있는지
    navigator.serviceWorker
      .register(
        '/sw.js', // 서비스 워커 경로
        {
          scope: '/'
        }
      )
      .then(registration => {
        console.log('서비스 워커 등록 성공', registration);
      })
      .catch(err => {
        console.error('서비스 워커 등록 실패', err);
      });
  }
}

export default swRegister;