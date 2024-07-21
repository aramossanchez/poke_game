import { IconBackground, IconBolt, IconBrandGitlab, IconBugFilled, IconDropletFilled, IconDroplets, IconFeather, IconFlame, IconGhostFilled, IconHandGrab, IconLeaf, IconMoonFilled, IconMountain, IconSettingsFilled, IconSnowflake, IconStarFilled, IconWifi, IconWindmillFilled } from "@tabler/icons-react";

export default function TypeIconComponent ({ type }: {type: string}) {
  switch (type) {
    case 'grass':
      return <IconLeaf />
    case 'poison':
      return <IconDropletFilled />
    case 'fire':
      return <IconFlame />
    case 'flying':
      return <IconFeather />
    case 'water':
      return <IconDroplets />
    case 'bug':
      return <IconBugFilled />
    case 'normal':
      return <IconBrandGitlab />
    case 'electric':
      return <IconBolt />
    case 'ground':
      return <IconBackground />
    case 'fairy':
      return <IconStarFilled />
    case 'fighting':
      return <IconHandGrab />
    case 'psychic':
      return <IconWifi />
    case 'rock':
      return <IconMountain />
    case 'steel':
      return <IconSettingsFilled />
    case 'ice':
      return <IconSnowflake />
    case 'ghost':
      return <IconGhostFilled />
    case 'dragon':
      return <IconWindmillFilled />
    case 'dark':
      return <IconMoonFilled />
  
    default:
      break;
  }

}