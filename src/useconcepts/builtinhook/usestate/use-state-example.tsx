import React, { useState, useCallback, ReactEventHandler } from "react";
import ToDoList from "./todo-list";

export type ToDosType = {
  id: number;
  task: string;
  time: Object;
};
const initTodos: Array<ToDosType> = [
  {
    id: 1111,
    task: "Should visit on Ram's house",
    time: new Date("2024-06-13T03:24:00"),
  },
  {
    id: 1112,
    task: "Should go market",
    time: new Date("2024-06-13T05:24:00"),
  },
  {
    id: 1113,
    task: "Should go tution",
    time: new Date("2024-07-13T01:24:00"),
  },
];

export default function UseStateExample() {
  const [toDos, setTodos] = useState(initTodos);
  const [selectedToDo, setSelectedToDo] = useState<string>("");
  const [value, setValue] = useState("");

  const [arrayItem, setArrayItem] = useState<any>([]);

  const [isRob, setIsRob] = useState<any>(false);

  const handleSelect = useCallback(function (
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setSelectedToDo(e.currentTarget.value);
  },
  []);

  function deleteToDo() {
    const copyToDos = [...toDos];
    const removeArrayItems = copyToDos.filter(
      (item) => item.id !== parseInt(selectedToDo)
    );
    setTodos(removeArrayItems);
    setSelectedToDo("");
  }

  function addToDo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      inputToDo: HTMLInputElement;
    };
    setSelectedToDo("");
    setValue("");
    setTodos((prevData) => [
      ...prevData,
      {
        id: Math.floor(Math.random() * 10),
        task: formElements.inputToDo.value,
        time: new Date(),
      },
    ]);
  }

  function addItem(id: any) {
    console.log(id);
    const addedItem = { val: arrayItem.length };
    const newItem = [...arrayItem, addedItem];
    setArrayItem(newItem);
  }

  function reverseItem() {
    const newArray: any = [...arrayItem];
    const reverseArray = newArray.sort(
      (aval: any, bval: any) => bval.val - aval.val
    );
    // Not worked because
    /*const revArray= arrayItem.sort((aval:any, bval:any)=>bval.val-aval.val)
    console.log(revArray)*/
    setArrayItem(reverseArray);
  }

  function setName() {
    setIsRob((prev: boolean) => !prev);
  }

  return (
    <>
      <form onSubmit={addToDo}>
        <input
          type="text"
          name="inputToDo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={deleteToDo}>Delete selected todo</button>
      <hr />
      <ToDoList toDos={toDos} handleSelect={handleSelect} />
      <hr />
      <p>Example without react key problem (Inner state not changed)</p>
      {arrayItem.map((itm: any, i: number) => (
        <MapItem item={itm} />
      ))}
      <br />
      <button onClick={() => addItem(0)}>add</button>
      <button onClick={reverseItem}>reverse</button>
      <p>Example 2 without react key problem (Inner state not changed)</p>
      {isRob ? (
        <CountItem name={"Bob"} setName={setName} key={"Bob"} />
      ) : (
        <CountItem name={"Tom"} setName={setName} key={"Tom"} />
      )}
    </>
  );
}

function MapItem({ item }: { item: any }) {
  const [value, setValue] = useState(0);
  function handleClick() {
    setValue((pre) => pre + 1);
  }
  return (
    <>
      <li>
        count:{value} {item.val}
      </li>{" "}
      <button onClick={handleClick}>Increament</button>
    </>
  );
}

function CountItem({ name, setName }: { name: string; setName: () => void }) {
  const [value, setValue] = useState(0);
  function handleClick() {
    setValue((pre) => pre + 1);
  }
  return (
    <>
      Count:{value} {name}
      <button onClick={setName}>Toggle Name</button>
      <button onClick={handleClick}>Increament</button>
    </>
  );
}
