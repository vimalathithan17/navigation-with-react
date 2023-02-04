import Header from "../components/Header";
import {vimal} from "../author";
const AuthorPage = () => {
  return ( 
    <div>
      <Header/>
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">{vimal.about.title}</h1>
          <img src="./img/author.jpg" className="hero-image" alt="" />
          <div className="blog-content">
            <p className="blog-text">{vimal.about.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AuthorPage;