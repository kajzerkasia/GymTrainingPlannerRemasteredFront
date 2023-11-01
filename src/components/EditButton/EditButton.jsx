import React, {useState} from 'react';
// import './EditButton.css'
import {FaEdit, FaRegCheckSquare} from "react-icons/fa";

const EditButton = ({initialName}) => {
    const [contentName, setContentName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(editing => !editing);
    }

    const handleChange = (event) => {
        setContentName(event.target.value);
    }

    let editableContentName = <button className="edit-button-classes">{contentName}</button>

    if (isEditing) {
        editableContentName =
            <input
                type="text"
                required
                value={contentName}
                onChange={handleChange}
                className="edit-button-input-classes"
            />;
    }
    return (
        <li>
             <span
                 className="edit-button-span-classes"
             >
                {editableContentName}
            </span>
            <button
                onClick={handleEditClick}
            >
                {isEditing ? <FaRegCheckSquare/> : <FaEdit/>}
            </button>
        </li>
    );
};

export default EditButton;