import axios from "axios";
import { useEffect, useState } from "react";

export const useApiData = <T>(url: string) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data as T);
      })
      .catch((err) => console.error(err));
  }, []);

  return data as T;
};
