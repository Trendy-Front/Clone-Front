export const UPDATE_USER_INFO = "UPDATE_USER_INFO";

export const updateUserInfo = (userInfo) => ({
    type: UPDATE_USER_INFO,
    payload: userInfo,
});

const initialState = {
    email: "",
    name: "",
    phone: "",
    password: "",
};

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_INFO:
            console.log("signUpReducer 실행됨");
            console.log(action.payload);
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default signUpReducer;
