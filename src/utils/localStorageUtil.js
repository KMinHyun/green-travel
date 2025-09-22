import { KEY_LOCALSTORAGE_CLEAR_DATE, KEY_LOCALSTORAGE_FESTIVAL_FLG, KEY_LOCALSTORAGE_FESTIVAL_LIST, KEY_LOCALSTORAGE_FESTIVAL_PAGE, KEY_LOCALSTORAGE_STAY_FLG, KEY_LOCALSTORAGE_STAY_LIST, KEY_LOCALSTORAGE_STAY_PAGE } from "../configs/keys.js";

export const localStorageUtil = {
  // 책임 중심적 설계시 코드 작성 방법 <= 테스트가 쉬움, 코드 중복이 늘어남. key를 하나하나 세팅해줘야 됨.
  clearLocalStorage: () => {
    localStorage.clear();
  },

  /**
   * 로컬 스토리지에 페스티벌 리스트 저장
   * @param {[]} festivalList 
   */
  setFestivalList: (data) => {
    localStorage.setItem(KEY_LOCALSTORAGE_FESTIVAL_LIST, JSON.stringify(data));
  }, // festivalList를 세팅하는 책임을 짐
  /**
   * 로컬 스토리지의 페스티벌 리스트 반환
   * @returns {[]} festivalList
   */
  getFestivalList: () => {
    return JSON.parse(localStorage.getItem('festivalList'));
  },

  /**
   * 로컬스토리지에 스테이리스트 저장
   * @param {[*]} stayList 
   */
  setStayList: (data) => {
    localStorage.setItem(KEY_LOCALSTORAGE_STAY_LIST, JSON.stringify(data));
  },
  /**
   * 로컬스토리지의 스테이리스트 반환
   * @returns {[]} stayList
   */
  getStayList: () => {
    return JSON.parse(localStorage.getItem('stayList'));
  },

  /**
   * 로컬 스토리지에 페스티벌 페이지 번호 저장
   * @param {number} pageNo 
   */
  setFestivalPage: (pageNo) => {
    localStorage.setItem(KEY_LOCALSTORAGE_FESTIVAL_PAGE, pageNo.toString());
  },
  /**
   * 로컬 스토리지의 페스티벌 페이지 번호 반환
   * @returns {number} 페이지 번호
   */
  getFestivalPage: () => {
    return parseInt(localStorage.getItem(KEY_LOCALSTORAGE_FESTIVAL_PAGE));
  },
  
  /**
   * 로컬 스토리지에 스테이리스트 페이지 번호 저장
   * @param {number} pageNo 
   */
  setStayListPage: (pageNo) => {
    localStorage.setItem(KEY_LOCALSTORAGE_STAY_PAGE, pageNo.toString());
  },
  /**
   * 로컬 스토리지의 스테이리스트 페이지 번호 반환
   * @returns {number} 페이지 번호
   */
  getStayListPage: () => {
    return parseInt(localStorage.getItem(KEY_LOCALSTORAGE_STAY_PAGE));
  },

  /**
   * 로컬 스토리지에 페스티벌 스크롤 플래그 저장
   * @param {boolean} flg 
   */
  setFestivalScrollFlg: (flg) => {
    localStorage.setItem(KEY_LOCALSTORAGE_FESTIVAL_FLG, flg.toString());
  },
  /**
   * 로컬 스토리지에 페스티벌 스크롤 플래그 반환
   * @returns {boolean} flg
   */
  getFestivalScrollFlg: () => {
    return JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE_FESTIVAL_FLG));
  },
  
  /**
   * 로컬 스토리지에 스테이리스트 스크롤 플래그 저장
   * @param {boolean} flg 
   */
  setStayListScrollFlg: (flg) => {
    localStorage.setItem(KEY_LOCALSTORAGE_STAY_FLG, flg.toString());
  },
  /**
   * 로컬 스토리지에 스테이리스트 스크롤 플래그 반환
   * @returns {boolean} flg
   */
  getStayListScrollFlg: () => {
    return JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE_STAY_FLG));
  },

  /**
   * 로컬 스토리지에 로컬 스토리지 클리어 날짜 저장
   * @param {string} dateYMD 
   */
  setClearDate: (dateYMD) => {
    localStorage.setItem(KEY_LOCALSTORAGE_CLEAR_DATE, dateYMD);
  },
  /**
   * 로컬 스토리지의 로컬 스토리지 클리어 날짜를 반환
   * @returns {string | null}
   */
  getClearDate: () => {
    return localStorage.getItem(KEY_LOCALSTORAGE_CLEAR_DATE);
  }
  // 역할 중심적 설계시 코드 작성 방법
//   setLocalStorage: (key, data) => {
//     localStorage.setItem(key, JSON.stringify(data));
//   },
//   getLocalStorage: (key) => {
//     return localStorage.getItem(key);
//   }
}