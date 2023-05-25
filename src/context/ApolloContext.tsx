import React from 'react';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

const token =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQ2Mzk0MzAsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNDQ3OWw1MTBjMjEwMXoyYWRnMjNuenovbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZGZmY2UxMjQtMzU4Yy00MWFhLWI4YTEtMWFmZWZiNzVkZTFlIiwianRpIjoiY2w0NHBsZmdxMXNsdzAxejg4ZGp0ZWdmbCJ9.aybArBypTzBgz0425A2YSAG741eIYdqpqoDGjU9DW9xz-mzuyvGedbuj-IX7OgvEBEcEbFce-HpGiIQuMuqgDAWabAwMbNdUi_C3UiGH7paVafROMTtJzzhK_4xHKXYQkKOAUJiLK3BrwUFipriaBQKT3FwFM5qjbQEqh8G14VTYzYX-h-yMXVJJ_1sTbQjCEqx6RVuX4PJwq5NEH9_BOjh4RG0rleiOOS3ripUXqlL1fs7xEl9eUL9jDUjK0FSS1r6fdnjKia_bi1xRHSL9JuBppGOlF4GofU1VX90rlIc3Ify7OcMIpIcJOK1tpAWP8PZj6WXQJ_vl0JguqY9758rmzBAgJSi23rBVnefSr-BM4LycfbM7o32Ap2qk6t9O3xer8jpJ4hvKnTsrfFmbRQm-Ulbeyx2xBAqTpJrsbMMrW_NhLxXrDC5bunOGPGUi0BmNUDuJlRjp7Tilq45PTWHAu__bHoRFzAZx1D824NQgIHFpxTsSzCkLZhpC5Zy5HqxAC2fEGJ9-VvDRHU1FyPeVimio4KOyIxxcWsz113ub_wF0lLgTpzPF_45l8oGwHth1SdAmBc9IIOvnkDEorQuzACryn1CZZVXNJFnR7-hqRXJk7ux7WFNL49DZQZy6zy_4VGLW8MisgDh5p_uKRYijTeX-XjMetIpOvK0wWdk';

const httpLink = createHttpLink({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4479l510c2101z2adg23nzz/master',
});

const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const ApolloContextProvider: React.FC = ({children}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};