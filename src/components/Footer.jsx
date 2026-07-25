import { Mail, Phone, MapPin, Share2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#000000',
      borderTop: '2px solid rgba(220, 38, 38, 0.3)',
      color: 'white',
      marginTop: '80px'
    }}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '60px 20px'}}>
        
        {/* MAIN GRID */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px'}}>
          
          {/* BRAND */}
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
              <div style={{fontSize: '24px'}}>🌿</div>
              <div>
                <h3 style={{fontSize: '20px', fontWeight: '900', color: '#dc2626', margin: 0}}>Nasarumaa Collection Attire</h3>
                <p style={{fontSize: '11px', color: '#ef4444', fontWeight: 'bold', margin: 0}}>Let us make you look good</p>
              </div>
            </div>
            <p style={{color: '#999999', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px'}}>
              Authentic Maasai fashion and traditional accessories crafted with love and heritage.
            </p>
            <div style={{display: 'flex', gap: '12px'}}>
              <a href="#" style={{
                padding: '8px 12px',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                border: '1px solid rgba(220, 38, 38, 0.3)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                color: '#dc2626'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.2)';
                e.currentTarget.style.borderColor = '#dc2626';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)';
              }}>
                <Share2 size={16} />
              </a>
              <a href="#" style={{
                padding: '8px 12px',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                border: '1px solid rgba(220, 38, 38, 0.3)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                color: '#dc2626'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.2)';
                e.currentTarget.style.borderColor = '#dc2626';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)';
              }}>
                <Heart size={16} />
              </a>
            </div>
          </div>

          {/* SHOP LINKS */}
          <div>
            <h4 style={{fontWeight: '900', fontSize: '16px', marginBottom: '16px', color: '#dc2626', margin: '0 0 16px 0'}}>Shop</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              {['All Products', 'Dresses', 'Scarves', 'Beads', 'Accessories', 'Blankets', 'Shoes'].map((link) => (
                <li key={link} style={{marginBottom: '8px'}}>
                  <a href="#" style={{
                    color: '#999999',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#dc2626'}
                  onMouseLeave={(e) => e.target.style.color = '#999999'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT LINKS */}
          <div>
            <h4 style={{fontWeight: '900', fontSize: '16px', marginBottom: '16px', color: '#dc2626', margin: '0 0 16px 0'}}>Support</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              {['About Us', 'Contact', 'FAQ', 'Shipping Info', 'Returns', 'Track Order'].map((link) => (
                <li key={link} style={{marginBottom: '8px'}}>
                  <a href="#" style={{
                    color: '#999999',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#dc2626'}
                  onMouseLeave={(e) => e.target.style.color = '#999999'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 style={{fontWeight: '900', fontSize: '16px', marginBottom: '16px', color: '#dc2626', margin: '0 0 16px 0'}}>Contact Us</h4>
            
            <div style={{display: 'flex', gap: '12px', marginBottom: '16px'}}>
              <Phone size={20} style={{color: '#dc2626', flexShrink: 0, marginTop: '4px'}} />
              <div>
                <p style={{fontWeight: 'bold', fontSize: '14px', margin: 0, marginBottom: '4px', color: 'white'}}>Call Us</p>
                <a href="tel:+254711410982" style={{
                  color: '#999999',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.color = '#dc2626'}
                onMouseLeave={(e) => e.target.style.color = '#999999'}>
                  +254 711 410 982, +254 712 881 998
                </a>
              </div>
            </div>

            <div style={{display: 'flex', gap: '12px', marginBottom: '16px'}}>
              <Mail size={20} style={{color: '#dc2626', flexShrink: 0, marginTop: '4px'}} />
              <div>
                <p style={{fontWeight: 'bold', fontSize: '14px', margin: 0, marginBottom: '4px', color: 'white'}}>Email</p>
                <a href="mailto:annelenku@gmail.com" style={{
                  color: '#999999',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.color = '#dc2626'}
                onMouseLeave={(e) => e.target.style.color = '#999999'}>
                  annelenku@gmail.com
                </a>
              </div>
            </div>

            <div style={{display: 'flex', gap: '12px'}}>
              <MapPin size={20} style={{color: '#dc2626', flexShrink: 0, marginTop: '4px'}} />
              <div>
                <p style={{fontWeight: 'bold', fontSize: '14px', margin: 0, marginBottom: '4px', color: 'white'}}>Location</p>
                <p style={{color: '#999999', fontSize: '14px', margin: 0}}>Bissil, Kajiado, Kenya</p>
              </div>
            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div style={{borderTop: '1px solid rgba(220, 38, 38, 0.2)', margin: '40px 0'}}></div>

        {/* BOTTOM */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px', alignItems: 'center'}}>
          <div>
            <p style={{color: '#999999', fontSize: '13px', margin: 0, marginBottom: '8px'}}>© 2026 Nasarumaa Collection Attire. All rights reserved.</p>
            <p style={{color: '#999999', fontSize: '13px', margin: 0}}>Crafted with Love</p>
          </div>
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
            <a href="#" style={{
              color: '#999999',
              textDecoration: 'none',
              fontSize: '12px',
              fontWeight: 'bold',
              transition: 'color 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.color = '#dc2626'}
            onMouseLeave={(e) => e.target.style.color = '#999999'}>
              Privacy Policy
            </a>
            <span style={{color: '#555555'}}>•</span>
            <a href="#" style={{
              color: '#999999',
              textDecoration: 'none',
              fontSize: '12px',
              fontWeight: 'bold',
              transition: 'color 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.color = '#dc2626'}
            onMouseLeave={(e) => e.target.style.color = '#999999'}>
              Terms & Conditions
            </a>
            <span style={{color: '#555555'}}>•</span>
            <a href="#" style={{
              color: '#999999',
              textDecoration: 'none',
              fontSize: '12px',
              fontWeight: 'bold',
              transition: 'color 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.color = '#dc2626'}
            onMouseLeave={(e) => e.target.style.color = '#999999'}>
              Sitemap
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}