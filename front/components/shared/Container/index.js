const Container = ({children}) => {
  return (
    <div className="bg-white container mx-auto">
      {children}
    </div>
  );
};

Container.defaultProps = {};

export default Container;
