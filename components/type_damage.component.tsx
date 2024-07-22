import { translateTypeToPrimaryColor } from "@/services/translator.service"
import { PokemonTypeInfoType } from "@/types/pokemon.types"
import TypeIconComponent from "./type_icon.component"

export default function TypeDamageComponent({
  typesData,
  label,
  damage
}: {
  typesData: PokemonTypeInfoType[] | null
  label: string,
  damage: 'double_damage_from' | 'half_damage_from' | 'no_damage_from'
}) {
  return (
    <div className='flex flex-col gap-y-10'>
      {typesData?.map((type, index) => {
        return (
          <div key={type.name + index}>
            <div className='text-[25px] font-semibold leading-9 mb-2'>
              <span className='bg-black rounded-md px-2 py-1' style={{ color: translateTypeToPrimaryColor(type.name) }}>{type.name.toLocaleUpperCase()}</span>
              <span>{label}:</span>
            </div>
            <div className='flex flex-row items-center gap-2'>
              {type.damage_relations[damage].length > 0 ?
              type.damage_relations[damage].map((typeItem: { name: string }) => {
                return (
                  <div
                    key={`${typeItem.name}-deals-double-damage-vs`}
                    className='bg-black p-2 rounded-full' style={{ color: translateTypeToPrimaryColor(typeItem.name) }}
                  >
                    <TypeIconComponent
                      type={typeItem.name}
                    />
                  </div>
                )
              })
              :
              <span className='text-[18px] py-2 font-semibold'>No known types</span>
            }
            </div>
          </div>
        )
      })}
    </div >
  )
}