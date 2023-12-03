import {useState} from 'react';
import {v4 as uuid} from 'uuid';

export const createInitialState = (keys) => {
    const initialState = {};
    keys.forEach((key) => {
        initialState[key] = "";
    });
    return initialState;
}

export const updateInput = (prevInput, inputIdentifier, newValue) => {
    return {
        ...prevInput,
        [inputIdentifier]: newValue,
    }
}

export const saveItem = (itemsArray, newItem) => {
    return [...itemsArray, newItem];
}

export const resetInput = (initialState) => initialState;

export const useInputLogic = (keys) => {
    const initialState = createInitialState(keys);
    const [input, setInput] = useState(initialState);
    const [itemsArray, setItemsArray] = useState([]);

    const handleChange = (inputIdentifier, newValue) => {
        setInput((prevInput) => updateInput(prevInput, inputIdentifier, newValue));
    };

    const handleSaveClick = (planId, partOfPlanId) => {
        console.log('Selected planId in handleSaveClick:', planId);
        console.log('Selected partOfPlanId in handleSaveClick:', partOfPlanId);
        const newItem = { ...input, id: uuid(), planId, partOfPlanId };
        setItemsArray((prevItemsArray) => saveItem(prevItemsArray, newItem));
        setInput(resetInput(initialState));
    };

    const handleReset = () => {
        setInput(resetInput(initialState));
    };

    return {
        input,
        itemsArray,
        handleChange,
        handleSaveClick,
        handleReset,
    };
};