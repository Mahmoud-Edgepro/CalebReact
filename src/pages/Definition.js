import { useState, useEffect } from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Definition() {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    //const url ="https://xcklhklvhdfklhdfjklghdfjkghjkdhgk.com";
    //const url ="https://httpstat.us/500";
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401) {
          navigate("/login", {
            state: {
              previousUrl: location.pathname,
            },
          });
        } else if (response.status === 500) {
           setError(true);
        }

        if(!response.ok) {
          setError(true);
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings); // Set the meanings to `word`
      })
      .catch((e) => {
        console.log(e.message)
      }); // Log any fetch errors
  }, []);

  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary">Search another</Link>
      </>
    );
  }
  if (error === true) {
    return (
      <>
        <p>Something went wrong, try again?</p>
        <Link to="/dictionary">Search another</Link>
      </>
    );
  }


  return (
    <>
      {word ? (
        <>
          <h1>Here is a definition:</h1>
          {word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech + ": "}
                {meaning.definitions[0].definition}
              </p>
            );
          })}
          <p>Serarh again:</p>
          <DefinitionSearch />
        </>
      ) : null}
    </>
  );
}
