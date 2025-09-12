import React, { useState, useEffect } from 'react'
// UseEffect is are a side effect 
// side effect are the result of the state changing

const PracticeTask = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // The code which we want to run
        console.log("This is a ", count)
        // Optional return function
    }, [count]) //The dependency array
    return (
        <>
            <div
                className="counter-app"
                style={{
                    border: "2px solid #333",
                    padding: "20px",
                    borderRadius: "10px",
                    backgroundColor: "#f9f9f9",
                    textAlign: "center",
                    width: "250px",
                    margin: "20px auto",
                }}
            >
                <h1>Count: {count}</h1>
                <button
                    style={{
                        padding: "10px 15px",
                        margin: "5px",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        cursor: "pointer",
                    }}
                    onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>
                <button
                    style={{
                        padding: "10px 15px",
                        margin: "5px",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "#f44336",
                        color: "white",
                        cursor: "pointer",
                    }}
                    onClick={() => setCount(count - 1)}
                >
                    Decrement
                </button>
                <button
                    style={{
                        padding: "10px 15px",
                        margin: "5px",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "#141531ff",
                        color: "white",
                        cursor: "pointer",
                    }}
                    onClick={() => setCount(0)}
                >
                    Reset
                </button>
            </div>
        </>
    )
}

export default PracticeTask