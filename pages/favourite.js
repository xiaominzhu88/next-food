import React from 'react';
import Header from '../Components/Header';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #fe6bfd 15%, #3F51B5 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgb(204 192 206)',
    color: 'white',
    height: 28,
    padding: '0 30px',
    margin: '0.5em',
    fontSize: '0.8em',
    fontFamily: 'monospace',
  },
});
export default function Favourite() {
  const classes = useStyles();

  let favoMovies = [];
  let favoTvs = [];
  let tips = [];

  if (typeof window !== 'undefined') {
    favoMovies = JSON.parse(window.localStorage.getItem('favoMovies')) || [];
    favoTvs = JSON.parse(window.localStorage.getItem('favoTvs')) || [];
    tips = JSON.parse(window.localStorage.getItem('tips')) || [];
  }

  return (
    <div className="favo-page">
      <Header />
      <h2>Favourite</h2>

      <div className="favo-container">
        <div>
          <h3>Movies: </h3>
          {favoMovies.length === 0 ? (
            <p>No saved favourite</p>
          ) : (
            <div>
              <ul>
                {favoMovies.map((movie, i) => {
                  return (
                    <li key={i}>
                      <span
                        role="img"
                        aria-label="emoji blue heart"
                        style={{ marginRight: '1em' }}
                      >
                        💙
                      </span>
                      {movie}
                    </li>
                  );
                })}
              </ul>
              <Button
                className={classes.root}
                onClick={() => {
                  window.localStorage.removeItem('favoMovies');
                  favoMovies.length = 0;
                  window.location.reload();
                }}
                style={{
                  display: favoMovies.length !== 0 ? 'block' : 'none',
                }}
              >
                Remove Movies
              </Button>
            </div>
          )}

          <h3>TVs: </h3>
          <ul>
            {favoTvs.length === 0 ? (
              <p>No saved favourite</p>
            ) : (
              <div>
                <ul>
                  {favoTvs.map((tv, i) => {
                    return (
                      <div key={i}>
                        <li key={tv}>
                          <span
                            role="img"
                            aria-label="emoji violet heart"
                            style={{ marginRight: '1em' }}
                          >
                            💜
                          </span>
                          {tv}
                        </li>
                      </div>
                    );
                  })}
                </ul>
                <Button
                  className={classes.root}
                  onClick={() => {
                    window.localStorage.removeItem('favoTvs');
                    favoTvs.length = 0;
                    window.location.reload();
                  }}
                  style={{
                    display: favoTvs.length !== 0 ? 'block' : 'none',
                  }}
                >
                  Remove Tvs
                </Button>
              </div>
            )}
          </ul>

          <h3>Tips: </h3>
          <ul>
            {tips.length === 0 ? (
              <p>No saved favourite</p>
            ) : (
              <div>
                <ul>
                  {tips.map((tip) => {
                    return (
                      <li key={tip}>
                        <span
                          role="img"
                          aria-label="emoji yellow heart"
                          style={{ marginRight: '1em' }}
                        >
                          💛
                        </span>
                        {tip}
                      </li>
                    );
                  })}
                </ul>
                <Button
                  className={classes.root}
                  onClick={() => {
                    window.localStorage.removeItem('tips');
                    tips.length = 0;
                    window.location.reload();
                  }}
                  style={{
                    display: tips.length !== 0 ? 'block' : 'none',
                  }}
                >
                  Remove Tips
                </Button>
              </div>
            )}
          </ul>
        </div>

        <div
          className="linkButtons"
          style={{ display: 'flex', justifyContent: 'start', margin: '3em' }}
        >
          <Button className={classes.root} onClick={() => Router.push('/')}>
            To Movie
          </Button>
          <Button className={classes.root} onClick={() => Router.push('/tv')}>
            To TV{' '}
          </Button>
          <Button className={classes.root} onClick={() => Router.push('/tips')}>
            To Tips&Ideas{' '}
          </Button>
          <Button
            className={classes.root}
            onClick={() => Router.push('/actor')}
          >
            To Actor
          </Button>
        </div>
      </div>

      <style jsx>{`
        .favo-page {
          color: #fff;
          font-family: monospace;
        }
        h2 {
          text-align: center;
          color: #f900ff;
          font-size: 2em;
          background-color: #020411;
          height: 2em;
          margin: 0;
          padding: 0.5em;
          border-bottom: 3px gray solid;
        }
        h3 {
          color: #f900ff;
        }
        li {
          list-style: none;
          color: #c5cace;
        }
        .favo-container {
          padding: 2em;
          background-image: url('/favoImage.jpg');
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
