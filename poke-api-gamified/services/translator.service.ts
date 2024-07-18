export const translateTypeToColor = (type: string) => {
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