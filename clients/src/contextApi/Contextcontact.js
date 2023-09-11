import { createContext } from "react";
import { useReducer } from "react";
import ContactReducer from "./reducer";

const INITIAL_STATE = {
    quote: [],
    isFetching : false,
    error : false ,
};

/// on prend la constante et on creer un context pour l'état initial

export const ContextContact = createContext(INITIAL_STATE);

/// le fournisseur

export const  ContextContactProvider = ({children}) => {


    /// state == les 3 étapes /// initial state tout est inital
    const [state , dispatch] = useReducer(ContactReducer, INITIAL_STATE)

                return (
                    <ContextContact.Provider
                         value={{
                        quote : state?.quote,
                        isFetching: state?.isFetching,
                        error: state?.error,
                        dispatch ,
                    }}
                    >
                    {children}
                    </ContextContact.Provider>    

                );
}