import React from 'react';
import './NewsCard.css';

const NewsItem = (props) => {
  let { title, imageURL, newsURL, author, date, source } = props;
  let titleWords = title.split(' ');

  if (titleWords.length > 7) {
    let truncatedTitleWords = titleWords.slice(0, 7);
    let lastWord = truncatedTitleWords.pop();

    while (lastWord.length > 0 && (lastWord.endsWith('.') || lastWord.endsWith(','))) {
      lastWord = lastWord.slice(0, -1);
    }

    let truncatedTitle = truncatedTitleWords.join(' ') + ' ' + lastWord + '...';
    title = truncatedTitle;
  }

  let authorArray = author ? author.split(', ') : [];
  authorArray = authorArray.map((author) => {
    if (author.includes('http') || author.includes('www')) {
      return 'Unknown';
    } else {
      return author;
    }
  });

  if (authorArray.length > 2) {
    author = authorArray.slice(0, 2).join(', ') + '...';
  } else {
    author = authorArray.join(', ');
  }

  return (
    <div className='my-3'>
      <div className="card shadow-lg border border-secondary shadow-hover">
        <div style={
          { display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }
        }>
          <span class="badge rounded-pill bg-danger">
            {source}
          </span>
        </div>
        <img src={imageURL} className="card-img-top" alt="..." style={{ objectFit: "cover", height: "200px" }} />
        <div className="card-body">
          <h5 className="card-title text-muted">{title}
          </h5>
          <h6 className='text-muted'>
            {author}
          </h6>
          <p className="card-text"><small className="text-muted">Last updated on {new Date(date).toGMTString()}</small></p>
          <a href={newsURL} className="btn btn-secondary btn-sm rounded-pill" target='_blank' rel="noreferrer">Read More</a>
        </div>
      </div>
    </div >
  );
};

export default NewsItem;
