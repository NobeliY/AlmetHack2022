import React from 'react';
import cls from './MyButton.module.css'

const MyButton = ({props, children}) => {
    return (
        <button {...props} className={cls.btn}>
            {children}
        </button>
    );
};

export default MyButton;