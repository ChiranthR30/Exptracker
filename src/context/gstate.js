import React,{createContext , useReducer} from "react";
import AppReducer from "./AppReducer";

const initState = {
    tranactions : [
        { id:1,text:'Book',amount:-10},
        { id:2,text:'Salary',amount:300},
    ]
}

//Create context

export const GlobalContext = createContext(initState);

//Provider

export const GlobalProvider = ({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initState);


    function deleteTransactions(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload : id
        });
    }

    function addTransactions(tranaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload : tranaction
        });
    }

    return(<GlobalContext.Provider value={{
        tranactions :state.tranactions,
        deleteTransactions,
        addTransactions
    }}>
        {children}
    </GlobalContext.Provider>);
}