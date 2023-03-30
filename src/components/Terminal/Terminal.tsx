import styles from './Terminal.module.scss'
import React, {useEffect, useRef, useState} from "react";
import powershell from '../../assets/file_type_powershell_icon_130243.png'
import close from '../../assets/window_close_icon_181227.png'
import closeHeader from '../../assets/icons8-удалить-48.png'
import svernHeader from '../../assets/icons8-кнопка-развернуть-26.png'
import minus from '../../assets/icons8-вычитание-30.png'
import DragMove from "../DragMove";

const Terminal = () => {
    const commands = ['help: узнайте все команды',
        ' github: получить ссылку на мой профиль на github',
        ' vk: получить ссылку на мой профиль на vk.com',
        ' tg: получить ссылку на мой профиль в telegram',
        ' projects: получить ссылку на мои лучшие проекты',
        ' resume: ознакомиться с моим резюме',
        ' clear: очистить терминал '
    ]

    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const [translate, setTranslate] = useState({
        x: 0,
        y: 0
    });

    const handleDragMove = (e: any) => {
        setTranslate({
            x: translate.x + e.movementX,
            y: translate.y + e.movementY
        });
    };



    return (
        <>
           <DragMove onDragMove={handleDragMove}>
               <div style={{transform: `translateX(${translate.x}px) translateY(${translate.y}px)`}}>
                   <div className={styles.header}>
                       <div className={styles.tab}>
                           <img src={powershell} className={styles.powershell_icon} alt=""/>
                           n1cew0w PowerShell
                           <img src={close} className={styles.close_icon} alt=""/>
                       </div>
                       <div className={styles.header_buttons}>
                           <img src={minus} className={styles.minus_icon} alt=""/>
                           <img src={svernHeader} className={styles.svernheader_icon} alt=""/>
                           <img src={closeHeader} className={styles.closeheader_icon} alt=""/>
                       </div>
                   </div>
                   <div className={styles.body} onClick={e => inputRef.current ? inputRef.current.focus() : ''}>
                       n1cew0w powershell <br/>
                       (C) Frontend Corporation. Все права защищены <br/>
                       Введите <span>help</span>, чтобы узнать все доступные команды <br/>
                       <span className={styles.span_text}>
                <label htmlFor="input">root@n1cew0w:~$  </label>
                <input className={styles.input}
                       ref={inputRef}
                       type="text"
                       value={input}
                       onChange={event => setInput(event.target.value)}
                       onKeyDown={event => {
                           if (event.key === "Enter") {
                               let newOutput = '';
                               newOutput = output + '\n' + "root@n1cew0w:~$ " + input + '\n';
                               switch (input) {
                                   case "help":
                                       newOutput += "Все команды: " + commands
                                       break;
                                   case 'github':
                                       newOutput += `My github:`
                                       break
                                   case 'clear':
                                       newOutput = ''
                                       break
                                   default:
                                       newOutput += 'This command dont work =('
                               }
                               setOutput(newOutput)
                               setInput('')
                           }
                       }}
                />
            </span>
                       <div className={styles.terminal}>
                           {output}
                       </div>
                   </div>
               </div>
           </DragMove>

        </>

    )

};

export default Terminal;

