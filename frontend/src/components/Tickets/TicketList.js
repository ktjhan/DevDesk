import React, { Component } from "react";
import { connect } from "react-redux";
import { ItemDiv } from "../../hooks";
import TicketItem from "./TicketItem";
import { getAllData } from "../../actions/actions";
import Dashboard from "../Dashboard/Dashboard";

class TicketList extends Component {
  componentDidMount() {
    this.props.getAllData();
    // console.log(this.props);
  }
  render() {
    return (
      <Dashboard loggedUser={this.props.user}>
        <ItemDiv>
          {this.props.tickets.map(ticket => (
            <TicketItem
              ticket={ticket}
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              category={ticket.category}
              createdBy={ticket.user}
              description={ticket.description}
              whatwastried={ticket.what_was_tried}
            />
          ))}
        </ItemDiv>
      </Dashboard>
    );
  }
}


const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  { getAllData }
)(TicketList);
