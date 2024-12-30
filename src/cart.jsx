import './App.css';

function Cart(props) {
  const totalAmount = props.cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  
  return (
    <>
  
      <div id="cart-items-container">
      <h1 id="cart-heading">Cart</h1>
        {props.cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div id="cart-list">
            <table>
              <thead>
                <tr>
                  <td><b>Image</b></td>
                  <td><b>Item</b></td>
                  <td><b>Qty</b></td>
                </tr>
              </thead>
              <tbody>
                {props.cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.img} className="cart-img" alt="cart-item" />
                    </td>
                    <td>
                      {item.name}<br />${item.price}
                    </td>
                    <td className="qty">
                      <button onClick={() => props.decreaseQty(item.id)}>
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <b>{item.qty}</b>
                      <button  onClick={() => props.increaseQty(item.id)}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div id="total-amt">Total Amount ${totalAmount}</div>
      </div>
    </>
  );
}

export default Cart;
