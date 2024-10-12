import LinkComponent from "@/atoms/link.atom"
import Image from "next/image";

export default function FooterComponent() {
  const year = new Date().getFullYear();

  return (
    <section className="bg-primaryColor px-4 py-8 w-full text-lg text-primaryBackground">
      <article className="flex flex-col gap-y-6 items-center">
        <Image
          alt="Logo del footer"
          src={"/images/logo.png"}
          width={200}
          height={50}
        />
        <div className="w-full flex justify-center gap-x-2">
          <LinkComponent link="/" text="Aviso legal" />
          <p>|</p>
          <LinkComponent link="/" text="Política de privacidad" />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-center">{year} - Aplicación web desarrollada por</p>
          <LinkComponent link="/" text="Armando Ramos Sánchez" />
        </div>
      </article>
    </section>
  )
}