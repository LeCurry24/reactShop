import PropTypes from 'prop-types';
import styles from './ProductDetails.module.css'
const ProductDetails = ({product}) => {
    return(
        <div className={styles.card}>
            <figure>
                <img src={product.node.featuredImage.url} alt={product.node.title} />
            </figure>
            <h3>{product.node.title}</h3>
            <p>{product.node.description}</p>
        </div>
    )
}

ProductDetails.propTypes = {
    profuct: PropTypes.object,
};

export default ProductDetails;

