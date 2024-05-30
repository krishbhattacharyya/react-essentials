import React, { useState, useMemo, useRef } from "react";
import SearchComponentAddUserForm from "./serach-component-add-userform";
import classes from "./serach-component.module.css";
import { v4 as uuidv4 } from "uuid";

export type UserType = {
  id?: (number | string) | null;
  userName: string;
  email: string;
  address: string;
};
type UserArrayType = UserType[] | [];

/* not required later will see*/
/*type MyForm<Elements> = Elements & {
  name: HTMLInputElement;
  email: HTMLInputElement;
  address: HTMLInputElement;
};*/


export default function SearchComponent() {
  const [userData, setUserData] = useState<UserArrayType>([]);
  const [query, setQuery] = useState<string>("");

  function filterItems(userFilter: UserArrayType, searchQuery: string) {
    return userFilter.filter((item) =>
      item.userName
        ? item.userName.toLowerCase().includes(searchQuery.toLocaleLowerCase())
        : item
    );
  }

  const serachArray = useMemo(
    () => filterItems(userData, query),
    [userData, query]
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // FormEvent - use currentTarget instead target, ChangeEvent
    e.preventDefault();
    //issue form submit
    //const { userName, email, address } = e.target as MyForm<typeof e.currentTarget>;;
    //https://github.com/testing-library/react-testing-library/issues/763
    const addedData = {
      id: uuidv4(),
      userName: e.currentTarget.userName.value,
      email: e.currentTarget.email.value,
      address: e.currentTarget.address.value,
    };
    setUserData((prevData) => [...prevData, addedData]);
  }

  return (
    <>
      <div className={classes.serachBar}>
        Search by name
        {
          <input
            type="search"
            placeholder="search by username"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        }
      </div>
      <div>
        Add new user
        <SearchComponentAddUserForm handleSubmit={handleSubmit} />
      </div>
      <div className={classes.searchContent}>
        {
          <ul>
            {serachArray.map((item: UserType) => {
              return (
                <li key={item.id}>
                  <div>{item.userName}</div>
                  <div>{item.email}</div>
                  <div>{item.address}</div>
                </li>
              );
            })}
          </ul>
        }
      </div>
    </>
  );
}
