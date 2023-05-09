import { Provider } from "react-redux";
import App from "./App";
import { store } from "./src/Redux/store";

export default function Router(){
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}