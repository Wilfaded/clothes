export const NAME = "NAME";
export const DEV = "DEV";
export const NUMBER_REP = "NUMBER_REP";
export const NAME_MAT = "NAME_MAT";
export const NUMBER_MAT = "NUMBER_MAT";
export const NAME_MAT_LAST = "NAME_MAT_LIST";
export const NUMBER_TAB = "NUMBER_TAB";
export const AKT_GET = "AKT_GET";
export const DATE_GET = "DATE_GET";
export const DATE_GIVE = "DATE_GIVE";
export const COUNT_GIVE = "COUNT_GIVE";


export const name = payload => {
    return {
        type: NAME,
        payload,
    };
};

export const dev = payload => {
    return {
        type: DEV,
        payload,
    };
};

export const numberRep = payload => {
    return {
        type: NUMBER_REP,
        payload,
    };
};

export const nameMat = payload => {
    return {
        type: NAME_MAT,
        payload,
    };
};

export const numberMat = payload => {
    return {
        type: NUMBER_MAT,
        payload,
    };
};

export const nameMatLast = payload => {
    return {
        type: NAME_MAT_LAST,
        payload,
    };
};

export const numberTab = payload => {
    return {
        type: NUMBER_TAB,
        payload,
    };
};

export const aktGet = payload => {
    return {
        type: AKT_GET,
        payload,
    };
};

export const dateGet = payload => {
    return {
        type: DATE_GET,
        payload,
    };
};

export const dateGive = payload => {
    return {
        type: DATE_GIVE,
        payload,
    };
};

export const countGive = payload => {
    return {
        type: COUNT_GIVE,
        payload,
    };
};
