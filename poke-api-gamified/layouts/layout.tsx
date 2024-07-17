import HeaderComponent from './header/header.component';

export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen max-h-screen w-full bg-slate-200'>
      <HeaderComponent />
      <section className='w-full h-[calc(100vh-80px)] bg-blue-100 p-10'>
        {children}
      </section>
    </main>
  )
}