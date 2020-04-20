import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export const Home = () => (
    <>
        <Helmet>
        <title>This is the Home Page title!</title>
        </Helmet>
        <h1>Home</h1>
        <p>Hello Worrld!</p>
        <Link to="/about">Go to about</Link>
    </>
)