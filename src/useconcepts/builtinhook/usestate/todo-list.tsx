import { memo } from "react";
import { ToDosType } from "./use-state-example";

export default memo(function ToDoList({
  toDos,
  handleSelect,
}: {
  toDos: Array<ToDosType>;
  handleSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  function changeDateToLocal(date: object) {
    const getDateTime = date.toLocaleString();
    return getDateTime;
  }
  return (
    <>
      <div>ToDo child component</div>
      {toDos?.map((item) => {
        return (
          <li key={item.id}>
            {item.task}
            {"---"}
            {changeDateToLocal(item.time)}
            <input
              type="radio"
              name={"todos"}
              value={item.id.toString()}
              onChange={handleSelect}
            />
          </li>
        );
      })}
    </>
  );
});
