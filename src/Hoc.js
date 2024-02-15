import React from "react";

const UpdatedComponent = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    const [count, setCount] = React.useState(0);
    const { color } = props;
    const incrementcount = () => {
      setCount(count + 1);
    };

    return (
      <WrappedComponent
        count={count}
        incrementcount={incrementcount}
        color={color}
      />
    );
  };

  return EnhancedComponent;
};

export default UpdatedComponent;
