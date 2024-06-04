import React, { useState, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface AdditionalProps {
  queryKey: string;
  url: string;
  searchKey:string;
}

/*export interface ToDoDataType {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}*/

export type ToDoDataType = any

interface QDataRturnTye {
  config: {};
  data: [ToDoDataType];
  AxiosHeaders: {};
  request: {};
  status: number;
  statusText: string;
}

export interface WithSearchHOCProps {
  data: [ToDoDataType]
};

export default function withSearchExample<
  T extends WithSearchHOCProps = WithSearchHOCProps
>(Wrappedcomponent: React.ComponentType<T>, additionalProps: AdditionalProps) {
  return function NewComponent(props: Omit<T, keyof WithSearchHOCProps>) {
    const [responseData, setResponseData] = useState<ToDoDataType[]>([]);
    const [searchItems, setSearchitems] = useState<string>("");

    const queryClient = useQueryClient();

    const { isPending, error, data } = useQuery({
      queryKey: [additionalProps.queryKey],
      queryFn: async (): Promise<QDataRturnTye> =>
        await axios.get(additionalProps.url),
      select: React.useCallback((data: QDataRturnTye) => {
        return setResponseData(data.data.slice(0,10));
      }, []),
    });

    const serachResult = useMemo(() => {
      return responseData.filter((item) =>{
        return item[additionalProps.searchKey].toLowerCase().includes(searchItems.toLowerCase())
      }
        
      );
    }, [responseData, searchItems]);

    if (isPending) {
      return <div>'Loading...'</div>;
    }

    if (error) {
      return <div>'An error has occurred: ' {error.message}</div>;
    }

    return (
      <>
        <input
          type="search"
          value={searchItems}
          placeholder={additionalProps.searchKey}
          onChange={(e) => setSearchitems(e.target.value)}
        />
        <Wrappedcomponent {...(props as T)} data={serachResult} />
      </>
    );
  };
}
