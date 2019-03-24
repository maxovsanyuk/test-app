import React from 'react';

import './style.css';

function Item({item}) {
    return (
        <div className="item">
            <div>
                <img src={item.picture.large} className="photo" />
            </div>
            <h2 className="full-name">Name: {item.name.first.charAt(0).toUpperCase() + item.name.first.slice(1)}</h2>
            <h3 className="user-age">Age: {item.dob.age} years old</h3>
        </div>
    )
}

export default Item;