import React from "react";
import $ from "jquery";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class FetchVideos extends React.Component {
  
    constructor(props){
        super(props);
        
        this.state={
            items:[],
            visiable: 6
        }
        this.loadmore=this.loadmore.bind(this);
    }

    componentDidMount() {
        fetch('https://www.scorebat.com/video-api/v1/')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                items:json
            })
        });
        return false;
    }

    loadmore(){
        this.setState((old)=>{
            return{visiable:old.visiable+6}
        })
    }

    render() {
        var{items}= this.state;
        const imgStyles={height: "60px", width:"48px"};
        const nameStyles={fontSize: "30px", fontFamily: "Comic Sans MS"}
        const buttonStyles={marginTop: "120px"}
        
            

        return(
            <>
                <div className="row" >
                    {items.slice(0,this.state.visiable).map((item,i)=>{
                        return(
                            
                            <div className="col-md-6" style={{marginTop: "120px", position:"relative"}}>
                                <div style={nameStyles}> 
                                    {item.side1.name}
                                    {<img src="https://st2.depositphotos.com/2877797/8963/v/450/depositphotos_89636676-stock-illustration-symbol-competition-vs-vector-illustration.jpg" alt="Logo" style={imgStyles}/>}
                                    {item.side2.name}
                                </div> 
                                <div style={{left:"140px", position:"relative", fontFamily: "Comic Sans MS",fontSize: "15px"}}>
                                    in {item.competition.name}
                                </div>
                                {<iframe src={$('iframe', item.embed).attr('src')} height="353px" width="60%" scrolling="no" position="absolute"></iframe>}
                            </div>
                        )
                    })}
                </div>
                <div class="col-md-12" style={buttonStyles}>
                    <button type="button" onClick={this.loadmore}>Load more Video!</button>
                </div>
            </>
        )
    }
}    
             
export default FetchVideos;