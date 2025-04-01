import { useState } from 'react'
import WeddingLayout from '../../modules/wedding/WeddingLayout'
import styles from '../../modules/wedding/wedding.module.scss'
import Image from 'next/image'
import headerPic from '../../public/wedding/d-d-wedding-header.svg'
import uglyMajorMapPic from '../../public/wedding/ugly-major-map.jpg'
import bikePic from '../../public/wedding/bike.png'
import majorWelcomePic from '../../public/wedding/major-coming-soon-map-by-dori.jpg'
import Separator from '../../modules/wedding/Separator'

const Page = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <WeddingLayout title="Dóri & Dávid esküvő" description="2023. szeptember 2.">
            <header className={styles.header}>
                <h1>
                    <Image src={headerPic} alt="Dóri és Dávid esküvő felirat" />
                </h1>
                <section className={styles.bikeImage}>
                    <Image src={bikePic} alt="bike" />
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
                            <a href="/wedding/pingu-with-text.jpg">József</a> 🐧:{' '}
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

                <h2 id="map">Térkép</h2>

                <p>
                    Készítettünk nektek egy térképet a szállásokról, a helyszínről, és egyéb fontos
                    pontokról. Itt van ni:
                </p>

                <iframe
                    src="https://www.google.com/maps/d/embed?mid=1aceXFVWYiPkttcDykDYr0Q07VcjAQug&ehbc=2E312F&noprof=1"
                    width="640"
                    height="480"
                ></iframe>

                <Separator />

                <h2 id="faq">Kérdések és válaszok (FAQ)</h2>
                <h3 id="faq-pre-wedding">Esküvő előtt</h3>
                <p>A leggyakoribb kérdések:</p>
                <ul>
                    <li>
                        <strong>Mikorra jöjjek?</strong>
                        <ul>
                            <li>
                                Ha tudsz és van kedved, <strong>délre</strong>. De ha úgy túl hosszú
                                lenne a nap, 14:30-ra, hogy picivel a szertartás előtt odaérj.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Hogyan jutok oda a majorba?</strong>
                        <ul>
                            <li>
                                Ha autóval jössz,{' '}
                                <a href="https://goo.gl/maps/t6jFmqEN2rfdugiF9">
                                    a Google Maps segít
                                </a>
                                . A majorban tudsz parkolni.
                                <ul>
                                    <li>
                                        Ha az autót inkább máshol hagynád: a Csillag panzió és a
                                        Szepi fogadó is azt állítja, hogy van elég parkolóhelyük.{' '}
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYGR1ywNnriFJ9gm8PqV85Yb4mL_-22IjqX1rPGcWY3f8NWw/viewform">
                                            Itt pedig tudsz fuvart foglalni
                                        </a>{' '}
                                        a majorba.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Ha nincs autód, érdemes összebeszélned valakivel, aki autóval jön.
                                Ha segítsünk ebben, keress minket aug. 30. szerdáig!
                            </li>
                            <li>
                                Ha ez nem jön össze, írd meg nekünk, melyik vonattal jössz Vácig, és
                                gondoskodunk róla, hogy elhozzon onnan egy autó.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Milyen ruhában jöjjek?</strong>
                        <ul>
                            <li>
                                Amiben kényelmesen érzed magad. Dávid pl. egy piros gatyóban, valami
                                ingben (este pólóban), és abban a cipőben lesz, amiben legutóbb
                                találkoztatok, Dóri pedig fehér menyasszonyi ruhában. A
                                pultosainktól sötét pólót/inget kértünk. Szóval széles a skála, a
                                fára mászós kertésznadrágtól az elegánsig minden megy.
                            </li>
                            <li>
                                <strong>Ne</strong> magassarkúban. Lesz sok kinti program, és ez egy
                                tanya, magassarkúban kényelmetlen lehet a füves talaj.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Milyen lesz az esküvő helyszíne?</strong>
                        <ul>
                            <li>
                                Egyszerű, természetközeli, barátságos. Nagy, 13 hektár. Lesznek
                                lovak, birkák, kutyák, malacok, tyúkok, szamár, alpaka, ilyenek.
                                Vaddisznók! 🐗🐗 De emellett a benti téren tisztaság lesz, angol
                                vécék, stb. Autóból végtelen elfér, és tudtok ki-be járni.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Mit hozzak?</strong>
                        <ul>
                            <li>
                                <strong>Kajás dobozt.</strong> Lehet, hogy kevés kaja marad, de
                                valószínűbb, hogy <strong>sok</strong>. Nem készülünk elvivős
                                dobozokkal, ezért légyszi hozz egy párat, hogy tudj vinni kaját,
                                sütit, vagy akár levest befőttesüvegben. Ha vasárnap nem akarsz
                                főzni, Dóri és Dávid a barátod.
                            </li>
                            <li>
                                Opcionálisan <strong>szúnyogriasztót</strong>. Állítólag nem szokott
                                sok szúnyog lenni, de lehet az esküvő előtt pár nappal esik, és
                                akkor lehetnek, plusz kullancsok ellen se árt.
                            </li>
                            <li>
                                Opcionálisan <strong>kinti játékokat</strong>, pl. labda, tollas,
                                kismotor, papírsárkány, stb. A nap nagy részében kinn leszünk a
                                mezőn/erdőben, 25–30 fok lesz, sok lesz a gyerek és játékos felnőtt,
                                szóval bármi kinti játék hasznos lehet 🙂
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Mit ne hozzak?</strong>
                        <ul>
                            <li>
                                Ágyneműt és törcsit, kivéve, ha sátrazol. A majorban és minden
                                szálláshelyen adnak ezeket.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Mit eszünk-iszunk?</strong>
                        <ul>
                            <li>
                                Szendvicseket, ebédet, salátákat, levest, sült dolgokat, sütiket,
                                tortákat, egytálételeket. Minden allergiát és preferenciát
                                elolvastunk és figyelembe vettünk, amit írtatok, szóval fogsz tudni
                                mit enni. 🙂
                            </li>
                        </ul>
                    </li>
                </ul>

                <Separator />

                <h3 id="faq-accommodation">Szállással kapcsolatos dolgok</h3>
                <p>
                    (Ha egyénileg foglaltál szállást, vagy hazamész aludni, ez a rész várhatóan nem
                    lesz számodra izgi.)
                </p>
                <ul>
                    <li>
                        <strong>Hol fogok aludni?</strong>
                        <ul>
                            <li>
                                <a href="https://docs.google.com/spreadsheets/d/1vE52A7OT8Z_TkZV39ysd2yOAPeMz20gsaWi6QzNcYV0/edit#gid=0">
                                    Itt a lista, hogy ki hol alszik.
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Mikortól vehetjük át a szállásunk?</strong>
                        <ul>
                            <li>
                                Ha a majorban, a <strong>kőházban</strong> alszol: bármikor!
                            </li>
                            <li>
                                Ha a majorban, <strong>glamping sátorban</strong> alszol: bármikor!
                            </li>
                            <li>
                                Ha a majorban, a <strong>saját sátradban</strong> alszol: bármikor,
                                de kérlek, keresd meg Dávidot (ezt a kövi napokban még átírjuk
                                valaki másra), hogy mutassa meg, hová tudsz lesátrazni.
                            </li>
                            <li>
                                Ha a <strong>Csillag panzióban</strong>, akkor elvileg du. 2-kor, de
                                már megkérdeztük őket, hogy hátha pár szobát előbb is el lehet
                                foglalni, írunk ha kapunk infót.
                            </li>
                            <li>
                                Ha a <strong>Szepi fogadóban</strong>, akkor elvileg reggel 10
                                órától, de mág megkérdeztük őket, mert a foglaltság függvényében pár
                                szobát lehet, hogy csak később vehetünk át. Írunk, ha kapunk infót.
                            </li>
                            <li>
                                Ha olyan szálláson, amit <strong>magadnak foglaltál</strong>, akkor
                                légyszi a szállást kérdezd. 🙂
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Hol találjuk meg a szállásunkat?</strong>
                        <ul>
                            <li>
                                <a href="https://www.google.com/maps/d/edit?mid=1aceXFVWYiPkttcDykDYr0Q07VcjAQug">
                                    Itt egy térkép
                                </a>
                                , amin rajta van az összes szállás, amiről tudunk.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Kell fizetnünk a szállásért?</strong>
                        <ul>
                            <li>
                                <strong>Nem.</strong> (Kivéve, ha tőlünk függetlenül, egyénileg
                                foglaltál.) Ha a Csillag panzióban vagy a Szepi fogadóban alszol, a
                                “Veszelovszki Dávid” névre van foglalva az Ha ez kellemetlenséget
                                okoz, nézd meg az ajándékozós kéréseket lejjebb.
                            </li>
                        </ul>
                    </li>
                </ul>

                <Separator />

                <h3 id="faq-cab">Fuvarral kapcsolatos dolgok</h3>
                <p>
                    (Ha a majorban alszol, vagy hazamész aludni, ez a rész várhatóan nem fog
                    érdekelni.)
                </p>
                <ul>
                    <li>
                        <strong>
                            Hogyan jutok el a majorból a szállásomra, vagy a szállásomról a majorba?
                        </strong>
                        <ul>
                            <li>
                                Van egy nagyon jófej segítőnk, Laci, aki egy 7 személyes autóval
                                egész nap és éjjel rendelkezésre fog állni. Profi sofőr, nem ma
                                kezdte.
                            </li>
                            <li>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYGR1ywNnriFJ9gm8PqV85Yb4mL_-22IjqX1rPGcWY3f8NWw/viewform">
                                    Itt
                                </a>{' '}
                                egy egyszerű Google Form, ahol tudsz fuvart foglalni.{' '}
                                <a href="https://docs.google.com/spreadsheets/d/1f9cTQGsDE8pvDuUqpjgddjL4k50HaZYgoAAAwATCC9o/edit?resourcekey#gid=948371589">
                                    Itt
                                </a>{' '}
                                tudod megnézni, hogy hányan várnak épp fuvarra. Ha jelezted előre,
                                hogy szükséged lesz fuvarra az esküvő folyamán, akkor szombat reggel
                                Laci megosztja/megosztotta veled a helyzetét Google Maps-en, így még
                                azt is látod, hogy merre jár!
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Többször is igénybe vehetem Laci segítségét?</strong>
                        <ul>
                            <li>Igen! Oda vissza fog furikázni egész nap, ezt vállalta.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Tegezhetem Lacit?</strong>
                        <ul>
                            <li>Igen, sőt, ezt kérte!</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Van Lacinál gyerekülés?</strong>
                        <ul>
                            <li>
                                Igen, kettő is. Három gyerekkel nem jön senki, úgyhogy azt
                                számoltuk, ez 90% eséllyel elég lesz.
                            </li>
                            <li>
                                <strong>Mikortól ér rá Laci?</strong>
                                <ul>
                                    <li>Kb. déltől hozza-viszi az embereket, a buli végéig.</li>
                                </ul>
                            </li>
                            <li>
                                Mi van, ha ránéztem a{' '}
                                <a href="https://docs.google.com/spreadsheets/d/1f9cTQGsDE8pvDuUqpjgddjL4k50HaZYgoAAAwATCC9o/edit?resourcekey#gid=948371589">
                                    táblázatra
                                </a>{' '}
                                és úgy néz ki,{' '}
                                <strong>többet kellene várnom, mint amennyit szeretnék?</strong>
                                <ul>
                                    <li>
                                        (TODO a fuvar koordinátort és beugrós fuvarosokat még
                                        intézzük, itt lesz majd több infó mire aktuális lesz a
                                        kérdés.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                <Separator />

                <h3 id="faq-onsite">Esküvő közben, helyszín</h3>

                <ul>
                    <li>
                        <strong>Mit kell tudnunk, hogy biztonságban legyünk?</strong>
                    </li>
                    <ul>
                        <li>
                            A majorban van egy körülkerítetlen tó. Kérjük, a gyerekekre nagyon
                            vigyázzatok, hogy egyedül ne menjenek a tóhoz!
                        </li>
                        <li>
                            A farmon lévő állatok barátságosak, de gyerekeket ne hagyjatok egyedül
                            velük.
                        </li>
                    </ul>
                    <li>
                        <strong>Meg szabad simogatni a helyszínen az állatokat?</strong>
                        <ul>
                            <li>
                                A Majorban nagyon sok állat él: lovak, birkák, kecskék, alpaka,
                                kutyák, macskák, stb. Alapvetően barátságosak, de azért ne másszatok
                                be hozzájuk, és ne etessétek őket. Szilvi, a farm gazdája, aki{' '}
                                <a href="/wedding/petka-szilvi.jpg">így néz ki</a>, nagyon szívesen
                                körbevisz bárkit megmutatni az állatokat, vele együtt lehet etetni
                                is, mert ő pontosan tudja, melyik barátságos, és mit ehetnek.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Kit kereshetek az esküvő napján ha segítség kell?</strong>
                        <ul>
                            <li>
                                Ha bármi SOS dolog van, keresd Pingut 🐧 (magas, szőke,{' '}
                                <a href="/wedding/pingu-with-text.jpg">ilyen</a>) személyesen, vagy
                                ha nem találod, telefonon itt:{' '}
                                <a href="tel:+36709677805">+36 70 967-7805</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Hogy néz ki a major? Mi hol van?</strong>
                        <Image src={uglyMajorMapPic} alt="térkép1" />
                    </li>
                    <li>
                        <strong>Mindent meg kell ennünk/innunk?</strong>
                        <ul>
                            <li>
                                Italok: Nem! 😄 Hoztunk kb. végleten liter italt, de bizományiból,
                                szóval ha esetleg megmarad valami, azt visszavihetjük.
                            </li>
                            <li>
                                Ételek: Igen! 😄 Vasárnap du. 1-ig morzsapartyzunk, részben azért,
                                mert 2-ig miénk a placc, és szeretnénk veletek még lógni, de
                                másrészt azért is, hogy reggelire/ebédre még megehessük a
                                maradékokat. A többit bedobozoljuk és reméljük, hazaviszitek, mert
                                mi pár nappal az esküvő után repülünk vissza Svédországba.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Hogy kell használni a kávégépet?</strong>
                        <ul>
                            <li>
                                Itt egy{' '}
                                <a
                                    href="https://www.youtube.com/watch?v=ms9cI2k8M8Q"
                                    target="_blank"
                                >
                                    1 perces videó
                                </a>
                                , ami segít. Lesznek hozzá növényi tejek meg pár liter tehéntej is.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Ide még jön egy csomó másik kérdés és válasz?</strong>
                        <ul>
                            <li>IGEN! 😄</li>
                        </ul>
                    </li>
                </ul>

                <Separator />

                <h3 id="faq-cake">Sütikkel kapcsolatos dolgok</h3>
                <ul>
                    <li>Szeretnénk süteményt hozni, hozhatunk?</li>
                    <ul>
                        <li>Már kaptunk elég felajánlást, köszi, lesz elég süti! 🙂</li>
                    </ul>
                    <li>
                        <strong>
                            Ja de már megbeszéltük, hogy hozunk. Hová tegyük érkezés után?
                        </strong>
                        <ul>
                            <li>
                                A pajtában a pult mögött van egy konyha hűtővel (
                                <a href="https://share.cleanshot.com/vXPZMXh1" target="_blank">
                                    térkép
                                </a>
                                ), oda be tudjátok tenni, a szakácsaink segítenek elhelyezni.
                            </li>
                        </ul>
                    </li>
                </ul>

                <Separator />

                <h3 id="faq-gifts">Ajándék, kelengye, pénz, meg ezek</h3>
                <ul>
                    <li>
                        <strong>Lesz menyasszonytánc?</strong>
                        <ul>
                            <li>
                                Nem lesz. Szívesen vállaljuk az esküvő költségeit. Tőletek azt
                                várjuk, hogy gyertek el ha van kedvetek, és szórakozzatok velünk meg
                                a többiekkel.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Hozzunk ajándékot?</strong>
                        <ul>
                            <li>
                                Jelenleg nem szenvedünk hiányt materiális dolgokban; amire
                                szükségünk volt, azt már megvettük. Ha van valami olyan spéci dolog,
                                amit <em>személyesen te</em> szeretnél adni{' '}
                                <em>személyesen nekünk</em>, mert valamiért speciális, és úgy
                                gondolod, hogy örülnénk neki, azt szívesen fogadjuk, de igazából az
                                ilyesmit <em>bármikor</em> szívesen fogadjuk, nem kell, hogy ez az
                                esküvőhöz kötődjön. ❤️ Szóval alapvetően{' '}
                                <strong>nem kérünk ajándékot</strong>, de ha adnál, akkor is jobban
                                örülünk az előzetes egyeztetésnek, várhatóan nem a meglepetés ereje
                                lesz az érték.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>
                            Mindenképp szeretnénk valamilyen ajándékot adni, mit adhatunk?
                        </strong>
                        <ul>
                            <li>
                                Azoktól, akik mindenképp szeretnének valami ajándékot adni nekünk,
                                minden esetben azt kértük, hogy{' '}
                                <strong>látogassatok meg minket Svédországban</strong> az
                                elkövetkező néhány évben valamikor. Ez mindenkire igaz a násznépből,
                                kicsit félünk, hogy magányosak leszünk kinn, és nagyon örülnénk
                                azoknak az embereknek a társaságának, akiket szeretünk, akik pont ti
                                vagytok ❤️
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Ha szeretnénk fizetni a szállásunkért, mit csináljunk?</strong>
                        <ul>
                            <li>
                                Az van, hogy a Lósi Majorban ingyen kapott szállást az a kb. 50
                                ember, aki befért. A többiek közül azoknak, akik kértek szállást, a
                                közeli a Csillag panzióban és Szepi fogadóban foglaltunk szobákat.
                                Ezeket már kifizettük, mert úgy éreztük fairnek, ha nem kerül pénzbe
                                a szállás pont azoknak, akik nem fértek be a közelebbi alvóhelyekre.{' '}
                                <strong>Nagyon szívesen meghívunk</strong> a szállásra. Ha ez neked
                                kellemetlen és mindenképp szeretnéd kifizetni, lentebb írtunk
                                bankszámlaszámot, ahová utalhatsz, de tényleg nem fontos, örülünk ha
                                a környéken alszol és így tovább tudsz mulatni velünk. ❤️
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Tudok nektek pénzt adni?</strong>
                        <ul>
                            <li>Légyszi olvasd el a fenti kérdéseket és válaszokat.</li>
                            <li>
                                Ha még ezeket elolvasva is szeretnél pénzt adni, akkor a{' '}
                                <code>11773377-00394783</code> bankszámlaszámra,{' '}
                                <code>Radics Dóra</code> névre tudsz utalni, és nagyon köszönjük. ❤️
                                Ha nincs bankszámlád, vagy ragaszkodsz a készpénzhez, keress meg
                                minket aug. 30. szerdáig, és lebeszélünk róla. 😄
                            </li>
                        </ul>
                    </li>
                </ul>
                <Separator index={4} />
                <Image src={majorWelcomePic} alt="A Lósi Major térképe Dóri tollából" />
            </main>

            <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
                ≡
            </button>

            {menuOpen && (
                <div className={styles.menuOverlay} onClick={() => setMenuOpen(false)}>
                    <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
                        <a href="#program" onClick={() => setMenuOpen(false)}>
                            Program
                        </a>
                        <a href="#map" onClick={() => setMenuOpen(false)}>
                            Térkép
                        </a>
                        <a href="#faq" onClick={() => setMenuOpen(false)}>
                            Kérdések és válaszok (FAQ)
                        </a>
                        <ul>
                            <li>
                                <a href="#faq-pre-wedding" onClick={() => setMenuOpen(false)}>
                                    Esküvő előtt
                                </a>
                            </li>
                            <li>
                                <a href="#faq-accommodation" onClick={() => setMenuOpen(false)}>
                                    Szállással kapcsolatos dolgok
                                </a>
                            </li>
                            <li>
                                <a href="#faq-cab" onClick={() => setMenuOpen(false)}>
                                    Fuvarral kapcsolatos dolgok
                                </a>
                            </li>
                            <li>
                                <a href="#faq-onsite" onClick={() => setMenuOpen(false)}>
                                    Esküvő közben, helyszín
                                </a>
                            </li>
                            <li>
                                <a href="#faq-cake" onClick={() => setMenuOpen(false)}>
                                    Sütikkel kapcsolatos dolgok
                                </a>
                            </li>
                            <li>
                                <a href="#faq-gifts" onClick={() => setMenuOpen(false)}>
                                    Ajándék, kelengye, pénz, meg ezek
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </WeddingLayout>
    )
}

export default Page
