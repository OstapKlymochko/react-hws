import React from 'react';
import {Simpsons} from "./components/Simpsons";
import "./components/Main.css";

const App = () => {
    return (
        <div>
            <Simpsons name={'Homer'} link={'https://static.wikia.nocookie.net/simpsons/images/8/8d/Swimsuit_Homer.png'}/>
            <Simpsons name={'Marge'} link={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
            <Simpsons name={'Bart'} link={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
            <Simpsons name={'Lisa'} link={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>
            <Simpsons name={'Maggie'} link={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}/>
        </div>
    );
};

export {App};