import {useState} from 'react';

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

    const handleSaveClick = () => {
        setItemsArray((prevItemsArray) => saveItem(prevItemsArray, input));
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