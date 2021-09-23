import React, { useEffect } from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import Form from "./Form";
import {
  getRequestToken,
  getUserValidation,
  getUserSessionId,
} from "../../actions/authenticationActions";

const ModalDialog = ({
  modalOpen,
  handleModalClose,
  getRequestToken,
  getUserValidation,
  isError,
  requestToken,
  isValidated,
  sessionId,
  errorMessage,
}) => {
  useEffect(() => {
    if (modalOpen) {
      getRequestToken();
      getUserValidation();
      getUserSessionId()
    }
  }, [getRequestToken, getUserValidation, getUserSessionId, modalOpen]);

  // console.log("requesToken: " + requestToken);
  return (
    <Dialog open={modalOpen} onClose={handleModalClose}>
      <Form handleModalClose={handleModalClose} />
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  console.log("state: " + state.requestTokenReducer);
  return {
    requestToken: state.requestTokenReducer.requestToken,
    //   isValidated: state.userValidationReducer.isValidated,
    //   isError: state.userValidationReducer.isError,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getRequestToken: () => dispatch(getRequestToken()),
    getUserValidation: () => dispatch(getUserValidation()),
    getUserSessionId: () => dispatch(getUserSessionId()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDialog);
