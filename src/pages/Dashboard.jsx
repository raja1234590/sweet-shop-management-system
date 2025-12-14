import { useEffect, useState } from "react";
import api from "../api/axios";
import SweetCard from "../components/sweetCard";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);

  const loadSweets = async () => {
    const res = await api.get("/sweets");
    setSweets(res.data.sweets);
  };

  useEffect(() => {
    loadSweets();
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Sweets Dashboard</h2>

        {localStorage.getItem("isAdmin") === "true" && (
          <a href="/admin" className="btn btn-primary">
            Go to Admin
          </a>
        )}
      </div>

      <div className="sweets-grid">
        {sweets.map((s) => (
          <SweetCard key={s._id} sweet={s} refresh={loadSweets} />
        ))}
      </div>
    </div>
  );
}
