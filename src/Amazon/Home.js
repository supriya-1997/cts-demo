import React from 'react'



const Home = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active"> 
                  <div style={{backgroundImage:"url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_1x._CB419795291_.jpg)",width:"100%",height:"400px"}}>
                   {/*<span style={{}}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery <a href="#">Click here to go to amazon.in</a></span>*/}
               
    </div>
    <div className="carousel-caption d-none d-md-block text-center"><p style={{backgroundColor:'white',width:'100%',height:'40px',color:'black'}}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery <a href="#">Click here to go to amazon.in</a></p></div>
    {/* <h1>Hello</h1>*/}
                    </div>
                    <div className="carousel-item">
                    <div style={{backgroundImage:"url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/April/Hero/Hero_Currency_EN_1X._CB466692681_.jpg)",width:"100%",height:"400px"}}>
                   {/* <span class="color:black">You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery <a href="#">Click here to go to amazon.in</a></span>*/}
                   <div className="carousel-caption d-none d-md-block text-center"><p  style={{backgroundColor:'white',width:'100%',height:'40px',color:'black'}}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery <a href="#">Click here to go to amazon.in</a></p></div>
    </div>
{/*<h1>Hello</h1>*/}
                    </div>
                    </div> 
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
           
             <div className="row">
                 <div className="col-3">
            
            <div className="card ml-3" style={{width: "18rem",height:"20rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">Shop by Category</h5>
    <div className="row">
        <div className="col-xs-6">
    <img src="https://image.shutterstock.com/image-photo/modern-desktop-computer-wireless-keyboard-260nw-55573504.jpg" width="100" height="50" alt="..."/>
    <p className="card-text ml-3">computers & <br/>accessories</p>
    </div>
    <div className="col-xs-6">
    <img src="https://www.hindustantimes.com/rf/image_size_1200x900/HT/p2/2019/07/09/Pictures/_8ca1be4a-a240-11e9-85f3-0f8400bbe260.jpg" width="100" height="50" alt="..."/>
    <p className="card-text ml-3">video games</p>
   </div>
    </div>
   
    <div className="row">
        <div className="col-xs-6">
    <img src="https://image.shutterstock.com/image-photo/modern-desktop-computer-wireless-keyboard-260nw-55573504.jpg" width="100" height="50" alt="..."/>
    <p className="card-text ml-3">computers & <br/>accessories</p>
    
    </div>
    <div className="col-xs-6">
    <img src="https://www.hindustantimes.com/rf/image_size_1200x900/HT/p2/2019/07/09/Pictures/_8ca1be4a-a240-11e9-85f3-0f8400bbe260.jpg" width="100" height="50" alt="..."/>
    <p className="card-text ml-3">video games</p>
    </div>
    </div>
    <br/>
    <br/>
    <a href="#" className="text-primary">Shop now</a>
  </div>
</div> 
</div>
<div className="col-3">
<div className="card ml-3" style={{width: "18rem",height:"20rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">Amazon Basics</h5>
    <div className="row">
        <div className="col-xs-12">
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" width="250" height="230" alt="..."/>
   
    </div>
   
    </div>
    <a href="#" className="text-primary">See More</a>
    </div>  
</div> 
</div>
<div className="col-3">
<div className="card ml-3" style={{width: "18rem",height:"20rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">Electronics</h5>
    <div className="row">
        <div className="col-xs-12">
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg" width="250" height="230" alt="..."/>
   
    </div>
   
    </div>
    <a href="#" className="text-primary">See More</a>
    </div>  
</div> 
</div>
<div className="col-3">
<div className="card ml-3" style={{width: "18rem",height:"20rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">Sign in for the best experience</h5>
    <div className="row">
        <div className="col-xs-12">
        <a href="#" className="btn btn-warning ml-3">Sign in securely</a>
   
    </div>
   
    </div>
    
    </div>  
</div> 
</div>
</div>
            {/* <div>
                <img src="https://scontent.fbbi3-1.fna.fbcdn.net/v/t1.0-9/s960x960/98731901_1768503626650366_5778004999204241408_o.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_oc=AQnh9EjaS8-8_Zu1ZSh1NmqUxXxKy3TXe1RnhYj1WlboA1KVvpe7dsH4n8zLCXZ23KgTHldWlOzEE2U8a_KiYhPa&_nc_ht=scontent.fbbi3-1.fna&_nc_tp=7&oh=ea8f6b482886ef5031a61b5b9ed8d6b6&oe=5EEE43CB" width="1300" />
                <img src="https://scontent.fbbi3-1.fna.fbcdn.net/v/t1.0-9/s960x960/100722224_1768503783317017_1077408145522819072_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_oc=AQmt9ROvrh9k8NvRY19SiO7f9CQMDvLwtp9QHjAFjlbOe01c9VGWvDMYYsKSiqUyAWOKbH-wEAqNEb2OwObRVt66&_nc_ht=scontent.fbbi3-1.fna&_nc_tp=7&oh=fb94b5faa95ee88d54c384e4073b6497&oe=5EEEC1B0" width="1300" />
                <img src="https://scontent.fbbi3-1.fna.fbcdn.net/v/t1.0-9/s960x960/98345513_1768503529983709_3719987839262261248_o.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_oc=AQkQj3yOuzJnIx3vWGnMIpCL-FX6bGebC0nQvr5E-g_10hmLvaROtTUwTYyqDwCFYVNywc4B5YSNqqsN60RwK_Wv&_nc_ht=scontent.fbbi3-1.fna&_nc_tp=7&oh=d9b31741cb5c36831debec4326b30b2d&oe=5EEF4259" width="1300" />
                <img src="https://scontent.fbbi3-1.fna.fbcdn.net/v/t1.0-9/s960x960/99254635_1768503716650357_8911647824521723904_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_oc=AQmZpnp1se4PWiMPl78fymdGZICRh8tJnP1n2ydvFx9WPdBo_61hBb_EC_h_P3Q2mhBx8gsCPUdUsMnGvioSvqCd&_nc_ht=scontent.fbbi3-1.fna&_nc_tp=7&oh=dc2a0810a2df10669b01dc76d080680e&oe=5EF09980" width="1300" />
           </div>*/}
       </>
    )
}

export default Home