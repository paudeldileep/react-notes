//for provider code
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

const Root=(props)=>{
    return(<Provider store={store}>
        {props.children}
    </Provider>)
}

export default Root;

