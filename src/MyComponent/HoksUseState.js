import React from 'react'
import { useState, useEffect } from 'react';
import HoksUseState from './MyComponent/Header';

// use state is used if the value of list is changed and
// the dom(i.e. HTML part) need to re-render.
// Re-render will not happen unless the state is chaneged.
// So if you put the lists below to a variable
// instead of useState and change it
// you wont see the changes.
function HoksUseState() {
    const [lists, setLists] = useState([
        'Apple',
        'Orange',
        'milk',
        'jogurt',
        'banana',
    ]);
    const [count, setCount] = useState(0);

    // Use effect has major three funtion:
    useEffect(() => {
        console.log('Use effect', count);

        // 3. Called when component is destroyed.
        return () => console.log('Destroyed.');

        // 1. []: Dependency empty array means the code inside the
        // useeffect will be called only during the initial
        // load of the component as is mainly used for setting
        // the inital data needed for the coponent. Sunch as if
        // it needs to fetch some data from the backend.

        // 2. [count, lists]: This means the code inside the
        // useEffect will be called every time the value of
        // count or lists changes as giving in Dependency array.
    }, []);

    return (
        <div>
            <div>Shopping list {count}</div>
            <ul>
                {lists.map((value, index) => {
                    if (index % 2 == 0)
                        return (
                            <li style={{ color: 'black', background: 'green' }}>
                                {index + 1} {value}
                            </li>
                        );
                })}
            </ul>
            <button
                onClick={() => {
                    // Do not modify the original,
                    // ... Create a copy or original and then add the new things.
                    setLists([...lists, 'Apple 1']);
                }}
            >
                Add
            </button>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Count
            </button>
        </div>
    )
}

export default HoksUseState