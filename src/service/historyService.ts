import type HistoryModel from "../models/HistoryModel"

const HISTORY = 'history'
class HistoryService {
    getHistory(): HistoryModel[] {
        const historyStorage = localStorage.getItem(HISTORY)
        return historyStorage ? JSON.parse(historyStorage) : []
    }

    saveHistory(dataToSave: HistoryModel): void {
        const data: HistoryModel[] = this.getHistory()
        data.push(dataToSave)
        localStorage.setItem(HISTORY, JSON.stringify(data))
    }
}

const historyService = new HistoryService()
export default historyService