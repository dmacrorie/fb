import './PostAttribute.css';


const PostAttribute = (props) => {
    return (
        <div className>
           <div className="row">
            <div className="attribute">
                {props.label}
            </div>
            <div>
                {props.value}
            </div>
        </div> 
        </div>
    );
};

export default PostAttribute;