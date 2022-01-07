import Link from "next/link";
import { useState } from "react";
import { Col, Row, Breadcrumb } from "react-bootstrap";

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState("");

  function handleChange(e) {
    setNewsEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newsEmail);
    setNewsEmail("");
  }

  return (
    <div className="p-4">
      <Row>
        <Col className="col-12 col-md-4 d-flex justify-content-center">
          {/* <Link href="/">Home</Link> */}
          <ul className="breadcrumbs">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="bread-item">
              <Link href="/">Home</Link>
            </li>
            <li className="bread-item">
              <Link href="/">Home</Link>
            </li>
          </ul>
        </Col>
        <Col className="col-12 col-md-4 d-flex justify-content-center">
          <Row>
            <Col>
              <i className="bi bi-twitter h3"></i>
            </Col>
            <Col>
              <i className="bi bi-facebook h3"></i>
            </Col>
            <Col>
              <i className="bi bi-instagram h3"></i>
            </Col>
            <Col>
              <i className="bi bi-youtube h3"></i>
            </Col>
          </Row>
        </Col>
        <Col className="col-12 col-md-4 d-flex justify-content-center">
          <form>
            <div className="mb-3">
              <p>Subscribe to our newsletter</p>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <div className="d-flex">
                <input
                  type="email"
                  value={newsEmail}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}
