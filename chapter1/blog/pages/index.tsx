import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  let subtitle = 'アウトプットしていくページ'
  let test = (
    <>
      <header>HEADER</header>
      <h1 className='hero' style={{color:'#c00', fontSize: '80px'}}>CUBE</h1>
      <hr />
      <p>{subtitle}</p>
      <footer>FOOTER</footer>
    </>
  )
  return test
}
