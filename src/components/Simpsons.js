import React from 'react';
const Simpsons = (props) => {
    let {name, link} = props;
    return (
        <div className={'Simpson'}>
            <h2>{name} Simpson</h2>
            <div className={'data'}>
                <img src={link} alt="Simpson Member"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam autem hic id illum
                    laborum modi nobis odit quam, ratione tempore vero voluptas voluptates! A accusamus asperiores
                    aut beatae blanditiis consequuntur cum cupiditate, debitis dolor ea eius eligendi est et
                    exercitationem, explicabo facilis fugit harum ipsam iure laborum magnam obcaecati odio pariatur
                    perferendis perspiciatis possimus praesentium quas qui quidem quisquam ratione reiciendis sint
                    soluta temporibus ullam veniam voluptates. Enim fugiat labore mollitia praesentium reprehenderit
                    sapiente, tempora tenetur voluptas? A alias debitis dignissimos dolorem dolorum eligendi fugit hic,
                    ipsa, nisi numquam, perspiciatis quae quo ratione repellendus saepe sit temporibus. Animi, dolor.</p>
            </div>
        </div>
    );
};

export {Simpsons};