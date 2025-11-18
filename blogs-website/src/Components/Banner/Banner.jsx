import './Banner.css';
function Banner()
{
    return(
        <>
        <div className='banner-div'>
            <div className='overlay'>
                <h1 id='Banner-title'>Welcome to our Blogs Website!</h1>
            </div>
            <img src="/Media/banner.jpg" alt="" width={'100%'} height={'550px'} style={{objectFit:'cover'}}></img>
        </div>
        </>
    )
}
export default Banner;