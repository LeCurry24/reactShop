import { useState, useEffect} from 'react';
import ProductDetails from './ProductDetails';
import styles from './products.module.css';

const Products = () => {
    const [products, setProducts] = useState ([]);

    const fetchProducts = async () => {
        const request = await fetch(
            'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}'
        );
        const response = await request.json();
        setProducts(response.data.products.edges);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <>
            <h2>Product List</h2>
            <section className={styles.products}>
                {products.map(product => {
                   return <ProductDetails product={product} key={product.node.id}/>
                })}
            </section>
        </>
    )
};
export default Products;