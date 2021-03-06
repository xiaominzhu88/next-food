import React from 'react';
import Head from 'next/head';
import Header from '../Components/Header';
import Link from 'next/link';
import Footer from '../Components/Footer';
export default function About({ description }) {
  return (
    <>
      <div className="About">
        <Head>
          <title>Movie Next</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta
            name="descriptions about all the pages"
            content="view descriptions video about all the pages"
          />

          <link rel="icon" href="/favicon.jpg" />
        </Head>
        <Header />

        <div>
          <h2>
            Use your own words, or search with titles, <br />
            actors, names, years etc. <br />
            We find movies for you <br />
            ~~ 🎞 ~~
          </h2>
        </div>
        <div className="container all-box">
          <div className="box">
            <ul>
              {description.map((item, i) => {
                return (
                  <li key={i} className={item.className}>
                    <h3>{item.name}</h3>
                    <h3>{item.description}</h3>

                    <Link href="/about/[id]" as={`/about/${item.id}`}>
                      <a>
                        <img
                          src={item.src}
                          alt="description"
                          width="500px"
                          height="300px"
                        />
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
      <style jsx>{`
        .About {
          background-color: #487eb0;
        }
        ul {
          padding: 10px;
          list-style: none;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 20px;
        }
        li {
          padding: 10px;
          cursor: pointer;
          text-align: center;
          border-radius: 1px;
          transition: 0.5s;
          font-family: monospace;
          color: #fff;
          border-radius: 5px;
          box-shadow: 0 0 8px 3px #353b48;
        }
        li:nth-of-type(1) {
          grid-row: span 1;
        }

        li:nth-of-type(2) {
          grid-column: span 2;
        }
        li:nth-of-type(3) {
          grid-column: span 2;
        }
        li:nth-of-type(4) {
          grid-row: span 1;
        }
        li:nth-of-type(5) {
          grid-column: span 3;
        }

        li:hover {
          background-color: #00bcd4;
          box-shadow: 0 0 12px 5px #353b48;
        }
        h2 {
          text-align: center;
          color: #db71cafc;
          text-shadow: 0px 4px 8px #2c2929;
          margin: 2em auto;
          line-height: 2em;
          letter-spacing: 0.2em;
        }
        @media (max-width: 700px) {
          img {
            width: 60vw;
            height: 25vh;
          }

          li {
            padding: 0.8em;
            margin: 0.8em;
          }
        }
        @media (max-width: 1210px) {
          ul {
            display: block;
          }
          h2 {
            font-size: 1em;
            padding: 1em;
          }
          h3 {
            font-size: 0.9em;
          }
        }
      `}</style>
    </>
  );
}
export async function getServerSideProps(context) {
  const { getDescriptions } = await import('../db.js');
  const description = getDescriptions();

  //console.log('DESCRIPTION: ', description);

  return {
    props: {
      description: description === null ? {} : description,
    },
  };
}
