export const createorder = () => ({

    type: "CREATE_QUOTE_START",

})
export const createorderSuccess = (quote) => ({

    type: "CREATE_QUOTE_SUCCESS",
    payload:  quote

})
export const createorderFaillure = () => ({

    type: "CREATE_QUOTE_FAILLURE",

})