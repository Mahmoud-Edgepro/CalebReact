import { useState, useEffect } from "react";
export default function Dictionary() {
  const [word, setWord] = useState("");
  const [word2, setWord2] = useState("");

  useEffect(() => {
    console.log("State Updated " + word);
  }, [word]); //Limit what state useEffect cares about --> dependancy array

  useEffect(() => {
    console.log("State Updated" + word2);
  }, [word2]); //Limit what state useEffect cares about --> dependancy array
 
  //no dependancy array --> update for any state change
  //empty dependancy array --> execute once
  //passing in data --> only execute when those state variables are changed

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <h2>Let's get the definition for {word}</h2>
      <input
        type="text"
        onChange={(e) => {
          setWord2(e.target.value);
        }}
      />
      <h2>Let's get the definition for {word2}</h2>

    </>
  );
}
