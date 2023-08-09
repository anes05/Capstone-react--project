import React from 'react';
import './Main.css'
import restauranfood from './Assets/restauranfood.jpg'
import greeksalad from './Assets/greek-salad.jpg'
import Bruchetta from './Assets/Bruchetta.png'
import lemondessert from './Assets/lemon dessert.jpg'




const Main = () => {
  return (
    <div className ="main">
      <div className="hero">
        <section className="card">
        <h1>Little Limon</h1>
        <h2>chicago</h2>
        <p>We are a family owned Mediterranien restauran, focused on traditional recipes served with a moderne twist</p>
        <button>Reserve a table</button>
        </section>
        <section className="restaurantfood">
        <img src={restauranfood} alt ="restauranfood" className='restauranfood-img'/>
      </section>
      </div>
      <div className="highlights">
        <section className="Title-high">
          <h1>THIS WEEK SPECIALS !!!!</h1>
          <button>Online Menu</button>
        </section>
        <div className="cards">
          <section className="card">
            <img src ={greeksalad} alt ="greek salad"/>
            <article className ="meal">
              <h3>Greek salad</h3>
              <p>$12.99</p>

            </article>
            <article className="descriptive" >
              <p>Because the vegetables are in their prime, this Greek salad recipe is flavorful and refreshing with just a few ingredients.</p>
              <button>Order a delivery</button>
            </article>

          </section>
          <section className="card">
            <img src ={lemondessert} alt ="lemondessert"/>
            <article className ="meal">
              <h3>lemon dessert</h3>
              <p>$12.99</p>

            </article>
            <article className="descriptive" >
              <p>Because the vegetables are in their prime, this Greek salad recipe is flavorful and refreshing with just a few ingredients.</p>
              <button>Order a delivery</button>
            </article>

          </section>
          <section className="card">
            <img src ={Bruchetta} alt ="Bruchetta"/>
            <article className ="meal">
              <h3>Bruchetta</h3>
              <p>$12.99</p>

            </article>
            <article className="descriptive" >
              <p>Because the vegetables are in their prime, this Greek salad recipe is flavorful and refreshing with just a few ingredients.</p>
              <button>Order a delivery</button>
            </article>

          </section>
        </div>

      </div>
    </div>
  )
};

export default Main;