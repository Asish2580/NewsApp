
const NewsItem=(props)=> {
        let {title,description,imageurl,newsurl,publishedAt}=props;
        return (
            <div>
                <div className="card">
                    
                    <img src={! imageurl?imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_o9CNGin18Jwbi9OhCK2fmDqvPnG-rRNesRR8ZwUkODWTnT1Fn-w-HnA1kAK3vEjahY&usqp=CAU":imageurl} className="card-img-top" alt="..."/>
                    
                    <div className="card-body">
                    
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">{publishedAt}</small></p>
                        <a href={newsurl}rel="noreferrer"target="_blank" className="btn btn-sm btn-dark">ReadMore</a>
                    </div>
                </div>

            </div>
        )
}

export default NewsItem