import style from './loader.module.css'

export default function LoaderPokeballComponent() {
  return (
    <div className={`${style.wrapper} flex flex-col items-center justify-center gap-3`}>
      <div className={style.pokeball}>
      </div>
      <div className={style.loaderText}></div>
    </div>

  )
}