import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { API } from "../../utils";
import './CheckoutForm.scss';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    try {
      let { token } = await this.props.stripe.createToken({ name: "Name" });

      let opts = {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: token.id,
        total: this.props.total
      };
      let response = await API.charge(opts);

      if (response.statusText === 'OK') {
        console.log("Purchase Complete!");
        this.props.emptyCart();
      }

      this.setState({
        complete: true
      })

    } catch (e) {
      console.log('there was an error');
    }

  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <h3>Enter Credit Card:</h3>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
