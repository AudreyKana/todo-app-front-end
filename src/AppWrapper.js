import React from "react";
import App from "./App";
import { store } from "./redux/todoStore";

import { Provider } from "react-redux";

export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
