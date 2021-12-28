import * as React from "react";

type FluxStandardAction<
  Type extends string,
  Payload = undefined
> = Payload extends undefined
  ? { type: Type }
  : { payload: Payload; type: Type };

type Action = FluxStandardAction<"quickNav/height", number>;

interface IState {
  quickNavHeight: number | null; // is only `null` if never set & when unset it will be `0`
}

const initialState: IState = {
  quickNavHeight: null,
};

const stateReducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "quickNav/height":
      return { ...state, quickNavHeight: action.payload };
  }
};

export const EriDispatchContext = React.createContext<React.Dispatch<Action>>(
  () => {}
);
export const EriStateContext = React.createContext<IState>(initialState);

interface IProps {
  children: React.ReactNode;
}

export default function EriProvider({ children }: IProps) {
  const [state, dispatch] = React.useReducer(stateReducer, initialState);
  return (
    <EriDispatchContext.Provider value={dispatch}>
      <EriStateContext.Provider value={state}>
        {children}
      </EriStateContext.Provider>
    </EriDispatchContext.Provider>
  );
}
