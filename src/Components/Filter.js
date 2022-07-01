import React, { useState } from "react";
import ShowList from "./ShowList";
import personasService from "../services/personas";

const Filter = ({ showAll, setShowAll, persons, setPersons, errorMsg }) => {
  let valueToFind = showAll.toUpperCase();

  const handleChangeShow = (event) => {
    setShowAll(event.target.value);
  };

  const buttonDelete = (showName) => {
    if (
      window.confirm("Are you sure you want to delete the selected person?")
    ) {
      console.log("has elegido la pastilla roja");
      console.log(showName.id);
      personasService.removal(showName.id).then(() => {
        setPersons(persons.filter((item) => item.id !== showName.id));
        console.log("borraste poio");
      });
    } else {
      console.log("has elegido la pastilla azul");
    }
  };

  const personsToShow = persons.filter((sentence) => {
    let personInUpperCase = sentence.name.toUpperCase();

    return personInUpperCase.includes(valueToFind);
  });

  return (
    <div>
      Search:
      <input value={showAll} onChange={handleChangeShow} />
      <ShowList
        personsToShow={personsToShow}
        buttonDelete={buttonDelete}
        errorMsg={errorMsg}
      />
    </div>
  );
};

export default Filter;
