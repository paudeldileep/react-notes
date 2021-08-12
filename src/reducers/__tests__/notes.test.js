import notesReducer from "../notes";
import { ADD } from "../types";

test('ADD action works correctly',()=>{

    //dummy action
    const newAction={
        type:ADD,
        payload:'new test note'
    }

    const newNote= notesReducer([],newAction);
    expect(newNote).toEqual(['new test note']);
})

test('handles unknown action type',()=>{
    const newNote=notesReducer([],'JPT');
    expect(newNote).toEqual([]);
})