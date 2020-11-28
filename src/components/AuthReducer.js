
const initalState = {
    token: localStorage.getItem('token'),
    isAllowedToLogin: false,
    errors:{}
}

const authReducer = ( state=initialState, action ) => {
    const {type,payload} = action;
    switch(type){
        default:
            return state;
    }

}

export default authReducer;