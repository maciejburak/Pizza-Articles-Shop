import React from 'react';
import PropTypes from 'prop-types';
import styles from './Recipe.module.scss';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Footer from '../../layout/Footer/Footer';
import TopBar from '../../common/TopBar/TopBar.js';
import OrderNavigation from '../../common/OrderNavigation/OrderNavigationContainer.js';

function Recipe(props) {
  return (
    <div className={styles.recipe}>
      <SectionHeader customHeader="https://pyzamadeinpoland.pl/wp-content/uploads/2018/06/napoli-1-7.jpg" />
      <TopBar open={true}  rwd={true}/>
      <div className={styles.information}>
        <div className={styles.description}>
          <h2>What is it?</h2>
          <p>
            The International Regulation is a set of codified rules, orally
            transmitted by neapolitan’s generation of pizzamaker, passed down
            from father to son. In 1984 Antonio Pace and Lello Surace reunited
            the most important and famous pizzamaker of the time to write down
            the fundamental rules in order to recognize and differentiate the
            True Neapolitan Pizza from the other type of pizza, giving it the
            maximum dignity. Since then, the International Regulation has been
            the heart of the Associazione Verace Pizza Napoletana, which protect
            the tradition of this old recipe and spead its secrets, defending
            its uniqueness and peculiarity.
          </p>
        </div>
        <div className={styles.photo}>
          <img
            src="https://www.akcrust.com/hubfs/Blog_Images/Frozen%20Dough%20Balls.jpg"
            alt="pizza dought balls"
          />
        </div>
      </div>
      <div className={styles.firstStep}>
        <div className={styles.photo}>
          <img
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f974a4f5210e336503abf92%2FBaked-tasty-margherita-pizza-in-Traditional-wood-oven-in-Naples-restaurant--Italy-%2F960x0.jpg%3Ffit%3Dscale"
            alt="oven and pizza"
          />
        </div>
        <div className={styles.description}>
          <h2>How to prepare the True Neapolitan Pizza?</h2>
          <p>
            Finally we have the original repice written down by old generation
            of pizzamaker. Let’s analyze the final aspect of the true neapolitan
            pizza after cooking in the wood-fired oven:
          </p>
          <ol>
            <li>The Neapolitan pizza is roundish, with a diameter max 35cm;</li>
            <li>
              The Neapolitan pizza presents a raised edge (the famous
              cornicione), swollen and free from burns, 1-2 cm;
            </li>
            <li>The Neapolitan pizza must be soft and and fragrant</li>
          </ol>
        </div>
      </div>
      <div className={styles.secondStep}>
        <div className={styles.description}>
          <h2>The ingredients</h2>
          <p>
            Now let is move on and analyze the ingredients to prepare the True
            neapolian pizzas dough. The following doses are based on 1 litre
            (1000ml) of water: Water: 1 litre (1000 ml), Salt: 40-60 grams,
            Yeast (based on temperature and humidity): Fresh beer yeast 0.1-3
            grams Mother Yeast 5-20% of flour used Dry yeast 1/3 of fresh yeast
            used (1 gram of dry for 3 grams of fresh), Flour: 1,600/1,800
            (depending on the degree of absorption).
          </p>
        </div>
        <div className={styles.photo}>
          <img
            src="https://weekendatthecottage.com/wp-content/uploads/2019/05/PizzaPartyIdeas6.jpg"
            alt="dought"
          />
        </div>
      </div>
      <div className={styles.thirdStep}>
        <div className={styles.photo}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhjIfi-H5U2qSfAYvjg-jzySEQ091fx2Rd-g&usqp=CAU"
            alt="dought"
          />
        </div>
        <div className={styles.description}>
          <h2>The preparation</h2>
          <p>
            <b>Flour, water, salt and yeast are mixed together,</b> starting
            from the water, making sure that direct contact between salt and
            yeast does not occur for more than 5 minutes, otherwise the salt
            will damage the yeast cells. Pour a litre of water into a mixer,
            dissolve between 40 and 60g of salt, add 10% of the total amount of
            flour, then add yeast. Start the mixer, gradually add the rest of
            the flour until the desider dough consistency is achieved (optimal
            point of the dough). The dough must be worked in the fork mixer,
            spiral, with dipping arms (basket with rounded and rounded corners)
            until a single compact mass is obtained. The quantity of water that
            a flour is able to absorb (hydration) is very important to obtain an
            optimal consistency of the dough.
          </p>
        </div>
      </div>
      <div className={styles.fourthStep}>
        <div className={styles.description}>
          <h2>Fermentation and maturation</h2>
          <p>
            Once extracted from the kneading machine, it is placed on a work
            table in the pizzeria where it is left to rest covered with a damp
            cloth so that the surface cannot become hard, forming a sort of
            crust caused by the evaporation of the humidity released by the
            dough itself. After the time deemed necessary to settle and rest,
            the dough is formed, traditionally by hand. With the help of a
            spatula, a portion of leavened dough is cut from the dough placed on
            the work bench and then given a form of dough. In the Neapolitan
            technique, in the traditional hand-made piece, the dough is shaped
            (staglio) in the form of balls with a technique that recalls the
            preparation of mozzarellas (mozzatura). For Verace Pizza Napoletana
            – (Vera Pizza Napoletana) the dough balls must weigh between 200 and
            280 g, to obtain a pizza with a diameter between 22 - 35 cm. Once
            the loaves are formed, a second leavening takes place in boxes for
            food of variable duration, depending on the temperature and humidity
            of the environment and the absorption of the flour used. Maturation
            consists of a series of biochemical and enzymatic processes that
            split the most complex structures, proteins and starches into
            simpler elements. Recommended levitation time Min 8 – max 24 hours
            (with additional hours of kneading – 4 hours).
          </p>
        </div>
        <div className={styles.photo}>
          <img
            src="https://www.akcrust.com/hubfs/Blog_Images/Frozen%20Dough%20Balls.jpg"
            alt="pizza dought balls"
          />
        </div>
      </div>
      <div className={styles.fifthStep}>
        <div className={styles.photo}>
          <img
            src="https://i.ytimg.com/vi/p2AV375ARXQ/maxresdefault.jpg"
            alt="pizza dought balls"
          />
        </div>
        <div className={styles.description}>
          <h2>Forming the pizza base</h2>
          <p>
            With a motion from the centre outwards, and with the pressure of the
            fingers of both hands on the dough ball, the base is turned over and
            around many times. In doing this the ‘‘pizzaiolo” (pizza maker)’
            forms a disk of dough (disco di pasta). From the centre the
            thickness is no more than 0.25 cm variance ±10% tolerated).
          </p>
        </div>
      </div>
      <div className={styles.sixthStep}>
        <div className={styles.description}>
          <h2>Condiments</h2>
          <p>
            The true Neapolitan pizza must be garnished with ingredients
            preferably from Campania regions. The peeled tomato crusched by hand
            doesn’t have to look too dense but chunky. In case of fresh tomato,
            it has to be chopped in slices. The buffalo mozzarella (chopped in
            slices) or the fior di latte (chopped into strips) have to be spread
            uniformly on the pizza. The grated cheese (if used) has to be spread
            on the pizza with a circular and uniform movement of the hand. The
            fresh basil leaves are just put on the condiments. The extra virgin
            olive oil is poured with a spiral motion.
          </p>
        </div>
        <div className={styles.photo}>
          <img
            src="data:image/jpeg;base64,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"
            alt="pizza making"
          />
        </div>
      </div>
      <div className={styles.seventhStep}>
        <div className={styles.photo}>
          <img
            src="https://media.istockphoto.com/photos/pizza-being-prepared-picture-id1138854050?k=20&m=1138854050&s=612x612&w=0&h=DBho0plEKRRFPMHbVJDP3ExSpA5j_1OQzNDgdoqyO1A="
            alt="pizza making2"
          />
        </div>
        <div className={styles.description}>
          <h2>The cooking</h2>
          <p>
            The cooking must be done exclusively in a wood-fired oven, which has
            reached a temperature between 430-480C°. With these temperatures,
            just insert the pizza for 60-90 seconds. The pizza will cook evenly
            across the entire circumference. Here we have our neapolitan pizza,
            beware of imitations and enjoy your pizza!
          </p>
        </div>
      </div>
      <OrderNavigation/>
      <Footer />
    </div>
  );
}

Recipe.propTypes = {};

export default Recipe;
