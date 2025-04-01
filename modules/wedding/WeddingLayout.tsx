import React, { ReactNode, useEffect } from 'react'
import Head from 'next/head'
import styles from './WeddingLayout.module.scss'
import { useTheme } from 'next-themes'

type Props = {
    children?: ReactNode
    title?: string
    description?: string
    keywords?: string
    locale?: string
    ogImageUrl?: string
    facebookAppId?: string
}

const WeddingLayout = (props: Props) => {
    const { setTheme } = useTheme()

    useEffect(() => {
        setTheme('light')
    }, [setTheme])

    return (
        <div>
            <Head>
                <title>{props.title || '(Untitled)'}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    name="locale"
                    property="og:locale"
                    content={(props.locale || 'en-US').replace('-', '_')}
                />
                <meta name="author" content="David Veszelovszki" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400&display=swap"
                    rel="stylesheet"
                />
                {props.description && <meta name="description" content={props.description} />}
                {props.keywords && <meta name="keywords" content={props.keywords} />}
                {props.ogImageUrl && <meta property="og:image" content={props.ogImageUrl} />}
                {props.facebookAppId && <meta property="fb:app_id" content={props.facebookAppId} />}
            </Head>
            <div className={styles.pageWrapper}>
                <div className={styles.page}>{props.children}</div>
            </div>
        </div>
    )
}

export default WeddingLayout
