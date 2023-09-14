import React,{useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

const [articles,setArticles]=useState([])
const [loading,setLoading]=useState(true)
const [page,setPage]=useState(1)
const [totalResults,setTotalResults]=useState(0)

useEffect(() => {
  updateNewws();
  
}, []);


  const  updateNewws=async()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6f53ac6c06834ce1991c6025cb9e3421&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json()
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    

  }

  const capitalizeFirstLetter =(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 const fetchMoreData = async () => {
  
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6f53ac6c06834ce1991c6025cb9e3421&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json()
    setPage(page+1);
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    setLoading(false);

  };
    console.log("render");
    return (
      
      <div className="container">
        <h1 className='text-center' style={{margin: '35pz 0px',marginTop:"70px"}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {/*this.state.loading && <Spinner />}*/}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            
          
          <div className="row">
            {articles.map((element) => {

              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} publishedAt={element.publishedAt} source={element.source.name} />
              </div>

            })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    )
}
News.defalutProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News
