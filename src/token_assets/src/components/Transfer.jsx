import React, { useState } from "react";
import { token } from "../../../declarations/token";
import { Principal } from "@dfinity/principal";

function Transfer() {
  const [recipientID, setRecipientID] = useState("");
  const [amount, setAmount] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  
  async function handleClick() {
    setIsDisabled(true);
   const recipient = Principal.fromText(recipientID);
    const amountToTransfer = Number(amount);
    const result = await token.transfer(recipient, amountToTransfer);
    setFeedback(result);
    setIsHidden(false);
    setIsDisabled(false);
    setRecipientID("");
    setAmount("");

    
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                placeholder="Enter Principal ID"
                value={recipientID}
                onChange={(e) => setRecipientID(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick}
          disabled={isDisabled}
          >
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>
          {feedback}
        </p>
      </div>
    </div>
  );
}

export default Transfer;
