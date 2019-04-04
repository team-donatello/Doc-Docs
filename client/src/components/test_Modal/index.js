import React from "react";
import ReactDOM from "react-dom";

const JSX_MODAL = (
    <div className="modal fade" id="interactionModal">
        <div className="modal-dialog">

            <div className="modal">
                <button type="button" className="close" data-dismiss="modal"> &times; </button>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter New Perscription"  />
                    <div className="input-group-btn">
                        <button className="btn btn-default" id="add" >
                            <i className="glyphicon glyphicon-plus" />
                        </button>
                    </div>

                </div>
                <div className="resultDiv">
                    results
                </div>
            </div>

        </div>
    </div>


);


function Modal(props) {
    return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"));
}


export default Modal;