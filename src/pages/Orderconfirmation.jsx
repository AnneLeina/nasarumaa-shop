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
      <div style={{backgroundColor: '#000000', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{textAlign: 'center'}}>
          <p style={{color: '#dc2626', fontWeight: 'bold'}}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: '#000000', color: 'white', minHeight: '100vh', padding: '60px 20px'}}>
      <div style={{maxWidth: '700px', margin: '0 auto', textAlign: 'center'}}>
        <CheckCircle size={100} style={{margin: '0 auto 32px', color: '#dc2626'}} />
        <h1 style={{fontSize: '44px', fontWeight: '900', marginBottom: '16px'}}>Order Confirmed!</h1>
        <p style={{color: '#999999', marginBottom: '32px', fontSize: '18px'}}>Thank you for your purchase.</p>

        <div style={{backgroundColor: '#1a1a1a', border: '2px solid #dc2626', borderRadius: '12px', padding: '32px', marginBottom: '32px', textAlign: 'left'}}>
          <h2 style={{fontSize: '24px', fontWeight: '900', marginBottom: '24px', color: '#dc2626'}}>Order Details</h2>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #333'}}>
            <span style={{color: '#999999'}}>Order Number</span>
            <span style={{fontWeight: 'bold', color: 'white'}}>{orderNumber || 'N/A'}</span>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #333'}}>
            <span style={{color: '#999999'}}>Status</span>
            <span style={{fontWeight: 'bold', color: '#dc2626'}}>Pending</span>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span style={{color: '#999999'}}>Estimated Delivery</span>
            <span style={{fontWeight: 'bold', color: 'white'}}>2-3 Days</span>
          </div>
        </div>

        <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <button onClick={() => navigate('/')} style={{backgroundColor: '#dc2626', color: 'white', border: 'none', padding: '12px 32px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'}}>
            <Home size={20} /> Home
          </button>
          <button onClick={() => navigate('/products')} style={{backgroundColor: 'transparent', color: '#dc2626', border: '2px solid #dc2626', padding: '12px 32px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'}}>
            <ShoppingBag size={20} /> Shop More
          </button>
        </div>

        <div style={{marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #333'}}>
          <p style={{color: '#999999', marginBottom: '8px'}}>Questions?</p>
          <p style={{color: '#dc2626', fontWeight: 'bold'}}>📞 +254 711 410 982</p>
          <p style={{color: '#dc2626', fontWeight: 'bold'}}>📧 annelenku@gmail.com</p>
        </div>
      </div>
    </div>
  );
}