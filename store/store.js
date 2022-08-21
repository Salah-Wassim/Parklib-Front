import { createStore } from "redux";

import reducer from "./parking/reducer";

const store = createStore(reducer)

export default store;