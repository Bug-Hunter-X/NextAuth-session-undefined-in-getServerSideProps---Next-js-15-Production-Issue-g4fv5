// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      {session ? (
        <p>Logged in as {session.user.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
