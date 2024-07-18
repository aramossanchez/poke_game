import PokemonDetailContainer from "@/modules/pokemon_detail/pokemon_detail.container";

export default function PokemonDetail({ params }: { params: { 'pokemon-id': string } }) {
  return (
    <PokemonDetailContainer pokemon_id={params['pokemon-id']} />
  )
}