import './Mobile.css';

function Moblie(data){


    return(
    <>
   <>  
            <div id="main">
                <div id="child1">
                    <img src ={data.image}/>
                </div>

                <div id="child2">
                 
                    <a id="1" href={data.nameLink}>{data.name}<span >...</span></a>
           <p id="1">{data.saleInK}K+ bought in past month</p>
           <div id="price">
            <h3>₹{data.newPrice} </h3>
                <span>M.R.P : <s>₹{data.oldPrice}</s>  </span> 
              ({data.offer}% off)
              
           </div>
             <p id='2'>
FREE delivery <b>{data.freeDelivaryDate}</b><br/>
Or fastest delivery <b>Tomorrow, {data.fastDelivaryDate}</b></p>
         
       
         <button id="btn1">Add to Cart</button><br/>
                    <a id="2" href={data.patternLink}>{data.pattern}</a>
               
            
                </div>

            </div>
        </>
    
    </>
    )
}

export default Moblie