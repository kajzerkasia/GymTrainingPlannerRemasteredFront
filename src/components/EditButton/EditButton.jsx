import React, {useState} from 'react';
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

    return (
        <li>
             <span
                 className="edit-button-span-classes"
             >
                {isEditing ?
                    <input
                        type="text"
                        required
                        value={contentName}
                        onChange={handleChange}
                        className="edit-button-input-classes"
                    />
                    :
                    <button
                        className="edit-button-classes"
                    >
                        {contentName}
                    </button>
                }
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