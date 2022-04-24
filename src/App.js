import MealsMenu from './Meals/MealsMenu';
import { CartProvider } from './store/cart-context';
import CartButton from './Cart/CartButton';

function App() {
  console.log('App re-rendered');
  return (
    <CartProvider>
      <div>
        <h2>Order Now!</h2>
        <CartButton />
        <MealsMenu />
      </div>
    </CartProvider>
  );
}

export default App;
