import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl: string) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url: string) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err: any) {
        if (isMounted) {
          setFetchError(`${err.code} - ${err.message}`);
          setData([]);
        }
      } finally {
        //isMounted && setIsLoading(false);
        isMounted && setTimeout(() => setIsLoading(false), 1000);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
