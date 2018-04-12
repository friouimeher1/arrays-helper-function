import React, { Component } from "react"
import { TabsContainer, Tabs, Tab, FontIcon } from "react-md"

import image from "./flaringImage.png"
import dashboard from "./dashboard.png"

import "./flarinf.scss"

const FlaringTab = props => {
  const {
    Company,
    CompanyName,
    Block,
    WorkingHours,
    Status,
    TableRouting,
  } = props.data
  return (
    <div className="Container">
      <div className="TabContainer">
        <TabsContainer colored className="Tab">
          <Tabs tabId="simple-tab">
            <Tab label="Summary">
              <div className="TabContent">
                <div className="CompanyInfo">
                  <div className="InfoHeader">
                    <div className="Logo">
                      <img src={image} />
                    </div>
                    <div className="Info">
                      <h4>{Company} </h4>

                      <h5>Company: {CompanyName} </h5>
                      <h5> Block:{Block} </h5>
                    </div>
                  </div>
                  <div className="InfoFooter">
                    <div className="WorkingHours ">
                      <FontIcon>access_time</FontIcon>
                      Working Hours: <br />
                      <p>{WorkingHours} </p>
                    </div>
                    <div className="Status">
                      <FontIcon>access_time</FontIcon>
                      Status: <br />
                      <p>{Status} </p>
                    </div>
                  </div>
                </div>

                <div className="DashBoard">
                  <div className="Calender">
                    <span>3 DAY </span> <span> 5 DAY</span>{" "}
                    <span> 1 WEEK </span> <span> 3 WEEK </span>{" "}
                    <span>
                      <FontIcon>date_range</FontIcon>{" "}
                    </span>
                  </div>
                  <div className="ImageDashboard">
                    <img src={dashboard} alt="OK"/>
                  </div>
                </div>

                <div className="DataSummary">
                  <h3> Routine & Non-Routine Data Summary </h3>
                  <div className="Table">
                    <div className="tableRouting">
                      <p> Avge </p> <span> {TableRouting.Avge} </span>
                    </div>
                    <div className="tableRouting">
                      <p> Total XXXXX </p>{" "}
                      <span> LP: {TableRouting.TotalX.LP}</span>{" "}
                      <span> AP: {TableRouting.TotalX.AP}</span>
                    </div>
                    <div className="tableRouting">
                      <p> TotalPlan </p> <span> {TableRouting.TotalPlan}</span>
                    </div>
                    <div className="tableRouting">
                      <p> H2S</p> <span> {TableRouting.H2S}</span>
                    </div>
                    <div className="tableRouting">
                      <p> Avge</p> <span> {TableRouting.Avge}</span>
                    </div>
                    <div className="tableRouting">
                      <p> NonRoutineReport </p>{" "}
                      <span> {TableRouting.NonRoutineReport} </span>
                    </div>
                    <div className="tableRouting">
                      <p> TotalNonRoutine </p>{" "}
                      <span> {TableRouting.TotalNonRoutine} </span>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab label="Filters" />
          </Tabs>
        </TabsContainer>
      </div>
    </div>
  )
}
export default class Flaring extends Component {
  render() {
    const data = {
      Company: "LEKHWAIR",
      CompanyName: "PDO",
      Block: "33",
      WorkingHours: "24 hrs",
      Status: "Operational",
      TableRouting: {
        Avge: "value",
        TotalX: {
          LP: "",
          AP: "value",
        },
        TotalPlan: "value",
        H2S: "value",
        NonRoutineReport: "value",
        TotalNonRoutine: "value",
      },
    }
    return <FlaringTab data={data} />
  }
}
