const Nav = (state = 6, action) => {
    switch (action.type) {
        case "TOJADWAL":
            return 0;
        case "TOABSENSI":
            return 1;
        case "TOPENGUMUMAN":
            return 2;
        case "TOPOST":
            return 3;
        case "TOQUIZ":
            return 4;
        case "TOMATERI":
            return 5;
        default:
            return state;
    }
};

export default Nav;
