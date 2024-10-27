import { useState } from "react";

export default function useBasicDataPokemonDetails() {
  const [counterSpriteNormalVersion, setCounterSpriteNormalVersion] = useState(1);
  const [counterSpriteShinyVersion, setCounterSpriteShinyVersion] = useState(1);
  
  return {
    counterSpriteNormalVersion,
    setCounterSpriteNormalVersion,
    counterSpriteShinyVersion,
    setCounterSpriteShinyVersion,
  }
}