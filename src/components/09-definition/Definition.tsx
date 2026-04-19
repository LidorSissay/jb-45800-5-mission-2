import type MeaningsModel from '../../models/MeaningsModel'
import './Definition.css'

interface DefinitionProps {
    definition: MeaningsModel
}
const Definition = (props: DefinitionProps) => {
    const { partOfSpeech, definitions } = props.definition
    return (
        <div className='Definition'>
            <h3>{partOfSpeech}</h3>
            <ol>
                {definitions.map((def, index) => (
                    <li key={index}>{def.definition}</li>
                ))}
            </ol>
        </div>
    )
}
export default Definition