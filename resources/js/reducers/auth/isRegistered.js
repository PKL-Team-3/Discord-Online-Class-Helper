const isRegisterReducer = (state = false, action) => {
    switch (action.type) {
        case "REGISTER":
            return true;
        default:
            return state;
    }
};

export default isRegisterReducer;
