import { Trash2, ChevronLeft, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCartstore } from '../stores/Cartstore';

const DELIVERY_FEE = 200;

export default function Cart() {
  const navigate = useNavigate();
  const items = useCartstore((state) => state.items);
  const updateQuantity = useCartstore((state) => state.updateQuantity);
  const removeFromCart = useCartstore((state) => state.removeFromCart);
  const clearCart = useCartstore((state) => state.clearCart);

  const subtotal = items.reduce((sum, item) => sum + (item.discount_price || item.price) * item.quantity, 0);
  const total = subtotal + DELIVERY_FEE;

  if (items.length === 0) {
    return (
      <div style={{backgroundColor: '#f5f1ed', color: '#000000', minHeight: '100vh', padding: '60px 20px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
          <ShoppingBag size={80} style={{margin: '0 auto 20px', color: '#dc2626', opacity: 0.5}} />
          <h1 style={{fontSize: '44px', fontWeight: '900', marginBottom: '16px'}}>Your Cart is Empty</h1>
          <p style={{color: '#666666', marginBottom: '32px', fontSize: '18px'}}>Start shopping and add some items!</p>
          <button onClick={() => navigate('/products')} style={{backgroundColor: '#dc2626', color: 'white', border: 'none', padding: '14px 40px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s ease'}} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: '#f5f1ed', color: '#000000', minHeight: '100vh', paddingTop: '32px', paddingBottom: '64px'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        
        <button onClick={() => navigate('/')} style={{backgroundColor: 'transparent', color: '#dc2626', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', transition: 'all 0.3s ease'}} onMouseEnter={(e) => e.target.style.color = '#000000'} onMouseLeave={(e) => e.target.style.color = '#dc2626'}>
          <ChevronLeft size={20} /> Back Home
        </button>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px'}}>
          
          <div>
            <h1 style={{fontSize: '44px', fontWeight: '900', marginBottom: '16px'}}>Shopping Cart</h1>
            <p style={{color: '#666666', marginBottom: '32px', fontSize: '16px'}}>
              {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
            </p>

            <div style={{borderTop: '2px solid #000000', borderBottom: '2px solid #000000', paddingTop: '24px', paddingBottom: '24px'}}>
              {items.map((item) => (
                <div key={item.id} style={{display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '24px', alignItems: 'start', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid #cccccc'}}>
                  
                  <div style={{width: '80px', height: '80px', backgroundColor: '#ede8e3', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px'}}>👗</div>

                  <div>
                    <h3 style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '8px', color: '#000000'}}>{item.name}</h3>
                    <p style={{color: '#dc2626', fontWeight: 'bold', fontSize: '18px', marginBottom: '12px'}}>KES {Math.round(item.discount_price || item.price).toLocaleString()}</p>

                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{width: '32px', height: '32px', backgroundColor: '#ffffff', border: '1px solid #000000', borderRadius: '4px', color: '#000000', fontSize: '18px', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#000000'; e.target.style.color = '#dc2626';}} onMouseLeave={(e) => {e.target.style.backgroundColor = '#ffffff'; e.target.style.color = '#000000';}}>−</button>
                      <span style={{width: '40px', textAlign: 'center', fontWeight: 'bold'}}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{width: '32px', height: '32px', backgroundColor: '#ffffff', border: '1px solid #000000', borderRadius: '4px', color: '#000000', fontSize: '18px', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#000000'; e.target.style.color = '#dc2626';}} onMouseLeave={(e) => {e.target.style.backgroundColor = '#ffffff'; e.target.style.color = '#000000';}}>+</button>
                    </div>

                    <p style={{color: '#666666', fontSize: '14px'}}>Subtotal: KES {Math.round((item.discount_price || item.price) * item.quantity).toLocaleString()}</p>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} style={{backgroundColor: 'transparent', border: 'none', color: '#dc2626', cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease'}} onMouseEnter={(e) => e.target.style.color = '#000000'} onMouseLeave={(e) => e.target.style.color = '#dc2626'}>
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            <button onClick={() => navigate('/products')} style={{backgroundColor: 'transparent', color: '#dc2626', border: '2px solid #dc2626', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#dc2626'; e.target.style.color = 'white';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#dc2626';}}>
              <ChevronLeft size={20} /> Continue Shopping
            </button>
          </div>

          <div style={{position: 'sticky', top: '100px', height: 'fit-content'}}>
            <div style={{backgroundColor: '#ffffff', border: '2px solid #000000', borderRadius: '12px', padding: '24px'}}>
              <h2 style={{fontSize: '24px', fontWeight: '900', marginBottom: '24px', color: '#000000'}}>Order Summary</h2>

              <div style={{marginBottom: '16px', display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #cccccc'}}>
                <span style={{color: '#666666'}}>Subtotal ({items.length} items)</span>
                <span style={{fontWeight: 'bold', color: '#000000'}}>KES {subtotal.toLocaleString()}</span>
              </div>

              <div style={{marginBottom: '24px', display: 'flex', justifyContent: 'space-between', paddingBottom: '24px', borderBottom: '1px solid #cccccc'}}>
                <span style={{color: '#666666'}}>Delivery Fee</span>
                <span style={{fontWeight: 'bold', color: '#000000'}}>KES {DELIVERY_FEE.toLocaleString()}</span>
              </div>

              <div style={{marginBottom: '24px', display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontSize: '18px', fontWeight: 'bold', color: '#000000'}}>Grand Total</span>
                <span style={{fontSize: '24px', fontWeight: '900', color: '#dc2626'}}>KES {total.toLocaleString()}</span>
              </div>

              <button onClick={() => navigate('/checkout')} style={{width: '100%', background: '#dc2626', color: 'white', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginBottom: '12px', transition: 'all 0.3s ease'}} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
                Proceed to Checkout
              </button>

              <button onClick={() => clearCart()} style={{width: '100%', backgroundColor: 'transparent', color: '#dc2626', border: '2px solid #dc2626', padding: '12px', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#dc2626'; e.target.style.color = 'white';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#dc2626';}}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}