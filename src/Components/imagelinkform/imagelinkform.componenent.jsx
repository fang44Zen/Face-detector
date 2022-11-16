import "./imagelinkform.scss";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="fs-3">{"This brain will detect faces in your pictures."}</p>
      <div className="d-flex justify-content-center">
        <div className="form pa4 br3 shadow-5 d-flex align-items">
          <input
            className="fs-4 p-2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
