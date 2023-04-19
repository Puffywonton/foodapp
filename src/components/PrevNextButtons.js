import classes from './PrevNextButtons.module.css'

const PrevNextButtons = (props) => {

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

    return (
        <div className={classes.buttonControl}>
            <button onClick={previousButtonHandler}>prev</button>
            <button onClick={nextButtonHandler}>next</button>
        </div>
    )
}

export default PrevNextButtons