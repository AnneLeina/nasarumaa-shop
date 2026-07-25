import { useEffect, useState } from 'react';
import { ShoppingCart, Heart, ChevronRight } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCartstore } from '../stores/Cartstore';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Home() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const addToCart = useCartstore((state) => state.addToCart);

  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const catRes = await axios.get(`${API_URL}/categories`);
      setCategories(catRes.data.categories || catRes.data || []);
      const prodRes = await axios.get(`${API_URL}/products`);
      const productsArray = Array.isArray(prodRes.data) ? prodRes.data : prodRes.data.products ? prodRes.data.products : [];
      setFeaturedProducts(productsArray);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{minHeight: '100vh', backgroundColor: '#f5f1ed', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p style={{color: '#000000', fontWeight: 'bold', fontSize: '18px'}}>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: '#f5f1ed', color: '#000000', minHeight: '100vh'}}>
      {/* HERO */}
      <section style={{background: 'linear-gradient(to bottom, #f5f1ed, #ede8e3)', padding: '40px 20px', position: 'relative'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'center'}}>
          <div>
            <div style={{display: 'inline-block', backgroundColor: 'rgba(220, 38, 38, 0.1)', border: '1px solid #dc2626', borderRadius: '8px', padding: '8px 16px', marginBottom: '20px', color: '#dc2626', fontWeight: 'bold', fontSize: '14px'}}>Welcome to Nasarumaa</div>
            <h1 style={{fontSize: '48px', fontWeight: '900', lineHeight: '1.2', marginBottom: '16px', color: '#000000'}}>Authentic Maasai Fashion & Culture</h1>
            <p style={{fontSize: '18px', color: '#333333', marginBottom: '32px', lineHeight: '1.6'}}>Discover stunning traditional Maasai clothing, accessories, and handcrafted beads. Each piece tells a story of heritage.</p>
            <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px'}}>
              <button onClick={() => navigate('/products')} style={{padding: '14px 32px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.opacity = '0.8';}} onMouseLeave={(e) => {e.target.style.opacity = '1';}}>Shop Now <ChevronRight size={20} /></button>
              <button onClick={() => navigate('/products')} style={{padding: '14px 32px', border: '2px solid #000000', background: 'transparent', color: '#000000', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#000000'; e.target.style.color = 'white';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#000000';}}>Browse Collection</button>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '400px'}}>
              <div><p style={{fontSize: '32px', fontWeight: '900', color: '#dc2626', marginBottom: '4px'}}>100+</p><p style={{fontSize: '14px', color: '#666666'}}>Products</p></div>
              <div><p style={{fontSize: '32px', fontWeight: '900', color: '#dc2626', marginBottom: '4px'}}>7</p><p style={{fontSize: '14px', color: '#666666'}}>Categories</p></div>
              <div><p style={{fontSize: '32px', fontWeight: '900', color: '#dc2626', marginBottom: '4px'}}>Kenya</p><p style={{fontSize: '14px', color: '#666666'}}>Wide Delivery</p></div>
            </div>
          </div>
          <div style={{width: '300px', height: '300px', backgroundColor: 'rgba(220, 38, 38, 0.1)', border: '2px solid #dc2626', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '120px', flexShrink: 0}}>🌿</div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{padding: '60px 20px', backgroundColor: '#f5f1ed'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '40px', fontWeight: '900', marginBottom: '12px', textAlign: 'center', color: '#000000'}}>Explore Collections</h2>
          <p style={{color: '#666666', textAlign: 'center', marginBottom: '48px', fontSize: '16px'}}>Browse our curated categories</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginBottom: '40px'}}>
            {categories.map((category) => (
              <button key={category.id} onClick={() => navigate(`/products?category=${category.id}`)} style={{backgroundColor: '#ffffff', border: '1px solid #000000', borderRadius: '12px', padding: '24px 16px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s ease', color: '#000000'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = '#dc2626'; e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.05)'; e.currentTarget.style.transform = 'translateY(-4px)';}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = '#000000'; e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)';}}>
                <p style={{fontSize: '32px', marginBottom: '8px'}}>🛍️</p>
                <p style={{fontWeight: 'bold', fontSize: '14px'}}>{category.name}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{padding: '60px 20px', backgroundColor: '#ede8e3'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px'}}>
            <div><p style={{color: '#dc2626', fontWeight: 'bold', fontSize: '14px', marginBottom: '8px'}}>✨ FEATURED</p><h2 style={{fontSize: '40px', fontWeight: '900', color: '#000000'}}>Best Sellers</h2></div>
            <button onClick={() => navigate('/products')} style={{backgroundColor: '#dc2626', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px'}}>View All <ChevronRight size={16} /></button>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px'}}>
            {featuredProducts.slice(0, 8).map((product) => (
              <div key={product.id} style={{backgroundColor: '#ffffff', border: '1px solid #000000', borderRadius: '12px', overflow: 'hidden', transition: 'all 0.3s ease', cursor: 'pointer'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = '#dc2626'; e.currentTarget.style.transform = 'translateY(-8px)';}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = '#000000'; e.currentTarget.style.transform = 'translateY(0)';}}>
                <div style={{height: '200px', backgroundColor: '#ede8e3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px', position: 'relative', overflow: 'hidden'}}>👗
                  {product.discount_percentage > 0 && (<div style={{position: 'absolute', top: '12px', right: '12px', backgroundColor: '#dc2626', color: 'white', padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold', fontSize: '12px'}}>-{product.discount_percentage}%</div>)}
                </div>
                <div style={{padding: '16px'}}>
                  <h3 style={{fontWeight: 'bold', fontSize: '16px', marginBottom: '8px', lineHeight: '1.3', minHeight: '48px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', color: '#000000'}}>
                    {product.name}
                  </h3>
                  <div style={{display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px', fontSize: '12px'}}>
                    {[...Array(5)].map((_, i) => (<span key={i} style={{color: i < 4 ? '#dc2626' : '#999999'}}>★</span>))}
                  </div>
                  <div style={{display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px'}}>
                    <span style={{fontSize: '24px', fontWeight: '900', color: '#dc2626'}}>KES {(product.discount_price || product.price).toLocaleString()}</span>
                    {product.discount_price && (<span style={{fontSize: '14px', color: '#999999', textDecoration: 'line-through'}}>KES {product.price.toLocaleString()}</span>)}
                  </div>
                  <div style={{display: 'flex', gap: '8px'}}>
                    <button onClick={() => addToCart(product, 1)} style={{flex: 1, background: '#dc2626', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.opacity = '0.8';}} onMouseLeave={(e) => {e.target.style.opacity = '1';}}>
                      <ShoppingCart size={16} /> Add
                    </button>
                    <button style={{padding: '10px 12px', backgroundColor: '#f5f1ed', border: '1px solid #000000', borderRadius: '6px', color: '#000000', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#000000'; e.target.style.color = '#dc2626';}} onMouseLeave={(e) => {e.target.style.backgroundColor = '#f5f1ed'; e.target.style.color = '#000000';}}>
                      <Heart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background: 'linear-gradient(135deg, #000000 0%, #333333 100%)', padding: '60px 20px', textAlign: 'center'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 style={{fontSize: '44px', fontWeight: '900', marginBottom: '16px', color: 'white'}}>Get up to 25% off</h2>
          <p style={{fontSize: '18px', color: '#cccccc', marginBottom: '32px'}}>Free delivery on orders above KES 2,000!</p>
          <button onClick={() => navigate('/products')} style={{backgroundColor: '#dc2626', color: 'white', border: 'none', padding: '14px 40px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.opacity = '0.8';}} onMouseLeave={(e) => {e.target.style.opacity = '1';}}>Shop Limited Deals →</button>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{padding: '60px 20px', backgroundColor: '#f5f1ed'}}>
        <div style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '36px', fontWeight: '900', marginBottom: '16px', color: '#000000'}}>Stay Updated</h2>
          <p style={{color: '#666666', marginBottom: '32px', fontSize: '16px'}}>Subscribe for exclusive deals</p>
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <input type="email" placeholder="Enter email..." style={{flex: 1, minWidth: '200px', padding: '12px 16px', backgroundColor: '#ffffff', border: '1px solid #000000', borderRadius: '8px', color: '#000000', fontSize: '14px'}} />
            <button style={{backgroundColor: '#dc2626', color: 'white', border: 'none', padding: '12px 32px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.opacity = '0.8';}} onMouseLeave={(e) => {e.target.style.opacity = '1';}}>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}