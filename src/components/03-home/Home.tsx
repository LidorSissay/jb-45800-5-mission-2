import { useState } from 'react'
import Title from '../06-title/Title'
import './Home.css'
import definitionService from '../../service/definitionService'
import type MeaningsModel from '../../models/MeaningsModel'
import Definition from '../09-definition/Definition'
import historyService from '../../service/historyService'

const Home = () => {
    const [definition, setDefinition] = useState<MeaningsModel[]>([])
    const [word, setWord] = useState<string>('')
    const getDefinition = async () => {
        try {
            const definition = await definitionService.getDefinition(word)
            setDefinition(definition)
            historyService.saveHistory({
                time: new Date().toLocaleString(),
                word: word
            })
        } catch (e) {
            alert(e)
        }
    }
    const displayDefinition = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setWord(event.currentTarget.value)
    }
    return (
        <div className="Home">
            <Title title="Home" />
            <input value={word} placeholder='Enter a word in English...' onChange={displayDefinition} />
            <button onClick={getDefinition}>Define</button>
            {definition.map((def, index) => (
                <Definition key={index} definition={def} />
            ))}
        </div>
    )
}
export default Home