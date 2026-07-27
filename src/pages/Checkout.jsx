import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartstore } from '../stores/Cartstore';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const DELIVERY_FEE = 200;

export default function Checkout() {
  const navigate = useNavigate();
  const items = useCartstore((state) => state.items);
  const clearCart = useCartstore((state) => state.clearCart);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const subtotal = items.reduce((sum, item) => sum + (item.discount_price || item.price) * item.quantity, 0);
  const total = subtotal + DELIVERY_FEE;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/orders`, {
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        items: items,
        totalAmount: total
      });

      if (response.data.success) {
        clearCart();
        navigate(`/order-confirmation/${response.data.orderId}`);
      }
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Error creating order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div style={{backgroundColor: '#f5f1ed', color: '#000000', minHeight: '100vh', padding: '60px 20px'}}>
        <div style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
          <h1 style={{fontSize: '44px', fontWeight: '900', marginBottom: '16px'}}>Cart is Empty</h1>
          <button onClick={() => navigate('/products')} style={{backgroundColor: '#dc2626', color: 'white', border: 'none', padding: '14px 40px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer'}}>
            Shop Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: '#f5f1ed', color: '#000000', minHeight: '100vh', paddingTop: '32px', paddingBottom: '64px'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        
        <button onClick={() => navigate('/cart')} style={{backgroundColor: 'transparent', color: '#dc2626', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', transition: 'all 0.3s ease'}} onMouseEnter={(e) => e.target.style.color = '#000000'} onMouseLeave={(e) => e.target.style.color = '#dc2626'}>
          <ChevronLeft size={20} /> Back to Cart
        </button>

        <h1 style={{fontSize: '44px', fontWeight: '900', marginBottom: '32px'}}>Checkout</h1>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px'}}>
          
          <form onSubmit={handleSubmit}>
            <div style={{backgroundColor: '#ffffff', border: '2px solid #000000', borderRadius: '12px', padding: '32px', marginBottom: '32px'}}>
              <h2 style={{fontSize: '24px', fontWeight: '900', marginBottom: '24px', color: '#dc2626'}}>Shipping Information</h2>

              <div style={{marginBottom: '20px'}}>
                <label style={{display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#000000'}}>Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" style={{width: '100%', padding: '12px 16px', backgroundColor: '#f5f1ed', border: '1px solid #000000', borderRadius: '8px', color: '#000000', fontSize: '14px', boxSizing: 'border-box'}} />
              </div>

              <div style={{marginBottom: '20px'}}>
                <label style={{display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#000000'}}>Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" style={{width: '100%', padding: '12px 16px', backgroundColor: '#f5f1ed', border: '1px solid #000000', borderRadius: '8px', color: '#000000', fontSize: '14px', boxSizing: 'border-box'}} />
              </div>

              <div style={{marginBottom: '20px'}}>
                <label style={{display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#000000'}}>Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" style={{width: '100%', padding: '12px 16px', backgroundColor: '#f5f1ed', border: '1px solid #000000', borderRadius: '8px', color: '#000000', fontSize: '14px', boxSizing: 'border-box'}} />
              </div>

              <div>
                <label style={{display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#000000'}}>Delivery Address</label>
                <textarea name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter your delivery address" rows="4" style={{width: '100%', padding: '12px 16px', backgroundColor: '#f5f1ed', border: '1px solid #000000', borderRadius: '8px', color: '#000000', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'inherit'}} />
              </div>
            </div>

            <div style={{backgroundColor: '#ffffff', border: '2px solid #000000', borderRadius: '12px', padding: '32px', marginBottom: '32px'}}>
              <h2 style={{fontSize: '24px', fontWeight: '900', marginBottom: '24px', color: '#dc2626'}}>Payment Method</h2>
              <div style={{backgroundColor: '#f5f1ed', border: '2px solid #cccccc', borderRadius: '8px', padding: '20px', textAlign: 'center'}}>
                <p style={{color: '#666666', marginBottom: '12px', fontSize: '16px'}}> M-Pesa Payment</p>
                <p style={{color: '#dc2626', fontWeight: 'bold', fontSize: '18px'}}>Coming Soon</p>
                <p style={{color: '#666666', marginTop: '12px', fontSize: '14px'}}>STK Push will be sent to your phone</p>
              </div>
            </div>

            <button type="submit" disabled={loading} style={{width: '100%', background: loading ? '#999999' : '#dc2626', color: 'white', border: 'none', padding: '16px', borderRadius: '8px', fontWeight: 'bold', fontSize: '18px', cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.3s ease'}} onMouseEnter={(e) => !loading && (e.target.style.opacity = '0.8')} onMouseLeave={(e) => !loading && (e.target.style.opacity = '1')}>
              {loading ? 'Processing...' : 'Complete Order'}
            </button>
          </form>

          <div style={{position: 'sticky', top: '100px', height: 'fit-content'}}>
            <div style={{backgroundColor: '#ffffff', border: '2px solid #000000', borderRadius: '12px', padding: '24px'}}>
              <h2 style={{fontSize: '24px', fontWeight: '900', marginBottom: '24px', color: '#000000'}}>Order Summary</h2>

              <div style={{maxHeight: '300px', overflowY: 'auto', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #cccccc'}}>
                {items.map((item) => (
                  <div key={item.id} style={{marginBottom: '16px', display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                      <p style={{fontSize: '14px', color: '#000000', marginBottom: '4px'}}>{item.name}</p>
                      <p style={{fontSize: '12px', color: '#666666'}}>x{item.quantity}</p>
                    </div>
                    <p style={{fontWeight: 'bold', color: '#dc2626'}}>KES {Math.round((item.discount_price || item.price) * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div style={{marginBottom: '16px', display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #cccccc'}}>
                <span style={{color: '#666666'}}>Subtotal</span>
                <span style={{fontWeight: 'bold', color: '#000000'}}>KES {subtotal.toLocaleString()}</span>
              </div>

              <div style={{marginBottom: '24px', display: 'flex', justifyContent: 'space-between', paddingBottom: '24px', borderBottom: '1px solid #cccccc'}}>
                <span style={{color: '#666666'}}>Delivery</span>
                <span style={{fontWeight: 'bold', color: '#000000'}}>KES {DELIVERY_FEE.toLocaleString()}</span>
              </div>

              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontSize: '18px', fontWeight: 'bold', color: '#000000'}}>Total</span>
                <span style={{fontSize: '24px', fontWeight: '900', color: '#dc2626'}}>KES {total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}