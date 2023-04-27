import React from 'react';
import desktop from '../../assets/150052-2.jpg'
import styles from './MainScreen.module.scss'
import Terminal from "../Terminal/Terminal";
import Typewriter from "react-ts-typewriter";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import consoleIcon from '../../assets/icons8-console-48.png'
import {changeVisible} from "../../redux/terminalSlice";
import DesktopIcons from "../DesktopIcons/DesktopIcons";

const MainScreen = () => {
    const terminal = useAppSelector((state) => state.terminal.isVisible)


    return (
        <>
            <div className={styles.desktop_wrap}>
                <DesktopIcons/>
                {terminal &&
                    <Terminal/>
                }

            </div>

        </>

    );
};

export default MainScreen;