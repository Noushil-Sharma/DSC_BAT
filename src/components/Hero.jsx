const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR SKILLS DESERVE THE BEST</h1>
        <p>
          YOUR SKILLS DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          BAT.YOUR SKILLS DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          BAT.
        </p>

        <div className="hero-btn">
          <button className="b1">Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/bat.jpg" alt="hero-image" width="550" height="600"/>
      </div>
    </main>
  );
};

export default HeroSection;
