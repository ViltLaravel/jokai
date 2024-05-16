import Layout from "./layouts/Layout"
import Content from "./components/Content"
import { useEffect, useState } from "react"
import axios from "axios"
import Modal from "./components/Modal"
import Developer from "./components/Developer"
import About from "./components/About"

interface Joke {
  type: '',
  setup: '',
  punchline: ''
}

function App() {
  const [isJoke, setIsJoke] = useState<Joke[]>([]);
  const [isMeme, setIsMeme] = useState({
    urls: {
      thumb: ''
    }
  })
  const [isDeveloper, setIsDeveloper] = useState(false)
  const [isAbout, setIsAbout] = useState(false)
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    try {
      const res = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random');
      if (res) {
        setIsJoke(res.data);
        setLoading(false);
      }
    } catch (error) {
      setError('Error fetching image');
      setLoading(false);
    }
  };

  const fetchMemes = async () => {
    try {
      const res = await axios.get('https://api.unsplash.com/photos/random/?client_id=Iqb7ikt3VpWr9yDXUGqVc22CQSR16FDD_gAL5kmcYKE')
      if (res) {
        setIsMeme(res.data)
      }
    } catch (error) {
      console.log('Error fetching meme :', error)
    }
  }

  useEffect(() => {
    fetchJoke();
    fetchMemes();
  }, []);

  const reloadJoke = () => {
    fetchJoke();
    fetchMemes();
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const developerClick = () => {
    setIsDeveloper(true)
    console.log('Developer')
  }

  const aboutClick = () => {
    setIsAbout(true)
    console.log('About')
  }

  return (
    <>
      <Layout developer={developerClick} about={aboutClick}>
        <Content joke={isJoke[0]} meme={isMeme} reload={reloadJoke} />
      </Layout>
      <Modal show={isDeveloper} click={() => setIsDeveloper(false)}>
        <Developer />
      </Modal>
      <Modal show={isAbout} click={() => setIsAbout(false)}>
        <About />
      </Modal>
    </>
  )
}

export default App
