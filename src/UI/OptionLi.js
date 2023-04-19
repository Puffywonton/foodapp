import classes from './OptionLi.module.css'



const OptionLi = (props) => {


    return (
        <li key={props.id} className={classes.li}>
            <label for={props.title}>{props.title}</label>
            <input type="checkbox" id={props.id} name={props.title} />
        </li>    
    )
}

export default OptionLi