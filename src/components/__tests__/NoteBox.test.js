import { mount } from "enzyme";

import NoteBox from "components/Notes/NoteBox";

let wrapped;
// do before each test
beforeEach(() => {
  wrapped = mount(<NoteBox />);
});

afterEach(() => {
  wrapped.unmount();
});
test("has textarea and submit button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

//grouping tests using describe
describe("textarea", () => {
  beforeEach(() => {
    //apply new value to textarea at first
    wrapped
      .find("textarea")
      .simulate("change", { target: { value: "test comment" } });
    //force component re render
    wrapped.update();
  });

  test("has a text area where user can type in", () => {
    //check for textarea value
    // console.log(expect(wrapped.find('textarea').prop('value')))
    expect(wrapped.find("textarea").prop("value")).toEqual("test comment");
  });

  test("after onsubmit textarea becomes empty", () => {
    //expect(wrapped.find('textarea').prop('value')).toEqual('test comment');
    //simulate onsubmit in form
    wrapped.find("form").simulate("submit");
    //force component re-render
    wrapped.update();
    //check for textarea value
    // console.log(expect(wrapped.find('textarea').prop('value')))
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
