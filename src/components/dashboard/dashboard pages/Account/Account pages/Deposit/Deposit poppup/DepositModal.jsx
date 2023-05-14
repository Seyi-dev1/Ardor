import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({ address }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CopyToClipboard text={address}>
        <Button
          style={{
            color: "#fff",
            fontWeight: "normal",
            textAlign: "center",
            fontSize: "1rem",
            background: "black",
            fontFamily: "montserrat",
            padding: "3px 15px",
            borderRadius: "0px",
          }}
          onClick={handleOpen}
        >
          Copy
        </Button>
      </CopyToClipboard>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{ ...style, width: 300 }}
          style={{
            display: "grid",
            justifyItems: "center",
            borderRadius: "10px",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: "green",
              fontWeight: "bold",
              textAlign: "center",
              margin: "1rem auto",
              fontSize: "1rem",
              fontFamily: "montserrat",
            }}
          >
            Address Copied successfully!
          </h2>

          <Button
            style={{
              color: "#fff",
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "1rem",
              background: "black",
              fontFamily: "montserrat",
              padding: "5px 15px",
              borderRadius: "0px",
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function DepositModal({ address }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{
          color: "goldenrod",
          fontWeight: "bold",
          fontSize: "1rem",
          fontFamily: "montserrat",
          background: "black",
          borderRadius: "0px",
          padding: "5px 15px",
        }}
        onClick={handleOpen}
      >
        DEPOSIT
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, width: 400 }}
          style={{
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
            gap: "1rem",
            borderRadius: "10px",
          }}
        >
          <h2
            id="parent-modal-title"
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "1.2rem",
              fontFamily: "montserrat",
            }}
          >
            Deposit to the below address:
          </h2>
          <p
            id="parent-modal-description"
            style={{
              color: "goldenrod",
              fontWeight: "normal",
              fontSize: "0.8rem",
              fontFamily: "montserrat",
            }}
          >
            {address}
          </p>
          <ChildModal address={address} />
        </Box>
      </Modal>
    </div>
  );
}
