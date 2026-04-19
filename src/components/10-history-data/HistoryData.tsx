import type HistoryModel from '../../models/HistoryModel'
import './HistoryData.css'

interface HistoryDataProps {
    history: HistoryModel[]
}
const HistoryData = (props: HistoryDataProps) => {
    const { history } = props
    return (
        <>
            {history.map((word, index) => (
                <tr key={index}>
                    <td>{word.time}</td>
                    <td>{word.word}</td>
                </tr>
            ))}
        </>
    )
}
export default HistoryData