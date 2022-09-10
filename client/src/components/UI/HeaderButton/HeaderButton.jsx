import React from 'react';
import cls from "./HeaderButton.module.css";

const HeaderButton = ({children}) => {
    return (
        <div className={cls.btn}>
            <a href="/">{children}</a>
        </div>
    );
};

export default HeaderButton;