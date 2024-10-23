import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <main>
      <div className='flex h-[95vh] w-full place-content-center items-center'>
        <div className='justify-center font-sys text-6xl md:text-8xl font-extrabold tracking-tight'>
          <p className='pb-[5px] bg-gradient-to-br from-teal-950 to-cyan-500 inline-block text-transparent bg-clip-text'>
            <a
              className='hover:text-stone-900 active:text-stone-900'
              target='_blank'
              href='https://www.aedin.com/in/sabler'
              aria-label="LinkedIn - See what I've been up to professionally"
            >
              LinkedIn &
            </a>
            <br />
            <a
              className='hover:text-stone-900 active:text-stone-900'
              target='_blank'
              href='https://www.goodreads.com/user/show/128718362-sabler'
              aria-label="Goodreads - See what I've been reading"
            >
              Goodreads &
            </a>

            <br />
            <a
              className='hover:text-stone-900 active:text-stone-900'
              target='_blank'
              href='https://letterboxd.com/sabler/'
              aria-label="Letterboxd - See what movies I've been watching"
            >
              Letterboxd &
            </a>

            <br />
            <a
              className='hover:text-stone-900 active:text-stone-900'
              target='_blank'
              href='https://github.com/sabler'
              aria-label="Github - See what I've been coding"
            >
              Github
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Home;