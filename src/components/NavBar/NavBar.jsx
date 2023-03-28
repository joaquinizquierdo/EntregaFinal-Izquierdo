import Categories from "../Categories/Categories";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>eCommerce</h3>
      <div>
        <Categories content={'Remeras'}/>
        <Categories content={'Buzos'}/>
        <Categories content={'Zapatillas'}/>
      </div>
      <CartWidget/>
    </nav>
  )
}

export default NavBar;