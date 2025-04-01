import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <main className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
                <Component {...pageProps} />
            </main>
        </ThemeProvider>
    )
} 