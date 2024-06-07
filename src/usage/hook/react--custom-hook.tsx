import {useRef} from 'react';
import useLocalStorage from "../../useconcepts/hook/uselocalstorage/use-local-storage";
import useFetch from "../../useconcepts/hook/usefetch/use-fetch";
import useDebounce from "../../useconcepts/hook/usedebounce/use-debounce";



export default function ReactCustomHooks() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [type, setType] = useLocalStorage("name", "");
  const { loading, data, error, handleFetch } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const { val, setValue} = useDebounce();

  console.log("val", val)
  console.log("data", data)

  function refHandleChange(e:React.ChangeEvent<HTMLInputElement>){
    setValue(e.currentTarget.value)
  }

  if (loading) {
    return <div>Loading.....</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h3>React custom hooks</h3>
      <h4>Use local storage hook</h4>
      <input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <h4>Use fetch</h4>
      {data.map((item: any) => (
        <div key={item.id}>{item.title}</div>
      ))}
      <button onClick={handleFetch}>Refetch</button>
      <h4>Use debounce</h4>
      <input type="text" ref={inputRef} onChange={refHandleChange}  />
    </>
  );
}
