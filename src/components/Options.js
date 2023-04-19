import OptionLi from './OptionLi'
import classes from './Options.module.css'


const Options = (props) => {

    const optionList = props.list.map(item => <OptionLi
        id={item.id}
        title={item.title}
        key={item.id}
        onChange={props.onChange}
        answers={props.answers}
        category={props.category}
        exclusive={props.exclusive}
    />)

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