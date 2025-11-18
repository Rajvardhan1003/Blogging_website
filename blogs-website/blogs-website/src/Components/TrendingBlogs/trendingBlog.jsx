import blogs from '../../utils/MockData';
import { Link } from 'react-router-dom';
import './trendingBlog.css'

function TrendingBlog({blogg}){
    let image='';
    switch(blogg.category){
        case "Travelling":
            image='banner.jpg'
            break;
        case "Cooking":
            image='cooking.jpg'
            break;
        case "Programming":
            image='programming.jpg'
            break;
        case "Workouts":
            image='fitness.jpg'
            break;
        case "Cooking":
            image='cooking.jpg'
            break;
        case "Health":
            image='research.jpg'
            break;
        default:
            image='banner.jpg'
            break;
    }
    return(
        <Link to={`Blog/${blogg.id}`}>
        <div class="card" style={{width: '18rem'}}>
            <img src={`/Media/${image}`}class="card-img-top" alt="programming-image"/>
            <div class="card-body">
                <h5 class="card-title">{blogg.title}</h5>
                <p class="card-text text-muted">{blogg.category}</p>
                <p class="card-text">{blogg.previewDescription}</p>
                <a href="#" class="btn btn-primary">View Post</a>
            </div>
        </div>
        </Link>
    )
}
export default TrendingBlog;