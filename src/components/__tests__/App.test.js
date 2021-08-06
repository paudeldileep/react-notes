//import { render, screen } from '@testing-library/react';

import {shallow} from 'enzyme';
import App from 'App';
import NoteBox from 'components/Notes/NoteBox';
import NotesList from 'components/Notes/NotesList';

let wrapped;
// do before each test
beforeEach(()=>{
    wrapped=shallow(<App/>);
})

test('shows Note Box', () => {
   expect (wrapped.find(NoteBox).length).toEqual(1);
});

test('shows notes list',()=>{
   expect (wrapped.find(NotesList).length).toEqual(1);
});
