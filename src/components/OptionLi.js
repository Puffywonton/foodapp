import classes from './OptionLi.module.css'



const OptionLi = (props) => {
    return (
        <li className={classes.li}>
            <label htmlFor={props.title}>{props.title}</label>
            <input
                type="checkbox"
                id={props.id}
                name={props.title}
                onChange={props.onChange}
                checked={props.answers[props.category][props.title]}
                category={props.category}
                exclusive={props.exclusive}
            />
        </li>    
    )
}

export default OptionLi