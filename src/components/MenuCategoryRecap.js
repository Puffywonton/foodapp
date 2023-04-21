const MenuCategoryRecap = (props) => {
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

export default MenuCategoryRecap