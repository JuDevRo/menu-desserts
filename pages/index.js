import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import logo from '../assets/bsas.png'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.title}>
          <Image 
            src={logo}
            className={styles.first} 
            width={70}
            height={70}
          />
          <h1>Postres</h1>
          <h2>Desserts</h2>
        </div>
        <div className={styles.dessertcontainer}>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h2>Flan Casero</h2>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h2>Tiramisu</h2>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h2>Cheescake</h2>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h2>Helado 2 Bochas</h2>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h2>Coulant</h2>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h2>Panqueque Clasico</h2>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h2>Torta Balcarse</h2>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h2>Brownie Chocolate</h2>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h2>Sorbete 2 Bolas</h2>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h2>Tabla de Quesos</h2>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h2>Macedonia</h2>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h2>Lemon Pie</h2>
          </div>
        </div>
        <div className={styles.end}>
          <Image 
            src={logo} 
            width={70}
            height={70}
          />
        </div>
      </div>
  )
}
