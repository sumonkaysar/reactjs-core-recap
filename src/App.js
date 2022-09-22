import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Noakhali" special="Bivag"></District>
      <District name="Brahmonbaria" special="Jodha Akbar"></District>
      <District name="Sumilla" special="Moyna and Moti"></District>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return(
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post post={post} key={post.id}></Post>)
      }
    </div>
  );
}

function Post({post}) {
  return(
    <div style={{backgroundColor: 'lightgray', margin: '20px', border: '4px solid salmon'}}>
      <h2>Title: {post.title}</h2>
      <p>Body: {post.body}</p>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightBlue',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}
function District({name, special}) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);

  };
  return (
    <div style={districtStyle}>
      <h2>Name: {name}</h2>
      <p>Speciality: {special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  );
}
export default App;
