import '../../App.css'
import shirtOne from '../../assets/shirt-one.png';
import shirtTwo from '../../assets/shirt-two.png';

const ShoppingCart = () => {
    return (
        <>
            {/*jumbotron*/}
            <div className={"jumbotron jumbotron-fluid bg-light"}>
                <div className={"container"}>
                    <h1 className={"text-center"}>Shopping Cart</h1>
                </div>
            </div>
            {/*body*/}
            <div className={"container-fluid"}>
                <div className={"row"}>
                    {/*product*/}
                    <div className={"col col-8"}>
                        <div className={"container-fluid border shadow rounded"}>
                            <div className={"row"}>
                                <div className={"col-12 p-3"}>
                                    <h2>Cart (2 items)</h2>
                                </div>
                                <div className={"col-12"}>
                                    {/*per item*/}
                                    <div className={"row p-3"}>
                                        <div className={"col-3 grey rounded"}>
                                            <img src={shirtOne} className={"img-fluid"} alt={"Product 1"}/>
                                        </div>
                                        <div className={"col-9"}>
                                            <div className={"row"}>
                                                <div className={"col-12"}>
                                                    <div className={"row"}>
                                                        <div className={"col-8"}>
                                                            <h3>Shirt Linko</h3>
                                                            <p>SHIRT - DARK</p>
                                                            <p>COLOR BLACK</p>
                                                        </div>
                                                        <div className={"col-4 text-right"}>
                                                            <button className={"btn btn-outline-secondary"} type={"button"}>
                                                                -
                                                            </button>
                                                            <input className={"w-25 text-center"} placeholder={"2"}/>
                                                            <button className={"btn btn-outline-secondary"} type={"button"}>
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={"col-12"}>
                                                    {/*action*/}
                                                    <div className={"row"}>
                                                        <div className={"col-8"}>
                                                            <div className={"d-flex flex-row"}>
                                                                <div className={"d-flex flex-row pr-4"}>
                                                                    <i className="bi bi-trash pr-1"></i>
                                                                    <p>REMOVE ITEM</p>
                                                                </div>
                                                                <div className={"d-flex flex-row"}>
                                                                    <i className="bi bi-heart pr-1"></i>
                                                                    <p>MOVE TO WISH LIST</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={"col-4 text-right"}>
                                                            <p>$17.99</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col-12"}>
                                    <hr className="my-4"/>
                                </div>
                                <div className={"col-12"}>
                                    {/*per item*/}
                                    <div className={"row p-3"}>
                                        <div className={"col-3 grey rounded"}>
                                            <img src={shirtTwo} className={"img-fluid"} alt={"Product 2"}/>
                                        </div>
                                        <div className={"col-9"}>
                                            <div className={"row"}>
                                                <div className={"col-12"}>
                                                    <div className={"row"}>
                                                        <div className={"col-8"}>
                                                            <h3>Shirt Rodes</h3>
                                                            <p>SHIRT - GREY</p>
                                                            <p>COLOR GREY</p>
                                                        </div>
                                                        <div className={"col-4 text-right"}>
                                                            <button className={"btn btn-outline-secondary"} type={"button"}>
                                                                -
                                                            </button>
                                                            <input className={"w-25 text-center"} placeholder={"2"}/>
                                                            <button className={"btn btn-outline-secondary"} type={"button"}>
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={"col-12"}>
                                                    {/*action*/}
                                                    <div className={"row"}>
                                                        <div className={"col-8"}>
                                                            <div className={"d-flex flex-row"}>
                                                                <div className={"d-flex flex-row pr-4"}>
                                                                    <i className="bi bi-trash pr-1"></i>
                                                                    <p>REMOVE ITEM</p>
                                                                </div>
                                                                <div className={"d-flex flex-row"}>
                                                                    <i className="bi bi-heart pr-1"></i>
                                                                    <p>MOVE TO WISH LIST</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={"col-4 text-right"}>
                                                            <p>35.99</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*cost*/}
                    <div className={"col col-4"}>
                        <div className={"row"}>
                            <div className={"col-12 border shadow rounded mb-3 p-3"}>
                                <div className={"row"}>
                                    <div className={"col-12"}>
                                        <h4>The total amount of</h4>
                                    </div>
                                    <div className={"col-12"}>
                                        <div className={"row"}>
                                            <div className={"col-6"}>Temporary amount</div>
                                            <div className={"col-6"}>$53.98</div>
                                            <div className={"col-6"}>Shipping</div>
                                            <div className={"col-6"}>Gratis</div>
                                        </div>
                                    </div>
                                    <div className={"col-12"}>
                                        <hr className="my-4"/>
                                    </div>
                                    <div className={"col-12"}>
                                        <div className={"row"}>
                                            <div className={"col-6"}>The total amount of <br/> (Including VAT)</div>
                                            <div className={"col-6"}>$53.98</div>
                                        </div>
                                    </div>
                                    <div className={"col-12 pt-4"}>
                                        <button type={"button"} className={"btn btn-primary w-100"}>GO TO CHECKOUT</button>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-12 border shadow rounded p-3"}>
                                <div className={"row"}>
                                    <div className={"col-10  my-auto"}>Add a dicount code (Optional)</div>
                                    <div className={"col-2"}>
                                        <button type="button" className={"btn dropdown-toggle"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}

export default ShoppingCart;