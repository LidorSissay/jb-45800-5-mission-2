import { useState } from 'react'
import Title from '../06-title/Title'
import HistoryData from '../10-history-data/HistoryData'
import './History.css'
import type HistoryModel from '../../models/HistoryModel'

const History = () => {
    const [history, setHistory] = useState<HistoryModel[]>([])
    return (
        <div className="History">
            <Title title="History" />
            <table>
                <thead>
                    <tr>
                        <th>TIME</th>
                        <th>WORD</th>
                    </tr>
                </thead>
                <tbody>
                    <HistoryData />
                </tbody>
            </table>
        </div>
    )
}
export default History