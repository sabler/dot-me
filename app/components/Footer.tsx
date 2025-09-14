const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear();

    return (
      <>
        <footer className='flex w-full place-content-center text-center text-xs items-center'>
          &copy; 2023-{currentYear} rob sable <br />
          Made with ❤️ on planet earth
        </footer>
      </>
    );
  }
  
  export default Footer;