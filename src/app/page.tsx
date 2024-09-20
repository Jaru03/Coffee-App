import Image from "next/image";
import CoffeRecomendation from "./components/CoffeRecomendation";

export default function Home() {
  return (
    <div>
      <header className="header w-full h-28 flex items-end pb-5 justify-between z-10 fixed bg-white">
        <nav className="navbar flex items-center justify-between max-w-[1000px] mx-auto">
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
        </nav>
      </header>
      <main className="main">
        <section className="hero h-[100vh] flex flex-col items-start pl-[20vw] justify-center">
          <div className="flex flex-col items-start gap-10">
            <main>
              <h1 className="text-7xl font-bold uppercase text-white">Handcrafted</h1>
              <p className="text-white text-lg">
                Choose from our wide range of handcrafted coffees
              </p>
            </main>
            <footer>
              <button className="bg-[#006437] opacity-[.9] px-6 py-2 rounded-md font-semibold text-white">Order Now</button>
            </footer>
          </div>
        </section>
        <section className="services mt-14 h-[350px]">
          <div className="services__container h-full">

            <h2 className="self-center ml-[18vw] font-semibold text-2xl w-[250px] h-[20px] text-white ">Handvrafted Curations</h2>
            <ul className="justify-self-center flex gap-14 text-white font-medium">
              <li className="flex flex-col items-center">
                <div className="services__item services__item--1">

                </div>

                <p>Bestseller</p>
              </li>
              <li className="flex flex-col items-center">
                <div className="services__item services__item--2">

                </div>

                <p>Drinks</p>
              </li>
              <li className="flex flex-col items-center">
                <div className="services__item services__item--3">

                </div>

                <p>Food</p>
              </li>
              <li className="flex flex-col items-center">
                <div className="services__item services__item--4">

                </div>

                <p>Marchandise</p>
              </li>
              <li className="flex flex-col items-center">
                <div className="services__item services__item--5">

                </div>

                <p>Coffee At Home</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="recomendations h-[500px] flex justify-center">
          <div className="w-max-[800px] recomendations__container text-[#1e3932]">

            <h2 className="recomendations__title font-semibold text-2xl text-[#1e3932]">Barista Recommends</h2>
            <div className="flex justify-center gap-2">
              <CoffeRecomendation image="vanilla_latte.jpg" info="Bebida" price="20.02" title="Vanilla Latte" />
              <CoffeRecomendation image="salted_caramel_cold_brew.jpg" info="Bebida" price="15.10" title="Salted Caramel Cold" />
              <CoffeRecomendation image="pumpkin_spice_latte.jpg" info="Bebida" price="10.01" title="Pumpkin Spice Latte" />
              <CoffeRecomendation image="iced_white_chocolate_mocha.jpg" info="Bebida" price="5.50" title="Iced White Chocolate" />
            </div>
            <h2 className="font-semibold text-2xl text-[#1e3932]">Learn more about the world of coffee</h2>
          </div>
        </section>
        <section className="learnMore h-[400px] flex justify-center">
          <div className="flex flex-col items-center justify-evenly h-full max-w-[700px] text-white">


            <button className="bg-white text-xs px-8 py-2 rounded-md text-[#1e3932] font-semibold">Coffee Culture</button>
            <div className="flex flex-col justify-center items-center gap-4">

              <h2 className="text-2xl font-semibold">How Coffee Stirred Revels & Rebels</h2>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
                itaque consectetur deserunt exercitationem id iure perspiciatis
                voluptate, quibusdam distinctio tempore aut voluptas recusandae
                ipsum non accusantium, dolor porro aliquam laborum.
              </p>
            </div>
            <button className="bg-white text-xs px-8 py-2 rounded-md text-[#1e3932] font-semibold">Learn More</button>
          </div>
        </section>
      </main>
      <footer className="footer bg-[#1e3932] text-white ">
        <div className="footer__container flex flex-col items-center w-max-[1000px]">

          <div className="line border border-b-1 border-t-0 border-x-0 border-white py-4 w-full max-w-[1000px]"></div>

          <section className="footer__info grid grid-cols-5 justify-items-center max-w-[1000px] w-full pt-16">
            <Image
              src={"/starbucks.png"}
              width={55}
              height={55}
              alt="logo"
              className=""
            />

            <article className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg">About Us</h3>
              <p>Our Heritage</p>
              <p>Our Company</p>
              <p>Coffeehouse</p>
            </article>
            <article className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg">Responsibility</h3>
              <p>Community</p>
              <p>Ethical Sourcing</p>
              <p>Environment</p>
              <p>Diversity</p>
            </article>
            <article className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <p>Careers</p>
              <p>Seasson`s Gifting</p>
              <p>FAQS</p>
              <p>Customer Service</p>
              <p>Delivery</p>
            </article>
            <div className="grid grid-rows-2">
              <article>
                <h3 className="uppercase font-semibold text-lg">Social Media</h3>
                <div className="flex justify-between">
                  <i>X</i>
                  <i>Ig</i>
                  <i>Fb</i>
                </div>
              </article>
              <article>
                <h3 className="font-semibold text-lg">Downloads</h3>
                <div className="flex flex-col">

                  <Image
                  src={'/play-store.png'}
                  alt=""
                  width={125}
                  height={100}
                  />
                  <Image
                  src={'/app-stoore.png'}
                  alt=""
                  width={150}
                  height={100}
                  />
                </div>
              </article>
            </div>
          </section>
          <div className="line border border-b-1 border-t-0 border-x-0 border-white py-4 w-full max-w-[1000px]"></div>
          <section className="footer__section py-10 flex justify-between text-sm w-full max-w-[1000px]">
            <ul className="footer__ul flex gap-5">
              <li>Web Accessibility</li>
              <li>Privacity</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
            </ul>
            <p>© 2022 Starbucks Coffee Company. All rigths reseved.</p>
          </section>
        </div>
      </footer>
    </div>
  );
}
