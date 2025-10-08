import { useNavigate } from "react-router-dom";

// inside Checkout component
const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.phone || !formData.address) {
    alert("⚠️ Please fill in all required fields!");
    return;
  }

  // Optional: Save order data to server or localStorage

  // ✅ Clear cart after order
  localStorage.removeItem("cart");

  // ✅ Redirect to Order Success Page
  navigate("/order-success");
};
