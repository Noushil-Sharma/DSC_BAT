const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" height="70" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="b1">login</button>
    </nav>
  );
};

export default Navigation;
