import { useEffect, useState } from "react";
import api from "../api/axios";
import "../styles/dashboard.css";

export default function Admin() {
  const [sweets, setSweets] = useState([]);
  const [newSweet, setNewSweet] = useState({});

  const load = async () => {
    const res = await api.get("/sweets");
    setSweets(res.data.sweets);
  };

  useEffect(() => {
    load();
  }, []);

  const addSweet = async () => {
    await api.post("/sweets", newSweet);
    setNewSweet({});
    load();
  };

  const deleteSweet = async (id) => {
    await api.delete(`/sweets/${id}`);
    load();
  };

  const restockSweet = async (id) => {
    await api.post(`/sweets/${id}/restock`, { quantity: 10 });
    load();
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2> Admin Panel</h2>
      </div>

     
      <div className="admin-form">
        <h3>Add New Sweet</h3>

        <input
          placeholder="Name"
          value={newSweet.name || ""}
          onChange={(e) =>
            setNewSweet({ ...newSweet, name: e.target.value })
          }
        />

        <input
          placeholder="Category"
          value={newSweet.category || ""}
          onChange={(e) =>
            setNewSweet({ ...newSweet, category: e.target.value })
          }
        />

        <input
          placeholder="Price"
          value={newSweet.price || ""}
          onChange={(e) =>
            setNewSweet({ ...newSweet, price: e.target.value })
          }
        />

        <input
          placeholder="Quantity"
          value={newSweet.quantity || ""}
          onChange={(e) =>
            setNewSweet({ ...newSweet, quantity: e.target.value })
          }
        />

        <button className="btn btn-primary" onClick={addSweet}>
          Add Sweet
        </button>
      </div>

      {sweets.map((s) => (
        <div key={s._id} className="admin-sweet">
          {console.log("SWEET:", s)}
          <span>{s.name}</span>

          <div className="admin-actions">
            <button
              className="btn btn-secondary"
              onClick={() => restockSweet(s._id)}
            >
              Restock
            </button>

            <button
              className="btn btn-danger"
              onClick={() => deleteSweet(s._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
