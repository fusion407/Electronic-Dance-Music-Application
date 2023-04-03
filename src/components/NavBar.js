import { NavLink } from "react-router-dom";
// import logo from '../logo.svg';


const linkStyles = {
    display: "inline-flex",
    flexdirection: "row",
    aligncontent: "center",
    justifycontent: "center",
    width: "5em",
    borderStyle: "solid",
    borderColor: "#b2c2bf",
    padding: "1em",
    margin: "2em 6px 6px",
    background: "#b2c2bf",
    textDecoration: "none",
    color: "black",
  };


function NavBar(props) {

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
              background: "#c0ded9",
            }}
          >
            Home
          </NavLink>
          
          
          <NavLink
            to="/search"
            exact
            style={linkStyles}
            activeStyle={{
              background: "#c0ded9",
            }}
          >
            Search
          </NavLink>
          
          
          <NavLink
            to="/addset"
            exact
            style={linkStyles}
            activeStyle={{
              background: "#c0ded9",
            }}
          >
            Add Set
          </NavLink>
          
        </div>
        </>
    );
  }

export default NavBar;