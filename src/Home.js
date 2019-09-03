import React from 'react';
import styles from './Home.module.css';
import cnames from 'classnames';
import desktop from './tabs-desktop.png';
import mobile from './tabs-mobile.png';
import katherineImg from './katherine.png';
import ericImg from './eric.png';
import jessicaImg from './jessica.png';
import serjioImg from './serjio.png';
import youImg from './you.png';

const katherine = { img: katherineImg, name: 'Katherine', role: 'Designer' };
const eric = { img: ericImg, name: 'Eric', role: 'Designer' };
const jessica = { img: jessicaImg, name: 'Jessica', role: 'Engineer - Design System' };
const serjio = { img: serjioImg, name: 'Serjio', role: 'Engineer' };
const you = { img: youImg, name: 'You', role: 'Engineer - Design System' };

const Speech = ({ children, reverse, comment, character }) => (
  <div
    className={
      cnames(
        styles.speech,
        {
          [styles.reverse]: reverse,
          [styles.comment]: comment,
        },
      )
    }
  >
    <div className={styles.speechCharacter}>
      <img src={character.img} alt={`Character illustration for: ${character.name}`} />
    </div>
    <div className={styles.speechBody}>
      <article className={styles.speechBubble}>
        <div className={styles.speechHeader}>
          <span className={styles.speechNameMobile}>
            <strong>{ character.name }</strong> - { character.role }
          </span>
        </div>
        <div className={styles.speechContent}>
          { children }
        </div>
      </article>
      <div className={styles.speechName}>
        <strong>{ character.name }</strong> - { character.role }
      </div>
    </div>
  </div>
);

