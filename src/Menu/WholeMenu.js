import fakeBurgersMenu from "./fakeBurgersMenu"
import fakeDrinksMenu from "./fakeDrinksMenu"
import fakeSidesMenu from "./fakeSidesMenu"
import MenuSection from "./MenuSection"

const WholeMenu = () => {
    return (
        <>
            <MenuSection
                title="Les Burgers"
                list={fakeBurgersMenu}
            />
            <MenuSection
                title="Les Sides"
                list={fakeSidesMenu}
            />
            <MenuSection
                title="Les Drinks"
                list={fakeDrinksMenu}
            />
        </>
    )
}

export default WholeMenu