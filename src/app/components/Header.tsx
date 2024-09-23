import Image from 'next/image'

interface Props{
    button: boolean,
    handleButtonClose: () => void
}

const Header = ({button, handleButtonClose}:Props) => {

  return (
    <header className={`header navbar__status--${button} w-screen h-28 flex items-end pb-5 justify-between z-10 fixed bg-white`}>
        <nav className="navbar relative flex items-center justify-between max-w-[1000px] mx-auto">
          <Image
            src={"/starbucks.png"}
            width={35}
            height={35}
            alt="logo"
            className="mr-[10%]"
          />
          <ul className="navbar__list flex gap-10 font-medium">
            <input className="bg-[#e2e2e2] px-4 py-1 rounded-sm font-normal" type="text" placeholder="Tell us what you need" />
            <li className="navbar__item">Home</li>
            <li className="navbar__item">Gift</li>
            <li className="navbar__item">Order</li>
            <li className="navbar__item">Pay</li>
            <li className="navbar__item">Store</li>
            
          </ul>
          <p onClick={handleButtonClose} className={`button_close absolute top-[-48px] right-4`}>X</p>
          
        </nav>
      </header>
  )
}

export default Header