import type DefinitionsModel from "./DefinitionsModel";

export default interface MeaningsModel {
    partOfSpeech: string
    definitions: DefinitionsModel[]
}