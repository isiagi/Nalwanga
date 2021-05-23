import './progress.css'

const ProgressBar = (props) => {
  const { bgcolor, completed, skill } = props;


  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    padding: 10,
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <>
      <div className="containerStyles">
      <p className="skillSet">{`${skill}`}</p>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
