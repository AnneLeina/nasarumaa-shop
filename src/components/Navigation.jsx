import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../stores/Cartstore';

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
        backgroundColor: '#000000',
        borderBottom: '3px solid #dc2626',
        boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '12px 20px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            
            {/* LOGO */}
            <Link 
              to="/" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: 'white'
              }}
              onClick={() => setIsOpen(false)}
            >
              <div style={{fontSize: '24px'}}>🌿</div>
              <div>
                <h1 style={{fontSize: '28px', fontWeight: '900', color: '#dc2626', margin: 0}}>Nasarumaa Collection Attire</h1>
                <p style={{fontSize: '12px', color: '#ef4444', fontWeight: 'bold', margin: 0}}>Let us make you look good</p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div style={{display: 'none', gap: '32px', alignItems: 'center'}} className="desktop-menu">
              <Link 
                to="/" 
                style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.color = '#dc2626'}
                onMouseLeave={(e) => e.target.style.color = '#ffffff'}
              >
                 Home
              </Link>
              <Link 
                to="/products" 
                style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.color = '#dc2626'}
                onMouseLeave={(e) => e.target.style.color = '#ffffff'}
              >
                 Shop
              </Link>
              <a 
                href="tel:+254711410982" 
                style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.color = '#dc2626'}
                onMouseLeave={(e) => e.target.style.color = '#ffffff'}
              >
                 Contact
              </a>
            </div>

            {/* RIGHT ACTIONS */}
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              
              {/* CART BUTTON */}
              <button
                onClick={() => {
                  navigate('/cart');
                  setIsOpen(false);
                }}
                style={{
                  padding: '8px 12px',
                  backgroundColor: 'transparent',
                  border: '2px solid #dc2626',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                title="View cart"
              >
                <ShoppingCart size={20} color="#dc2626" />
                {totalItems > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    backgroundColor: '#dc2626',
                    color: 'white',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 8px rgba(220, 38, 38, 0.4)'
                  }}>
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  display: 'flex',
                  padding: '8px 12px',
                  backgroundColor: 'transparent',
                  border: '2px solid #dc2626',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '8px'
                }}
              >
                {isOpen ? (
                  <X size={20} color="#dc2626" />
                ) : (
                  <Menu size={20} color="#dc2626" />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div style={{
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid #333333',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <Link 
                to="/" 
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease',
                  display: 'block'
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                  e.target.style.color = '#dc2626';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#ffffff';
                }}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease',
                  display: 'block'
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                  e.target.style.color = '#dc2626';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#ffffff';
                }}
              >
                Shop
              </Link>
              <a 
                href="tel:+254711410982" 
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                  e.target.style.color = '#dc2626';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#ffffff';
                }}
              >
                Call: +254 711 410 982, +254 712 881 998
              </a>
              <Link 
                to="/cart" 
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#dc2626',
                  display: 'block'
                }}
                onClick={() => setIsOpen(false)}
              >
                View Cart ({totalItems})
              </Link>
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