// import type { Metadata } from 'next';

import './globals.css'
import react from 'react'
import Navbar from '@/Component/Navbar/navbar'
import Container from '@/Component/Container/container'
import Footer from '@/Component/Footer/footer'
import Section1 from '@/Component/Section1/section1'
import Sidenav from '@/Component/Sidenav/sidenav'
import Container2 from '@/Component/Container2/container2'
  


export const metadata = {
  title: 'Products',
  description: 'Products App',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body >
        <Navbar></Navbar>
        <Container></Container>
        <Section1></Section1>
        <Sidenav></Sidenav>
        <Container2/>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
