import React from 'react';
import {Form, FloatingLabel, Row, Col, Button} from 'react-bootstrap'
import '../cssFiles/CreateData.css';

class CreateData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        description: '',
        imageUrl: '',
        userId: '',
        price: ''
      };
  
      this.handleChangeTitle = this.handleChangeTitle.bind(this);
      this.handleChangeDescription = this.handleChangeDescription.bind(this);
      this.handleChangeImageUrl = this.handleChangeImageUrl.bind(this);
      this.handleChangeUserId= this.handleChangeUserId.bind(this);
      this.handleChangePrice = this.handleChangePrice.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeTitle(event) {
      this.setState({title: event.target.value});
      console.log(this.state.title)
    }

    handleChangeDescription(event) {
      this.setState({description: event.target.value});
      console.log(this.state.description)
    }

    handleChangeImageUrl(event) {
      this.setState({imageUrl: event.target.value});
      console.log(this.state.value)
    }

    handleChangeUserId(event) {
      this.setState({userId: event.target.value});
      console.log(this.state.userId)
    }

    handleChangePrice(event) {
      this.setState({price: event.target.value});
      console.log(this.state.price)
    }
  
    handleSubmit(event) {
      alert('Item added');
      (async () => {
        const rawResponse = await fetch('http://localhost:3001/api/shop', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title: this.state.title, description: this.state.description, 
            imageUrl: this.state.imageUrl, userId: this.state.userId, price: this.state.price})
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();
      event.preventDefault();
    }

    createData(event){
        console.log(this.state.value)
            /*fetch('http://localhost:3001/api/shop', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({name: this.state.value, description: this.state.value, 
                imageUrl: this.state.value, userid: this.state.value, price: this.state.value})
            });*/
          
            console.log("C'est bon chef");
            event.preventDefault();
        
    }
    /*<form onSubmit={this.handleSubmit}>
          <label>
            Nom :
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>*/
  
    render() {
      return (
        <Form className="form"  ref={ form => this.messageForm = form }onSubmit={this.handleSubmit.bind(this)}>
<h1 class="title">Add a new shop item</h1>
  <Row>
    <Col>
      <FloatingLabel classcontrolId="floatingInput" label="Title" className="mb-3">
        <Form.Control  className="input" type="title" placeholder="Title" value={this.state.title} onChange={this.handleChangeTitle}/>
      </FloatingLabel>
    </Col>
    <Col>
      <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
        <Form.Control className="input" type="description" placeholder="Description" value={this.state.description} onChange={this.handleChangeDescription}/>
      </FloatingLabel>
    </Col>
  </Row>

  <Row>
    <Col>
      <FloatingLabel controlId="floatingInput" label="ImageUrl" className="mb-3">
        <Form.Control className="input" type="imageUrl" placeholder="ImageUrl" value={this.state.imageUrl} onChange={this.handleChangeImageUrl}/>
      </FloatingLabel>
    </Col>
    <Col>
      <FloatingLabel controlId="floatingInput" label="userId" className="mb-3">
        <Form.Control className="input" type="userId" placeholder="userId" value={this.state.userId} onChange={this.handleChangeUserId}/>
      </FloatingLabel>
    </Col>
  </Row>

  <Row>
    <Col>
      <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
        <Form.Control className="input" type="price" placeholder="Price" value={this.state.price} onChange={this.handleChangePrice}/>
      </FloatingLabel>
    </Col>
  </Row>

  <Button className="submit-btn" variant="primary" type="submit">
    Submit
  </Button>

</Form>









      );
    }
  }

  export default CreateData