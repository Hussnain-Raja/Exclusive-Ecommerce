import React, { useState } from 'react'
import TodoApp from '../Components/TodoApp'

const TodoAppScreen = () => {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState<string[]>([]);
    const handleAddItem = () => {
        if (inputText.trim() !== "") {
            setInputText("");
            setItems([...items, inputText]);
        }
    }
    const handleDeleteItem = () => {
        setItems([]);
    }
    return (
        <>
            <TodoApp
                inputText={inputText}
                setInputText={setInputText}
                items={items}
                setItems={setItems}
                handleAddItem={handleAddItem}
                handleDeleteItem={handleDeleteItem}
            />
        </>
    )
}
export default TodoAppScreen;