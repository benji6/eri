import * as React from "react";

type FluxStandardAction<
  Type extends string,
  Payload = undefined
> = Payload extends undefined
  ? { type: Type }
  : { payload: Payload; type: Type };

type Action = FluxStandardAction<"menu/exists", boolean>;

interface IState {
  menuExists: boolean;
}

const initialState: IState = {
  menuExists: false,
};

const stateReducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "menu/exists":
      return { ...state, menuExists: action.payload };
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
