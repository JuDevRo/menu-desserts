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
            <h3>Flan Casero</h3>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h3>Tiramisu</h3>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h3>Cheescake</h3>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h3>Helado 2 Bochas</h3>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h3>Coulant</h3>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h3>Panqueque Clasico</h3>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h3>Torta Balcarse</h3>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h3>Brownie Chocolate</h3>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h3>Sorbete 2 Bolas</h3>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h3>Tabla de Quesos</h3>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h3>Macedonia</h3>
          </div>
          <div className={styles.flan}>
            <Image 
              className={styles.img}
              src={logo} 
              width={40}
              height={40}
            />
            <h3>Lemon Pie</h3>
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
