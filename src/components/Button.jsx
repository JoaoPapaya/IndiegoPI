import styles from "./Button.module.css"

function Button(props){

        const [on, ToggleOn] = useState(false)

    return(
        <button className={noturno ? 'buttonDark' : 'buttonLight'} onClick={() => ToggleOn(!on)}>{props.texto}</button>
    )
}

export default Button;