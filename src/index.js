// @flow
import * as React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
// import { DragDropContext } from "react-dnd"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import injectTapEventPlugin from "react-tap-event-plugin"
import reducers from "./reducers"
import App from "./components/App"
// import registerServiceWorker from './registerServiceWorker';

// allow the prop onTouchTap to be used on React components
injectTapEventPlugin()

// setup the store
const store: Object = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

/* render the application to the page. 
   MuiThemeProvider is a dependency for Material-UI components. 
   Provider allows the store to be accessed by our React components.
*/
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
)
// registerServiceWorker();
