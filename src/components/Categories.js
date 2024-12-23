import React, { Component } from 'react';

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[
                {
                    key:'all',
                    name: 'Ever'

                },
                {
                    key:'chairs',
                    name: 'Chais'
                    
                },
                {
                    key:'tables',
                    name: 'Tables'
                    
                },
                {
                    key:'sofaes',
                    name: 'Sofaes'
                    
                }
            ]
        }
    }

    render(){
        return(
            <div className='categories'>
                {this.state.categories.map(elements => (
                    <div key={elements.key} onClick={() => this.props.chooseCategories(elements.key)}>
                        {elements.name}

                    </div>
                ))}

            </div>
        )
    }
  
}

export default Categories;
