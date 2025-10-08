import React, { useState } from "react";
import Container from "./Container";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state.Product.cartItem);
  const subtotal = cart.reduce((total, item) => total + item.price * item.qun, 0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "cash",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      alert("⚠️ Please fill in all required fields!");
      return;
    }

    alert(
      `✅ Order Confirmed!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPayment: ${formData.payment}\n\nTotal: $${subtotal.toFixed(
        2
      )}`
    );

    // Optional: Clear cart here if you want
    // localStorage.removeItem("cart");
  };


  
  return (
    <Container>
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Checkout 🧾
          </h2>

          {cart.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 mb-4">Your cart is empty.</p>
              <Link
                to="/shop"
                className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Go to Shop
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 🧍‍♂️ Billing Form */}
              <form
                onSubmit={handleSubmit}
                className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Billing Details
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="e.g. 017XXXXXXXX"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Shipping Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your address"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Payment Method
                  </label>
                  <select
                    name="payment"
                    value={formData.payment}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="cash">Cash on Delivery</option>
                    <option value="bkash">bKash / Nagad</option>
                    <option value="card">Credit / Debit Card</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition"
                >
                  Confirm Order
                </button>
              </form>

              {/* 💰 Order Summary */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 h-fit">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Order Summary
                </h3>

                <ul className="divide-y divide-gray-200 dark:divide-gray-700 mb-4">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between py-2 text-gray-700 dark:text-gray-300"
                    >
                      <span>
                        {item.title} × {item.qun}
                      </span>
                      <span>${(item.price * item.qun).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between font-bold text-gray-900 dark:text-white">
                  <span>Total:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Container>
  );
};

export default Checkout;
