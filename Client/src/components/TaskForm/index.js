import React from "react";
import { MdAdd } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Button, Col, Row } from "react-bootstrap";

const TaskForm = ({ todo, handleTodo, handleSubmit, edit }) => {
  return (
    <>
      {/* <Container>
  <Row>
    <Col xs={12} md={8}>
      xs=12 md=8
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
  </Row>
  </Container> */}

      {/* <Container>
        <Row>
          <Col xs={12} md={6}> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={6}>
            Add Your To Do's
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              input="text"
              placeholder="e.g Go grocery"
              value={todo}
              onChange={handleTodo}
              id="todo"
              name="todo"
            />
          </Col>

          <Col sm={10}>
            <Button
              type="submit"
              className={
                edit
                  ? "btn-success btn-btn-block mt-3"
                  : "btn-primary btn-btn-block mt-3"
              }
            >
              {edit ? "edit" : ""}

              <MdAdd className="btn-icon" />
            </Button>
          </Col>

          {/* <Form.Label column sm={6}>
                  Add Time
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    // type="date"
                    // placeholder="e.g 05/09/84"
                    placeholder="e.g 100"
                    className="form-control"
                    type="number"
                    id="amount"
                    name="amount"
                    // value={amount}
                    // onChange={handleAmount}
                  />
                </Col> */}
          <></>
        </Form.Group>
      </Form>
      {/* </Col>
        </Row>
      </Container> */}

      {/* <Container>
        <Row>
          <Col sm={6}>
            <form onSubmit={handleSubmit}>
              <div className="form-center">
                <div className="form-group">
                  <label htmlFor="charge">charge</label>
                  <input
                    type="text"
                    className="form-control"
                    id="charge"
                    name="charge"
                    placeholder="e.g rent"
                    value={charge}
                    onChange={handleCharge}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="amount">amount</label>
                  <input
                    className="form-control"
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="e.g 1000"
                    value={amount}
                    onChange={handleAmount}
                  />
                  <button type="submit" className="btn-submit">
                    {edit ? "edit" : "submit"}
                    <MdAdd className="btn-icon" />
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default TaskForm;
