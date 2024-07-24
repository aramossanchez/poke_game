import { IconBackground, IconBolt, IconBrandGitlab, IconBugFilled, IconDropletFilled, IconDroplets, IconFeather, IconFlame, IconGhostFilled, IconHandGrab, IconLeaf, IconMoonFilled, IconMountain, IconSettingsFilled, IconSnowflake, IconStarFilled, IconWifi, IconWindmillFilled } from "@tabler/icons-react";

export default function TypeIconComponent ({ type = '', size = 25 }) {
  switch (type) {
    case 'grass':
      return <IconLeaf size={size} />
    case 'poison':
      return <IconDropletFilled size={size} />
    case 'fire':
      return <IconFlame size={size} />
    case 'flying':
      return <IconFeather size={size} />
    case 'water':
      return <IconDroplets size={size} />
    case 'bug':
      return <IconBugFilled size={size} />
    case 'normal':
      return <IconBrandGitlab size={size} />
    case 'electric':
      return <IconBolt size={size} />
    case 'ground':
      return <IconBackground size={size} />
    case 'fairy':
      return <IconStarFilled size={size} />
    case 'fighting':
      return <IconHandGrab size={size} />
    case 'psychic':
      return <IconWifi size={size} />
    case 'rock':
      return <IconMountain size={size} />
    case 'steel':
      return <IconSettingsFilled size={size} />
    case 'ice':
      return <IconSnowflake size={size} />
    case 'ghost':
      return <IconGhostFilled size={size} />
    case 'dragon':
      return <IconWindmillFilled size={size} />
    case 'dark':
      return <IconMoonFilled size={size} />
  
    default:
      break;
  }

}