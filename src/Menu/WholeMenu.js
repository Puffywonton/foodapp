import fakeBurgersMenu from "../Datas/fakeBurgersMenu"
import fakeDrinksMenu from "../Datas/fakeDrinksMenu"
import fakeSidesMenu from "../Datas/fakeSidesMenu"
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