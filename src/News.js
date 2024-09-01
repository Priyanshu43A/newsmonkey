import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./News.css";
import Loader from "./Loader";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    pageSize: 15,
    category: "general",
  };

  static propTypes = {
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  };

  capitalizeWord(word) {
    if (!word) return "";

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  articles = [];
  constructor(props) {
    super(props);
    console.log("hello from news cont");
    if (this.props.category === "general") {
      document.title = `News Monkey`;
    } else {
      document.title = `Top Headlines - ${this.capitalizeWord(
        this.props.category
      )}`;
    }
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0, // Initialize totalResults
    };
  }

  async fetchArticles(page) {
    this.setState({ loading: true });
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=eeab7ca9c36341378032cfa49d1c3978&page=${page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
      let response = await fetch(url);
      let jsonData = await response.json();
      console.log(jsonData);
      this.setState({
        articles: jsonData.articles,
        totalResults: jsonData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    await this.fetchArticles(this.state.page);
  }

  handleNext = async () => {
    console.log("next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      return; // Do nothing if the page number is greater than the total number of pages
    }
    await this.fetchArticles(this.state.page + 1);
    this.setState({
      page: this.state.page + 1,
    });
  };

  handlePrevious = async () => {
    console.log("previous");
    if (this.state.page <= 1) {
      return; // Do nothing if the page number is less than or equal to 1
    }
    await this.fetchArticles(this.state.page - 1);
    this.setState({
      page: this.state.page - 1,
    });
  };

  render() {
    return (
      <>
        {this.state.loading && <Loader />}
        <h1
          style={{
            width: "100%",
            marginBottom: "6vh",
            marginTop: "6vh",
            paddingLeft: "5vw",
            fontSize: "3rem",
          }}
        >
          Today's top headlines - INDIA
        </h1>
        <div className="newsCont">
          {!this.state.loading &&
            this.state.articles.map((article) => {
              return (
                <NewsItem
                  key={article.url}
                  link={article.url}
                  title={article.title}
                  description={article.description}
                  image={article.urlToImage}
                  source={article.source.name}
                  publishedAt={article.publishedAt}
                  author={article.author}
                />
              );
            })}
        </div>
        <div className="pagination-buttons">
          <button
            onClick={this.handlePrevious}
            disabled={this.state.page <= 1}
            className="prev-button"
          >
            &larr; Previous
          </button>
          <button
            onClick={this.handleNext}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="next-button"
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
