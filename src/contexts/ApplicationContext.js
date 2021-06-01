import { createContext, useState, useEffect } from "react";

export const ApplicationContext = createContext();

export default function ApplicationsProvider(props) {
  const [income, setIncome] = useState([]);
  const [user, setUser] = useState({
    userId: "",
    isAdmin: false,
    email: "",
    firstName: "",
    lastName: "",
  });

  // useEffect(() => {
  //   fetch("http://localhost:4000/api/income")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setIncome(data);
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
    fetch("http://localhost:4000/api/users/details", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        let { firstName, lastName, isAdmin, email } = data;
        setUser({
          userId: data._id,
          firstName,
          lastName,
          email,
          isAdmin,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ApplicationContext.Provider
      value={{
        income,
        setUser,
        user,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
}
