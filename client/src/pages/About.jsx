import { NavLink } from "react-router-dom";
import { useAuth } from "../store/user";

export const About = () => {
  const {user} = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Welcome, {user ? ` ${user.username} to Blogify!` : ` to Blogify!`}</p>
              <h1>Why Choose Us? </h1>
              <p>
                Simplicity: Blogify makes the process of content creation easy,
                allowing you to focus on what matters, your ideas and creativity.
              </p>
              <p>
                AI-Driven: Our platform utilizes advanced AI models to generate
                blog ideas, outlines, and drafts, saving you hours of work.
              </p>
              <p>
                Tailored Content: We help you create SEO-optimized content based
                on your unique topics and keywords, ensuring your voice stands out.
              </p>
              <p>
                Time-Saving: Spend less time brainstorming and structuring and more
                time refining your content with our automated system.
              </p>
              <p>
                User-Friendly: Whether you're an experienced blogger or new to
                content creation, Blogify provides a smooth and intuitive experience.
              </p>
              <div className="btn btn-group">
                <NavLink to="/">
                  <button className="btn"> explore more</button>
                </NavLink>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>2000+</h2>
                        <p>Blogs Generated</p>
                    </div>

                    <div className="div1">
                        <h2>500+</h2>
                        <p>Active Users</p>
                    </div>

                    <div className="div1"> 
                        <h2>300+</h2>
                        <p>AI-Powered Topics</p>
                    </div>

                    <div className="div1">
                        <h2>1200+</h2>
                        <p>Happy Bloggers</p>
                    </div>
                </div>
            </section>
    </>
  );
};