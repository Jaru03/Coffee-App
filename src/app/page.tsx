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
          <ul className="navbar__list flex gap-10">
            <input className="bg-[#e2e2e2] px-4 py-1 rounded-sm" type="text" placeholder="Tell us what you need" />
            <li className="navbar__item">Home</li>
            <li className="navbar__item">Gift</li>
            <li className="navbar__item">Order</li>
            <li className="navbar__item">Pay</li>
            <li className="navbar__item">Store</li>
            <img className="navbar__item--icon" src="" alt="" />
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
        <section className="services">
          <h2>Handvrafted Curations</h2>
          <ul>
            <li>
              <img src="" alt="" />
              <p>Bestseller</p>
            </li>
            <li>
              <img src="" alt="" />
              <p>Drinks</p>
            </li>
            <li>
              <img src="" alt="" />
              <p>Food</p>
            </li>
            <li>
              <img src="" alt="" />
              <p>Marchandise</p>
            </li>
            <li>
              <img src="" alt="" />
              <p>Coffee At Home</p>
            </li>
          </ul>
        </section>
        <section className="recomendations">
          <h2>Barista Recommends</h2>
          <div>
            <CoffeRecomendation />
            <CoffeRecomendation />
            <CoffeRecomendation />
            <CoffeRecomendation />
            <CoffeRecomendation />
          </div>
          <h2>Learn more about the world of coffee</h2>
        </section>
        <section className="learMore">
          <button>Coffee Culture</button>
          <h2>How Coffee Stirred Revels & Rebels</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            itaque consectetur deserunt exercitationem id iure perspiciatis
            voluptate, quibusdam distinctio tempore aut voluptas recusandae
            ipsum non accusantium, dolor porro aliquam laborum.
          </p>
          <button>Learn More</button>
        </section>
      </main>
      <footer className="footer">
        <div className="line"></div>

        <section>
          <img src="" alt="" />

          <article>
            <h3>About Us</h3>
            <p>Our Heritage</p>
            <p>Our Company</p>
            <p>Coffeehouse</p>
          </article>
          <article>
            <h3>Responsibility</h3>
            <p>Community</p>
            <p>Ethical Sourcing</p>
            <p>Environment</p>
            <p>Diversity</p>
          </article>
          <article>
            <h3>Quick Links</h3>
            <p>Careers</p>
            <p>Seasson's Gifting</p>
            <p>FAQS</p>
            <p>Customer Service</p>
            <p>Delivery</p>
          </article>
          <article>
            <h3 className="uppercase">Social Media</h3>
            <i>Twitter</i>
            <i>Instagram</i>
            <i>Facebook</i>
          </article>
          <article>
            <h3>Downloads</h3>
            <i>PlayStore</i>
            <i>AppStore</i>
          </article>
        </section>
        <div className="line"></div>
        <section>
          <ul>
            <li>Web Accessibility</li>
            <li>Privacity</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
          <p>© 2022 Starbucks Coffee Company. All rigths reseved.</p>
        </section>
      </footer>
    </div>
  );
}
