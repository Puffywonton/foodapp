import classes from './MenuItem.module.css'

const MenuItem = (props) => {
    const price = `${props.price.toFixed(2)}€`
    return (
        <li className={classes.mainContainer}>
            <div className={classes.presentationContainer}>
                <h3 className={classes.title}>{props.title}</h3>
                {props.description && <div className={classes.description}>{props.description}</div>}
            </div>
            <div className={classes.price}>{price}</div>
        </li>
    )
}
export default MenuItem