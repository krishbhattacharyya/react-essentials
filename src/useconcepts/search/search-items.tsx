import {UserType, UserArrayType} from './search-component'

export default function SearchItems({searchArray}:{searchArray: UserArrayType}){
    return (
        <>
        {searchArray.map((item: UserType) => {
              return (
                <li key={item.id}>
                  <div>{item.userName}</div>
                  <div>{item.email}</div>
                  <div>{item.address}</div>
                </li>
              );
            })}
        </>
    )
}