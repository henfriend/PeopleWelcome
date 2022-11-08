import { useState } from 'react';
import APIService from '../Components/APIService'

const Form = (props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const insertArticle = () =>{
    APIService.InsertArticle({title,body})
    .then((response) => props.insertedArticle(response))
    .catch(error => console.log('error',error))
  }

  const handleSubmit=(event)=>{ 
    event.preventDefault()
    insertArticle()
    setTitle('')
    setBody('')
  }

return (
     <div>
     // Form
     </div>
)}

export default Form;