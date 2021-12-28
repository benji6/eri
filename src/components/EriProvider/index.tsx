import * as React from "react";

type FluxStandardAction<
  Type extends string,
  Payload = undefined
> = Payload extends undefined
  ? { type: Type }
  : { payload: Payload; type: Type };

type Action =
  | FluxStandardAction<"quickNav/height", number>
  | FluxStandardAction<"quickNav/mount">
  | FluxStandardAction<"quickNav/unMount">;

interface IState {
  quickNavHeight: number | null; // is only `null` if never set & when unset it will be `0`
  quickNavMounted: boolean;
}

const initialState: IState = {
  quickNavHeight: null,
  quickNavMounted: false,
};

const stateReducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "quickNav/height":
      return { ...state, quickNavHeight: action.payload };
    case "quickNav/mount":
      return { ...state, quickNavMounted: true };
    case "quickNav/unMount":
      return { ...state, quickNavHeight: 0, quickNavMounted: false };
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
