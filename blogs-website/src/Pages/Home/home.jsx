import Banner from "../../Components/Banner/Banner"
import TrendingBlog from "../../Components/TrendingBlogs/trendingBlog";
import blogs from "../../utils/MockData";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <Banner/>

        <div className="my-2">
            <h1> Read Blogs From</h1>

            <div className="row justify-content-center g-4">

                {/* PROGRAMMING */}
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                    <Link to="/blogs/programming" className="text-decoration-none text-dark">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="/Media/programming.jpg" className="card-img-top" alt="Programming-image"/>
                            <div className="card-body">
                                <h5 className="card-title">Programming</h5>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* COOKING */}
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                    <Link to="/blogs/cooking" className="text-decoration-none text-dark">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="/Media/cooking.jpg" className="card-img-top" alt="Cooking-image"/>
                            <div className="card-body">
                                <h5 className="card-title">Cooking</h5>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* WORKOUTS */}
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                    <Link to="/blogs/workouts" className="text-decoration-none text-dark">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="/Media/fitness.jpg" className="card-img-top" alt="Fitness-image"/>
                            <div className="card-body">
                                <h5 className="card-title">Workouts</h5>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                    <Link to="/blogs/health" className="text-decoration-none text-dark">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="/Media/research.jpg" className="card-img-top" alt="Health-image"/>
                            <div className="card-body">
                                <h5 className="card-title">Health</h5>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                    <Link to="/blogs/travelling" className="text-decoration-none text-dark">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="/Media/banner.jpg" className="card-img-top" alt="Travelling-image"/>
                            <div className="card-body">
                                <h5 className="card-title">Travelling</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        <div className="trending-blogs-section">
            <h1>Trending Blogs</h1>

            <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2">
                {
                    blogs.map(blog => <TrendingBlog key={blog.id} blogg={blog} />)
                }
            </div>

            <br/><br/><br/>
        </div>
        </>
    )
}

export default Home;
