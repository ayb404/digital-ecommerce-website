export const createcontact = () => ({

    type: "CREATE_QUOTE_START",

})
export const createcontactSuccess = (quote) => ({

    type: "CREATE_QUOTE_SUCCESS",
    payload:  quote

})
export const createcontactFaillure = () => ({

    type: "CREATE_QUOTE_FAILLURE",

})