import { useContext } from "react";
import CounterConsumer from "../../useconcepts/context/counterchild/counter-child";
import { CounterContext } from "../../useconcepts/context/countercontext/counter-context";


export default function ReactContext() {
  const { totalCount } = useContext(CounterContext);
  return (
    <>
      <h3>React context</h3>
      Total Count: {totalCount}
      <hr />
      <h4>Counter 1</h4>
      <CounterConsumer name={"counter-1"} />
      <br /><br />
      <h4>Counter 2</h4>
      <CounterConsumer name={"counter-2"} />
    </>
  );
}
