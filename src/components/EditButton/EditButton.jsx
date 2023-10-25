import React, {useState} from 'react';
import './EditButton.css'

const EditButton = ({name}) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(editing => !editing);
    }

    let partOfPlanName = <span className='part-of-plan-name'>{name}</span>

    if (isEditing) {
        partOfPlanName = <input type="text" required value={name}/>;
    }
    return (
        <li>
             <span className="part-of-plan">
                {partOfPlanName}
            </span>
            <button className="edit-button" onClick={handleEditClick}>{isEditing ? 'Zapisz' : 'Edytuj'}</button>
        </li>
    );
};

export default EditButton;