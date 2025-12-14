import api from '../api/axios';

export default function SweetCard({ sweet, refresh }) {

  // ✅ safety guard
  if (!sweet) return null;

  const purchase = async () => {
    try {
      await api.post(`/sweets/${sweet._id}/purchase`, {
        quantity: 1
      });
      refresh();
    } catch (err) {
      alert(err.response?.data?.message || "Purchase failed");
    }
  };

  return (
    <div style={{ border: '1px solid grey', padding: 10 }}>
      <h4>{sweet.name}</h4>
      <p>₹{sweet.price}</p>
      <p>Stock: {sweet.quantity}</p>

      <button
        disabled={sweet.quantity === 0}
        onClick={purchase}
      >
        Purchase
      </button>
    </div>
  );
}
