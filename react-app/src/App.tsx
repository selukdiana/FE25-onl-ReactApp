import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Stories from './pages/stories/Stories';
import Author from './pages/author/Author';
import Post from './pages/post/Post';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Stories /> */}
      {/* <Author/> */}
      <Post />
    </div>
  );
}

export default App;
