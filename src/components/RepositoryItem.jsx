export function RepositoryItem(props) {
  return (
    <div className="box-item">
      <div className="flip-box">
        <div className="flip-box-front text-center bg-white">
          <div className="inner color-white">
            <h3 className="flip-box-header fw-bold">{props.repository.name}</h3>
            <p>{props.repository.description}</p>
          </div>
        </div>

        <div className="flip-box-back text-center bg-white">
          <div className="inner color-white">
            <img
              className="owner-avatar position-absolute top-0 start-50 translate-middle-x"
              src={props.repository.owner.avatar_url}
              alt=""
              srcSet=""
            />

            <p className="mb-0">
              By <strong>{props.repository.owner.login}</strong>{" "}
            </p>

            <small className="small opacity-25">
              {props.repository.owner.type}
            </small>

            <a
              className="position-absolute bottom-0 start-50 translate-middle-x bg-purple py-2 mb-3 rounded w-75"
              target="_blank"
              href={props.repository.html_url}
            >
              Acessar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
