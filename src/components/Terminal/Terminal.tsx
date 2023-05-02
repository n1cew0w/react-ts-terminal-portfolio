import styles from './Terminal.module.scss'
import React, {JSXElementConstructor, ReactNode, useEffect, useRef, useState} from "react";
import powershell from '../../assets/file_type_powershell_icon_130243.png'
import close from '../../assets/window_close_icon_181227.png'
import closeHeader from '../../assets/icons8-удалить-48.png'
import svernHeader from '../../assets/icons8-кнопка-развернуть-26.png'
import minus from '../../assets/icons8-вычитание-30.png'
import DragMove from "../../feature/DragMove";
import Typewriter from 'react-ts-typewriter';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {changeVisible} from "../../redux/terminalSlice";

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
    const [output, setOutput] = useState()
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
    const github = () => {
        window.open('https://github.com/n1cew0w');
    }
    const vk = () => {
        window.open('https://vk.com/n1cew0w')
    }
    const tg = () => {
        window.open('https://t.me/n1cew0w1337')
    }



    //REDUX LOGIC
    const dispatch = useAppDispatch()





    return (
        <>
            <div style={{transform: `translateX(${translate.x}px) translateY(${translate.y}px)`}}>
                <DragMove onDragMove={handleDragMove} className={styles.wrapper}>
                    <div className={styles.header}>
                        <div className={styles.tab}>
                            <img src={powershell} className={styles.powershell_icon} alt=""/>
                            n1cew0w PowerShell
                            <img src={close}
                                 className={styles.close_icon}
                                 alt=""

                            />
                        </div>
                        <div className={styles.header_buttons}>
                            <img src={minus} className={styles.minus_icon} alt=""/>
                            <img src={svernHeader} className={styles.svernheader_icon} alt=""/>
                            <img src={closeHeader}
                                 className={styles.closeheader_icon}
                                 alt=""
                                 onClick={() => dispatch(changeVisible())}/>
                        </div>
                    </div>
                    <div className={styles.body} onClick={e => inputRef.current ? inputRef.current.focus() : ''}>
                        n1cew0w powershell <br/>
                        (C) Frontend Corporation. Все права защищены <br/>
                        Введите <span>help</span>, чтобы узнать все доступные команды

                        <div className={styles.terminal}>
                            {output}
                        </div>

                        <span className={styles.span_text}>
                            <label htmlFor="input">root@n1cew0w:~$</label>
                             <input className={styles.input}
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={event => setInput(event.target.value)}
                                    onKeyDown={event => {
                                        if (event.key === "Enter") {
                                            let newOutput: ReactNode;
                                            newOutput = output + '\n' + "root@n1cew0w:~$ " + input + '\n';
                                            switch (input) {
                                                case "help":
                                                    newOutput = <Typewriter cursor={false} speed={50}
                                                                            text={"Все команды: " + commands}/>
                                                    break;
                                                case 'github':
                                                    newOutput = <Typewriter cursor={false} speed={150}
                                                                            text={'Переход на мой github аккаунт....'}
                                                                            onFinished={github}/>
                                                    break;
                                                case 'vk':
                                                    newOutput = <Typewriter cursor={false} speed={150}
                                                                            text={'Переход на мой аккаунт vk....'}
                                                                            onFinished={vk}/>
                                                    break;
                                                case 'tg':
                                                    newOutput = <Typewriter cursor={false} speed={150}
                                                                            text={'Переход на мой telegram аккаунт....'}
                                                                            onFinished={tg}/>
                                                    break;
                                                case 'clear':
                                                    newOutput = ''
                                                    newOutput = <Typewriter cursor={false} speed={150}
                                                                            text={"Терминал очищен "}/>
                                                    break;
                                                default:
                                                    newOutput =
                                                        <Typewriter speed={150} text={"Этой команды не существует "}/>
                                            }
                                            // @ts-ignore
                                            setOutput(newOutput)
                                            setInput('')
                                        }
                                    }}
                             />
                        </span>
                    </div>
                </DragMove>
            </div>


        </>

    )

};

export default Terminal;

