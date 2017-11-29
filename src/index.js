// @flow
import * as React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
// import { DragDropContext } from "react-dnd"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import reducers from "./reducers"
import App from "./components/App"
// import registerServiceWorker from './registerServiceWorker';

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
export default class _App extends React.Component<*> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export class AppWithProvider extends React.Component<*> {
  render() {
    return (
      <MuiThemeProvider>
        <_App />
      </MuiThemeProvider>
    )
  }
}

// ReactDOM.render(<AppWithProvider />, document.getElementById("root"))
// registerServiceWorker();
