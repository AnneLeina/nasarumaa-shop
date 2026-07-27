import { useEffect, useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import axios from 'axios';
import { useCartstore } from '../stores/Cartstore';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [loading, setLoading] = useState(true);
  const addToCart = useCartstore((state) => state.addToCart);

    useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [products, selectedCategory, searchTerm, sortBy]);

  const fetchData = async () => {
    try {
      const catRes = await axios.get(`${API_URL}/categories`);
      setCategories(catRes.data.categories || catRes.data || []);
      const prodRes = await axios.get(`${API_URL}/products`);
      const productsArray = Array.isArray(prodRes.data) ? prodRes.data : prodRes.data.products ? prodRes.data.products : [];
      setProducts(productsArray);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  const filterAndSortProducts = () => {
    let filtered = [...products];
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category_id === parseInt(selectedCategory));
    }
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    switch (sortBy) {
      case 'price_asc':
        filtered.sort((a, b) => (a.discount_price || a.price) - (b.discount_price || b.price));
        break;
      case 'price_desc':
        filtered.sort((a, b) => (b.discount_price || b.price) - (a.discount_price || a.price));
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    setFilteredProducts(filtered);
  };

  if (loading) {
    return (
      <div style={{minHeight: '100vh', backgroundColor: '#f5f1ed', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p style={{color: '#000000', fontWeight: 'bold'}}>Loading products...</p>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: '#f5f1ed', color: '#000000', minHeight: '100vh', paddingTop: '32px', paddingBottom: '64px'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        <h1 style={{fontSize: '44px', fontWeight: '900', marginBottom: '16px', color: '#000000'}}>Shop All Products</h1>
        <p style={{color: '#666666', marginBottom: '32px', fontSize: '16px'}}>Browse our collection of {filteredProducts.length} items</p>

        <div style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', marginBottom: '32px'}}>
          <input type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{padding: '12px 16px', backgroundColor: '#ffffff', border: '1px solid #000000', borderRadius: '8px', color: '#000000', fontSize: '14px'}} />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{padding: '12px 16px', backgroundColor: '#ffffff', border: '1px solid #000000', borderRadius: '8px', color: '#000000', fontSize: '14px', cursor: 'pointer'}}>
            <option value="newest">Newest</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="name">A to Z</option>
          </select>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '200px 1fr', gap: '32px'}}>
          <div>
            <h3 style={{fontWeight: '900', fontSize: '18px', marginBottom: '16px', color: '#000000'}}>Filters</h3>
            <div style={{backgroundColor: '#ffffff', borderRadius: '12px', padding: '20px', border: '1px solid #000000'}}>
              <h4 style={{fontWeight: 'bold', fontSize: '14px', color: '#666666', marginBottom: '12px', textTransform: 'uppercase'}}>Categories</h4>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <button onClick={() => setSelectedCategory('all')} style={{padding: '10px 12px', textAlign: 'left', backgroundColor: selectedCategory === 'all' ? '#dc2626' : 'transparent', color: selectedCategory === 'all' ? 'white' : '#000000', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: selectedCategory === 'all' ? 'bold' : 'normal', transition: 'all 0.3s ease'}}>
                  All Products
                </button>
                {categories.map((cat) => (
                  <button key={cat.id} onClick={() => setSelectedCategory(cat.id.toString())} style={{padding: '10px 12px', textAlign: 'left', backgroundColor: selectedCategory === cat.id.toString() ? '#dc2626' : 'transparent', color: selectedCategory === cat.id.toString() ? 'white' : '#000000', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: selectedCategory === cat.id.toString() ? 'bold' : 'normal', transition: 'all 0.3s ease'}}>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            {filteredProducts.length === 0 ? (
              <div style={{textAlign: 'center', padding: '60px 20px'}}><p style={{color: '#666666', fontSize: '18px'}}>No products found</p></div>
            ) : (
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px'}}>
                {filteredProducts.map((product) => (
                  <div key={product.id} style={{backgroundColor: '#ffffff', border: '1px solid #000000', borderRadius: '12px', overflow: 'hidden', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = '#dc2626'; e.currentTarget.style.transform = 'translateY(-8px)';}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = '#000000'; e.currentTarget.style.transform = 'translateY(0)';}}>
                    <div style={{height: '180px', backgroundColor: '#ede8e3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '56px', position: 'relative'}}>
                      
                      {product.discount_percentage > 0 && (<div style={{position: 'absolute', top: '8px', right: '8px', backgroundColor: '#dc2626', color: 'white', padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold', fontSize: '12px'}}>-{product.discount_percentage}%</div>)}
                    </div>
                    <div style={{padding: '16px'}}>
                      <h3 style={{fontWeight: 'bold', fontSize: '14px', marginBottom: '8px', minHeight: '40px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', color: '#000000'}}>
                        {product.name}
                      </h3>
                      <div style={{display: 'flex', gap: '2px', marginBottom: '8px', fontSize: '12px'}}>
                        {[...Array(5)].map((_, i) => (<span key={i} style={{color: i < 4 ? '#dc2626' : '#999999'}}>★</span>))}
                      </div>
                      <div style={{marginBottom: '12px'}}>
                        <span style={{fontSize: '20px', fontWeight: '900', color: '#dc2626'}}>KES {Math.round(product.discount_price || product.price).toLocaleString()}</span>
                      </div>
                      <div style={{display: 'flex', gap: '8px'}}>
                        <button onClick={() => addToCart(product, 1)} style={{flex: 1, background: '#dc2626', color: 'white', border: 'none', padding: '8px', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.opacity = '0.8';}} onMouseLeave={(e) => {e.target.style.opacity = '1';}}>
                          <ShoppingCart size={14} /> Add
                        </button>
                        <button style={{padding: '8px 12px', backgroundColor: '#f5f1ed', border: '1px solid #000000', borderRadius: '6px', color: '#000000', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#000000'; e.target.style.color = '#dc2626';}} onMouseLeave={(e) => {e.target.style.backgroundColor = '#f5f1ed'; e.target.style.color = '#000000';}}>
                          <Heart size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}