import axios from "axios";
import type MeaningsModel from "../models/MeaningsModel";

class DefinitionService {
    async getDefinition(inputWord: string): Promise<MeaningsModel[]> {
        const { data } = await axios.get<MeaningsModel[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`)
        return data
    }
}

const definitionService = new DefinitionService()
export default definitionService