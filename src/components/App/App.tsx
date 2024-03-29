import React from "react";
import { Route, useLocation } from "wouter";
import Info from "../../pages/Info";
import Layout from "../Layout";
import About from "../../pages/About";
import Skills from "../../pages/Skills";
import "./App.css";
import Hobbies from "../../pages/Hobbies";
import Education from "../../pages/Education";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";
import Blog from "../../pages/Blog";
import BlogPost from "../../pages/Blog/BlogPost";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Creative from "../../pages/Creative";
import CreativePost from "../../pages/Creative/CreativePost";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

function App() {
  const [location] = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Route path="/">
          <Info />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/hobbies">
          <Hobbies />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/blogpost/:id">
          <BlogPost />
        </Route>
        <Route path="/creative">
          <Creative />
        </Route>
        <Route path="/creativepost/:id">
          <CreativePost />
        </Route>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
