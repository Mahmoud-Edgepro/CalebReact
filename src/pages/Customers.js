import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { baseUrl } from "../Shared";
import AddCustomer from "../components/AddCustomer";
import { LoginContext } from "../App";
import useFetch from "../hooks/UseFetch";

export default function Customers() {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  //const [customers, setCustomers] = useState();
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }
  const navigate = useNavigate();
  const location = useLocation();

  const url = baseUrl + "api/customers/";
  const { request, appendData, data: {customers} = {}, errorStatus } = useFetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
  });

  useEffect(() => {
    request();
  }, [])
  
  // useEffect(() => {
  //   console.log(request, appendData, customers, errorStatus);
  // });


  function newCustomer(name, industry) {
    appendData({name: name, industry:industry});

    if(!errorStatus){
      toggleShow();
    }
  }
  
  return (
    <>
      <h1>Here are our customers:</h1>
      {customers
         ?customers.map((customer) => {
            return (
              <div className="m-2" key={customer.id}>
                <Link to={"/customers/" + customer.id}>
                  <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    {customer.name}
                  </button>
                </Link>
              </div>
            );
          })
        : null}
      <AddCustomer
        newCustomer={newCustomer}
        show={show}
        toggleShow={toggleShow}
      />
    </>
  );
}
