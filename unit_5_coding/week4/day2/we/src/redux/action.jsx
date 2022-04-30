export const Add_Count = "Add_Count";
export const Add_Std = "Add_Std";

export const add_counter = (payload)=>{
    return{
        type:Add_Count,
        payload,
    }

}

export const add_stdudent = (nam,clas)=>{
    return{
        type:Add_Std,
        payload:{
            name:nam,
            class:clas,
        }
    }

}
