import OptionLi from './OptionLi'
import classes from './Options.module.css'
import MenuBottomNavigation from './MenuBottomNavigation'

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
    if (props.id === props.step) {
        return (
            <div className={classes.card}>
                <h4 className={classes.title}>{props.title}</h4>
                <ul className={classes.list}>
                    {optionList}
                </ul>
                <MenuBottomNavigation step={props.step} setStep={props.setStep} stepNames={props.stepNames} />
            </div>
        )
    } else {
        return
    }
}
export default Options