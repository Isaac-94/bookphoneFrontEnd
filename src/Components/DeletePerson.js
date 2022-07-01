import React from "react";
import axios from "axios";


const DeletePerson = ({deletePersons, setPersons, persons}) =>{
    if(deletePersons.id != 'undefinded'){
        console.log("dentro el if");

    console.log(deletePersons.id);
    axios.delete(`/api/persons/${deletePersons.id} `)
    .then(response => {
        console.log(response);
        console.log(response.data);
        console.log('borraste poio')
      })
    
      return (<div>
          <p>That person {deletePersons.id} was deleted</p>
      </div>)
    }
    else return;

}

export default DeletePerson;