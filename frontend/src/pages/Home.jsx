import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
    return (
        <div>
            <Hero />
            <Categories />
            <FeaturedProducts />
            <Testimonials />

            {/* Additional Features Section */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Philately India?
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Experience the best digital platform for stamp collecting in India
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🔒</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Secure NPDA Wallet
                            </h3>
                            <p className="text-gray-600">
                                Government-backed digital wallet for safe and hassle-free
                                transactions. Add money once and buy multiple stamps seamlessly.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">📦</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Fast Delivery
                            </h3>
                            <p className="text-gray-600">
                                Track your orders in real-time. Physical stamps delivered to
                                your doorstep within 5–7 business days via India Post.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💬</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Community Forum
                            </h3>
                            <p className="text-gray-600">
                                Connect with fellow philatelists, share knowledge, discuss rare
                                stamps, and stay updated on exhibitions and events.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Start Your Collection?
                    </h2>
                    <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of philatelists and discover rare Indian stamps today
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/register"
                            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Create Free Account
                        </Link>

                        <Link
                            to="/products"
                            className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors"
                        >
                            Browse Catalog
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
