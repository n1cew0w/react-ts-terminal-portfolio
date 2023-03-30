import React from 'react';
import desktop from '../../assets/150052-2.jpg'
import styles from './MainScreen.module.scss'
import Terminal from "../Terminal/Terminal";
const MainScreen = () => {
    const showMsg = () => 'Hello World'

    return (
        <>
        <div className={styles.desktop_wrap}>
            <Terminal/>
        </div>

        </>

    );
};

export default MainScreen;