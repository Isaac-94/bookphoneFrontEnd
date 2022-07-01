import React, { useState, useEffect } from "react";
import Filter from "./Components/Filter";
import AddPersons from "./Components/AddPersons";
import axios from "axios";
import personasService from "./services/personas";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([
    /*
    { name: "Arto Hellas", number: 12345678 },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },*/
  ]);
  const [newName, setNewName] = useState("new name here");
  const [newNumber, setNumber] = useState("Number here");
  const [showAll, setShowAll] = useState("");
  const [errorMsg, setErrorMsj] = useState("");

  useEffect(() => {
    /*axios.get("http://localhost:3001/persons").then((response) => {
         //setPersons(response.data);
    });*/
    personasService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <AddPersons
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNumber={setNumber}
        persons={persons}
        setPersons={setPersons}
        setErrorMsj={setErrorMsj}
      />
      <Filter
        showAll={showAll}
        setShowAll={setShowAll}
        persons={persons}
        setPersons={setPersons}
        errorMsg={errorMsg}
      />
    </div>
  );
};

export default App;
