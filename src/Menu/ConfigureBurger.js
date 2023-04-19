import fakeDrinksMenu from "../Datas/fakeDrinksMenu"
import fakeSaucesList from "../Datas/fakeSaucesList"
import fakeSidesMenu from "../Datas/fakeSidesMenu"
import fakeToppingList from "../Datas/fakeToppingsList"
import Options from "../UI/Options"
import SectionTitle from "../UI/SectionTitle"
import classes from './ConfigureBurger.module.css'


const ConfigureBurger = (props) => {
    return (
        <div>
            <div>close</div>
            <SectionTitle title={props.title} />
            <div className={classes.description}>{props.description}</div>
            <Options
                title="How About Some Toppings?"
                list={fakeToppingList}
            />
            <Options
                title="What about the sauce?"
                list={fakeSaucesList}
            />
            <Options
                title="Do you want some sides with that?"
                list={fakeSidesMenu}
            /> 
            <Options
                title="Are you thirsty?"
                list={fakeDrinksMenu}
            />
        </div>
    )
}
export default ConfigureBurger