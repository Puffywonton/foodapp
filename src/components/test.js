import { useState } from 'react'
import classes from './Test.module.css'
import NavigationBar from './NavigationBar'
import Options from './Options'
import fakeToppingList from '../Datas/fakeToppingsList'
import fakeSaucesList from '../Datas/fakeSaucesList'
import fakeSidesMenu from '../Datas/fakeSidesMenu'
import fakeDrinksMenu from '../Datas/fakeDrinksMenu'
import MenuBottomNavigation from './MenuBottomNavigation'
import MenuOrderRecap from './MenuOrderRecap'


const Test = () => {
    const [step, setStep] = useState(1)

    const stepNames = ['Toppings', 'Sauces', 'Sides', 'Drinks', 'Recap']

    const [answers, setAnswers] = useState({
        toppings: {},
        sauces: {},
        sides: {},
        drink: {}
    })

    const answerHandler = (event) => {
        console.log("hello")
        console.log(event)
        const category = [event.target.attributes[3].value]
        const exclusive = [event.target.attributes[4].value][0]
        const updatedAnswers = {
            ...answers,
        }
        if (exclusive === "true") {
            updatedAnswers[category] = {}
        }
        updatedAnswers[category][event.target.name] = event.target.checked
        setAnswers(updatedAnswers)
    }

    const Step1 = () => {
        return (
            <Options
                title="How About Some Toppings?"
                list={fakeToppingList}
                onChange={answerHandler}
                answers={answers}
                category="toppings"
                exclusive=""
                step={step}
                setStep={setStep}
                stepNames={stepNames}
            />      
        )
    }

    const Step2 = () => {
        return (
            <Options
                title="What about the sauce?"
                list={fakeSaucesList}
                onChange={answerHandler}
                answers={answers}
                category="sauces"
                exclusive=""
                step={step}
                setStep={setStep}
                stepNames={stepNames}
            />
        )
    }

    const Step3 = () => {
        return (
            <Options
                title="Do you want some sides with that?"
                list={fakeSidesMenu}
                onChange={answerHandler}
                answers={answers}
                category="sides"
                exclusive="true"
                step={step}
                setStep={setStep}
                stepNames={stepNames}
            />      
        )
    }

    const Step4 = () => {
        return (
            <Options
                title="Are you thirsty?"
                list={fakeDrinksMenu}
                onChange={answerHandler}
                answers={answers}
                category="drink"
                exclusive="true"
                step={step}
                setStep={setStep}
                stepNames={stepNames}
            />
        )
    }

    const Step5 = () => {
        return (
            <MenuOrderRecap
                answers={answers}
                step={step}
                setStep={setStep}
                setAnswers={setAnswers}
            />
        )
    }

    return (
        <div className={classes.module}>
            <NavigationBar step={step} setStep={setStep} />
            {step === 1 ? <Step1 /> : ''}
            {step === 2 ? <Step2 /> : ''}
            {step === 3 ? <Step3 /> : ''}
            {step === 4 ? <Step4 /> : ''}
            {step === 5 ? <Step5 /> : ''}
        </div>       
    )
}

export default Test