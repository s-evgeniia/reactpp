import React from 'react';
import {NAVIGATION} from "../settings";

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                {NAVIGATION.map((i) => (<li key={i}>{i}</li>))}
            </ul>
        </nav>
    );
};

export default Navigation;