import { useState } from 'react';
import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx';
import HappyDawg from './components/Happy.jsx';
import CoolDawg from './components/Cool.jsx';
import './App.css'

function App() {

  const [content, setContent] = useState('home');

  const handleContentChange = (nextContent) => {
    setContent(nextContent);
  }

  return (
    <>
      <Navigation onContentChange={handleContentChange} />
      <Header />
      <main>
        {content === 'home' && <h2>His name Curtis</h2>}
        {content === 'happyDawg' && <HappyDawg />}
        {content === 'coolDawg' && <CoolDawg />}
      </main>
    </>
  )
}

export default App
