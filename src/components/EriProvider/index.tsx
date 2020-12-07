import * as React from "react";

type FluxStandardAction<
  Type extends string,
  Payload = undefined
> = Payload extends undefined
  ? { type: Type }
  : { payload: Payload; type: Type };

type Action =
  | FluxStandardAction<"menu/exists", boolean>
  | FluxStandardAction<"quickNav/height", number>
  | FluxStandardAction<"quickNav/unMount">;

interface IState {
  menuExists: boolean;
  quickNavHeight: number | null; // is only `null` if never set & when unset it will be `0`
  quickNavMounted: boolean;
  renderingToString: boolean;
}

const initialState: IState = {
  menuExists: false,
  quickNavHeight: null,
  quickNavMounted: false,
  renderingToString: false,
};

const stateReducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "menu/exists":
      return { ...state, menuExists: action.payload };
    case "quickNav/height":
      return {
        ...state,
        quickNavHeight: action.payload,
        quickNavMounted: true,
      };
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
  renderingToString?: boolean;
}

export default function EriProvider({
  children,
  renderingToString = false,
}: IProps) {
  const [state, dispatch] = React.useReducer(stateReducer, {
    ...initialState,
    renderingToString,
  });
  return (
    <EriDispatchContext.Provider value={dispatch}>
      <EriStateContext.Provider value={state}>
        {children}
      </EriStateContext.Provider>
    </EriDispatchContext.Provider>
  );
}
