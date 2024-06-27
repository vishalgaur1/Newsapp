import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }

  async componentDidMount() {
      this.fetchNews();
  }

  fetchNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ea160c6342434d448c1160830c17f304&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
     });
  };

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }), 
      this.fetchNews
    );
  };

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }), 
      this.fetchNews
    );
  };

  render() {

    const { page, totalResults, loading, articles} = this.state;
    const pageSize = this.props.pageSize; 
    const totalPages = Math.ceil(totalResults / pageSize);

    return (
      <div className='container my-3'>
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {loading && <Spinner/>}
        <div className="row">
          {!loading && articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 57) : ""}
                description={element.description ? element.description.slice(0, 57) : "Click Read More to know more about this News."}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-center">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark mt-5 mb-5 me-2" onClick={this.handlePrevClick}>&larr; Prev</button>
          <button disabled={page >= totalPages} type="button" className="btn btn-dark mt-5 mb-5 ms-2" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
