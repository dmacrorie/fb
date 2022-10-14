import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react";
import './AddPost.css';
import toastr from "toastr";
import 'toastr/build/toastr.min.css';

//GETTING PROPS FROM APP

const AddPost = (props) => {

// want the initail form to have no title or content

    const initialFormValues = {
            title: '',
            content: '',
        };
//have the initial sate to be blank

    const [formValues, changeFormValues] = useState(initialFormValues)

//EVENT.TARGET.NAME IS A STRING COMING FROM THE FORM INPUT

    const handleChange = (event) => {
        const newState = { ...formValues }; {
            newState[event.target.name] = event.target.value;
        }
        changeFormValues(newState);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(formValues.title, formValues.content);
        toastr["success"]("Todo added", "Great success");
        changeFormValues(initialFormValues);
    }


    return (
        <div>
            <Form onSubmit={submitHandler} class='formInput' >
            
                    <Form.Label controlId="postTitle">Title: </Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        value={formValues.title}
                        onChange={handleChange}
                    /><br/>
                    <Form.Label >Post: </Form.Label>
                    <Form.Control 
                        name="content"
                        type="text"
                        value={formValues.content}
                        onChange={handleChange}
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


