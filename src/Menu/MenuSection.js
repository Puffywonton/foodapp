import MenuItem from "./MenuItem"
import classes from './MenuSection.module.css'

const MenuSection = (props) => {
    const sectionList = props.list.map(item => 
        <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            img={item.img}
            imgAlt={item.imgAt}
        />
    )

    return(
        <section className={classes.section}>
            <hr />
            <h2>{props.title}</h2>
            <hr />
            <ul>
                {sectionList}
            </ul>
        </section>)
}
export default MenuSection