const isLoggedReducer = (state = false, action) => {
    switch (action.type) {
        case "LOGIN":
            if (localStorage.getItem("token")) {
                return true;
            }
        default:
            return state;
    }
};

export default isLoggedReducer;
