import React, {useState} from 'react';
// import './EditButton.css'
import {FaEdit, FaRegCheckSquare} from "react-icons/fa";

const EditButton = ({initialName}) => {
    const [contentName, setContentName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const inputClasses = "text-base w-40 border-none p-2 animate-pulse bg-violet text-center uppercase";
    const buttonClasses = "inline-block w-40 text-base text-almost-white uppercase m-0 p-2 rounded text-ellipsis text-center hover:bg-violet"
    const spanClasses = "border-2 border-transparent py-2 px-2 rounded font-bold";

    const handleEditClick = () => {
        setIsEditing(editing => !editing);
    }

    const handleChange = (event) => {
        setContentName(event.target.value);
    }

    let editableContentName = <button className={buttonClasses}>{contentName}</button>

    if (isEditing) {
        editableContentName =
            <input
                type="text"
                required
                value={contentName}
                onChange={handleChange}
                className={inputClasses}
            />;
    }
    return (
        <li>
             <span
                 className={spanClasses}
             >
                {editableContentName}
            </span>
            <button
                className="edit-button"
                onClick={handleEditClick}
            >
                {isEditing ? <FaRegCheckSquare/> : <FaEdit/>}
            </button>
        </li>
    );
};

export default EditButton;