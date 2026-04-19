import axios from "axios";
import type MeaningsModel from "../models/MeaningsModel";
import type ApiModel from "../models/ApiModel";

class DefinitionService {
    async getDefinition(inputWord: string): Promise<MeaningsModel[]> {
        const { data } = await axios.get<ApiModel[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`)
        const [entry] = data
        return entry.meanings
    }
}

const definitionService = new DefinitionService()
export default definitionService