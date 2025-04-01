import Image from 'next/image'
import styles from '../../modules/wedding/wedding.module.scss'
import separator01Pic from '../../public/wedding/trees/tree-01.png'
import separator02Pic from '../../public/wedding/trees/tree-02.png'
import separator03Pic from '../../public/wedding/trees/tree-03.png'
import separator04Pic from '../../public/wedding/trees/tree-04.png'
import separator05Pic from '../../public/wedding/trees/tree-05.png'
import separator06Pic from '../../public/wedding/trees/tree-06.png'
import separator07Pic from '../../public/wedding/trees/tree-07.png'
import separator08Pic from '../../public/wedding/trees/tree-08.png'
import separator09Pic from '../../public/wedding/trees/tree-09.png'
import separator10Pic from '../../public/wedding/trees/tree-10.png'
import separator11Pic from '../../public/wedding/trees/tree-11.png'
import separator12Pic from '../../public/wedding/trees/tree-12.png'
import separator13Pic from '../../public/wedding/trees/tree-13.png'
import separator14Pic from '../../public/wedding/trees/tree-14.png'
import { RandomGenerator } from './RandomGenerator'

const pics = [
    separator01Pic,
    separator02Pic,
    separator03Pic,
    separator04Pic,
    separator05Pic,
    separator06Pic,
    separator07Pic,
    separator08Pic,
    separator09Pic,
    separator10Pic,
    separator11Pic,
    separator12Pic,
    separator13Pic,
    separator14Pic,
]
const randomGenerator = new RandomGenerator()
const Separator = ({ index }: { index?: number }) => {
    return (
        <div className={styles.separator}>
            <Image
                src={
                    pics[
                        index != undefined
                            ? index
                            : Math.floor(randomGenerator.random() * pics.length)
                    ]
                }
                alt="tree"
            />
        </div>
    )
}

export default Separator
