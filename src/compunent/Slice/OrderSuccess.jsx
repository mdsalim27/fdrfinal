import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";

const OrderSuccess = () => {
  return (
    <Container>
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            {"🎉 Order Placed Successfully!"}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Your order has been confirmed. Your items will be delivered soon.
          </p>
          <Link
            to="/shop"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default OrderSuccess;
