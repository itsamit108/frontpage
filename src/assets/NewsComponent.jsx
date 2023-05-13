import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';
import InfiniteScroll from 'react-infinite-scroll-component';


const API_KEY = "ff4f387b5e584f9b9d1d505334d5290c";
const API_BASE_URL = 'https://newsapi.org/v2/top-headlines';

export default class NewsComponent extends Component {
  static defaultProps = {
    country: 'in',
    page: 1,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    page: PropTypes.number,
    category: PropTypes.string,
  };

  state = {
    articles: [],
    loading: false,
    page: this.props.page,
    hasMore: true,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.clearCache();
    }
  }

  clearCache = () => {
    this.setState({ articles: [], page: 1, hasMore: true }, () => {
      this.fetchArticles();
    });
  };

  fetchArticles = async () => {
    this.props.setProgress(25);
    const { country, category } = this.props;
    const { page, articles } = this.state;
    const URL = `${API_BASE_URL}?country=${country}&category=${category}&apiKey=${API_KEY}&page=${page}`;
    this.setState({ loading: true });
    try {
      const response = await fetch(URL);
      const { articles: newArticles } = await response.json();
      this.props.setProgress(50);
      if (newArticles.length === 0) {
        this.setState({ hasMore: false });
      } else {
        this.setState({
          articles: [...articles, ...newArticles],
          page: page + 1,
        });
      }
      this.props.setProgress(100);
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { articles, hasMore, loading } = this.state;

    return (
      <>
        <div className='container my-4'>
          <h1 className='text-warning text-center' style={{ marginTop: '90px' }}>Latest {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} News</h1>
        </div>
        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchArticles}
          hasMore={hasMore}
          loader={
            loading && (
              <div className='text-center'>
                <div className='spinner-grow text-light' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            )
          }
          endMessage={<div className='text-center text-light my-5'><h4>You're All Caught Up</h4></div>}
        >
          <div className='container'>
            <div className='row'>
              {articles.map((article) => (
                <div className='col-md-4 my-3' key={article.url}>
                  <NewsCard
                    title={article.title}
                    imageURL={
                      article.urlToImage ||
                      'https://static.vecteezy.com/system/resources/previews/000/169/249/original/holding-remote-control-and-watching-tv-news-vector.jpg'
                    }
                    newsURL={article.url}
                    author={article.author || 'Unknown'}
                    date={article.publishedAt}
                    source={article.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
