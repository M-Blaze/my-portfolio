import Header from './components/Header'
import Footer from './components/Footer'
import Social from './views/Social'
import WhyMe from './views/WhyMe'
import Resume from './views/Resume'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Social />
      <WhyMe />
      <Resume />
      <Footer />
    </main>
  )
}