const Home = () => (
  <React.Fragment>
    <section className={styles.section}>
      <h1>Redbubble Design System - Frontend Engineer</h1>
      <p className={styles.text}>
        Welcome to the "Get to know you" exercise for the role of <strong>Frontend Engineer</strong> in Redbubble's <strong>Design System</strong> team.
      </p>

      <p className={styles.text}>
        Below, you'll find a typical conversation that our Design System team would have when a new component is proposed.
      </p>
    </section>

    <section className={styles.section}>
      <h2>
        <span role="img" aria-label="Speech Bubble Icon">💬</span> Background Context
      </h2>

      <p className={styles.text}>
        Have a read to catch up on the context:
      </p>

      <div className={styles.conversation}>
        <Speech character={katherine}>
          <h1>Summary</h1>

          <p>
            We'd like some help creating a tabbed card component for showing small sets of information to users on demand.
          </p>

          <h2>Motivation</h2>

          <p>
            After doing some customer interviews, we noticed that many users found the amount of information on the product page a little overwhelming.
          </p>

          <p>
            We'd like to use a little "tabbed card" for this information instead so users only see one section at a time.
          </p>

          <h2>Design</h2>

          <p>
            I've attached some designs below for Desktop and a rough skeleton of how it might look on Mobile. I'm happy to leave the rest up to you folks.
          </p>

          <h2>API Examples</h2>

          <p>
            I don't quite know yet, but it'd be nice if we can make it flexible so we can use it for other sections not just the product information.
          </p>

          <p>
            We'll probably want to be able to have it open on a different tab by default depending on where the user is coming from, if that helps.
          </p>

          <h2>
            Attachments
          </h2>

          <div className={styles.attachments}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={desktop}
              style={{ backgroundImage: `url(${desktop})` }}
            >
              <span>Desktop</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={mobile}
              style={{ backgroundImage: `url(${mobile})` }}
            >
              <span>Mobile</span>
            </a>
          </div>
        </Speech>

        <Speech reverse character={eric} comment>
          <p>
            Looks good Kat!
          </p>

          <p>
            Remember we'll have to give this an accessibility once-over too.
          </p>

          <p>
            I wonder, will a tab ever be there but be empty or disabled? What will happen in that case?
          </p>
        </Speech>

        <Speech character={jessica} comment>
          <p>
            I like the extra action at the bottom. Will all tabs have one and I guess they'll be different for each tab?
          </p>

          <p>
            I've seen some similar tabs in the Artist section, they're not connected to a Card like this though but it's something to think about.
          </p>

          <p>
            Am I right in assuming that the content of each tab will all be provided by the consuming app?
          </p>
        </Speech>

        <Speech reverse character={serjio}>
          <p>
            I'm interested in what happens if we have too many tabs to fit across? Or is that just a guideline that we put in the documentation?
          </p>

          <p>
            Anyway, I think there's enough here for the Design System team to have a go at implementing a first pass of this.
          </p>
        </Speech>

        <Speech character={you}>
          ...
        </Speech>
      </div>
    </section>

    <section className={styles.section}>
      <h2>
        <span role="img" aria-label="Laptop Icon">💻</span> Next steps...
      </h2>

      <p className={styles.text}>
        <strong>Note: </strong>
        <em>For the sake of this exercise, it is ok to make assumptions about any questions you might have to make sure that you can proceed.</em>
      </p>

      <br />

      <p className={styles.text}>
        <strong>Step 1: Join in the discussion</strong>
      </p>

      <p className={styles.text}>
        Given the above context, write a response as if you were participating in the discussion.
      </p>

      <p className={styles.text}>
        Share your own thoughts and opinions on what would make this a high quality, re-usable Design System component.
      </p>

      <p className={styles.text}>
        If you have any questions, about the component features or design - include them in your response.
      </p>

      <p className={styles.text}>
        Just a few sentences is enough :)
      </p>

      <br />

      <p className={styles.text}>
        <strong>Step 2: Draft the component</strong>
      </p>

      <p className={styles.text}>
        Now that you've chimed in, have a go at <strong>coding</strong> the described component.
      </p>

      <p className={styles.text}>
        Some tips:
      </p>

      <ul className={styles.list}>
        <li>Don't spend more than 2 hours on this exercise, we know your time is valuable <span aria-hidden="true">♥️</span></li>
        <li>Your code <strong>does not need to be complete</strong> or production ready, just a good start that demonstrates your thinking and coding.</li>
        <li>You don't have all the answers, so make some assumptions, try some things out - it's ok to make mistakes.</li>
        <li>Don't sweat the visual details too much.</li>
        <li>Code the way you like to code</li>
        <li>We'll pair on your code later on in the interview process</li>
      </ul>

      <p className={styles.text}>
        You can find setup instructions and contribution guidelines for the project{' '}
        <a
          target="blank"
          rel="noopener noreferrer"
          aria-label="Go the the project setup instructions on GitHub.com"
          href="https://github.com/redbubble/react-get-to-know-you"
        >
          here
        </a>
      </p>
    </section>

    <section className={styles.section}>
      <h2>
        <span role="img" aria-label="Postbox Icon">📮</span> When you're done
      </h2>

      <p className={styles.text}>
        When you're ready, you can submit your code and response to us via the link in the same email where you found these instructions.
      </p>

      <p className={styles.text}>
        <strong><span role="img" aria-label="Face with finger saying sshh icon">🤫</span> Anonymity</strong>
      </p>

      <p className={styles.text}>
        We'll evaluate you most fairly if only our talent team knows whose submission is being evaluated.
      </p>

      <p className={styles.text}>
        Please don't put your name or other identifying information in your submission.
      </p>
    </section>

    <section className={styles.section}>
      <h2>
        <span role="img" aria-label="Hears icon">💕</span> Have fun
      </h2>

      <p className={styles.text}>
        This is the most important bit.
      </p>

      <p className={styles.text}>
        We love what we do and are excited to come to work each day to build great components for our users.
      </p>

      <p className={styles.text}>
        We know this sort of thing can take lot of time out of your busy schedule, so we ask that you do only what you're comfortable with and nothing more.
      </p>

      <p className={styles.text}>
        We hope you have fun working on this, don't take it too seriously - mostly we just want to get an idea of how you think and approach problems.
      </p>
    </section>
  </React.Fragment>
);

Home.displayName = "Home";

export default Home;
