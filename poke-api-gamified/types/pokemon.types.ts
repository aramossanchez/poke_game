export type PokemonBasicInfoType = {
  name: string,
  url: string
}

export type PokemonFullDataType = {
  id: string,
  name: string,
  sprites: {
    front_default: string,
    other: {
      'official-artwork': {
        front_default: string
      },
      dream_world: {
        front_default: string
      }
    }
    versions :{
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string,
            front_shiny: string,
          }
        }
      }
    }
  },
  species: {
    url: string
  }
  types: {
    type: {
      name: string
    }
  }[]
}

export type PokemonSpecieInfoType = {
  flavor_text_entries: { flavor_text: string }[]
}