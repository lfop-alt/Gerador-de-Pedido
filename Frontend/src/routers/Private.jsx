import React from 'react';
import { Route, redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : redirect('/login')
      }
    />
  );
}
