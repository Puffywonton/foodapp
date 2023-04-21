import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button className={classes['button-4']} onClick={props.onClick}>{props.name}</button>    
    )
}

export default Button