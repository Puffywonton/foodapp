import classes from './NavigationBar.module.css'

const NavigationBar = (props) => {
    const navButtonHandler = (event) => {
        let newStep = +event.target.id
        props.setStep(newStep)
    }

    const navBar1Classes = `${classes.navButton} ${props.step === 1 ? classes.current : ''}`
    const navBar2Classes = `${classes.navButton} ${props.step === 2 ? classes.current : ''}`
    const navBar3Classes = `${classes.navButton} ${props.step === 3 ? classes.current : ''}`
    const navBar4Classes = `${classes.navButton} ${props.step === 4 ? classes.current : ''}`
    const navBar5Classes = `${classes.navButton} ${props.step === 5 ? classes.current : ''}`

    return (
        <div className={classes.navBar}>
            <div onClick={navButtonHandler} id={1} className={navBar1Classes}>Toppings</div>
            <div onClick={navButtonHandler} id={2} className={navBar2Classes}>Sauces</div>
            <div onClick={navButtonHandler} id={3} className={navBar3Classes}>Sides</div>
            <div onClick={navButtonHandler} id={4} className={navBar4Classes}>Drinks</div>
            <div onClick={navButtonHandler} id={5} className={navBar5Classes}>Recap</div>
        </div>    
    )
}

export default NavigationBar