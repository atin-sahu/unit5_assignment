// action types
const Add_Count = "Add_Count";
const add_std = "addStd";

// action creators
const add_counter = (num)=>{
    return{
        type:Add_Count,
        payload:num,
    }

}

const add_stdudent = (nam,clas)=>{
    return{
        type:add_std,
        payload:{
            name:nam,
            class:clas,
        }
    }

}

export {add_counter, add_stdudent}