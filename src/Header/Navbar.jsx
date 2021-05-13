import React from 'react';

const navLinks = [
    {
        "id": 0,
        "name": "Home",
        "linkTo": "#home"
    },
    {
        "id": 1,
        "name": "About",
        "linkTo": "#about"

    },
    {
        "id": 2,
        "name": "Services",
        "linkTo": "#services"
    },
    {
        "id": 3,
        "name": "Team",
        "linkTo": "#"
    },
    {
        "id": 4,
        "name": "Works",
        "linkTo": "#"
    },
    {
        "id": 5,
        "name": "Portfolio",
        "linkTo": "#"
    },
    {
        "id": 6,
        "name": "Contacts",
        "linkTo": "#"
    }];
const listItems = navLinks.map((navLink) =>
    <li className="rs-header__item" key={navLink.id}><a href={navLink.linkTo} className="rs-header__list-link">{navLink.name}</a>
    </li>
);

function Navbar() {
    return (
        <ul className="rs-header__list">
            {listItems}
        </ul>
    );
}

export default Navbar;