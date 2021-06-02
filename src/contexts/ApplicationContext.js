import { createContext, useState, useEffect } from "react";
import IncomeListItem from "./../components/IncomeListItem";
import { Col } from "react-bootstrap";

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

  // const [income, setIncome] = useState([]);

  // useEffect(() => {
  //   let access = localStorage.getItem("token");
  //   fetch("http://localhost:4000/api/income", {
  //     headers: {
  //       Authorization: `Bearer ${access}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let { category, entry, value } = data;
  //       setIncome({
  //         incomeId: data._id,
  //         category,
  //         entry,
  //         value,
  //       });
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <ApplicationContext.Provider
      value={{
        setUser,
        user,
        // income,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
}
