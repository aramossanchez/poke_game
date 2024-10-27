import { useState } from "react";

export default function useCombatDataPokemonDetail() {
  const [openedInfo, setOpenedInfo] = useState(false);
  
  return {
    setOpenedInfo,
    openedInfo
  }
}