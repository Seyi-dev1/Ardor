import React from "react";
import "./csftab.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StockMarket, ForexCrossRates } from "react-ts-tradingview-widgets";

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
    color: "black",
    fontSize: "1rem",
    fontWeight: "bold",

    "@media (maxWidth: 800px)": {
      fontSize: "0.5rem",
    },
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "#474cec" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <span style={tabstyle} className="tab_title">
                STOCKS & EFTs
              </span>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <span style={tabstyle} className="tab_title">
                FOREX
              </span>
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <StockMarket colorTheme="dark" height={400} width="100%"></StockMarket>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ForexCrossRates
          colorTheme="dark"
          height={400}
          width="100%"
        ></ForexCrossRates>
      </TabPanel>
    </Box>
  );
}
const CSFTab = () => {
  return (
    <div className="tabs">
      <BasicTabs />
    </div>
  );
};

export default CSFTab;
