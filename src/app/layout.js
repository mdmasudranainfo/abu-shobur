'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/share/header/Header'
import ReduxProvider from '@/components/reduxProvider/ReduxProvider'
import SearchBar from '@/share/searchBar/Searchbar'
import Footer from '@/share/Footer/Footer'
import Category_modal from '@/share/header/Category_modal'
import AccountModal from '@/components/account/AccountModal'
import NavbarModal from '@/share/header/NavbarModal'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })
// export const metadata = {
//   title: 'ONEDROB',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
  params: { session, ...params},
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <SessionProvider session={session}>
        <ReduxProvider>
          <Header></Header>
          <div className=' min-h-[500px]'>
         {children}
          </div>
          <SearchBar></SearchBar>
          <Category_modal></Category_modal>
          <Footer></Footer>
          <AccountModal></AccountModal>
          <NavbarModal></NavbarModal>
        </ReduxProvider>
  </SessionProvider>
      </body>
    </html>
  )
}
