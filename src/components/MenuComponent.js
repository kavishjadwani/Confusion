import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' 
import {Card, CardImg, CardImgOverlay,CardText,CardBody,CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderMenuItem ({dish, onClick}) {
        return (
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    componentDidMount(){
        console.log('Menu Component componentDidMount is invoked');
    }
     
    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <Link to = {`/menu/${dish.id}`} >
                    <CardImg width = "100%" src = {dish.image} alt = {dish.name} /> 
                    <CardImgOverlay>
                        <CardTitle> {dish.name} </CardTitle >
                        <CardText> {dish.description} </CardText>
                    </CardImgOverlay>
                    </Link>
                </Card>
            )
        }else{
            return <div></div>
        }
    }
    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key = {dish.id} className = "col-12 col-md-5" >
                    <Card >
                        <CardImg width = "100%" src = {dish.image} alt = {dish.name} />
                        <CardImgOverlay >
                            <CardTitle> {dish.name} </CardTitle >
                        </CardImgOverlay>
                    </ Card>
                        
                </div>
            );
        }) ;
        return(
            <div className="container">
                            <div className="row">
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                                </Breadcrumb>
                                <div className="col-12">
                                    <h3>Menu</h3>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                {menu}
                            </div>
                        </div>
        );
    }
}

export default Menu;