import './progress.css'

const ProgressBar = (props) => {
  const { bgcolor, completed, skill } = props;


  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    padding: 0,
  };

  const labelStyles = {
    padding: 0,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <>
    <p>{`${skill}`}</p>
      <div className="containerStyles">
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
