import React from 'react';

interface Props {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    items: string[];
    setItems: React.Dispatch<React.SetStateAction<string[]>>;
    handleAddItem: () => void;
    handleDeleteItem: () => void;
}
const TodoApp = (props: Props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="todo_content" style={{ padding: "200px" }}>
                            <div className="todo_heading">
                                <h1>Todo App</h1>
                                <div className="todo_content">
                                    <input type="text" placeholder="Add todo" value={props.inputText}
                                        onChange={(e) => props.setInputText(e.target.value)}
                                    />
                                    <button onClick={props.handleAddItem}>Add</button>

                                    {props.items.map((item, index) => (
                                        <div key={index}>
                                            <p>{item}</p>
                                            <button onClick={() => props.handleDeleteItem}>delete</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoApp;