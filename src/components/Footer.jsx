import { Mail, Phone, MapPin, Share2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#f5f1ed', borderTop: '2px solid #000000', color: '#000000', marginTop: '80px', padding: '60px 20px'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', marginBottom: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px'}}>
        
        <div>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
            <div style={{fontSize: '24px'}}>🌿</div>
            <div>
              <h3 style={{fontSize: '20px', fontWeight: '900', color: '#000000', margin: '0'}}>Nasarumaa Collection Attire</h3>
              <p style={{fontSize: '11px', color: '#000000', fontWeight: 'bold', margin: '0'}}>Let Us Make You Look Good</p>
            </div>
          </div>
          <p style={{color: '#666666', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px'}}>
            Authentic Maasai fashion and traditional accessories crafted with love.
          </p>
        </div>

        <div>
          <h4 style={{fontWeight: '900', fontSize: '16px', marginBottom: '16px', color: '#dc2626', margin: '0 0 16px 0'}}>Shop</h4>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <button style={{background: 'none', border: 'none', color: '#666666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', padding: '0', textAlign: 'left', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>All Products</button>
            <button style={{background: 'none', border: 'none', color: '#666666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', padding: '0', textAlign: 'left', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>Dresses</button>
            <button style={{background: 'none', border: 'none', color: '#666666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', padding: '0', textAlign: 'left', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>Bags</button>
            <button style={{background: 'none', border: 'none', color: '#666666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', padding: '0', textAlign: 'left', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>Scarves</button>
            <button style={{background: 'none', border: 'none', color: '#666666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', padding: '0', textAlign: 'left', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>Beads</button>
            <button style={{background: 'none', border: 'none', color: '#666666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', padding: '0', textAlign: 'left', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>Jewelry</button>
            <button style={{background: 'none', border: 'none', color: '#666666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', padding: '0', textAlign: 'left', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>Blankets</button>
          </div>
        </div>

        <div>
          <h4 style={{fontWeight: '900', fontSize: '16px', marginBottom: '16px', color: '#dc2626', margin: '0 0 16px 0'}}>Support</h4>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <button style={{background: 'none', border: 'none', color: '#666666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', padding: '0', textAlign: 'left', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>About</button>
            <button style={{background: 'none', border: 'none', color: '#666666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', padding: '0', textAlign: 'left', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>Contact</button>
            <button style={{background: 'none', border: 'none', color: '#666666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', padding: '0', textAlign: 'left', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>FAQ</button>
          </div>
        </div>

        <div>
          <h4 style={{fontWeight: '900', fontSize: '16px', marginBottom: '16px', color: '#dc2626', margin: '0 0 16px 0'}}>Contact</h4>
          <div style={{display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start'}}>
            <Phone size={20} style={{color: '#dc2626', flexShrink: 0}} />
            <div>
              <p style={{fontWeight: 'bold', fontSize: '14px', color: '#000000', margin: '0 0 4px 0'}}>Call</p>
              <a href="tel:+254711410982" style={{color: '#666666', textDecoration: 'none', fontSize: '14px', cursor: 'pointer'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>+254 711 410 982, +254 712 881 998</a>
            </div>
          </div>
          <div style={{display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start'}}>
            <Mail size={20} style={{color: '#dc2626', flexShrink: 0}} />
            <div>
              <p style={{fontWeight: 'bold', fontSize: '14px', color: '#000000', margin: '0 0 4px 0'}}>Email</p>
              <a href="mailto:annelenku@gmail.com" style={{color: '#666666', textDecoration: 'none', fontSize: '14px', cursor: 'pointer'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>annelenku@gmail.com</a>
            </div>
          </div>
          <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
            <MapPin size={20} style={{color: '#dc2626', flexShrink: 0}} />
            <div>
              <p style={{fontWeight: 'bold', fontSize: '14px', color: '#000000', margin: '0 0 4px 0'}}>Location</p>
              <p style={{color: '#666666', fontSize: '14px', margin: '0'}}>Bissil, Kajiado, Kenya</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{borderTop: '1px solid #cccccc', paddingTop: '40px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px', alignItems: 'center'}}>
        <div>
          <p style={{color: '#666666', fontSize: '13px', margin: '0 0 8px 0'}}>© 2026 Nasarumaa. All rights reserved.</p>
          <p style={{color: '#666666', fontSize: '13px', margin: '0'}}>Crafted with Love for authentic Maasai culture</p>
        </div>
        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
          <button style={{background: 'none', border: 'none', color: '#666666', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', padding: '0', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>Privacy</button>
          <span style={{color: '#cccccc'}}>•</span>
          <button style={{background: 'none', border: 'none', color: '#666666', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', padding: '0', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#666666'}>Terms</button>
        </div>
      </div>
    </footer>
  );
}