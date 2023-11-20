import React, { createContext, useReducer } from 'react';

export const InputContext = createContext({
    input: {},
    itemsArray: [],
    handleChange: () => {},
    handleSaveClick: () => {},
    handleReset: () => {},
});

function inputReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_INPUT':
            const { inputIdentifier, newValue } = action.payload;
            return {
                ...state,
                [inputIdentifier]: newValue,
            };
        case 'SAVE_ITEM':
            return {
                ...state,
                itemsArray: [...state.itemsArray, state.input],
                input: {},
            };
        case 'RESET_INPUT':
            return {
                ...state,
                input: action.payload,
            };
        default:
            return state;
    }
}

export function InputContextProvider({ children }) {
    const initialState = {
        input: {},
        itemsArray: [],
    };

    const [inputState, inputDispatch] = useReducer(inputReducer, initialState);

    const handleChange = (inputIdentifier, newValue) => {
        inputDispatch({
            type: 'UPDATE_INPUT',
            payload: {
                inputIdentifier,
                newValue,
            },
        });
    };

    const handleSaveClick = () => {
        inputDispatch({
            type: 'SAVE_ITEM',
        });
    };

    const handleReset = () => {
        inputDispatch({
            type: 'RESET_INPUT',
            payload: initialState.input,
        });
    };

    const contextValue = {
        input: inputState.input,
        itemsArray: inputState.itemsArray,
        handleChange,
        handleSaveClick,
        handleReset,
    };

    return <InputContext.Provider value={contextValue}>{children}</InputContext.Provider>;
}