export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the Future of Blogging</p>
                            <h1>Welcome to Blogify</h1>
                            <p>
                                Ready to make your blogging easier? 
                                You're in the right place! At Blogify, 
                                we help you create great blog posts quickly and easily.
                            </p>   

                            <div className="btn btn-group">
                                <a href="/about">
                                    <button className="btn">explore more</button>
                                </a>

                            </div> 
                        </div>

                        {/* Hero Images... */}
                        <div className="hero-image">
                            <img src="/images/home.png" alt="Home Page Image" width="400" height="500" />
                        </div>

                    </div>
                </section>
            </main>

            {/* 2nd Section */}

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

            {/* 3rd Section.. */}

            <section className="section-hero">
                    <div className="container grid grid-two-cols">

                        {/* Hero Images... */}
                        <div className="hero-image">
                            <img src="/images/design.png" alt="Home Page Image" width="400" height="500" />
                        </div>

                        <div className="hero-content">
                            <p>We're here to elevate your writing</p>
                            <h1>Get Started Today</h1>
                            <p>
                            Ready to take your blogging to the next level? Sign up today and let Blogify help you create compelling, SEO-optimized blog posts with ease. Whether you’re looking for ideas, outlines, or full drafts, we’ve got you covered. Start your blogging journey now!
                            </p> 

                            <div className="btn btn-group">
                                <a href="/about">
                                    <button className="btn">explore more</button>
                                </a>
                            </div> 
                        </div>

                    </div>
                </section>
        </>
    );
};