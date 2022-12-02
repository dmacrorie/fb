import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react";
import './AddPost.css';
import toastr from "toastr";
import 'toastr/build/toastr.min.css';
import { useParams } from "react-router-dom";
import axios from "axios";

//GETTING PROPS FROM APP

const AddPost = (props) => {


    console.log(props)

    const { id } = useParams();

// want the initial form to have no title or content

    const initialFormValues = {
            title: '',
            content: '',
        };
//have the initial sate to be blank

    const [formValues, changeFormValues] = useState(props.edit ? props.posts.find((post) => post._id === id) :  initialFormValues)

//EVENT.TARGET.NAME IS A STRING COMING FROM THE FORM INPUT

    const handleChange = (event) => {
        const newState = { ...formValues }; 
            newState[event.target.name] = event.target.value;
        changeFormValues(newState);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (props.edit) {
          axios.put(`http://localhost:3001/posts/${id}`, formValues)
          .then(() => {
            toastr["success"]("Post updated")
            props.getPosts();
          }) 
        } else {
        props.onSubmit(formValues.title, formValues.content);
        }
        changeFormValues(...initialFormValues);
        
    }
    


    return (
        <div>
            <Form onSubmit={(event) => submitHandler(event)} class='formInput' >
            
                    <Form.Label controlId="postTitle">Title: </Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        value={formValues.title}
                        onChange={(event) => handleChange(event)}
                    /><br/>
                    <Form.Label >Post: </Form.Label>
                    <Form.Control 
                        name="content"
                        type="text"
                        value={formValues.content}
                        onChange={(event) => handleChange(event)}
                    />
            <br></br>

                <Button variant="primary" type="submit">
                    Post
                </Button>
            </Form>
        </div>
    )
};

export default AddPost;


