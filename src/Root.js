//for provider code
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

//const store = createStore(reducers,{});

const Root=({children,initialState={} })=>{
    return(<Provider store={createStore(reducers,initialState)}>
        {children}
    </Provider>)
}

export default Root;

