const dummyUser = {
    nickname: '윤재원',
    id:1,
}

export const initialState = {
    isLoggingOut: false,
    isLoggingIn: false,
    logInErrorReason: '',
    isSignedUp: false,
    isSiginingUp: false,
    signUpErrorReason: '',
    me: null,
    shopList: [],
}
// 회원가입 
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
// 로그인
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름
// 유저 정보 불러오기 
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
// 로그아웃
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export default( state=initialState, action) => {
    switch(action.type) {
        case LOG_IN_REQUEST: {
            return{
                ...state,
                isLoggingIn: true,
                logInErrorReason: '',
            };
        }
        case LOG_IN_SUCCESS: {
            return {
                ...state,
                isLoggingIn: false,
                me: action.data,
            }
        }
        case LOG_IN_FAILURE: {
            return {
                ...state,
                isLoggingIn: false, 
                logInErrorReason: action.errror,
                me: null 
            }
        }
        case LOG_OUT_REQUEST: {
            return {
                ...state,
                isLoggingOut: true,
            }
        }
        case LOG_OUT_SUCCESS: {
            return{
                ...state,
                isLoggingOut: false, 
                me:null
            }
        }
        case LOG_OUT_FAILURE: {
            return {
                ...state,
                isLoggingOut: false,
            }
        }
        case SIGN_UP_REQUEST: {
            return {
                ...state,
                isSigningUp:true,
                isSignedUp: false, 
                signUpErrorReason: '', 
            }
        }
        case SIGN_UP_SUCCESS: {
            return {
                ...state,
                isSiginingUp: false, 
                isSignedUp: true 
            }
        }
        case SIGN_UP_FAILURE: {
            return{
                ...state,
                isSigningUp: false, 
                signUpErrorReason: action.error
            }
        }
        case LOAD_USER_REQUEST: {
            return {
                ...state
            }
        }
        case LOAD_USER_SUCCESS: {
            return {
                ...state,
                me:action.data
            }
        }
        case LOAD_USER_FAILURE: {
            return {
                ...state
            }
        }
    }
}