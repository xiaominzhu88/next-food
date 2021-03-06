import React from 'react';
import Head from 'next/head';
import Header from '../../Components/Header';
import Router from 'next/router';
import Button from '@material-ui/core/Button';

export default function Description({ useInfo }) {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="description about viewport" content=" description about" />
      </Head>
      <Header />
      <main>
        <h1>{useInfo.title}</h1>
        {/* <h3>{useInfo.subtitle}</h3> */}

        <p>{useInfo.text}</p>
        <h3>
          View short video below about this page <br />
          <span role="img" aria-label="emoji">
            ⏬
          </span>
        </h3>
        <video
          height="400px"
          width="650px"
          style={{ margin: '2em' }}
          controls
          autostart="true"
          autoPlay
          muted
          src={useInfo.videosrc}
        />
      </main>

      <div className="back" style={{ textAlign: 'center', padding: '1em' }}>
        <Button
          variant="contained"
          color="inherit"
          style={{ color: 'red', margin: '1em auto' }}
          onClick={() => Router.push('/')}
        >
          Back{' '}
          <span role="img" aria-label="emoji" style={{ marginLeft: '0.5em' }}>
            💫
          </span>
        </Button>
      </div>
      <style jsx>{`
        main {
          text-align: center;
          margin: 1.5em auto;
          background-image: url('/mainImage.jpg');
          background-position: 50% 50%;
          background-size: cover;
          margin: 0;
          padding: 1.5em;
          font-family: monospace;
        }
        h1 {
          color: #e44494;
          text-shadow: 2px 3px 6px #2196f3;
        }
        p {
          width: 50vw;
          margin: 3em auto;
          color: #e44494;
          letter-spacing: 0.1em;
          line-height: 1.5em;
          text-align: left;
          text-shadow: 2px 3px 6px #2196f3;
        }
        h3 {
          text-align: center;
          color: #2196f3;
          margin: 2em;
          text-decoration-line: overline;
        }
        .back {
          background-color: #346e9c;
        }
        @media (max-width: 700px) {
          video {
            height: 150px;
            width: 270px;
            margin: 1em;
          }
          h1 {
            font-size: 1.5em;
          }
          p {
            margin: 1em auto;
            font-size: 1em;
          }
          h3 {
            background-color: #18465c78;
            color: #fff;
            padding: 10px;
            font-size: 1em;
          }
          @media (max-width: 400px) {
            video {
              height: 130px;
              width: 220px;
            }
          }
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getDescriptionById } = await import('../../db.js');
  const useInfo = await getDescriptionById(context.params.id);

  //console.log('PARAMS', useInfo);

  return {
    props: {
      useInfo: useInfo === null ? {} : useInfo[0],
    },
  };
}
