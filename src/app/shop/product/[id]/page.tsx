"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { shopItems } from "@/app/utils/data";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetail() {
  const { id } = useParams();
  const product = shopItems.find((item) => item.id === Number(id));

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartItems");
      if (!storedCart) {
        localStorage.setItem("cartItems", JSON.stringify([]));
      }
    }
  }, []);

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  const handleAddToCart = () => {
    setIsModalOpen(true); // Open Modal
  };

  const handleSubmit = () => {
    const newCartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      userDetails: formData,
    };

    let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    cartItems.push(newCartItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    setIsModalOpen(false); // Close Modal
    alert("Product added to cart successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-8">
      <p className="text-gray-600 text-md mb-3">Shop / Product / {product.title}</p>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 relative h-80 border">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-600 font-medium mt-2">{product.price}</p>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <button
            className="mt-6 bg-primary text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-600 transition"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg"
      >
        {/* Modal Header */}
        <motion.h2
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-gray-800 text-center mb-6"
        >
          ✨ Enter Your Details
        </motion.h2>

        {/* Form Fields */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2"
            value={formData.number}
            onChange={(e) => setFormData({ ...formData, number: e.target.value })}
          />
          <textarea
            placeholder="Address"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2 resize-none h-24"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-between items-center mt-6"
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-6 py-3 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Submit
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
)}
    </div>
  );
}
