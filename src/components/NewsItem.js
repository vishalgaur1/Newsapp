import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;

        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <div style={{
                        width: "100%",
                        height: "0",
                        paddingBottom: "56.25%",
                        overflow: "hidden",
                        position: "relative"
                    }}>
                        <img src={!imageUrl ?
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWoh8SJC3dyQJ_V1salkOV9HYpJFjeM7Xzcw&s" :
                            imageUrl}
                            alt="news"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                position: "absolute"
                            }}
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}.....</p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;
