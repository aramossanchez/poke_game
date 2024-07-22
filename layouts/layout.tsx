import HeaderComponent from './header/header.component';

export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen max-h-screen w-full'>
      <HeaderComponent />
      <section className='w-full h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] overflow-y-scroll'>
        {children}
      </section>
    </main>
  )
}