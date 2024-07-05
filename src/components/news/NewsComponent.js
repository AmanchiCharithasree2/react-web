
import React ,{ useState, useEffect }from "react";


function NewsComponent() {

  const [news,setnews] = useState([]);

 useEffect(() => {
  fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=80cca8e098104a6bb8cb1d52bac0fbc9")
    .then(response => response.json())
    .then(data => setnews(data.articles))
    .catch(error => console.error("Problem with fetching data!!",error))
 },[])
  
  
  
  return (
    <div>
        <div className='container'>
            <div className='row'>
                {
                    news.map((value,key) => (
                        <div key={key} className="col-2">
                            <a href={value.url}>
                                <div className="card">
                                    <img src={value.urlToImage} alt={value.title}/>
                                    <div className="card-body">
                                <h4 classNme="card-title">{value.author}</h4>
                                <p className="crad-text">{value.title}</p>
                                </div>
                                </div>
                            </a>
                        </div>
         ))
    }
                        </div>
                        </div>
                        </div>
                    )
  
                    
  
  
}
export default NewsComponent;