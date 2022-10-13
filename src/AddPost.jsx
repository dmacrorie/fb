import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react";
import './AddPost.css';
import toastr from "toastr";
import 'toastr/build/toastr.min.css';

//GETTING PROPS FROM APP

const AddPost = (props) => {

    const initialFormValues = {
            title: '',
            content: '',
        };

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


    // CHANGE THE ONCHANGE DONT NEED (E) => HANDLECHANGE(E) - JUST PUT THE FUNCTION
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
                    <Form.Label > Post: </Form.Label>
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


