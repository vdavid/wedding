import { useState } from 'react'
import WeddingLayout from '../modules/wedding/WeddingLayout'
import styles from '../modules/wedding/wedding.module.scss'
import Image from 'next/image'
import headerPic from '/public/d-d-wedding-header.svg'
import uglyMajorMapPic from '/public/ugly-major-map.jpg'
import bikePic from '/public/bike.png'
import majorWelcomePic from '/public/major-coming-soon-map-by-dori.jpg'
import Separator from '../modules/wedding/Separator'

const Page = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <WeddingLayout title="Dóri & Dávid esküvő" description="2023. szeptember 2.">
            <header className={styles.header}>
                <h1>
                    <Image src={headerPic} alt="Dóri és Dávid esküvő felirat" priority />
                </h1>
                <section className={styles.bikeImage}>
                    <Image src={bikePic} alt="bike" priority />
                </section>
                <section className={styles.coreInfo}>
                    <div>
                        <h2>Helyszín</h2>
                        <p>
                            <a href="https://goo.gl/maps/t6jFmqEN2rfdugiF9" target="_blank">
                                Lósi Major
                            </a>
                            , Verőce,
                            <br />
                            Lósi völgy út 1., 2621
                        </p>
                    </div>
                    <div>
                        <h2>Időpont</h2>
                        <p>
                            2023. szeptember 2.
                            <br />
                            (szombat) 12:00-től
                        </p>
                    </div>
                    <div>
                        <h2>Kontakt</h2>
                        <p>
                            Ha bármi SOS van, hívd
                            <br />
                            <a href="/pingu-with-text.jpg">József</a> 🐧:{' '}
                            <a href="tel:+36709677805">+36 70 967-7805</a>
                        </p>
                    </div>
                </section>
            </header>
            <main className={styles.main}>
                <Separator />

                <section className={styles.program}>
                    <h2 id="program">Program</h2>
                    <p>Itt megtalálod, hogy mikor mi lesz.</p>
                    <ul>
                        <li>12:00 Várunk mindenkit!</li>
                        <li>13:00 Ebéd</li>
                        <li>15:00 Szertartás</li>
                        <li>16:30 Bingó</li>
                        <li>17:30 Vacsi</li>
                        <li>19:00 Nyitótánc a pajta mellett</li>
                        <li>21:00 Tortázás</li>
                        <li>00:00 Éjféli chilis bab</li>
                        <li>Buli kifulladásig</li>
                        <li>Vasárnap reggel morzsaparty</li>
                    </ul>

                    <p>
                        Itt egy{' '}
                        <a
                            href="https://calendar.google.com/calendar/u/0?cid=M2Q2OGQ3ZDM0N2YxOWY4NjU4Y2Q5MmJhZmNiZWQ5NWFkYmU1NGI0MzY3NDBjNGJhOGZkNmUxMmM2NzNlMDhjZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                            target="_blank"
                        >
                            Google naptár
                        </a>{' '}
                        is, amit hozzáadhatsz a saját naptáradhoz, ha így kényelmes neked.
                    </p>
                </section>

                <Separator />
            </main>
        </WeddingLayout>
    )
}

export default Page 