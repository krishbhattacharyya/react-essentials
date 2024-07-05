import { createContext, useState, useMemo } from "react";

interface CounterContextType {
  totalCount: number;
  addCountToContext: (count: number, name: string) => void;
}

const CounterContext = createContext<CounterContextType>({
  totalCount: 0,
  addCountToContext: () => {},
});

function CounterProvider({ children }: { children: React.ReactNode }) {
  const [totalItems, setTotalItems] = useState<any>({});

  const totalCount = useMemo(()=>{
    let initValue = 0;
    for (const key of Object.entries(totalItems)) {
      const value: number = key[1] as number;
      initValue += value;
    }
    return initValue;
  },[totalItems])

  function addCountToContext(count: number, name: string) {
    const updatedObject = { ...totalItems, [name]: count };
    setTotalItems(updatedObject);
  }
  return (
    <>
      <CounterContext.Provider value={{ totalCount, addCountToContext }}>
        {children}
      </CounterContext.Provider>
    </>
  );
}

export { CounterContext, CounterProvider };
