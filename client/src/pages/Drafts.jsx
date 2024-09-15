import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Drafts = () => {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    const fetchDrafts = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/drafts/my-drafts", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        });

        const draftsData = await response.json();
        if (response.ok) {
          setDrafts(draftsData);
        } else {
          console.error("Failed to fetch drafts:", draftsData.message);
        }
      } catch (error) {
        console.error("Error fetching drafts:", error);
      }
    };

    fetchDrafts();
  }, []);

  return (
    <section>
      <main>
        <div className="container grid grid-two-cols">
          <div className="drafts-image">
            <img src="/images/info.png" alt="Drafts" width="500" height="500" />
          </div>

          <div className="drafts-content">
            <h1 className="main-heading">My Drafts</h1>
            <ul className="drafts-list">
              {drafts.map((draft) => (
                <li key={draft._id} className="draft-card">
                  <h2 className="draft-title">{draft.title.charAt(0).toUpperCase() + draft.title.slice(1)}</h2>
                  <Link to="/generated-blog" state={{ blog: draft.content, title: draft.title, isDraft: true }}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
};

