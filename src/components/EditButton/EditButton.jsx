import React, {useState} from 'react';
import './EditButton.css'

const EditButton = ({name}) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(editing => !editing);
    }

    let content = <span className='content-name'>{name}</span>

    if (isEditing) {
        content = <input type="text" required value={name}/>;
    }
    return (
        <li>
             <span className="content">
                {content}
            </span>
            <button className="edit-button" onClick={handleEditClick}>{isEditing ? 'Zapisz' : 'Edytuj'}</button>
        </li>
    );
};

export default EditButton;