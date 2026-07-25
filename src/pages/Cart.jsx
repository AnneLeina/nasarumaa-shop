import { Trash2, ChevronLeft, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../stores/cartStore';

const DELIVERY_FEE = 200;

export default function Cart() {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const subtotal = items.reduce((sum, item) => sum + (item.discount_price || item.price) * item.quantity, 0);
  const total = subtotal + DELIVERY_FEE;

  if (items.length === 0) {
    return (
      <div style={{backgroundColor: '#000000', color: 'white', minHeight: '100vh', padding: '60px 20px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
          <ShoppingBag size={80} style={{margin: '0 auto 20px', color: '#dc2626', opacity: 0.5}} />
          <h1 style={{fontSize: '44px', fontWeight: '900', marginBottom: '16px'}}>Your Cart is Empty</h1>
          <p style={{color: '#999999', marginBottom: '32px', fontSize: '18px'}}>
            Start shopping and add some amazing Maasai items!
          </p>
          <button
            onClick={() => navigate('/products')}
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              border: 'none',
              padding: '14px 40px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: '#000000', color: 'white', minHeight: '100vh', paddingTop: '32px', paddingBottom: '64px'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: 'transparent',
            color: '#dc2626',
            border: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '32px'
          }}
        >
          <ChevronLeft size={20} /> Back Home
        </button>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px'}}>
          
          {/* ITEMS */}
          <div>
            <h1 style={{fontSize: '44px', fontWeight: '900', marginBottom: '16px'}}>Shopping Cart</h1>
            <p style={{color: '#999999', marginBottom: '32px', fontSize: '16px'}}>
              {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
            </p>

            <div style={{borderTop: '2px solid #dc2626', borderBottom: '2px solid #dc2626', paddingTop: '24px', paddingBottom: '24px'}}>
              {items.map((item) => (
                <div key={item.id} style={{display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '24px', alignItems: 'start', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid #333333'}}>
                  
                  {/* IMAGE */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#1a1a1a',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px'
                  }}>
                    👗
                  </div>

                  {/* INFO */}
                  <div>
                    <h3 style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '8px', color: 'white'}}>
                      {item.name}
                    </h3>
                    <p style={{color: '#dc2626', fontWeight: 'bold', fontSize: '18px', marginBottom: '12px'}}>
                      KES {Math.round(item.discount_price || item.price).toLocaleString()}
                    </p>

                    {/* QUANTITY */}
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{
                          width: '32px',
                          height: '32px',
                          backgroundColor: '#1a1a1a',
                          border: '1px solid #333333',
                          borderRadius: '4px',
                          color: 'white',
                          fontSize: '18px',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        −
                      </button>
                      <span style={{width: '40px', textAlign: 'center', fontWeight: 'bold'}}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{
                          width: '32px',
                          height: '32px',
                          backgroundColor: '#1a1a1a',
                          border: '1px solid #333333',
                          borderRadius: '4px',
                          color: 'white',
                          fontSize: '18px',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        +
                      </button>
                    </div>

                    <p style={{color: '#999999', fontSize: '14px'}}>
                      Subtotal: KES {Math.round((item.discount_price || item.price) * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  {/* DELETE */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#dc2626',
                      cursor: 'pointer',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    title="Remove from cart"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/products')}
              style={{
                backgroundColor: 'transparent',
                color: '#dc2626',
                border: '2px solid #dc2626',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
                marginTop: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <ChevronLeft size={20} /> Continue Shopping
            </button>
          </div>

          {/* ORDER SUMMARY */}
          <div style={{position: 'sticky', top: '100px', height: 'fit-content'}}>
            <div style={{
              backgroundColor: '#1a1a1a',
              border: '2px solid #dc2626',
              borderRadius: '12px',
              padding: '24px'
            }}>
              <h2 style={{fontSize: '24px', fontWeight: '900', marginBottom: '24px', color: 'white'}}>Order Summary</h2>

              <div style={{marginBottom: '16px', display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #333333'}}>
                <span style={{color: '#999999'}}>Subtotal ({items.length} items)</span>
                <span style={{fontWeight: 'bold', color: 'white'}}>KES {subtotal.toLocaleString()}</span>
              </div>

              <div style={{marginBottom: '24px', display: 'flex', justifyContent: 'space-between', paddingBottom: '24px', borderBottom: '1px solid #333333'}}>
                <span style={{color: '#999999'}}>Delivery Fee</span>
                <span style={{fontWeight: 'bold', color: 'white'}}>KES {DELIVERY_FEE.toLocaleString()}</span>
              </div>

              <div style={{marginBottom: '24px', display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontSize: '18px', fontWeight: 'bold', color: 'white'}}>Grand Total</span>
                <span style={{fontSize: '24px', fontWeight: '900', color: '#dc2626'}}>KES {total.toLocaleString()}</span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '14px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer',
                  marginBottom: '12px'
                }}
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => clearCart()}
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  color: '#dc2626',
                  border: '2px solid #dc2626',
                  padding: '12px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}