function Header({ spiceCount }) {
  return (
    <header>
      <div className="heading">
        <h1>Active U</h1>
      </div>
      <div className="sub_heading">
        <h3 >Find the perfect activity for you.</h3>
        <h4>live: {spiceCount}</h4>
      </div>
    </header>
  );
}

export default Header;
