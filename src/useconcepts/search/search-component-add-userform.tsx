import React, { useState } from "react";
import {UserType} from './search-component'

export default function SearchComponentAddUserForm({handleSubmit}:{handleSubmit: React.FormEventHandler<HTMLFormElement>}){
    const [addItemData, setAddItemData] = useState<UserType>({
        id: null,
        userName: '',
        email: '',
        address: '',
      });
      function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        // FormEvent - use currentTarget instead target
        const existingItem = { ...addItemData };
        const changeditem = {
          ...existingItem,
          [e.target.name]: e.target.value,
        };
        setAddItemData(changeditem);
      }
      function formSubmit(e: React.FormEvent<HTMLFormElement>){
        handleSubmit(e);
        const addedData = {
          id: null,
          userName: '',
          email: '',
          address: '',
        };
        setAddItemData(addedData)
      }
      return(
        <form onSubmit={(e)=>formSubmit(e)}>
          <input type="text" value={addItemData.userName} placeholder="userName" name="userName" onChange={handleChangeInput} />
          <input type="email" value={addItemData.email} placeholder="email" name="email" onChange={handleChangeInput} />
          <input type="text" value={addItemData.address} placeholder="address" name="address" onChange={handleChangeInput} />
          <button type="submit">Submit</button>
        </form>
      )
}