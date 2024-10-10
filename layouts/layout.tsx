import FooterComponent from './footer/footer_component';
import HeaderComponent from './header/header.component';

export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen w-full'>
      <HeaderComponent />
      <section className='w-full min-h-[calc(100vh-var(--headerHeight))]'>
        {children}
      </section>
      <FooterComponent />
    </main>
  )
}