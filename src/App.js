import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Developer",
      img: "http://localhost:400/image1.jpg",
    },
    {
      name: "Sal",
      role: "Manager",
      img: "http://localhost:400/image2.jpg",
    },
    {
      name: "john",
      role: "Director of Eng.",
      img: "http://localhost:400/image3.jpg",
    },
    {
      name: "James",
      role: "Software Engineer",
      img: "http://localhost:400/image4.jpg",
    },
    {
      name: "Corey",
      role: "The DevOps Guy",
      img: "http://localhost:400/image5.jpg",
    },
    {
      name: "Jake",
      role: "Senior Intern",
      img: "http://localhost:400/image6.jpg",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(uuidv4());
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
