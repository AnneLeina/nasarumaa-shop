import { CheckCircle, Home, ShoppingBag } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function OrderConfirmation() {
  const { orderNumber } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderNumber) {
      fetchOrder();
    }
  }, [orderNumber]);

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`${API_URL}/orders/${orderNumber}`);
      if (response.data.success) {
        setOrder(response.data.order);
      }
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{backgroundColor: '#000000', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{textAlign: 'center'}}>
          <div style={{width: '60px', height: '60px', margin: '0 auto 20px', border: '4px solid #dc2626', borderTop: '4px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite'}}></div>
          <p style={{color: '#dc2626', fontWeight: 'bold'}}>Loading order...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: '#000000', color: 'white', minHeight: '100vh', padding: '60px 20px'}}>
      <div style={{maxWidth: '700px', margin: '0 auto', textAlign: 'center'}}>
        
        {/* SUCCESS ICON */}
        <CheckCircle size={100} style={{margin: '0 auto 32px', color: '#dc2626'}} />

        {/* HEADING */}
        <h1 style={{fontSize: '44px', fontWeight: '900', marginBottom: '16px'}}>Order Confirmed!</h1>
        <p style={{color: '#999999', marginBottom: '32px', fontSize: '18px'}}>
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        {/* ORDER DETAILS BOX */}
        <div style={{
          backgroundColor: '#1a1a1a',
          border: '2px solid #dc2626',
          borderRadius: '12px',
          padding: '32px',
          marginBottom: '32px',
          textAlign: 'left'
        }}>
          <h2 style={{fontSize: '24px', fontWeight: '900', marginBottom: '24px', color: '#dc2626'}}>Order Details</h2>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #333333'}}>
            <div>
              <p style={{color: '#999999', fontSize: '14px', marginBottom: '4px'}}>Order Number</p>
              <p style={{fontSize: '20px', fontWeight: 'bold', color: 'white'}}>{orderNumber}</p>
            </div>
            <div>
              <p style={{color: '#999999', fontSize: '14px', marginBottom: '4px'}}>Order Status</p>
              <p style={{fontSize: '20px', fontWeight: 'bold', color: '#dc2626'}}>Pending</p>
            </div>
          </div>

          {order && (
            <>
              <div style={{marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #333333'}}>
                <p style={{color: '#999999', fontSize: '14px', marginBottom: '4px'}}>Estimated Delivery</p>
                <p style={{fontSize: '16px', color: 'white'}}>2-3 Business Days</p>
              </div>

              <div style={{marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #333333'}}>
                <p style={{color: '#999999', fontSize: '14px', marginBottom: '8px'}}>Total Amount</p>
                <p style={{fontSize: '28px', fontWeight: '900', color: '#dc2626'}}>
                  KES {Math.round(order.total_amount).toLocaleString()}
                </p>
              </div>

              <div>
                <p style={{color: '#999999', fontSize: '14px', marginBottom: '8px'}}>Delivery Instructions</p>
                <p style={{fontSize: '14px', color: '#cccccc', lineHeight: '1.6'}}>
                  A confirmation SMS will be sent to your phone. Our team will contact you before delivery to confirm the time. Make sure to keep your phone available.
                </p>
              </div>
            </>
          )}
        </div>

        {/* NEXT STEPS */}
        <div style={{
          backgroundColor: 'rgba(220, 38, 38, 0.1)',
          border: '2px solid rgba(220, 38, 38, 0.3)',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '32px',
          textAlign: 'left'
        }}>
          <h3 style={{fontSize: '18px', fontWeight: '900', marginBottom: '16px', color: '#dc2626'}}>What Happens Next?</h3>
          <ol style={{color: '#cccccc', lineHeight: '1.8', paddingLeft: '20px', margin: 0}}>
            <li style={{marginBottom: '8px'}}>Order confirmation SMS will be sent</li>
            <li style={{marginBottom: '8px'}}>Our team will verify your order within 24 hours</li>
            <li style={{marginBottom: '8px'}}>You will receive a delivery appointment call</li>
            <li>Items will be delivered to your address</li>
          </ol>
        </div>

        {/* ACTION BUTTONS */}
        <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <button
            onClick={() => navigate('/')}
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              border: 'none',
              padding: '12px 32px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Home size={20} /> Back to Home
          </button>
          <button
            onClick={() => navigate('/products')}
            style={{
              backgroundColor: 'transparent',
              color: '#dc2626',
              border: '2px solid #dc2626',
              padding: '12px 32px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <ShoppingBag size={20} /> Continue Shopping
          </button>
        </div>

        {/* CONTACT INFO */}
        <div style={{marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #333333'}}>
          <p style={{color: '#999999', marginBottom: '8px'}}>Questions? Contact us:</p>
          <p style={{color: '#dc2626', fontWeight: 'bold', marginBottom: '4px'}}>📞 +254 711 410 982</p>
          <p style={{color: '#dc2626', fontWeight: 'bold'}}>📧 annelenku@gmail.com</p>
        </div>
      </div>
    </div>
  );
}