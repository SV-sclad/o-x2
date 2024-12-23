import React from "react";
import Goods from "./components/Goods";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems:[],
      items: [
        {
          id: 1,
          title: 'Chair black',
          img: 'Chairblack.jpg',
          desc: 'Best ever chair',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.jpg',
          desc: 'Best ever table',
          category: 'tables',
          price: '69.99'
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpg',
          desc: 'Best ever sofa',
          category: 'sofaes',
          price: '99.99'
        }
      ],
      ShowFullItem:false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategories = this.chooseCategories.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategories= {this.chooseCategories}/>
      <Goods onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

      {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer/>
      <img src = {require("./img/sofa.jpg")} alt=""/>
    </div>
  );
}

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({ShowFullItem: !this.state.ShowFullItem})
  }

  chooseCategories(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
     this.setState({currentItems: this.state.items.filter(elements => elements.category === category)})
  }

   deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})

   }
      addToOrder(item){
        
          this.setState({orders:[...this.state.orders, item]})
      }
}

export default App;
