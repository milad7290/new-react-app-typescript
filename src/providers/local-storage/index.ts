import {
  ACCESS_TOKEN,
  RESERVATION_PREVIEW,
  USER_ID,
  USER_TOKEN_TTL,
  USER_TYPE,
} from "./local-storage-keys";

const getAccessToken = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);

  return token;
};

const getUserId = () => {
  const userId = localStorage.getItem(USER_ID);

  return userId;
};

const getUserType = () => {
  const userType = localStorage.getItem(USER_TYPE);

  return userType;
};

const getTtl = () => {
  const ttl = localStorage.getItem(USER_TOKEN_TTL);

  return ttl;
};

const getReservationPreview = () => {
  const reservationData = localStorage.getItem(RESERVATION_PREVIEW) || "";

  return JSON.parse(reservationData);
};

const setLocalStorage = ({ data }: any) => {
  if (data && data.accessToken) {
    localStorage.setItem(ACCESS_TOKEN, data.accessToken);
    localStorage.setItem(USER_ID, data.userId);
    localStorage.setItem(USER_TOKEN_TTL, data.ttl);
    localStorage.setItem(USER_TYPE, data.userType);
  } else {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_TOKEN_TTL);
    localStorage.removeItem(USER_TYPE);
  }
};

const setReservationPreview = ({ data }: any) => {
  if (data) {
    localStorage.setItem(RESERVATION_PREVIEW, JSON.stringify(data));
  } else {
    localStorage.removeItem(RESERVATION_PREVIEW);
  }
};

export {
  getAccessToken,
  getUserId,
  getUserType,
  getTtl,
  setLocalStorage,
  setReservationPreview,
  getReservationPreview,
};
