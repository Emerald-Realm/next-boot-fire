import { useState } from "react";
import { Container, Typography, Card, Row, Col } from 'react-bootstrap'
import aboutCoreValues from './components/api/aboutData'



function contact() {

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    reason: '',
    message: '',
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    setData({
      firstname: '',
      lastname: '',
      email: '',
      reason: '',
      message: '',
    });
  }

  return (
    <>
      <div className="contact-page px-4">
        about us
        <Row className="justify-content-around">
          <Col className="col-12 col-md-6">
            <div className="questions pt-4">
              <p>Have questions? Please complete the form below.</p>
              <p className="contact-text-1">
                BookSelf is dedicated to making the world a better place, one book at a time, through sustainable practices, innovative print-on-demand products, and a commitment to excellent service.
              </p>
              <p className="contact-text-2">
                After successfully navigating a hard and pricy system in1999, our founder, Barnes Young, discovered it was impossible to publish his amazing story through any of the traditional publishing sites and houses. Determined to share his story, and BookSelf was born.
              </p>
            </div>
          </Col>
          <Col className="col-12 col-md-6 col-lg-4">
            <form>
              <div className="firstname-input mb-3">
                <label className="form-label">Firstname</label>
                <input type="text" value={data.firstname} className="w-100"
                  onChange={handleChange} name="firstname" />
              </div>
              <div className="lastname-input mb-3">
                <label className="form-label">Lastname</label>
                <input type="text" value={data.lastname} className="w-100"
                  onChange={handleChange} name="lastname" />
              </div>
              <div className="email mb-3">
                <label className="form-label"> Email address</label>
                <input type="text" value={data.email} className="w-100"
                  onChange={handleChange} className="form-control" />
              </div>
              <div className="reason-input mb-3">
                <label className="form-label">Reason for Inquiry</label>
                <input type="text" value={data.reason} className="w-100"
                  onChange={handleChange} name="reason" />
              </div>
              <div className="message-input mb-3">
                <label className="form-label">Message</label>
                <input type="text" value={data.message} className="w-100"
                  onChange={handleChange} name="message" />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default contact
