import React from 'react';
import {NAVIGATION} from "../settings";

const Navigation = ({onChangePage}) => {
    const changePage = (id) => {
        onChangePage(id)
    }
    return (
        <nav className="navigation">
            <ul>
                {NAVIGATION.map(({id}) => (<li key={id} onClick={() => changePage(id)}>{id}</li>))}
            </ul>
        </nav>
    );
};

export default Navigation;