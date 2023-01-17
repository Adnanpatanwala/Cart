 

 const reducer = (state,action) => {
    if(action.type==="clearit"){
      console.log("c");
        return {...state,cart:[]};
    }

    if(action.type==="clearsingle"){
       
      return {...state,cart:state.cart.filter((items)=>items.id !==action.playLoad)};
    } 

    if(action.type==="increaseitem"){
      let temp = state.cart.map((items)=>{
      if(items.id===action.playLoad){
       return {...items,amount:items.amount+1};
      }
      return items;
    })
      return {...state,cart:temp}
    }

    if(action.type==="decreaseitem"){
      let temp = state.cart.map((items)=>{
      if(items.id===action.playLoad){
       return {...items,amount:items.amount-1};
      }
      return items;
    }).filter((items)=>items.amount !==0)
      return {...state,cart:temp}
    }

    if(action.type==="total"){
      let {total,count} = state.cart.reduce(
        (obj,curr)=>{ 
          let {price,amount} = curr;
          obj.count += amount;
          obj.total += price*amount;
          return obj;
      },{total:0,count:0})
       total =  parseFloat(total.toFixed(2));
      return {...state,total,count}
    }

    if(action.type==="another"){
       let temp  = state.cart.map((items)=>{
        if(items.id=== action.playLoad.id){
          if(action.playLoad.type==='inc'){
            return {...items,amount:items.amount+1}
          }
          if(action.playLoad.type==='dec'){
            return {...items,amount:items.amount-1}
          }
        }
        return items;
        
       }).filter((items)=>items.amount !==0)
       return{...state,cart:temp}
    }
 
  return (state);
}

export default reducer;