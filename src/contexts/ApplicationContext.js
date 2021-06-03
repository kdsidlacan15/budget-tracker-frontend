import { createContext, useState, useEffect } from "react";

export const ApplicationContext = createContext();

export default function ApplicationsProvider(props) {
  const [user, setUser] = useState({
    userId: "",
    isAdmin: false,
    email: "",
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    fetch("https://stark-reef-70845.herokuapp.com/api/users/details", {
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

  // useEffect(() => {
  //   let access = localStorage.getItem("token");
  //   fetch("http://localhost:4000/api/income/", {
  //     headers: {
  //       Authorization: `Bearer ${access}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setIncome(data);
  //     })

  //     .catch((err) => console.log(err));
  // }, []);
  // console.log(income);
  return (
    <ApplicationContext.Provider
      value={{
        setUser,
        user,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
}
