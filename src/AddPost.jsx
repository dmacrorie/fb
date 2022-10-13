import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react";
import './AddPost.css';



const AddPost = (props) => {


    const initialFormValues = {
            title: '',
            content: '',
        };



    const [formValues, changeFormValues] = useState(initialFormValues)

    const handleChange = (event) => {
        const newState = { ...formValues }; {
            newState[event.target.name] = event.target.value;
        }
        changeFormValues(newState);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(formValues.title, formValues.content);
        changeFormValues(       
            {
            title: '',
            content: '',
            });
    }

    return (
        <div>
            <Form onSubmit={(event) => submitHandler(event)} class='formInput' >
                
                <Form.Group controlId="postTitle">
                    <Form.Label>Title: </Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        value={formValues.title}
                        onChange={(event) => handleChange(event)}
                    />
                </Form.Group>

                <Form.Group controlId="postContent">
                    <Form.Label> Post: </Form.Label>
                    <Form.Control 
                        name="content"
                        type="text"
                        value={formValues.content}
                        onChange={(event) => handleChange(event)}
                    />
                </Form.Group><br></br>

                <Button variant="primary" type="submit">
                    Post
                </Button>
            </Form>
        </div>
    )
};

export default AddPost;


