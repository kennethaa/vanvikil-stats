import React from 'react';
import Navigation from '../components/Navigation';

export default function withNavigation(Component) {
  return (props) => {
    return (
      <Navigation
        {...props}
      >
        <Component
          {...props}
        />
      </Navigation>
    );
  }
}
