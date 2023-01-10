import Head from "next/head";
import Router from "next/router";
import axios from "axios";

export default function Home() {
  const handleLogout = async () => {
    await axios.delete("http://localhost:5000/api/auth/sessions", {
      withCredentials: true,
    });

    Router.push("/login");
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="This is a login template next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>You are currently logged in</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
