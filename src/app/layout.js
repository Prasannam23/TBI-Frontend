import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import store from './store/store.js'
import { Provider } from "react-redux"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TBI-KIET',
  description: 'Top Incubator in India',
}

export default function RootLayout({ children }) {
  return (
    <html className='text-gray-900 bg-white font-poppins ' lang="en" >
       <Provider store={store}>
      <body className={inter.className}>
     
      <Header />
        {children}
        <Footer />
       
        
      </body>
      </Provider>
    </html>
  )
}
