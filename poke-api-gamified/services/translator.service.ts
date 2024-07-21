export const translateTypeToPrimaryColor = (type = '') => {
  switch (type) {
    case 'fire':
      return '#fa9866'
    case 'grass':
      return '#b5f090'
    case 'poison':
      return '#c5e8d2'
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
    case 'dark':
      return '#b1b3b5'
    default:
      break;
  }
}

export const translateTypeToSecondaryColor = (type = '') => {
  switch (type) {
    case 'fire':
      return '#e60e02'
    case 'grass':
      return '#00ad28'
    case 'poison':
      return '#616161'
    case 'flying':
      return '#'
    case 'water':
      return '#2986cc'
    case 'bug':
      return '#b8ff9f'
    case 'normal':
      return '#999999'
    case 'electric':
      return '#e64602'
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
      return '#444444'
    case 'ice':
      return '#6fa8dc'
    case 'ghost':
      return '#5f4969'
    case 'dragon':
      return '#4271ff'
    case 'dark':
      return '#ffffff'
    default:
      break;
  }
}

export const convertWeight = (weight = '0') => {
  let newWeight = Number(weight);
  return (newWeight / 10).toFixed(1);
}

export const convertHeight = (height = '0') => {
  let newHeight = Number(height);
  return (newHeight / 10).toFixed(1);
}