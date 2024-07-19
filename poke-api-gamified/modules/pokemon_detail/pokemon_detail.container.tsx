'use client';

import LayoutComponent from "@/layouts/layout";
import usePokemonDetailComponent from "./pokemon_detail.hook";
import LoaderPokeballComponent from "@/components/loader/loader";
import Image from "next/image";
import TypeIconComponent from "@/components/type_icon.component";
import { translateTypeToPrimaryColor, translateTypeToSecondaryColor } from "@/services/translator.service";
import { IconArrowBadgeLeftFilled, IconArrowBadgeRightFilled } from "@tabler/icons-react";

export default function PokemonDetailContainer({ pokemon_id }: { pokemon_id: string }) {

  const {
    loading,
    pokemonData,
    specieData,
    spriteNormalVersion,
    setCounterSpriteNormalVersion,
    counterSpriteNormalVersion,
    spriteShinyVersion,
    setCounterSpriteShinyVersion,
    counterSpriteShinyVersion
  } = usePokemonDetailComponent(pokemon_id);

  const typesName: string[] | undefined = pokemonData?.types.map((type) => type.type.name);
  const type1 = typesName?.[0];
  const type2 = typesName?.[1];

  return (
    <LayoutComponent>
      {loading ?
        <LoaderPokeballComponent />
        :
        <main
          className='flex flex-row items-center justify-center gap-2 flex-wrap w-full py-4 px-2'
          style={{ background: `linear-gradient(to right bottom, ${translateTypeToPrimaryColor(type1 || '')}, ${type2 ? translateTypeToPrimaryColor(type2) : translateTypeToPrimaryColor(type1)}` }}
        >
          {/* PRESENTATION SECTION */}
          <section className='w-full flex flex-row gap-y-10 justify-between items-center'>
            <article className='w-[33%] flex flex-col h-full items-start justify-center'>
              <span className='text-[40px] font-semibold leading-9'>#{pokemonData?.id}</span>
              <span className='text-[50px] font-bold leading-9'>{pokemonData?.name.toLocaleUpperCase()}</span>
              <div className='flex flex-row gap-3 bg-black px-2 py-1 rounded-md my-5'>
                {pokemonData?.types.map((type: { type: { name: string } }) => {
                  return (
                    <div key={type.type.name + '-' + pokemonData?.id} className='flex flex-row items-center gap-1 text-2xl' style={{ color: translateTypeToPrimaryColor(type.type.name) }}>
                      <TypeIconComponent type={type.type.name} />
                      <span className='font-semibold'>{type.type.name.toLocaleUpperCase()}</span>
                    </div>
                  )
                })}
              </div>
              <div
                className='flex flex-row items-center gap-2 mb-1 rounded-md px-2 py-1'
                style={{ backgroundColor: translateTypeToSecondaryColor(type1) }}
              >
                <span>Egg groups:</span>
                <div className='flex flex-row gap-1'>
                  {specieData?.egg_groups.map((egg, index) => {
                    return (
                      <span key={egg.name + '-egg_group'}>{index === 1 ? 'and ' : ''}{egg.name}</span>
                    )
                  })}
                </div>
              </div>
              <span
                className='block mb-5 rounded-md px-2 py-1'
                style={{ backgroundColor: translateTypeToSecondaryColor(type1) }}
              >
                Habitat: {specieData?.habitat.name.replaceAll('-', ' ')}
              </span>
              <span className='max-w-[80%] text-[14px]'>{specieData?.flavor_text_entries[2].flavor_text.replaceAll('', ' ')}</span>
              <span className='max-w-[80%] text-[14px]'>{specieData?.flavor_text_entries[3].flavor_text.replaceAll('', ' ')}</span>
            </article>
            <article className='w-[33%] h-full flex flex-col justify-center items-start relative'>
              <Image
                src={pokemonData?.sprites.other.dream_world.front_default || '/'}
                alt='Pokemon image'
                width={400}
                height={400}
                className='border-l-2 border-b-2 relative w-full'
                style={{ borderColor: translateTypeToSecondaryColor(type1) }}
              />
              <span className='absolute top-[50%] min-[1440px]:left-[-9%] min-[1024px]:left-[-14%] rotate-[270deg]'>Height: {pokemonData?.height}</span>
              <span className='w-full text-center'>Weight: {pokemonData?.weight}</span>
            </article>
            <article className='w-[33%] flex flex-col justify-center items-end gap-10'>
              <div className='flex flex-row items-center'>
                <IconArrowBadgeLeftFilled
                  size={40}
                  color={translateTypeToSecondaryColor(type1)}
                  className='cursor-pointer'
                  onClick={() => setCounterSpriteNormalVersion(counterSpriteNormalVersion - 1)}
                />
                <div className='flex flex-col gap-4 items-center'>
                  <Image
                    src={spriteNormalVersion[counterSpriteNormalVersion]}
                    alt='Pokemon sprite normal'
                    width={200}
                    height={200}
                  />
                  <span className='text-xl font-semibold'>Normal version</span>
                </div>
                <IconArrowBadgeRightFilled
                  size={40}
                  color={translateTypeToSecondaryColor(type1)}
                  className='cursor-pointer'
                  onClick={() => setCounterSpriteNormalVersion(counterSpriteNormalVersion + 1)}
                />
              </div>
              <div className='flex flex-row items-center'>
                <IconArrowBadgeLeftFilled
                  size={40}
                  color={translateTypeToSecondaryColor(type1)}
                  className='cursor-pointer'
                  onClick={() => setCounterSpriteShinyVersion(counterSpriteShinyVersion - 1)}
                />
                <div className='flex flex-col gap-4 items-center'>
                  <Image
                    src={spriteShinyVersion[counterSpriteShinyVersion]}
                    alt='Pokemon sprite shiny'
                    width={200}
                    height={200}
                  />
                  <span className='text-xl font-semibold'>Shiny version</span>
                </div>
                <IconArrowBadgeRightFilled
                  size={40}
                  color={translateTypeToSecondaryColor(type1)}
                  className='cursor-pointer'
                  onClick={() => setCounterSpriteShinyVersion(counterSpriteShinyVersion + 1)}
                />
              </div>
            </article>
          </section>
          {/* <section>
            <div className='w-full flex flex-row justify-between items-start'>
              <div>
              </div>
              <div>
                <div
                  className='w-[140px] h-[140px] border-4 border-black flex flex-row items-center justify-center mb-2'
                  style={{ background: `linear-gradient(to right bottom, ${translateTypeToPrimaryColor(type1 || '')}, ${type2 ? translateTypeToPrimaryColor(type2) : translateTypeToPrimaryColor(type1)}` }}
                >
                </div>
              </div>
            </div>
            <div className='flex lg:flex-row lg:justify-between items-start flex-col gap-3'>
              <div className='flex lg:flex-col lg:w-auto w-full flex-row gap-16 items-center justify-center'>

              </div>
            </div>
            <div>
              <h2>DATA</h2>
            </div>
            <div>
              <h2>ATTACKS</h2>
            </div>
            {/* <Image
              src={pokemonData?.sprites.back_default}
              alt='Pokemon image 1'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.back_shiny}
              alt='Pokemon image 2'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.front_default}
              alt='Pokemon image 3'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.front_shiny}
              alt='Pokemon image 4'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.other.home.front_default}
              alt='Pokemon image 6'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.other.home.front_shiny}
              alt='Pokemon image 7'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.other['official-artwork'].front_default}
              alt='Pokemon image 8'
              width={200}
              height={200}
            /> */}
            {/* <Image
              src={pokemonData?.sprites.other['official-artwork'].front_shiny}
              alt='Pokemon image 9'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.other.showdown.back_default}
              alt='Pokemon image 10'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.other.showdown.back_shiny}
              alt='Pokemon image 11'
              width={200}
              height={200}
            /> */}
            {/* <Image
              src={pokemonData?.sprites.other.showdown.front_default}
              alt='Pokemon image 12'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.other.showdown.front_shiny}
              alt='Pokemon image 13'
              width={200}
              height={200}
            /> */}
            {/* <Image
              src={pokemonData?.sprites.versions['generation-i']['red-blue'].back_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-i']['red-blue'].back_gray}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-i']['red-blue'].back_transparent}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-i']['red-blue'].front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-i']['red-blue'].front_gray}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-i']['red-blue'].front_transparent}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-i'].yellow.back_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-i'].yellow.back_gray}
              alt='Pokemon image 14'
              width={200}
              height={200}
            /> */}
            {/* <Image
              src={pokemonData?.sprites.versions['generation-i'].yellow.back_transparent}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-i'].yellow.front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-i'].yellow.front_gray}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-i'].yellow.front_transparent}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].crystal.back_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            /> */}
            {/* <Image
              src={pokemonData?.sprites.versions['generation-ii'].crystal.back_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].crystal.back_shiny_transparent}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].crystal.back_transparent}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].crystal.front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].crystal.front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            /> */}
            {/* <Image
              src={pokemonData?.sprites.versions['generation-ii'].crystal.front_transparent}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].crystal.front_shiny_transparent}
              alt='Pokemon image 14'
              width={200}
              height={200}
            /> */}
            {/* <Image
              src={pokemonData?.sprites.versions['generation-ii'].gold.back_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].gold.back_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].gold.front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].gold.front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].gold.front_transparent}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].silver.back_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].silver.back_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].silver.front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].silver.front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].silver.front_transparent}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iii'].emerald.front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iii'].emerald.front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iii']['firered-leafgreen'].back_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iii']['firered-leafgreen'].back_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iii']['firered-leafgreen'].front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iii']['firered-leafgreen'].front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iii']['ruby-sapphire'].back_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iii']['ruby-sapphire'].back_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iii']['ruby-sapphire'].front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iii']['ruby-sapphire'].front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iv']['diamond-pearl'].back_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iv']['diamond-pearl'].back_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iv']['diamond-pearl'].front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iv']['diamond-pearl'].front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iv']['heartgold-soulsilver'].back_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iv']['heartgold-soulsilver'].back_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iv'].platinum.back_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iv'].platinum.back_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iv'].platinum.front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-iv'].platinum.front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-v']['black-white'].animated.back_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-v']['black-white'].animated.back_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-v']['black-white'].animated.front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-v']['black-white'].animated.front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-v']['black-white'].back_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-v']['black-white'].back_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-v']['black-white'].front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-v']['black-white'].front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-vi']['x-y'].front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-vi']['x-y'].front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-vii'].icons.front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_shiny}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-viii'].icons.front_default}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
          </section> */}
        </main>
      }
    </LayoutComponent>
  )
}