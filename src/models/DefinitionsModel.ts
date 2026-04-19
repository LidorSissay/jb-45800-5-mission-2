import type DefinitionModel from "./DefinitionModel";

export default interface DefinitionsModel {
    partOfSpeech: string
    definitions: DefinitionModel[]
}