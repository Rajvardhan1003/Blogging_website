import './DedicatedBlog.css'
import Banner from '../../Components/Banner/Banner'
import blogs from './../../utils/MockData';
import { useParams } from 'react-router-dom';

function DedicatedBlog(){

    const { id } = useParams();

    // Convert id (string) to number and find the blog
    const blogtoDisplay = blogs.find(blog => blog.id === Number(id));

    if (!blogtoDisplay) {
        return <h2>Blog not found</h2>;
    }

    return(
        <>
        <Banner />   {/* ✅ BANNER ADDED */}

        <div className="container my-4">

            <h1>{blogtoDisplay.title}</h1>
            <h6 className="text-muted">{blogtoDisplay.category}</h6>

            <p className="mt-3">{blogtoDisplay.content}</p>
        </div>
        </>
    )
}

export default DedicatedBlog;
