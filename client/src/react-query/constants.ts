export const queryKeys = {
  keyList : "keyList",
  keyInfo: "keyInfo",
  histoy : "history",
  strategy : "strategy",
  overview : "overview",
  alertStrategy: "alertStrategy",
  openStrategy: "openStrategy",
  user: "user",
  binance : "binance",
  upbit : "upbit",
}
export const COMMON_ERROR = {
  SERVER_404: "서버에 연결할 수 없습니다."
}
export const USER_INFO = {
  CANNOT_GET: '유저 정보를 받아 오는데 실패했습니다.'
}
export const AUTH_ERROR_MESSAGE = {
  WRONG_USERINFO: '이메일과 패스워드를 다시 확인해주세요',
  CANNOT_SIGN_IN: '로그인에 실패하였습니다. 잠시 후 다시 시도해주세요',
  CANNOT_SIGN_UP: '회원 가입에 실패하였습니다. 계정 정보를 다시 확인해주세요',
  NEED_SIGN_IN: '로그인이 필요합니다',
};
export const GOOGLE_AUTH_ERROR_MESSAGE = {
  EMAIL_CONFLICT: '일반 로그인으로 이미 가입된 이메일입니다'
}
export const HISTORY_ERROR_MESSAGE = {
  CANNOT_LOAD: '거래 기록을 불러오는데, 실패하였습니다',
  CANNOT_FOUND: '거래 내역이 없습니다'
}
export const APIKEY_ERROR_MESSAGE = {
  CANNOT_GET: 'API Key를 불러 오는데, 실패하였습니다',
  CANNOT_CREATE: 'API Key를 생성하는데 실패하였습니다',
  DUPLICATION : '이미 등록된 Label 혹은 API Key입니다',
  UNVALID_KEY : '유효하지 않은 API Key입니다',
  CANNOT_DELETE : '삭제할 API Key를 찾을 수 없습니다',
  CANNOT_PERMISSION : '해당 Key의 권한 / IP를 설정을 확인해주세요.'
}
export const MUTATE_SUCCESS_MESSAGE = {
  CREATE_API_KEY : 'API Key가 성공적으로 등록되었습니다',
  DELETE_API_KEY : '해당 API Key가 삭제되었습니다.',
  ADD_SUBSCRIBE: '선택한 API Key로 전략을 구독하였습니다.',
  SIGN_OUT : '로그아웃 되었습니다.',
  OPEN_STRATEGY: '선택한 전략이 공개 되었습니다.',
  CLOSE_STRATEGY: '선택한 전략이 비공개 되었습니다',
  EDIT_STRATEGY: '선택한 전략이 수정되었습니다.',
  DELETE_STRATEGY: '선택한 전략이 삭제되었습니다.',
}