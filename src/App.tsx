import React, { Component } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import {
  User,
  Counter,
  PropsComp,
  GetInput,
  HandleForm,
  ConstructorComp,
  RenderComp,
  ComponentDidMountComp,
  ComponentDidUpdate,
  ShouldComponentUpdate,
  ComponentWillUnmount
} from "./components";



type MyState = {
  name: string;
  value: string;
};


class App extends Component<{},MyState> {

  constructor(props:{}) {
    super(props);
    this.state = {
      name:"Alfaiz",
      value: "1"
    };
  }

  handleChange = (event: any, newValue: string) => {
    this.setState({value: newValue});
  };

  render() {
    return (
      <>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={this.state.value}>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={this.handleChange} aria-label="lab API tabs example">
                <Tab label="User" value="1" />
                <Tab label="Counter" value="2" />
                <Tab label="Props Comp" value="3" />
                <Tab label="Get Input" value="4" />
                <Tab label="Handle Form" value="5" />
                <Tab label="Constructor Comp" value="6" />
                <Tab label="Render Comp" value="7" />
                <Tab label="Component Did Mount" value="8" />
                <Tab label="Component Did Update" value="9" />
                <Tab label="Should Component Update" value="10" />
                <Tab label="Component Will Unmount" value="11" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <User />
            </TabPanel>

            <TabPanel value="2">
              <Counter />
            </TabPanel>

            <TabPanel value="3">
              <PropsComp name={`Alfaiz Khan`} role={`React Developer`} age={23} />
              <PropsComp name={`Cristiano Ronaldo`} role={`Superstar Footballer`} age={36} />
            </TabPanel>

            <TabPanel value="4">
              <GetInput />
            </TabPanel>

            <TabPanel value="5">
              <HandleForm />
            </TabPanel>

            <TabPanel value="6">
              <ConstructorComp />
            </TabPanel>

            <TabPanel value="7">
              <RenderComp name={this.state.name} />
              <div className="text-center">
                <button onClick={()=>this.setState({name:"Alfaiz Khan"})}>Update Name</button>
              </div>
            </TabPanel>

            <TabPanel value="8">
              <ComponentDidMountComp />
            </TabPanel>

            <TabPanel value="9">
              <ComponentDidUpdate />
            </TabPanel>

            <TabPanel value="10">
              <ShouldComponentUpdate />
            </TabPanel>

            <TabPanel value="11">
              <ComponentWillUnmount />
            </TabPanel>

          </TabContext>
        </Box>
      </>
    );
  }
}

export default App;
