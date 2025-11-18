import Banner from "../../Components/Banner/Banner"
import TrendingBlog from "../../Components/TrendingBlogs/trendingBlog";
import blogs from "../../utils/MockData";
import './category.css'
import { useParams } from "react-router-dom";

function Category(){

    const { category } = useParams();  // "programming", "cooking", etc.

    return(
        <>
        <Banner/>

        <div className="trending-blogs-section">
            <h1>{category}</h1>

            <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2">
                {
                    blogs
                        .filter(blog => blog.category.toLowerCase() === category.toLowerCase())
                        .map(blog => (
                            <TrendingBlog key={blog.id} blogg={blog} />
                        ))
                }
            </div>

            <br/><br/><br/>
        </div>
        </>
    )
}

export default Category;
