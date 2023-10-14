import BaseService from "./BaseService";


class ProductService extends BaseService {
    constructor() {
        super();
    }

    getAllProducts() {
        return this.get('products');
    }

    getProductById(id) {
        return this.get(`products/${id}`);
    }

    addProduct(product) {
        return this.post('products', product);
    }

    updateProduct(product) {
        return this.put(`products/${product.id}`, product);
    }

    deleteProduct(id) {
        return this.delete(`products/${id}`);
    }
}

export default ProductService();