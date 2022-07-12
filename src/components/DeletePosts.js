import React, {useEffect} from "react";
import { deletePosts } from "../api";

const DeletePosts = ({element_id}) => {
    
    function handleSubmit(event){
        
        event.preventDefault()
        const token = localStorage.getItem('token')
        deletePosts(token, _id)
    }
    return (
        <form onSubmit = {handleSubmit}>
            <button type="Submit">Delete</button>
        </form>
    );
};

export default DeletePosts;