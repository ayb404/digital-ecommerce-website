
import React, { createContext, useReducer , useEffect, useState} from 'react'




export const Cartcontext = createContext();
export const Context = (props)  => {  

    const initialState = localStorage.getItem("localStorageKey")
    ? JSON.parse(localStorage.getItem("localStorageKey"))
    : [];
      
    const reducer=(state, action) => {
 
        switch(action.type){
            case "ADD":
                const existingItemIndex = state.findIndex((value) => value._id === action.payload._id); // retunr -1 or 0

                // -1 if the product not exist in the state
                // 0 if the product already exists

                console.log(state)

                if (existingItemIndex !== -1) {
                    // Product already exists in the state
                    const updatedState = [...state];
                    updatedState[existingItemIndex].quantityProduct += 1;
                  
                    // Check if quantityProduct exceeds Quantity
                    if (updatedState[existingItemIndex].quantityProduct > updatedState[existingItemIndex].Quantity) {
                      updatedState[existingItemIndex].quantityProduct = updatedState[existingItemIndex].Quantity;
                    }
                  
                    // Update localStorage
                    try {
                      localStorage.setItem("localStorageKey", JSON.stringify(updatedState));
                    } catch (error) {
                      console.error("Error saving state to localStorage:", error);
                    }
                  
                    return updatedState;
                  } else if (action.payload.Quantity > 0) {
                    // Product does not exist in the state, add it
                    const newState = [...state, { ...action.payload, quantityProduct: 1 }];
                  
                    // Update localStorage
                    try {
                      localStorage.setItem("localStorageKey", JSON.stringify(newState));
                    } catch (error) {
                      console.error("Error saving state to localStorage:", error);
                    }
                  
                    return newState;
                  } else if (action.payload.Quantity === 0) {
                    // Quantity is 0, show the modal
                    props.setIsModalOpen(true);
                  }
                  
              
              

                case "INCREASE":
                    const existingItemIndex1 = state.findIndex((value) => value._id === action.payload.id);

                    console.log(state)
                    if (existingItemIndex1 !== -1) {
                      const increasedState = [...state];
                        
                      if (increasedState[existingItemIndex1].quantityProduct < increasedState[existingItemIndex1].Quantity) {
                        increasedState[existingItemIndex1].quantityProduct += 1;
                      }
                  
                      try {
                        localStorage.setItem("localStorageKey", JSON.stringify(increasedState));
                      } catch (error) {
                        console.error("Error saving state to localStorage:", error);
                      }
                  
                      return increasedState;
                    }
                  
                    return state;
                  
                  
                  
                  case "DECREASE":
                    const decreaseIndex = state.findIndex((value) => value._id === action.payload._id);
                    if (decreaseIndex !== -1) {
                      const decreasedState = [...state];
                      if (decreasedState[decreaseIndex].quantityProduct > 0) {
                        decreasedState[decreaseIndex].quantityProduct -= 1;
                      }
                      return decreasedState;
                    }
                    return state;
                  

            case "REMOVE":
                case "REMOVE":
                    const updatedState = state.filter((item) => item._id !== action.payload._id);
                    
                    try {
                      localStorage.setItem("localStorageKey", JSON.stringify(updatedState));
                    } catch (error) {
                      console.error("Error saving state to localStorage:", error);
                    }
                    
                    return updatedState;
                
                 
            default: 
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer ,initialState)

    useEffect(() => {
        localStorage.setItem("localStorageKey", JSON.stringify(state));
      }, [state]);

    const info = {state , dispatch};

    return (
         <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
    )
};
