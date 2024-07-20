export type PokemonBasicInfoType = {
  name: string,
  url: string
}

export type PokemonFullDataType = {
  id: string,
  name: string,
  height: string,
  weight: string,
  sprites: {
    front_default: string,
    other: {
      'official-artwork': {
        front_default: string
      },
      dream_world: {
        front_default: string
      },
      showdown: {
        front_default: string,
        front_shiny: string
      }
    },
    versions :{
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string,
            front_shiny: string,
          }
        }
      },
      'generation-ii': {
        crystal: {
          front_transparent: string,
          front_shiny_transparent: string
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
  habitat: {name: string},
  egg_groups: {name: string}[],
  flavor_text_entries: { flavor_text: string }[]
}