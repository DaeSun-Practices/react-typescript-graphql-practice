//react
import React from 'react';

//backend
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// css design
import './App.css';

const client = new ApolloClient({
    uri : "http://localhost:4000",
    cache : new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                test
            </div>
        </ApolloProvider>
    );
}

export default App;
