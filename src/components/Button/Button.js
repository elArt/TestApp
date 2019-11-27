import React from 'react';
import styles from './styles.module.scss';

const Button = ({ title, actionClick }) => {
    return (
        <div onClick={actionClick} className={styles.btn__container}>
            <p>{title}</p>
        </div>
    )
};

export default Button;
