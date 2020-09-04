import * as React from "react";

type FluxStandardAction<
  Type extends string,
  Payload = undefined
> = Payload extends undefined
  ? { type: Type }
  : { payload: Payload; type: Type };

type Action =
  | FluxStandardAction<"menu/exists", boolean>
  | FluxStandardAction<"quickNav/height", number>;

interface IState {
  menuExists: boolean;
  quickNavHeight: number | null; // is only `null` if never set & when unset it will be `0`
}

const initialState: IState = {
  menuExists: false,
  quickNavHeight: null,
};

const stateReducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "menu/exists":
      return { ...state, menuExists: action.payload };
    case "quickNav/height":
      return { ...state, quickNavHeight: action.payload };
  }
};

export const DispatchContext = React.createContext<React.Dispatch<Action>>(
  () => {}
);
export const StateContext = React.createContext<IState>(initialState);

interface IProps {
  children: React.ReactNode;
}

export default function EriProvider({ children }: IProps) {
  const [state, dispatch] = React.useReducer(stateReducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}
