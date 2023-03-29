import { NavLink } from "react-router-dom";
// import logo from '../logo.svg';


const linkStyles = {
    display: "inline-flex",
    flexdirection: "row",
    aligncontent: "center",
    justifycontent: "center",
    width: "5em",
    borderStyle: "solid",
    borderColor: "#38302E",
    padding: "1em",
    margin: "2em 6px 6px",
    background: "grey",
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
              background: "#858da5",
            }}
          >
            Home
          </NavLink>
          
          
          <NavLink
            to="/search"
            exact
            style={linkStyles}
            activeStyle={{
              background: "#858da5",
            }}
          >
            Search
          </NavLink>
          
          
          <NavLink
            to="/addset"
            exact
            style={linkStyles}
            activeStyle={{
              background: "#858da5",
            }}
          >
            Add Set
          </NavLink>
          
        </div>
        </>
    );
  }

export default NavBar;