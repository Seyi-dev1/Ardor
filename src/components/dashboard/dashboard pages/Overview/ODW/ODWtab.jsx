import React from "react";
import "./odwtab.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { TbTarget } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import {
  CryptoCurrencyMarket,
  ForexCrossRates,
} from "react-ts-tradingview-widgets";
import Payments from "../../../../Payments/Payments";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabstyle = {
    color: "grey",
    fontSize: "1rem",
    fontWeight: "bold",

    "@media (maxWidth: 800px)": {
      fontSize: "0.5rem",
    },
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <span style={tabstyle} className="tab_title">
                <TbTarget /> Overview
              </span>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <span style={tabstyle} className="tab_title">
                <FaDollarSign /> Payments
              </span>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <span style={tabstyle} className="tab_title">
                <BiDollarCircle /> Exchange
              </span>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CryptoCurrencyMarket
          colorTheme="dark"
          width="100%"
          height={400}
        ></CryptoCurrencyMarket>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Payments />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ForexCrossRates
          colorTheme="dark"
          height={400}
          width="100%"
        ></ForexCrossRates>
      </TabPanel>
    </Box>
  );
}
const ODWTab = () => {
  return (
    <div className="tabs">
      <BasicTabs />
    </div>
  );
};

export default ODWTab;
