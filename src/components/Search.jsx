export default function Search(props) {
  const handleChangeProxy = e => {
    props.handleChange(e.target.value);
  };

  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        onChange={handleChangeProxy}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
}
