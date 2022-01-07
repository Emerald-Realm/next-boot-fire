import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container, Typography, Card, Row, Col } from 'react-bootstrap'
import { collection, query, addDoc, orderBy, onSnapshot } from "firebase/firestore"
import firebase from '../firebase';

// import fire from '../config/fire-config';
// import CreatePost from '../components/CreatePost';
// import db from '../firebase';

const product = () => {

  let schoolCol = firebase.firestore().collection("schools");

  const [schools, setSchools] = useState([]);
  const [school, setSchool] = useState({
    title: '',
    desc: ''
  });
  const [loading, setLoading] = useState(false)



  function getSchools() {
    setLoading(true)
    firebase.firestore().collection("schools")
      .onSnapshot((querySnanpshot) => {
        const items = []
        querySnanpshot.forEach((doc) => {
          let idx = doc.id
          let data = doc.data()
          items.push({ ...data, id: idx })
        })
        console.log(items)
        setSchools(items)
        setLoading(false)
      })
  }
  useEffect(() => {
    getSchools();
  }, [])

  function handleChange(e) {
    setSchool({ ...school, [e.target.name]: e.target.value });
  }

  function handleDelete(e) {
    let parent = e.target.parentElement
    let id = parent.id
    schoolCol.doc(id).delete();
  }

  function handleUpdate(e) {
    let parent = e.target.parentElement
    let id = parent.id
    // schoolCol.doc(id).update();
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    schoolCol.add(school)
      .then(function (docRef) {
        console.log("Tutorial created with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding Tutorial: ", error);
      });;
  }


  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <Head>
        <title>school App</title>
      </Head>
      <h1>school</h1>
      <ul>
        {schools.map(school =>
          <li key={school.id} id={school.id}>
            <p>{school.title}</p>
            <p>{school.desc}</p>
            <button onClick={handleDelete}>delete</button>
            <button onClick={handleUpdate}>update</button>
          </li>
        )}
      </ul>
      <div className="">
        <Col className="col-12 col-md-6 col-lg-4">
          <form>
            <div className="firstname-input mb-3">
              <label className="form-label">Title</label>
              <input type="text" value={school.title} className="w-100"
                onChange={handleChange} name="title" />
            </div>
            <div className="lastname-input mb-3">
              <label className="form-label">description</label>
              <input type="text" value={school.desc} className="w-100"
                onChange={handleChange} name="desc" />
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
      </div>
    </div>
  )
}
export default product