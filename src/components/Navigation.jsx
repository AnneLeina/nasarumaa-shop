import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartstore } from '../stores/Cartstore';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#f5f1ed',
        borderBottom: '3px solid #000000',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '12px 20px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            
            <Link 
              to="/" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: '#000000'
              }}
              onClick={() => setIsOpen(false)}
            >
              <div style={{fontSize: '24px'}}>🌿</div>
              <div>
                <h1 style={{fontSize: '28px', fontWeight: '900', margin: 0, color: '#000000'}}>Nasarumaa</h1>
                <p style={{fontSize: '12px', color: '#000000', fontWeight: 'bold', margin: 0}}>Collection Attire</p>
              </div>
            </Link>

            <div style={{display: 'none', gap: '32px', alignItems: 'center'}} className="desktop-menu">
              <Link 
                to="/" 
                style={{textDecoration: 'none', color: '#000000', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: 'color 0.3s ease'}}
                onMouseEnter={(e) => e.target.style.color = '#dc2626'}
                onMouseLeave={(e) => e.target.style.color = '#000000'}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                style={{textDecoration: 'none', color: '#000000', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: 'color 0.3s ease'}}
                onMouseEnter={(e) => e.target.style.color = '#dc2626'}
                onMouseLeave={(e) => e.target.style.color = '#000000'}
              >
                Shop
              </Link>
              <a 
                href="tel:+254711410982" 
                style={{textDecoration: 'none', color: '#000000', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: 'color 0.3s ease'}}
                onMouseEnter={(e) => e.target.style.color = '#dc2626'}
                onMouseLeave={(e) => e.target.style.color = '#000000'}
              >
                Contact
              </a>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <button
                onClick={() => navigate('/cart')}
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc2626',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
                title="View cart"
              >
                <ShoppingCart size={20} color="white" />
                {totalItems > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    backgroundColor: '#000000',
                    color: 'white',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  display: 'flex',
                  padding: '8px 12px',
                  backgroundColor: 'transparent',
                  border: '2px solid #000000',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '8px'
                }}
              >
                {isOpen ? (
                  <X size={20} color="#000000" />
                ) : (
                  <Menu size={20} color="#000000" />
                )}
              </button>
            </div>
          </div>

          {isOpen && (
            <div style={{marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #000000', display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <Link to="/" style={{color: '#000000', textDecoration: 'none', fontWeight: 'bold', padding: '10px 12px', borderRadius: '6px', display: 'block'}} onClick={() => setIsOpen(false)} onMouseEnter={(e) => {e.target.style.backgroundColor = '#dc2626'; e.target.style.color = 'white';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#000000';}}>Home</Link>
              <Link to="/products" style={{color: '#000000', textDecoration: 'none', fontWeight: 'bold', padding: '10px 12px', borderRadius: '6px', display: 'block'}} onClick={() => setIsOpen(false)} onMouseEnter={(e) => {e.target.style.backgroundColor = '#dc2626'; e.target.style.color = 'white';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#000000';}}>Shop</Link>
              <a href="tel:+254711410982" style={{color: '#000000', textDecoration: 'none', fontWeight: 'bold', padding: '10px 12px', borderRadius: '6px', display: 'block'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#dc2626'; e.target.style.color = 'white';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#000000';}}>Call: +254 711 410 982</a>
              <Link to="/cart" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', padding: '10px 12px', borderRadius: '6px', backgroundColor: '#dc2626', display: 'block'}} onClick={() => setIsOpen(false)}>View Cart ({totalItems})</Link>
            </div>
          )}
        </div>
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}