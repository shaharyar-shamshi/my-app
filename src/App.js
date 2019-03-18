import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="letsgocss.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display"
          rel="stylesheet"
        />
        <title>IIITU Alumni Website</title>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="header-top">
            <div className="logo">
              <img src="iiitulogo.png" />
            </div>
            <div className="info">
              <h2>IIIT UNA</h2>
              <h3>Alumni Interaction Portal</h3>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-contents ml-auto navbarLinks">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown drop">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Departments
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-submenu dropleft ">
                    <a className="dropdown-item test dropdown-toggle" href="#">
                      Computer Science
                      <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          2014
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          2015
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu dropleft">
                    <a className="dropdown-item test dropdown-toggle" href="#">
                      Electronics and Communication
                      <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          2014
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          2015
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu dropleft">
                    <a className="dropdown-item test dropdown-toggle" href="#">
                      Information Technology
                      <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          2014
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          2015
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <form className="form-inline login-form">
              <input
                className="form-control mr-sm-2"
                type="username"
                placeholder="Username"
                aria-label="username"
              />
              <input
                type="password"
                className="form-control mr-sm-2"
                placeholder="password"
                id="pwd"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </nav>
        <div className="box">
          <div className="container slider">
            <div className="row">
              <div className="col-lg-8 ">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="image.jpg"
                        className="d-block w-100"
                        alt="..."
                        width={440}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image-2.jpg"
                        className="d-block w-100"
                        alt="..."
                        width={440}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image-3.jpg"
                        className="d-block w-100"
                        alt="..."
                        width={440}
                        height={500}
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 sign-up">
                <h2>Sign Up</h2>
                <form>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      First Name
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      Last Name
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      Password
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      Contact
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder={9876543211}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      Branch
                    </label>
                    <div className="col-sm-8">
                      <select id="inputState" className="form-control">
                        <option selected>Computer Science</option>
                        <option>Electronics and Comunication</option>
                        <option>Information technology</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      Roll-No
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="IIITU15101"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      Current Organisation
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Google@llc"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
