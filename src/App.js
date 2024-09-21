import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Developer",
      img: "http://localhost:400/image1.jpg",
    },
    {
      id: 2,
      name: "Sal",
      role: "Manager",
      img: "http://localhost:400/image2.jpg",
    },
    {
      id: 3,
      name: "john",
      role: "Director of Eng.",
      img: "http://localhost:400/image3.jpg",
    },
    {
      id: 4,
      name: "James",
      role: "Software Engineer",
      img: "http://localhost:400/image4.jpg",
    },
    {
      id: 5,
      name: "Corey",
      role: "The DevOps Guy",
      img: "http://localhost:400/image5.jpg",
    },
    {
      id: 6,
      name: "Jake",
      role: "Senior Intern",
      img: "http://localhost:400/image6.jpg",
    },
  ]);

function updateEmployee(id, newName, NewRole){
  const updatedEmployees = employees.map((employee) => {
    if(id == employee.id){
      return {...employee, name: newName, role: NewRole};
    }
    return employee;
  });
  setEmployees(updatedEmployees);
}

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
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
