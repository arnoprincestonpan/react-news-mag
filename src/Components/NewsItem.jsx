import defaultImage from '../assets/pexels-scenicspire-358690216-28216688.jpg'

const NewsItem = ( {title, description, src, url} ) => {
  return (
    <div>
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{maxWidth: "345px"}}>
        <img src={src || defaultImage} style={{height: "200px", objectFit: "cover"}} className="card-img-top" alt={src ? title : "Image Not Available"} />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description? description.slice(0,90) : "See the Official Link for Description."}
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
