import Head from 'next/head';
import { Button } from '@material-ui/core';
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export async function getStaticProps() {
  console.log("Get static props");
  const res = await fetch ('http://openlibrary.org/search.json?q=the+lord+of+the+rings', {
    method: 'GET',
    headers: {
      "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
      Accept: "application/json; charset=UTF-8",
    }    
  });
  const data = await res.json();
  
  if (!data) {
      return {
          notFound: true
      }
  }
  return {
    props: { data },
  }
}

export default function Home({data}) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <List component="nav" aria-label="main mailbox folders">
          {data.docs.map((book)=>
            <ListItem button>
              <ListItemText primary={book.title} />
            </ListItem>
          )}
        </List>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`

        @media (max-width: 600px) {

        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}