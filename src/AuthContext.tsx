import * as React from "react";

export interface AuthState {
  token?: string | null;
}

export interface AuthContextType {
  authState: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

export const AuthContext = React.createContext<AuthContextType>({
  authState: { token: null },
  dispatch: () => {}
});

export const loggedInAction = (token: string) =>
  ({
    type: "loggedIn",
    token
  } as const);

export const loggedOutAction = () =>
  ({
    type: "loggedOut"
  } as const);

export type AuthAction = ReturnType<
  typeof loggedInAction | typeof loggedOutAction
>;
