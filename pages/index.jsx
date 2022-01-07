import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ReactJS with react-bootstrap 5</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className='hero p-2'>
        hero component
      </div>

      <footer className="cntr-footer">
        <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
        </a>
      </footer>
    </div >

  )
}
