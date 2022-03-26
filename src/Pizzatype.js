function Pizzatype() {
    return (
        <div className="container">
            <div className="row pizza-types">
                <div className="col-md-12">
                    <h3 className="text-center">Pizza Types</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src="images/vegetarian_pizza.jpg" className="card-img-top img-thumbnail" alt="vegetarian" />
                        <div className="card-body">
                            <h5 className="card-title">Vegetarian Pizza</h5>
                            <p className="card-text">Vegetarian pizza is rich in green vegetables. After mixing all the ingredients, it is baked by adding onion, capsicum, tomato and mushroom, with garlic sauce spread all over the pizza base.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="images/cheese_pizza.jpg" className="card-img-top img-thumbnail" alt="cheese" />
                        <div className="card-body">
                            <h5 className="card-title">Cheese Pizza</h5>
                            <p className="card-text">According to Pizzamania's nutritional information, one slice from a medium hand-tossed cheese pizza (one-eighth of the pie) contains 220 calories, 26 grams of carbohydrates, 8 grams of fat, 4 grams of saturated fat, etc.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="images/pepper_pizza.jpg" className="card-img-top img-thumbnail" alt="pepperoni" />
                        <div className="card-body">
                            <h5 className="card-title">Pepperoni Pizza</h5>
                            <p className="card-text">Pepperoni is an American variety of salami, made from cured pork and beef seasoned with paprika or chili pepper. Pepperoni is typically soft, slightly smoky, and bright red in color.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="images/Bossu_pizza.jpg" className="card-img-top img-thumbnail" alt="bossu" />
                        <div className="card-body">
                            <h5 className="card-title">D'bankah Special</h5>
                            <p className="card-text">The average slice of D'bankah Special pizza has 12 grams of protein, according to Chelsey Amer, a registered dietitian. Pizza can help you absorb Lycopene, an antioxidant found in brightly-colored fruits and vegetables, that may lower blood pressure rates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pizzatype;