import fakeBurgersMenu from "./Datas/fakeBurgersMenu";
import ConfigureBurger from "./Menu/ConfigureBurger";
import WholeMenu from "./Menu/WholeMenu";

function App() {
  return (
    // <WholeMenu />
    <ConfigureBurger
      title={fakeBurgersMenu[0].title}
      description={fakeBurgersMenu[0].description}
    />
  );
}

export default App;
