import classes from './Options.module.css'

const Options = (props) => {

    const optionList = props.list.map((item, index) =>
    {
        let title = ""
            if (typeof props.list[0] === "string") {
                title = item
            } else {
                title = item.title
            }
        return (
                <li key={index} className={classes.option}>{title}</li>    
            )
        }
    )

    return (
        <div>
            <h4 className={classes.title}>{props.title}</h4>
            <ul className={classes.list}>
                {optionList}
            </ul>
        </div>
    )

}
export default Options