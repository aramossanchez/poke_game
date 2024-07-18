export type PokemonBasicInfoType = {
  name: string,
  url: string
}

export type PokemonFullDataType = {
  id: string,
  name: string,
  sprites: {front_default: string},
  types: {type: 
    {name: string}
  }[]
}