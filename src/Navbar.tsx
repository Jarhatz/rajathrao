import "./App.css";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-comp">
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth", // This adds a smooth scrolling effect
          });
        }}
      >
        <p className="navbar-tab">Home</p>
      </div>
      {/* <p className="navbar-tab">About</p> */}
      <p className="navbar-tab">Experience</p>
      <p className="navbar-tab">Projects</p>
    </div>
  );
}

export default Navbar;