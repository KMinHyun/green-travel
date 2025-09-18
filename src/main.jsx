// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './routes/Router.jsx'
import { Provider } from 'react-redux';
import store from './store/store.js';
import './index.css'
import swRegister from './swRegister.js';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Router />
    </Provider>
);

swRegister(); // 커스텀 서비스 워커 등록