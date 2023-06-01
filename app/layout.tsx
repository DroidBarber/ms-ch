import './globals.css'
import AuthContext from './context/AuthContext'
import { Inter } from 'next/font/google'
import ToasterContext from './context/ToasterContext'
import ActiveStatus from './components/ActiveStatus'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Messengr',
  description: 'Message App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext/>
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
