import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Array of customer reviews
const customerReviews = [
    {
        name: 'Aarav Sharma',
        review: 'Great shopping experience! The delivery was quick and the product quality exceeded my expectations. Will definitely shop again.',
        photo: 'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
        name: 'Priya Patel',
        review: 'Customer support was very helpful and resolved my query instantly. Highly recommend this store for online shopping.',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        name: 'Rohan Verma',
        review: 'Wide range of products and easy checkout process. The packaging was secure and the items arrived in perfect condition.',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg'
    },
    {
        name: 'Sneha Iyer',
        review: 'I loved the discounts and offers available. The replacement policy is genuine and hassle-free. Thank you for the great service!',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
        name: 'Vikram Singh',
        review: 'The website is user-friendly and the payment process is smooth. I received my order on time and in good shape.',
        photo: 'https://randomuser.me/api/portraits/men/23.jpg'
    }
];

// Define the CustomerReviews component
const CustomerReviews: React.FC = () => {
    const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

    // Update centerSlidePercentage based on screen size
    const updateCenterSlidePercentage = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            setCenterSlidePercentage(33.33); // 3 items for large screens
        } else if (width >= 768) {
            setCenterSlidePercentage(50); // 2 items for medium screens
        } else {
            setCenterSlidePercentage(100); // 1 item for small screens
        }
    };

    useEffect(() => {
        updateCenterSlidePercentage();
        window.addEventListener('resize', updateCenterSlidePercentage);
        return () => window.removeEventListener('resize', updateCenterSlidePercentage);
    }, []);

    return (
        // Container for customer reviews section
        <section className="container mx-auto my-8 p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h2>
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                centerMode
                centerSlidePercentage={centerSlidePercentage}
            >
                {/* Map through customer reviews and display each one */}
                {customerReviews.map((customer, index) => (
                    <div className="flex flex-col items-center p-4" key={index}>
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                            <img src={customer.photo} alt={customer.name} className="object-cover w-full h-full" />
                        </div>
                        <h3 className="text-lg font-bold">{customer.name}</h3>
                        <p className="text-gray-600 mt-2 text-center">{customer.review}</p>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default CustomerReviews;
