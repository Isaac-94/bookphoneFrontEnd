import axios from "axios";
import React from "react";
import personasService from "../services/personas";
let indexOFName;
const AddPersons = ({
  newName,
  setNewName,
  newNumber,
  setNumber,
  persons,
  setPersons,
  setErrorMsj,
}) => {
  const addPerson = (evento) => {
    evento.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.some((sameName) => sameName.name === newName)) {
      if (
        window.confirm(
          `${newName} already exist in the list, Wuokd you wish update the number`
        )
      ) {
        indexOFName = persons.findIndex((object) => object.name === newName);
        let personToUpdate = persons[indexOFName];
        console.log(personToUpdate.id);
        let personToConcat = persons.filter(
          (item) => item.id !== personToUpdate.id
        );
        personasService
          .update(personToUpdate.id, personObject)
          .then(() => {
            setPersons(personToConcat.concat(personObject));
            setNewName("");
            setNumber("");
            setErrorMsj("Successfully updated");
            setTimeout(() => {
              setErrorMsj("");
            }, 4000);
          })
          .catch(error => {
            setErrorMsj("The name doesnot exist in the list");
            setTimeout(() => {
              setErrorMsj("");
            }, 4000);
          })
      }
    } else {
      if (newName === "" || newNumber === "") {
        alert(`The name and number must not be empty`, false);
      } else {
        axios
          .post("/api/persons", personObject)
          .then((response) => {
            setPersons(persons.concat(response.data));
            setNewName("");
            setNumber("");
            setErrorMsj("Successfully added");
            setTimeout(() => {
              setErrorMsj("");
            }, 4000);
          })
          .catch(error => {
            console.log(error.response.data);
            setErrorMsj(`Error:${JSON.stringify(error.response.data)}`);
            setTimeout(() => {
              setErrorMsj("");
            }, 4000);
          })
      }
    }
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <h3>Add a New</h3>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddPersons;
