import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CButton from "../CButton/CButton";

export default function TemporaryDrawer({ anchor }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        color: "black",
        background: "#fff",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 220,
        height: "120%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItem key="15">
        <ListItemText
          primary={
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bolder",
              }}
            >
              CRYPTOWEBSITE
            </span>
          }
          sx={{
            display: "inline",
            fontWeight: "bold",
            fontSize: 14,
            color: "black",
          }}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemButton>
          <ListItemText
            primary={
              <CButton
                handleClick={() => navigate("/signup")}
                text="REGISTER NOW"
              />
            }
          />
        </ListItemButton>
      </ListItem>

      <Divider />
      <List>
        <ListItem key="5" disablePadding>
          <a href="#plans">
            <ListItemButton>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "13px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    PLANS & PRICING
                  </span>
                }
              />
            </ListItemButton>
          </a>
        </ListItem>
        <Divider />
        <ListItem key="0" disablePadding>
          <a href="#getstarted">
            <ListItemButton>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "13px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    GET STARTED
                  </span>
                }
              />
            </ListItemButton>
          </a>
        </ListItem>
        <ListItem key="1" disablePadding>
          <a href="#faq">
            <ListItemButton>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "13px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    FAQ
                  </span>
                }
              />
            </ListItemButton>
          </a>
        </ListItem>
        <ListItem key="2" disablePadding>
          <a href="#contact">
            <ListItemButton>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "13px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    CONTACT US
                  </span>
                }
              />
            </ListItemButton>
          </a>
        </ListItem>
      </List>
      <Divider />
      <Divider />
      <ListItem>
        <ListItemButton>
          <ListItemText
            primary={
              <CButton
                background="black"
                handleClick={() => navigate("/login")}
                text="SIGN IN"
              />
            }
          />
        </ListItemButton>
      </ListItem>

      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Button onClick={toggleDrawer("right", true)}>
          <FaBars style={{ color: "black", fontSize: "20px" }} />
        </Button>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
