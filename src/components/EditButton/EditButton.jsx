import React, {useState} from 'react';
import './EditButton.css'

const EditButton = ({initialName}) => {
    const [contentName, setContentName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(editing => !editing);
    }

    const handleChange = (event) => {
        setContentName(event.target.value);
    }

    let editableContentName = <span className='content-name'>{contentName}</span>

    if (isEditing) {
        editableContentName = <input type="text" required value={contentName} onChange={handleChange}/>;
    }
    return (
        <li>
             <span className="content">
                {editableContentName}
            </span>
            <button className="edit-button" onClick={handleEditClick}>{isEditing ? 'Zapisz' : 'Edytuj'}</button>
        </li>
    );
};

export default EditButton;