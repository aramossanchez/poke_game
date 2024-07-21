export type PokemonBasicInfoType = {
  name: string,
  url: string
}

export type PokemonFullDataType = {
  id: string,
  name: string,
  height: string,
  weight: string,
  stats: {base_stat: string}[],
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
  },
  types: {
    type: {
      name: string,
      url: string
    }
  }[],
  abilities: {
    ability: {name: string, url: string}
  }[],
  moves: {
    move: {
      name: string,
      url: string
    },
    version_group_details: {
      level_learned_at: number
    }[]
  }[]
}

export type PokemonSpecieInfoType = {
  habitat: {name: string},
  egg_groups: {name: string}[],
  flavor_text_entries: { flavor_text: string }[]
}

export type PokemonTypeInfoType = {
  name: string,
  damage_relations :{
    double_damage_from: {name: string}[]
    double_damage_to: {name: string}[]
    half_damage_from: {name: string}[]
    half_damage_to: {name: string}[]
    no_damage_from: {name: string}[]
    no_damage_to: {name: string}[]
  }
}

export type PokemonAbilityInfoType = {
  name: string,
  effect_entries :{
    effect: string
  }[],
  flavor_text_entries: {
    flavor_text: string,
    language: {name: string}
  }[],
}

export type PokemonMovementInfoType = {
  name: string,
  accuracy: string,
  type: {name: string}
  effect_entries :{
    effect: string
  }[],
  flavor_text_entries: {
    flavor_text: string,
    language: {name: string}
  }[],
  level_learned_at?: number,
  damage_class: {name: string}
}