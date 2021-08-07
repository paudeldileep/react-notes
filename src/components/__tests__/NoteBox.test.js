import { mount } from "enzyme";

import NoteBox from "components/Notes/NoteBox";
import Root from "../../Root";

let wrapped;
// do before each test
beforeEach(() => {
  wrapped = mount(<Root><NoteBox /></Root>);
});

afterEach(() => {
  wrapped.unmount();
});
test("has textarea and submit button", () => {
  expect(wrapped.find("input").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

//grouping tests using describe
describe("input area", () => {
  beforeEach(() => {
    //apply new value to textarea at first
    wrapped
      .find("input")
      .simulate("change", { target: { value: "test comment" } });
    //force component re render
    wrapped.update();
  });

  test("has a input field where user can type in", () => {
    //check for textarea value
    // console.log(expect(wrapped.find('textarea').prop('value')))
    expect(wrapped.find("input").prop("value")).toEqual("test comment");
  });

  test("after onsubmit input field becomes empty", () => {
    //expect(wrapped.find('textarea').prop('value')).toEqual('test comment');
    //simulate onsubmit in form
    wrapped.find("form").simulate("submit");
    //force component re-render
    wrapped.update();
    //check for textarea value
    // console.log(expect(wrapped.find('textarea').prop('value')))
    expect(wrapped.find("input").prop("value")).toEqual("");
  });
});
