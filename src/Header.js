import React from 'react'

const Header = () => {
    return (
        <div className="row bg-primary my-3" >
            <div class="col">
                <img src="https://static.couponspy.in/picture/shop/240.JPG" height="80" width="100" />
            </div>
            <div class="col mt-4">
                <form action="" method="get">
                    <div class="input-group">
                        <input type="text" name="username" class="form-control" placeholder="Search for products,brands and more" />
                        <button type="submit">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div class="col mt-3">
                <nav class="navbar-expand-sm navbar-light ">
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#xx">
                        <span class="navbar-toggler-icon"> </span>
                    </button>
                    <div class="collapse navbar-collapse " id="xx">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a href="#" class="nav-link text-light"><button class="btn-sm btn-light text-primary">Login</button></a>
                            </li><li class="nav-item"><a href="#" class="nav-link text-light">More</a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-light"><i class="fa fa-shopping-cart"></i>Cart</a></li>
                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
