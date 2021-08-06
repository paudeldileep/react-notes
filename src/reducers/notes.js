import { ADD, DELETE } from "./types";

const notesReducer=(state=[],action)=>{
    switch(action.type){
        case ADD:
            return [...state,action.payload];
        case DELETE:
            
            const newState= state.filter((note,index)=>index !== action.payload);
            return [...newState];
            
        default:
            return state;
    }
}

export default notesReducer;