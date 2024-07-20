export const translateTypeToPrimaryColor = (type = '') => {
  switch (type) {
    case 'fire':
      return '#fa9866'
    case 'grass':
      return '#b5f090'
    case 'poison':
      return '#704a91'
    case 'flying':
      return '#e8d9ca'
    case 'water':
      return '#c2e7f0'
    case 'bug':
      return '#008022'
    case 'normal':
      return '#e7dfe8'
    case 'electric':
      return '#fffdba'
    case 'ground':
      return '#dbbd7d'
    case 'fairy':
      return '#f9defc'
    case 'fighting':
      return '#7d6a48'
    case 'psychic':
      return '#c26eff'
    case 'rock':
      return '#875b03'
    case 'steel':
      return '#999999'
    case 'ice':
      return '#e8fffc'
    case 'ghost':
      return '#9b8ca8'
    case 'dragon':
      return '#54ebc0'
    default:
      break;
  }
}

export const translateTypeToSecondaryColor = (type = '') => {
  switch (type) {
    case 'fire':
      return '#ff5b00'
    case 'grass':
      return '#b1ff00'
    case 'poison':
      return '#f5e0ff'
    case 'flying':
      return '#'
    case 'water':
      return '#2986cc'
    case 'bug':
      return '#b8ff9f'
    case 'normal':
      return '#999999'
    case 'electric':
      return '#ffd966'
    case 'ground':
      return '#ffe599'
    case 'fairy':
      return '#ff80c3'
    case 'fighting':
      return '#fff2cc'
    case 'psychic':
      return '#674ea7'
    case 'rock':
      return '#835000'
    case 'steel':
      return '#'
    case 'ice':
      return '#6fa8dc'
    case 'ghost':
      return '#5f4969'
    case 'dragon':
      return '#a8cffc'
    default:
      break;
  }
}