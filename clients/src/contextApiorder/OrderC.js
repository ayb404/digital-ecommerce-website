import { createContext } from "react";
import { useReducer } from "react";
import OrderReducer from "./reducer";

const INITIAL_STATE = {
    quote: [],
    isFetching : false,
    error : false ,
};

/// on prend la constante et on creer un context pour l'état initial

export const orderContext = createContext(INITIAL_STATE);

/// le fournisseur

export const  ContextOrderProvider = ({children}) => {


    /// state == les 3 étapes /// initial state tout est inital
    const [state , dispatch] = useReducer(OrderReducer, INITIAL_STATE)

                return (
                    <orderContext.Provider
                         value={{
                        quote : state?.quote,
                        isFetching: state?.isFetching,
                        error: state?.error,
                        dispatch ,
                    }}
                    >
                    {children}
                    </orderContext.Provider>    

                );
}