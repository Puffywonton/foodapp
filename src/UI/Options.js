const Options = (props) => {
    return (
        <div>
            <h4 className={classes.title}>How About Some Toppings?</h4>
            <ul className={classes.list}>
                {toppingList}
            </ul>
        </div>
    )

}
export default Options