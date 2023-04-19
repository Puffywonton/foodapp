import classes from './NavigationBar.module.css'

const NavigationBar = (props) => {

    const navButtonHandler = (event) => {
        let newStep = +event.target.textContent
        props.setStep(newStep)
    }

    const navBar1Classes = `${classes.navButton} ${props.step === 1 ? classes.current : ''}`
    const navBar2Classes = `${classes.navButton} ${props.step === 2 ? classes.current : ''}`
    const navBar3Classes = `${classes.navButton} ${props.step === 3 ? classes.current : ''}`
    const navBar4Classes = `${classes.navButton} ${props.step === 4 ? classes.current : ''}`
    const navBar5Classes = `${classes.navButton} ${props.step === 5 ? classes.current : ''}`

    return (
        <div className={classes.navBar}>
            <div onClick={navButtonHandler} className={navBar1Classes}>1</div>
            <div onClick={navButtonHandler} className={navBar2Classes}>2</div>
            <div onClick={navButtonHandler} className={navBar3Classes}>3</div>
            <div onClick={navButtonHandler} className={navBar4Classes}>4</div>
            <div onClick={navButtonHandler} className={navBar5Classes}>5</div>
        </div>    
    )
}

export default NavigationBar