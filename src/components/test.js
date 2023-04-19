import { useState } from 'react'
import classes from './Test.module.css'
import NavigationBar from './NavigationBar'
import PrevNextButtons from './PrevNextButtons'
import Options from './Options'
import fakeToppingList from '../Datas/fakeToppingsList'
import fakeSaucesList from '../Datas/fakeSaucesList'
import fakeSidesMenu from '../Datas/fakeSidesMenu'
import fakeDrinksMenu from '../Datas/fakeDrinksMenu'

const Test = () => {
    const [step, setStep] = useState(1)
    const [answers, setAnswers] = useState({
        toppings: {},
        sauces: {},
        sides: {},
        drink: {}
    })

    const answerHandler = (event) => {
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
            />
        )
    }

    const CatRecap = (props) => {
        let tempArray = []
        for (let e in props.answers[props.category]) {
            if (props.answers[props.category][e] === true) {
                tempArray.push(e)
            }
        }
        return (
            <div>
                <h3>for {props.category}:</h3>
                <div>{tempArray.map(item =>
                    <p key={item}>{item}</p>)}
                </div>
            </div>    
        )
    }

    const OrderRecap = () => {
        const answersTest = answers
        return (
            <div className={classes.card}>
                <h2>Confirm</h2>
                <div>
                    <CatRecap answers={answersTest} category="toppings" />
                    <CatRecap answers={answersTest} category="sauces" />
                    <CatRecap answers={answersTest} category="sides" />
                    <CatRecap answers={answersTest} category="drink" />
                </div>
            </div>
        )
    }

    const Step5 = () => {
        return (
            <OrderRecap />
        )
    }
    

    return (
        <>
            <NavigationBar step={step} setStep={setStep} />
            {step === 1 ? <Step1 /> : ''}
            {step === 2 ? <Step2 /> : ''}
            {step === 3 ? <Step3 /> : ''}
            {step === 4 ? <Step4 /> : ''}
            {step === 5 ? <Step5 /> : ''}
            <PrevNextButtons step={step} setStep={setStep} />
        </>       
    )
}

export default Test