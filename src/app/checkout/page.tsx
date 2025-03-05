"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Checkout() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "credit-card",
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("Order placed successfully!");
  router.push("/");
};


  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <form className="bg-white shadow-md p-4 rounded-lg" onSubmit={handleCheckout}>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-600">Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <label className="block text-gray-600">Payment Method</label>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
