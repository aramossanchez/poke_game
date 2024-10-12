'use client';

import PokemonDetailContainer from "@/templates/pokemon_detail/pokemon_detail.container";

export default function PokemonDetail({ params }: { params: { 'pokemon-id': string } }) {
  return (
    <PokemonDetailContainer pokemon_id={params['pokemon-id']} />
  )
}