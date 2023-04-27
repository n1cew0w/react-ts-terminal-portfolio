import React from 'react';
import styles from "../DesktopIcons/DesktopIcons.module.scss";
import consoleIcon from "../../assets/icons8-console-48.png";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {changeVisible} from "../../redux/terminalSlice";

const DesktopIcons = () => {
    const terminal = useAppSelector((state) => state.terminal.isVisible)
    const dispatch = useAppDispatch()
    const terminalOpen = () => {
        if (terminal === false){
            dispatch(changeVisible())
        }
    }
    const dota2Open = () => {
        window.open('steam://run/570')
    }
    return (
        <>
            <div className={styles.desktop_icons}>
                {/*TERMINAL*/}
                <div onDoubleClick={terminalOpen} className={styles.icon}>
                    <img src={consoleIcon} alt=""/>
                    <p className={styles.icon_text}>Terminal</p>
                </div>
                {/*DOTA2 KEKW*/}
                <div onDoubleClick={dota2Open} className={styles.icon}>
                    <img src='https://img.icons8.com/color/48/null/dota.png' alt=""/>
                    <p className={styles.icon_text}>Dota 2</p>
                </div>
            </div>
        </>
    );
};

export default DesktopIcons;