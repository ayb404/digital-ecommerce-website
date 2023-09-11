const ContactReducer = (state , action ) => {

    switch(action.type) {

        case  "CREATE_QUOTE_START":
            return {
                ...state,// 
                isFetching:true,
                error:false,
            }
            case  "CREATE_QUOTE_SUCCESS":
                return {
                    quote:[...state.quote , action.payload],
                    isFetching:false,
                    error:false,
                }  
                 case "CREATE_QUOTE_FAILLURE":
                return {
                    ...state,
                    isFetching:false,
                    error:true,
                }



    }



}
export default ContactReducer ;