import { type } from '@testing-library/user-event/dist/type';
import React, { useContext, useEffect, useReducer } from 'react'
import data from './data';
import  reducer  from './reducer';
const AppContext = React.createContext();
let initialstate ={
    loading:false,
    cart:data,
    total:0,
    amount:0
}
 const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialstate);
console.log(state);
    const clearItem =()=>{
       return  dispatch({type:"clearit"});
    }

    const clearsingleitem = (id)=>{
      return dispatch({type:"clearsingle",playLoad:id});
    } 

    const increase =(id)=>{
        return(dispatch({type:"increaseitem",playLoad:id}))
    }
    const decrease =(id)=>{
        return(dispatch({type:"decreaseitem",playLoad:id}))
    }

    const Another = (id,typ)=>{
        return dispatch({type:"another",playLoad:{id,type:typ}})
    }

    useEffect(()=>{
        dispatch({type:"total"})
    },[state.cart]);
  return ( 
    <AppContext.Provider
    value={{
        ...state,
        clearItem,
        clearsingleitem,
        increase,
        decrease,
        Another
    }}
    >
        {children}
    </AppContext.Provider>
  )
}
export  {AppProvider,AppContext};

 
const useGlobalContext =()=>{
    return useContext(AppContext);
}
export {useGlobalContext}