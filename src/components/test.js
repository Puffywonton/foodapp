import { useState } from 'react'
import classes from './Test.module.css'
import NavigationBar from './NavigationBar'
import Options from './Options'
import fakeToppingList from '../Datas/fakeToppingsList'
import fakeSaucesList from '../Datas/fakeSaucesList'
import fakeSidesMenu from '../Datas/fakeSidesMenu'
import fakeDrinksMenu from '../Datas/fakeDrinksMenu'
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

    const optionsDatas = [
        {
            id: 1,
            title: "How About Some Toppings?",
            list: fakeToppingList,
            category: "toppings",
            exclusive: "",
        },
        {
            id: 2,
            title: "What about the sauces?",
            list: fakeSaucesList,
            category: "sauces",
            exclusive: "",
        },
        {
            id: 3,
            title: "Do you want some sides with that?",
            list: fakeSidesMenu,
            category: "sides",
            exclusive: "true",
        },
        {
            id: 4,
            title: "Are you thirsty?",
            list: fakeDrinksMenu,
            category: "drink",
            exclusive: "true",
        },
    ]

    const answerHandler = (event) => {
        console.log("start",answers)
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
        console.log('end', answers)
    }

    const optionsDisplay = optionsDatas.map(item => 
        <Options
            key={item.id}
            id={item.id}
            title={item.title}
            list={item.list}
            onChange={answerHandler}
            answers={answers}
            category={item.category}
            exclusive={item.exclusive}
            step={step}
            setStep={setStep}
            stepNames={stepNames}
        />
    )

    return (
        <div className={classes.module}>
            <NavigationBar step={step} setStep={setStep} />
            {optionsDisplay}
            <MenuOrderRecap
                answers={answers}
                step={step}
                setStep={setStep}
                setAnswers={setAnswers}
                stepNames={stepNames}
            />
        </div>       
    )
}

export default Test