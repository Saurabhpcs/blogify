import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Prompt = () => {
  const [keywords, setKeywords] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/blog/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keywords }), 
      });

      const resData = await response.json(); 
      setLoading(false); 

      const generatedTitle = `${keywords}`;

      
      navigate("/generated-blog", {
        state: { title: generatedTitle, blog: resData.blogOutline }
      });
    } catch (error) {
      setLoading(false); 
      console.error("Error generating blog:", error);
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            
            <div className="registration-image">
              <img src="/images/ai.png" alt="Prompt Form" width="500" height="500" />
            </div>

            
            <div className="registration-form">
              <h1 className="main-heading mb-3">Generate a Blog</h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="keywords">Enter Keywords:</label>
                  <input
                    type="text"
                    id="keywords"
                    name="keywords"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)} 
                    required
                    placeholder="Enter keywords for blog generation"
                  />
                </div>

                <br />
                <button type="submit" className="btn btn-submit" disabled={loading}>
                  {loading ? "Generating..." : "Generate Blog"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
