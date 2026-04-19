import Title from '../06-title/Title'
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <Title title="Home" />
            <input placeholder='Enter a word in English...' />
            <button>Define</button>
        </div>
    )
}
export default Home