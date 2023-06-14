import React from 'react';

type ContainerProps = {
    children: React.ReactNode; //👈 children prop typr
  };

  const Container = (props: ContainerProps) => { //👈 prop definition
    return (
      <div>
        <h1>Hello World</h1>
        {props.children}  //👈 Access children
      </div>
    );
  };
export default Container;