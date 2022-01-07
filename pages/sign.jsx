import { useState } from "react";
import { Container, Typography, Card, Row, Col, Button } from 'react-bootstrap'
import aboutCoreValues from './components/api/aboutData'



function sign() {

  const [data, setData] = useState({
    username: '',
    password: '',
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
      <Row className="sign p-4">

        <Col className="sign-up col-12 col-md-6">

          <Row className="align-center">
            <p className="col-7">Are you New? sign up now</p>
            <Button className="google col-7 mt-2">Sign up with Google</Button>
            <Button className="twitter col-7 mt-2">Sign up with Twitter</Button>
            <Button className="facebook col-7 my-2">Sign up with Facebook</Button>
          </Row>
        </Col>
        <Col className="sign-in col-md-6">
          <form>
            <div className="username-input mb-3">
              <label className="form-label">Username</label>
              <input type="text" value={data.username} className="w-100"
                onChange={handleChange} name="username" />
            </div>
            <div className="lastname-input mb-3">
              <label className="form-label">Lastname</label>
              <input type="text" value={data.lastname} className="w-100"
                onChange={handleChange} name="lastname" />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
          <p className="py-2">Forgot Password?</p>
        </Col>
      </Row>
    </>
  )
}

export default sign