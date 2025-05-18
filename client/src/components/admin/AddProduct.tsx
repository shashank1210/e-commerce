import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNewProductMutation } from '../../redux/api/product.api';
import { notify } from '../../utils/util';
import { CustomError } from '../../types/api-types';

const AdminAddProduct: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        stock: 0,
        price: 0,
        description: '',
    });
    const [photoFile, setPhotoFile] = useState<File | null>(null);

    const [newProduct, { isLoading, isError, error }] = useNewProductMutation();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData({
        ...formData,
        [name]: type === 'number' ? Number(value) : value,
    });
};
// ...existing code...

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPhotoFile(file);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            !formData.name.trim() ||
            !formData.category.trim() ||
            formData.stock === undefined ||
            formData.price === undefined ||
            !photoFile ||
            !formData.description.trim()
        ) {
            notify('Please fill all the fields', 'error');
            return;
        }

        const productFormData = new FormData();
        productFormData.append('name', formData.name);
        productFormData.append('category', formData.category);
        productFormData.append('stock', formData.stock.toString());
        productFormData.append('price', formData.price.toString());
        productFormData.append('description', formData.description);
        if (photoFile) {
            productFormData.append('photo', photoFile);
        }

        try {
            await newProduct({formData:productFormData}).unwrap();
            notify('Product added successfully', 'success');
            navigate('/admin/products');
        } catch (err) {
            const customError = err as CustomError;
            console.error('Product upload error:', customError);
            notify(customError.data?.message || 'Unknown error', 'error');
        }
    };

    useEffect(() => {
        if (isError && error) {
            const customError = error as CustomError;
            notify(customError.data.message, 'error');
        }
    }, [isError, error]);

    return (
        <div className="bg-white p-6 rounded-md shadow-sm min-h-screen">
            <h2 className="text-xl font-bold mb-4">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Description</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Upload Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={() => navigate('/admin/products')}
                        className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Adding...' : 'Add'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminAddProduct;
