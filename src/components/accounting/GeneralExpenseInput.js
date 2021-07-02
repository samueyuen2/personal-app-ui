import React, { Component } from 'react';
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import { connect } from 'react-redux'
import { createNewAccountingRecord } from '../../actions/accountingActions'

class GeneralExpenseInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toISOString().substr(0, 10),
      serviceProvideType: "Restaurant",
      serviceProviderName: "",
      paymentType: "Cash",
      expense: 0,
      itemsInput: "",
      items: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    //Dispatch Action - Submit form
    this.props.submitForm(this.state)
    // Reset Form
    this.setState({
      date: new Date().toISOString().substr(0, 10),
      serviceProvideType: "Restaurant",
      serviceProviderName: "",
      paymentType: "Cash",
      expense: 0,
      itemsInput: "",
      items: []
    })
  }

  render() {
    return (
      <Form style={{ padding: "1rem 2rem" }}>

        {this.props.isDataFlowing
          &&
          <Alert color="success">
            This is a success alert — check it out!
          </Alert>
        }

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
        <FormGroup>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Label for="itemsInput">Dishes / Movie Title ... :</Label>
                  <Row>
                    <Col xs={8}>
                      <Input type="text" name="itemsInput" id="itemsInput" value={this.state.itemsInput} onChange={(e) => this.setState({ itemsInput: e.target.value }, () => console.log(this.state))} />
                    </Col>
                    <Col xs={4}>
                      <Button style={{ width: "100%" }} color={"primary"} onClick={() => this.setState({ items: [...this.state.items, this.state.itemsInput], itemsInput: "" }, console.log(this.state))}>Add</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col>
              <Label for="items">Service Provider Name :</Label>
              {
                this.state.items.length > 0 ?
                  <ListGroup name="items" id="items">
                    {
                      this.state.items.length > 0
                      &&
                      this.state.items.map((item) => {
                        return (
                          <Row>
                            <Col xs={8}>
                              <ListGroupItem color="success">
                                {item}
                              </ListGroupItem>
                            </Col>
                            <Col xs={4}>
                              <Button style={{ width: "100%" }} color={"warning"} onClick={() => this.setState({ items: this.state.items.filter((itemInArr) => itemInArr !== item) }, () => console.log(this.state))}>Remove</Button>
                            </Col>
                          </Row>
                        )
                      })
                    }
                  </ListGroup>
                  :
                  <ListGroup name="items" id="items" disabled>
                    <ListGroupItem color="danger">No item inputted</ListGroupItem>
                  </ListGroup>
              }
            </Col>
          </Row>
        </FormGroup>
        <center><Button style={{ width: "25%", marginTop: "1rem" }} onClick={() => this.handleSubmit()}>Submit</Button></center>
      </Form >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDataFlowing: state.isDataFlowing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (data) => dispatch(createNewAccountingRecord(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralExpenseInput)