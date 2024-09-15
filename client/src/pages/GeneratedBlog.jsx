import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const GeneratedBlog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { blog, title, isDraft } = location.state || {}; // Retrieve the blog, title, and isDraft flag

  const handleSaveDraft = async () => {
    console.log("Title:", title); // Log the title
    console.log("Blog:", blog); // Log the blog content
    
    if (!blog || !title) {
      toast.error("Title and blog content are required.");
      return;
    }
  
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/drafts/save-draft", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ title, content: blog })
      });
  
      const res_data = await response.json();
  
      if (response.ok) {
        toast.success("Blog saved to drafts!");
        navigate("/drafts");
      } else {
        toast.error(res_data.message || "Failed to save blog.");
      }
    } catch (error) {
      toast.error("An error occurred while saving the blog.");
      console.error("Error saving blog draft:", error);
    }
  };

  return (
    <section>
      <main>
        <div className="container grid grid-two-cols">
          <div className="generated-blog-image">
            <img src="/images/gen.png" alt="Blog" width="500" height="500" />
          </div>

          <div className="generated-blog-content">
            <h1 className="main-heading">{title || "Generated Blog"}</h1> {/* Show the title */}
            <div className="blog">
              {/* Render the blog content if available, otherwise show a message */}
              <p>{blog ? blog : "No blog generated."}</p>
            </div>
            {!isDraft && (
              <button className="btn btn-save-draft" onClick={handleSaveDraft}>
                Save in Drafts
              </button>
            )}
          </div>
        </div>
      </main>
    </section>
  );
};


