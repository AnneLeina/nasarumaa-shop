import { useEffect, useState } from 'react';
import { ShoppingCart, Heart, ChevronRight } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../stores/cartStore';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Home() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const catRes = await axios.get(`${API_URL}/categories`);
      setCategories(catRes.data.categories || catRes.data || []);

      const prodRes = await axios.get(`${API_URL}/products`);
      const productsArray = Array.isArray(prodRes.data) ? prodRes.data : 
                           prodRes.data.products ? prodRes.data.products : [];
      setFeaturedProducts(productsArray);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{minHeight: '100vh', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{textAlign: 'center'}}>
          <div style={{width: '60px', height: '60px', margin: '0 auto 20px', border: '4px solid #dc2626', borderTop: '4px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite'}}></div>
          <p style={{color: '#dc2626', fontWeight: 'bold', fontSize: '18px'}}>Loading Nasarumaa Collection...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: '#000000', color: 'white', minHeight: '100vh'}}>
      {/* HERO SECTION */}
      <section style={{background: 'linear-gradient(to bottom, #1a1a1a, #000000)', padding: '40px 20px', position: 'relative', overflow: 'hidden'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'center'}}>
          
          {/* LEFT CONTENT */}
          <div>
            {/* Welcome Badge */}
            <div style={{display: 'inline-block', backgroundColor: 'rgba(220, 38, 38, 0.2)', border: '1px solid #dc2626', borderRadius: '8px', padding: '8px 16px', marginBottom: '20px', color: '#ef4444', fontWeight: 'bold', fontSize: '14px'}}>
              Welcome to Nasarumaa Collection
            </div>

            {/* Main Heading */}
            <h1 style={{fontSize: '48px', fontWeight: '900', lineHeight: '1.2', marginBottom: '16px', letterSpacing: '-0.02em'}}>
              <span style={{background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Authentic Maasai</span>
              <br />
              Fashion & Culture
            </h1>

            {/* Description */}
            <p style={{fontSize: '18px', color: '#cccccc', marginBottom: '32px', lineHeight: '1.6'}}>
              Discover stunning traditional Maasai clothing, accessories, and handcrafted beads. Each piece tells a story of heritage and craftsmanship passed down through generations.
            </p>

            {/* CTA Buttons */}
            <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px'}}>
              <button
                onClick={() => navigate('/products')}
                style={{
                  padding: '14px 32px',
                  background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.3)';
                }}
              >
                Shop Now <ChevronRight size={20} />
              </button>
              <button
                onClick={() => navigate('/products')}
                style={{
                  padding: '14px 32px',
                  border: '2px solid #dc2626',
                  background: 'transparent',
                  color: '#dc2626',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Browse Collection
              </button>
            </div>

            {/* Stats */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '400px'}}>
              <div>
                <p style={{fontSize: '32px', fontWeight: '900', color: '#dc2626', marginBottom: '4px'}}>100+</p>
                <p style={{fontSize: '14px', color: '#999999'}}>Products</p>
              </div>
              <div>
                <p style={{fontSize: '32px', fontWeight: '900', color: '#dc2626', marginBottom: '4px'}}>7</p>
                <p style={{fontSize: '14px', color: '#999999'}}>Categories</p>
              </div>
              <div>
                <p style={{fontSize: '32px', fontWeight: '900', color: '#dc2626', marginBottom: '4px'}}>Kenya</p>
                <p style={{fontSize: '14px', color: '#999999'}}>Wide Delivery</p>
              </div>
            </div>
          </div>

          {/* RIGHT - HERO IMAGE BOX */}
          <div style={{
            width: '300px',
            height: '300px',
            backgroundColor: 'rgba(220, 38, 38, 0.1)',
            border: '2px solid rgba(220, 38, 38, 0.3)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '120px',
            flexShrink: 0
          }}>
            🌿
          </div>
        </div>
      </section>

      {/* RED ACCENT BAR */}
      <div style={{height: '12px', background: 'linear-gradient(to right, #dc2626, #991b1b)'}}></div>

      {/* EXPLORE COLLECTIONS SECTION */}
      <section style={{padding: '60px 20px', backgroundColor: '#000000'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '40px', fontWeight: '900', marginBottom: '12px', textAlign: 'center', color: 'white'}}>Explore Our Collections</h2>
          <p style={{color: '#999999', textAlign: 'center', marginBottom: '48px', fontSize: '16px'}}>Browse our carefully curated categories</p>

          {/* CATEGORIES GRID */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginBottom: '40px'}}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => navigate(`/products?category=${category.id}`)}
                style={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(220, 38, 38, 0.3)',
                  borderRadius: '12px',
                  padding: '24px 16px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.5)';
                  e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.05)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)';
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <p style={{fontSize: '32px', marginBottom: '8px'}}>🛍️</p>
                <p style={{fontWeight: 'bold', fontSize: '14px'}}>{category.name}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION SECTION */}
      <section style={{padding: '60px 20px', backgroundColor: '#1a1a1a'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px'}}>
            <div>
              <p style={{color: '#dc2626', fontWeight: 'bold', fontSize: '14px', marginBottom: '8px'}}>✨ FEATURED COLLECTION</p>
              <h2 style={{fontSize: '40px', fontWeight: '900', color: 'white'}}>Our Best Sellers</h2>
            </div>
            <button
              onClick={() => navigate('/products')}
              style={{
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              View All <ChevronRight size={16} />
            </button>
          </div>

          {/* PRODUCTS GRID */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px'}}>
            {featuredProducts.slice(0, 8).map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: '#000000',
                  border: '1px solid rgba(220, 38, 38, 0.3)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* IMAGE */}
                <div style={{
                  height: '200px',
                  backgroundColor: '#1a1a1a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '64px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  👗
                  {product.discount_percentage > 0 && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: '#dc2626',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontWeight: 'bold',
                      fontSize: '12px'
                    }}>
                      -{product.discount_percentage}%
                    </div>
                  )}
                </div>

                {/* INFO */}
                <div style={{padding: '16px'}}>
                  <h3 style={{fontWeight: 'bold', fontSize: '16px', marginBottom: '8px', lineHeight: '1.3', minHeight: '48px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', color: 'white'}}>
                    {product.name}
                  </h3>

                  {/* RATING */}
                  <div style={{display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px', fontSize: '12px'}}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{color: i < 4 ? '#fbbf24' : '#555555'}}>★</span>
                    ))}
                    <span style={{color: '#999999'}}>(4.5)</span>
                  </div>

                  {/* PRICE */}
                  <div style={{display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px'}}>
                    <span style={{fontSize: '24px', fontWeight: '900', color: '#dc2626'}}>
                      KES {(product.discount_price || product.price).toLocaleString()}
                    </span>
                    {product.discount_price && (
                      <span style={{fontSize: '14px', color: '#666666', textDecoration: 'line-through'}}>
                        KES {product.price.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* BUTTONS */}
                  <div style={{display: 'flex', gap: '8px'}}>
                    <button
                      onClick={() => addToCart(product, 1)}
                      style={{
                        flex: 1,
                        background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px'
                      }}
                    >
                      <ShoppingCart size={16} /> Add
                    </button>
                    <button
                      style={{
                        padding: '10px 12px',
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #444444',
                        borderRadius: '6px',
                        color: '#cccccc',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Heart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RED CTA SECTION */}
      <section style={{background: 'linear-gradient(135deg, #991b1b 0%, #660000 100%)', padding: '60px 20px', textAlign: 'center'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <p style={{fontSize: '14px', fontWeight: 'bold', color: '#ffcccc', marginBottom: '16px'}}>EXCLUSIVE OFFER</p>
          <h2 style={{fontSize: '44px', fontWeight: '900', marginBottom: '16px', color: 'white'}}>
            Get up to 25% off on selected collections
          </h2>
          <p style={{fontSize: '18px', color: '#dddddd', marginBottom: '32px'}}>
            Free delivery on orders above KES 10,000! Limited time offer.
          </p>
          <button
            onClick={() => navigate('/products')}
            style={{
              backgroundColor: '#ffffff',
              color: '#991b1b',
              border: 'none',
              padding: '14px 40px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
            }}
          >
            Shop Limited Time Deals →
          </button>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section style={{padding: '60px 20px', backgroundColor: '#000000'}}>
        <div style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '36px', fontWeight: '900', marginBottom: '16px', color: 'white'}}>Stay Updated</h2>
          <p style={{color: '#999999', marginBottom: '32px', fontSize: '16px'}}>
            Subscribe for exclusive deals and new collection updates
          </p>
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <input
              type="email"
              placeholder="Enter your email..."
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '12px 16px',
                backgroundColor: '#1a1a1a',
                border: '1px solid #333333',
                borderRadius: '8px',
                color: 'white',
                fontSize: '14px'
              }}
            />
            <button
              style={{
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                padding: '12px 32px',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}