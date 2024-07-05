import { useReducer } from "react";

enum CountActionKind {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}

interface CountActionType {
  type: CountActionKind;
  payload?: number;
}

interface CountStateType {
  count: number;
}

function countReducer(countState: CountStateType, action: CountActionType) {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...countState,
        count: countState.count + 1,
      };
    case CountActionKind.DECREASE:
      return {
        ...countState,
        count: payload ? countState.count - payload : countState.count,
      };
    default:
      return countState;
  }
}

export default function UseReducerExample() {
  const [countState, countDispatch] = useReducer(countReducer, { count: 0 });
  
  return (
    <>
      Use Reducer {countState.count}
      <button onClick={() => countDispatch({ type: CountActionKind.INCREASE })}>
        Increament
      </button>
      <button
        onClick={() =>
          countDispatch({ type: CountActionKind.DECREASE, payload: 1 })
        }
      >
        Decreament by 1
      </button>
      <button
        onClick={() =>
          countDispatch({ type: CountActionKind.DECREASE, payload: 2 })
        }
      >
        Decreament by 1
      </button>
    </>
  );
}
