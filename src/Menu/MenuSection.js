import SectionTitle from "../UI/SectionTitle"
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
            <SectionTitle title={props.title}/>
            <ul>
                {sectionList}
            </ul>
        </section>)
}
export default MenuSection