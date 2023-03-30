import React, {useEffect, useState} from 'react';
import styles from './TaskBar.module.scss'
import pusk from '../../assets/icons8-windows-11-48.png'
import search from '../../assets/icons8-search-50.png'
import explorer from '../../assets/icons8-file-explorer-48.png'
import volume from '../../assets/icons8-voice-48.png'
import wifi from '../../assets/icons8-wi-fi-30.png'
import up from '../../assets/icons8-up-32.png'

const TaskBar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.task_left}>
                <img src="https://win11.blueedge.me/img/icon/widget.png" className={styles.widget_icon} alt=""/>
            </div>
            <div className={styles.task_center}>
                <img src={pusk} className={styles.pusk_icon} alt=""/>
                <img src={search} className={styles.search_icon} alt=""/>
                <img src={explorer} className={styles.explorer_icon} alt=""/>
            </div>
            <div className={styles.task_right}>
                <img src={up} className={styles.up_icon} alt=""/>
                <span>ENG</span>
                <img src={wifi} className={styles.wifi_icon} alt=""/>
                <img src={volume} className={styles.volume_icon} alt=""/>
                <div className={styles.taskDate}>
                    <div>
                        {time.toLocaleTimeString("ru-RU", {
                            hour: 'numeric',
                            minute: "numeric",
                        })}
                    </div>
                    <div>
                        <div className={styles.time_year}>
                            {time.toLocaleDateString("ru-RU", {
                                year: "2-digit",
                                month: "2-digit",
                                day: "numeric",
                            })}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default TaskBar;