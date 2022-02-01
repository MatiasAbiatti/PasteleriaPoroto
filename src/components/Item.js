import React from "react";
import "../scss/components/Item.scss";
import { NavLink } from "react-router-dom";

import ItemCount from "../components/ItemCount";
class Item extends React.Component {
  render() {
    return (
      <>
        <div className="item__cont">
          <label className="item__title">{this.props.title}</label>
          <NavLink
            to={`/item/${this.props.id}`}
            activeclassname="currentCategory"
          >
            <div className="item__img">
              <img alt="" src={this.props.pictureUrl} />
            </div>
          </NavLink>
          <p className="item__description">{this.props.description}</p>
          <Link className="button" to={`/item/${product.id}`}>
            Ver detalles
          </Link>
          <span className="item__price">$ {this.props.price}</span>
          <ItemCount stock={this.props.stock} initial="1" />
        </div>
      </>
    );
  }
}

export default Item;
