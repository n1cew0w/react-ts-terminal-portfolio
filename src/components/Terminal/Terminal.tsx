import styles from './Terminal.module.scss'
import {useEffect, useRef, useState} from "react";

const Terminal = () => {
    const commands = ['help','github', 'vk', 'tg', 'projects', 'resume', 'clear']
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        if (inputRef.current){
        inputRef.current.focus()
        }
    },[])
    return (
        <div className={styles.wrapper} onClick={e => inputRef.current ? inputRef.current.focus() : ''}>
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
                               switch (input){
                                   case "help":
                                       newOutput += "All commands: " + commands
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
    )

};

export default Terminal;

