import React, { useState, useEffect } from "react";
import ThePage from "./pages/ThePage";
import LoadingSpinner from "./components/Loading"; // Import the spinner
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <ApolloProvider client={client}>
      <ThePage />
    </ApolloProvider>
  );
}

export default App;
