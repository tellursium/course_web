import React from 'react';
import "./styles/Header.css"

function Header() {
    return (
        <div className="header">
            <div className="headerActive">
                <a className="headerLink" href="/home">
                    <img className="headerLogo"
                         alt=""
                         src={"https://web-creator.ru/uploads/Page/22/nodejs.svg"}/>
                </a>
                <div className="headerLinksBar">
                    <a className="headerLink" href="/home">Главная</a>
                    <a className="headerLink" href="/catalog">Каталог</a>
                    <a className="headerLink" href="/create">Добавить пакет</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
