import Link from 'next/link';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <div className='flex h-[95vh] w-full place-content-center items-center'>
        <div className='justify-center font-sys text-6xl md:text-8xl font-extrabold tracking-tight'>
          <p className='pb-[5px] bg-gradient-to-br from-teal-950 to-cyan-500 inline-block text-transparent bg-clip-text'>
            <Link
              className='hover:text-stone-900 active:text-stone-900'
              target='_blank'
              href='https://www.linkedin.com/in/sabler'
              aria-label='Connect with me on LinkedIn'
            >
              LinkedIn &
            </Link>
            <br />
            <Link
              className='hover:text-stone-900 active:text-stone-900'
              target='_blank'
              href='https://www.goodreads.com/user/show/128718362-sabler'
              aria-label="See what I've been reading"
            >
              Goodreads &
            </Link>

            <br />
            <Link
              className='hover:text-stone-900 active:text-stone-900'
              target='_blank'
              href='https://letterboxd.com/sabler/'
              aria-label='Judge me gently on the movies I like'
            >
              Letterboxd &
            </Link>

            <br />
            <Link
              className='hover:text-stone-900 active:text-stone-900'
              target='_blank'
              href='https://www.ign.com/playlist/xsarien/library/beat'
              aria-label="Games I've bothered finishing"
            >
              Playlist
            </Link>
          </p>
        </div>
      </div>

      
    </main>
  );
}
