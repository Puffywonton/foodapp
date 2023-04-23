import MenuBottomNavigation from "./MenuBottomNavigation"
import MenuCategoryRecap from "./MenuCategoryRecap"
import classes from './MenuOrderRecap.module.css'

const MenuOrderRecap = (props) => {
    const resetHandler = () => {
        props.setAnswers({
            toppings: {},
            sauces: {},
            sides: {},
            drink: {}
        })
    }
    if (props.step === 5) {
        return (
            <div className={classes.card}>
                <div>
                    <MenuCategoryRecap answers={props.answers} category="toppings" />
                    <MenuCategoryRecap answers={props.answers} category="sauces" />
                    <MenuCategoryRecap answers={props.answers} category="sides" />
                    <MenuCategoryRecap answers={props.answers} category="drink" />
                </div>
                <MenuBottomNavigation step={props.step} setStep={props.setStep} reset={resetHandler} stepNames={props.stepNames} />
            </div>
        )
    } else {
        return
    }
}

export default MenuOrderRecap