import React, { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const Data = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchUserData = async (apiURL) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      setUserData(data);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (response.status === 404) {
        throw new Error("Data not found");
      }
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "somthing went worng,pls try again!",
      });
    }
  };
  useEffect(() => {
    fetchUserData(URL);
  }, []);
  if (loading) {
    return (
      <div>
        <h3>loading...</h3>
      </div>
    );
  }
  if (isError?.status) {
    return (
      <div>
        <h3 style={{ color: "red" }}>{isError?.msg}</h3>
      </div>
    );
  }
  return (
    <div>
      <h1>useEffect</h1>
      <ul>
        {userData.map((eachUser) => {
          const { id, name, email } = eachUser;
          return (
            <li key={id}>
              <div>{name}</div>
              <div>{email}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Data;
