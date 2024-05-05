import React from 'react';


const TmboxComponent = ({ className, children }) => {

  return (
    <section className={className}>
        {children}
    </section>
  );
};

export default TmboxComponent;