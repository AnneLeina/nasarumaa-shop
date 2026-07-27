import { CheckCircle, Home, ShoppingBag } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Orderconfirmation() {
  const { orderNumber } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    if (orderNumber) {
      fetchOrder();
    } else {
      setLoading(false);
    }
  }, [orderNumber]);

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`${API_URL}/orders/${orderNumber}`);
      if (response.data.success) {
        setOrder(response.data.order);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{backgroundColor: '#f5f1ed', color: '#000000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{textAlign: 'center'}}>
          <p style={{color: '#dc2626', fontWeight: 'bold'}}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: '#f5f1ed', color: '#000000', minHeight: '100vh', padding: '60px 20px'}}>
      <div style={{maxWidth: '700px', margin: '0 auto', textAlign: 'center'}}>
        
        <CheckCircle size={100} style={{margin: '0 auto 32px', color: '#dc2626'}} />

        <h1 style={{fontSize: '44px', fontWeight: '900', marginBottom: '16px'}}>Order Confirmed!</h1>
        <p style={{color: '#666666', marginBottom: '32px', fontSize: '18px'}}>Thank you for your purchase!</p>

        <div style={{backgroundColor: '#ffffff', border: '2px solid #000000', borderRadius: '12px', padding: '32px', marginBottom: '32px', textAlign: 'left'}}>
          <h2 style={{fontSize: '24px', fontWeight: '900', marginBottom: '24px', color: '#dc2626'}}>Order Details</h2>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #cccccc'}}>
            <div>
              <p style={{color: '#666666', fontSize: '14px', marginBottom: '4px'}}>Order Number</p>
              <p style={{fontSize: '20px', fontWeight: 'bold', color: '#000000'}}>{orderNumber || 'N/A'}</p>
            </div>
            <div>
              <p style={{color: '#666666', fontSize: '14px', marginBottom: '4px'}}>Status</p>
              <p style={{fontSize: '20px', fontWeight: 'bold', color: '#dc2626'}}>Pending</p>
            </div>
          </div>

          {order && (
            <>
              <div style={{marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #cccccc'}}>
                <p style={{color: '#666666', fontSize: '14px', marginBottom: '4px'}}>Estimated Delivery</p>
                <p style={{fontSize: '16px', color: '#000000'}}>2-3 Business Days</p>
              </div>

              <div style={{marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #cccccc'}}>
                <p style={{color: '#666666', fontSize: '14px', marginBottom: '8px'}}>Total Amount</p>
                <p style={{fontSize: '28px', fontWeight: '900', color: '#dc2626'}}>KES {Math.round(order.total_amount).toLocaleString()}</p>
              </div>

              <div>
                <p style={{color: '#666666', fontSize: '14px', marginBottom: '8px'}}>Next Steps</p>
                <p style={{fontSize: '14px', color: '#333333', lineHeight: '1.6'}}>A confirmation message will be sent. Our team will contact you before delivery.</p>
              </div>
            </>
          )}
        </div>

        <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <button onClick={() => navigate('/')} style={{backgroundColor: '#dc2626', color: 'white', border: 'none', padding: '12px 32px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s ease'}} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
            <Home size={20} /> Home
          </button>
          <button onClick={() => navigate('/products')} style={{backgroundColor: 'transparent', color: '#dc2626', border: '2px solid #dc2626', padding: '12px 32px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#dc2626'; e.target.style.color = 'white';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#dc2626';}}>
            <ShoppingBag size={20} /> Shop More
          </button>
        </div>

        <div style={{marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #cccccc'}}>
          <p style={{color: '#666666', marginBottom: '8px'}}>Questions?</p>
          <p style={{color: '#dc2626', fontWeight: 'bold'}}>+254 711 410 982, +254 712 881 998</p>
          <p style={{color: '#dc2626', fontWeight: 'bold'}}>annelenku@gmail.com</p>
        </div>
      </div>
    </div>
  );
}