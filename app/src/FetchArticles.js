import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import articles from "./articles.json";

class FetchArticles extends React.Component {

    render() {
        console.log(articles);

        return(
            <>
                {articles.map((article=>{
                    return(
                        <div className="col-md-2" style={{ border: "1px solid black"}}>
                        {article.title}
                        </div>   
                    )
                }))}    
            </>
        )
    }
}    
             
export default FetchArticles;