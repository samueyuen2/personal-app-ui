import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from 'reactstrap';

class GeneralExpenseInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toISOString().substr(0, 10),
      serviceProvideType: "Restaurant",
      serviceProviderName: "",
      paymentType: "Cash",
      expense: 0,
    }
  }

  render() {
    return (
      <Form style={{ padding: "1rem 2rem" }}>
        <FormGroup style={{ padding: "1rem 0rem" }}>
          <Label for="date">Date</Label>
          <Input type="date" name="date" id="date" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value }, () => console.log(this.state))} />
        </FormGroup>
        <FormGroup style={{ padding: "1rem 0rem" }}>
          <Row>
            <Col>
              <Label for="serviceProvideType">Service Provider Type (select one) :</Label>
              <Input type="select" name="serviceProvideType" id="serviceProvideType" onChange={(e) => this.setState({ serviceProvideType: e.target.value }, () => console.log(this.state))} >
                <option value="Restaurant">Restaurant</option>
                <option value="Transportation">Transportation</option>
                <option value="Supermarket">Supermarket</option>
                <option value="MovieTheater">Movie Theater</option>
                <option value="HairSalon">Hair Salon</option>
              </Input>
            </Col>
            <Col>
              <Label for="serviceProviderName">Service Provider Name :</Label>
              <Input type="text" name="serviceProviderName" id="serviceProviderName" value={this.state.serviceProviderName} onChange={(e) => this.setState({ serviceProviderName: e.target.value }, () => console.log(this.state))} />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup style={{ padding: "1rem 0rem" }}>
          <Row>
            <Col>
              <Label for="paymentType">Payment Type (select one) :</Label>
              <Input type="select" name="paymentType" id="paymentType" value={this.state.serviceProvideName} onChange={(e) => this.setState({ paymentType: e.target.value }, () => console.log(this.state))} >
                <option value="Cash">Cash</option>
                <option value="CreditCard">Credit Card</option>
                <option value="Octopus">Octopus</option>
                <option value="PaidByOthers">Paid By Others</option>
              </Input>
            </Col>
            <Col>
              <Label for="expense">Expense ($) :</Label>
              <Input type="number" name="expense" id="expense" value={this.state.expense} onChange={(e) => this.setState({ expense: e.target.value }, () => console.log(this.state))} />
            </Col>
          </Row>
        </FormGroup>
        <center><Button style={{ width: "25%", marginTop: "1rem" }}>Submit</Button></center>
      </Form>
    );
  }
}

export default GeneralExpenseInput;