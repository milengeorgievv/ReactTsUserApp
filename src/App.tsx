import { AuthContext, AuthState, AuthAction } from "./AuthContext";
import { LoggedScreen } from "./LoggedScreen";
import { LoginScreen } from "./LoginScreen";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export default function App() {
  const [authState, dispatch] = useReducer(reducer, { token: null });
  const { token } = authState;

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      <>
        <Router>
          <Switch>
            <Route path="/loginscreen">
              {token !== null ? <Redirect to="/" /> : <LoginScreen />}
            </Route>
            <Route path="/">
              {token !== null ? (
                <LoggedScreen />
              ) : (
                <Redirect to="/loginscreen" />
              )}
            </Route>
          </Switch>
        </Router>
      </>
    </AuthContext.Provider>
  );
}

export function reducer(authState: AuthState, action: AuthAction) {
  switch (action.type) {
    case "loggedOut":
      return { ...authState, token: null };
    // return Object.assign({}, authState, { token: null });
    case "loggedIn":
      return { ...authState, token: action.token };
    default:
      return authState;
  }
}
