import React, { useEffect } from "react";
import { connect } from "react-redux";

import { deleteTicket, getHelpData, getData } from "../../actions/actions";
import Dashboard from "../Dashboard/Dashboard";
import { ItemDiv } from "../../hooks/index";
import TicketItem from "./TicketItem";

const Test = props => {
  console.log("MyTickets props:", props.tickets)

  useEffect(() => {
    // props.getHelpData();
    props.getData();
  },[])

  const createdTickets = props.tickets;

  // const assignedTickets = props.tickets

    return (
      <Dashboard>
        <ItemDiv>
          {createdTickets.map(ticket => (
            <TicketItem
              key={ticket.id}
              id={ticket.id}
              ticket={ticket}
              title={ticket.title}
              category={ticket.category}
              createdBy={ticket.student_id}
              assigned={ticket.assigned}
              resolved={ticket.resolved}
              assignedUser={ticket.assigned_user}
              description={ticket.description}
            />
          ))}
        </ItemDiv>
      </Dashboard>
    );
};

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { deleteTicket, getHelpData, getData }
)(Test);
