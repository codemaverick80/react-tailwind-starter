import React, { useEffect, useState } from "react";
import { getUserInfo } from "../api/api";
import useAxiosFetch from "../hooks/useAxiosFetch";

const About = () => {
  const [users, setUsers] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  useEffect(() => {
    setUsers(data);
  }, [data]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const resp = await getUserInfo(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     setUsers(resp);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      <header className="shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight ">About</h1>
        </div>
      </header>
      {/* <h1 className="text-2xl font-bold">About Page</h1> */}

      <div>
        {isLoading && <p>Loading users...</p>}
        {!isLoading && fetchError && (
          <p className="text-red-500">{fetchError}</p>
        )}
        {!isLoading && !fetchError && (
          <ul>
            {users.map((data, ind) => {
              return <li key={ind}>{data?.name}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default About;
