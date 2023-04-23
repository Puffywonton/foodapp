import classes from './MenuBottomNavigation.module.css'
import Button from './Button'

const MenuBottomNavigation = (props) => {

    const nextButtonHandler = (event) => {
        event.preventDefault()
        if (props.step === 5) {
            return
        }
        let newStep = props.step + 1
        props.setStep(newStep)
    }

    const previousButtonHandler = (event) => {
        event.preventDefault()
        if (props.step === 1) {
            return
        }
        let newStep = props.step - 1
        props.setStep(newStep)
    }

    const submitButtonHandler = (event) => {
        event.preventDefault()
        props.reset()
        props.setStep(1)
        console.log("order:", props.answers)
        alert("order submitted")
    }

    return (
        <div className={classes.prevNextControl}>
            {props.step === 5 ?
                <Button onClick={submitButtonHandler} name='submit' />
                :
                <Button onClick={nextButtonHandler} name={`to ${props.stepNames[props.step]}`} />
            }
            {props.step === 1 ? '' :
                <Button onClick={previousButtonHandler} name={`to ${props.stepNames[props.step - 1]}`} />
            }
        </div>
    )
}

export default MenuBottomNavigation