import { NavLink } from "react-router-dom";
// import logo from '../logo.svg';


const linkStyles = {
    display: "inline-flex",
    flexdirection: "row",
    aligncontent: "center",
    justifycontent: "center",
    height: "1rem",
    width: "5em",
    borderStyle: "solid",
    borderColor: "#b2c2bf",
    padding: "1em",
    margin: "2em 6px 6px",
    background: "#32365a",
    textDecoration: "none",
    color: "#38e471",
  };


function NavBar() {

    return (
        <>
        
        {/* <div className="App-logo">
          <img src={logo} alt="logo"></img>
        </div> */}

        <div>
          <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
              background: "#44497a",
            }}
          >
            Home
          </NavLink>
          
          
          <NavLink
            to="/search"
            exact
            style={linkStyles}
            activeStyle={{
              background: "#44497a",
            }}
          >
            Search
          </NavLink>
          
          
          <NavLink
            to="/addset"
            exact
            style={linkStyles}
            activeStyle={{
              background: "#44497a",
            }}
          >
            Add Set
          </NavLink>
          
        </div>

        </>
    );
  }

export default NavBar;