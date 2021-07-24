import Head from 'next/head'
import Header from '../components/header'
import Home from '../components/home'
import Footer from '../components/footer/footer'

const Index = () => {
  return (
    <div id="indexContainer" className="flex flex-col min-h-screen">
      <Head>
        <title>Gulag Anthem | Home</title>
      </Head>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default Index
