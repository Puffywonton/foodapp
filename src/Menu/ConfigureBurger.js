import fakeToppingList from "../Datas/fakeToppingsList"
import SectionTitle from "../UI/SectionTitle"
import classes from './ConfigureBurger.module.css'


const ConfigureBurger = (props) => {
    const toppingList = fakeToppingList.map(item =>
        <li className={classes.topping}>{item}</li>    
    )

    return (
        <div>
            <div>close</div>
            <SectionTitle title={props.title} />
            <div className={classes.description}>{props.description}</div>
            <div>
                <h4 className={classes.title}>How About Some Toppings?</h4>
                <ul className={classes.list}>
                    {toppingList}
                </ul>
            </div>
        </div>
    )
}
export default ConfigureBurger