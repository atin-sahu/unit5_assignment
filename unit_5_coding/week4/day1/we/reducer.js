const reducer = (store,action) =>{

    switch(action.type){
        case Add_Count :  return{...store, counter:store.counter + action.payload};
        case add_std : return{...store, todo:[...store.todo, action.payload] };
        default : return store
    }

    // if(action.type === "Add_Count"){
    //     return{...store, counter:store.counter + action.payload}
    // }
    // if(action.type === "add_todo"){
    //     return{...store, todo:[...store.todo, action.payload] }
    // }

    // return store;
}

export default reducer;