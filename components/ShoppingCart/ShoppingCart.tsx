import Cart from "./Cart";
import CartItems from "./CartItems";


const ShoppingCart = () => {


    return (
        <section className='py-20'>
            <div className='container px-4 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-14'>
                    <div className='col-span-2'>
                    <CartItems/>

                    </div>
                    <div className='col-span-1'>
                       <Cart/>
                    </div>
                </div>
            </div>
        </section>
      

    );
};

export default ShoppingCart;