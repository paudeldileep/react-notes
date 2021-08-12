import { mount } from "enzyme";

import NotesList from "components/Notes/NotesList";
import Root from "../../Root";

let wrapped;
// do before each test
beforeEach(() => {
    const iniState={
        notes:['test1','test2']
    }
  wrapped = mount(<Root initialState={iniState}><NotesList /></Root>);
});

afterEach(() => {
    wrapped.unmount();
  });

 test('each note has one div',()=>{
    // console.log(wrapped.find('p').length);
     //expect(wrapped).toContainElement()
     expect(wrapped.find('p').length).toEqual(2);
 }) 

 test('shows text in each note',()=>{
    expect(wrapped.render().text()).toContain('test1');
    expect(wrapped.render().text()).toContain('test2');
 })

