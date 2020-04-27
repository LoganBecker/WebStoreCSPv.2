import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';


export default class Pop extends Component {

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {popMenuOpen, closePopMenu} = value;
          const {img, title, price} = value.popProduct;

          if (!popMenuOpen){

            return null;

          } else {

            return(
              <PopContainer>

                <div className="container">
                  <div className="row">
                    <div id="pop" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                      <h5>Item added to cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: $ {price} </h5>
                      <Link to="/" >
                        <ButtonContainer onClick={()=>closePopMenu()}>
                          Continue Shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart" >
                        <ButtonContainer onClick={()=>closePopMenu()}>
                          go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>

              </PopContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const PopContainer = styled.div`

position: fixed;
top: 0;
left: 0;
right:0;
bottom:0;

background: rgba(0,0,0,0.3);

display: flex;
align-items: center;
justify-content: center;

#pop{
  background: var(--mainWhite);
}


`;
