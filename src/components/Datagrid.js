import React from 'react'
import { Container} from 'react-bootstrap';
import { Pie, PieChart, Cell, ResponsiveContainer} from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Sidebar from './Sidebar.js'

import '../style/Dashboard.css'


class Datagrid extends React.Component{
    state = {
        data: {

        },

        selectedFilters: {
            "Business Unit": 'Any',
            "Post Type": 'Any',
            "Region": 'Any',
            "Sentiment": 'Any',
            "Sub Type": 'Any',
            "Topic": 'Any',
            'indicator': 'Any'
        }

    }

    componentDidMount(){
        //regex to remove NaN from incoming JSON which would otherwise crash the json parse.
        fetch('https://sob7yipykh.execute-api.ap-southeast-2.amazonaws.com/data-insights-sample-data')
        .then(response => {
          return response.text();
        })
        .then(string => {
            let cleanJSON = JSON.parse(string.replace(/\bNaN\b/g, "null"));
            this.setState({data: cleanJSON},
            this.filterData)
        })
    }
    
    //function passed to Sidebar so it can update the filters here. 
    applyFilters = (childData) => {
        this.setState({selectedFilters: childData},
            this.filterData
        );
    }

    //Function to filter out any data objects which do not match the applied filters
    filterData = () => {

        //Create an object of only the applied filters to be checked against
        let filters = {}
        for(let filter in this.state.selectedFilters){
            if(this.state.selectedFilters[filter] !== 'Any'){
                filters[filter] = this.state.selectedFilters[filter]
            }
        }


        
        let data = this.state.data
        let filteredData = []
        //Loop through full set of data and check each object against filters. If any do not pass, break out of loop early and move on. 
        for (let i = 0; i < data.length; i++) {
            let canBeAdded = true
            for (const key in filters) {
                if(data[i][key] !== filters[key]){
                    canBeAdded = false;
                    break;
                }
            }
            if(canBeAdded){
                filteredData.push(data[i])
            }
            
        }

        //create a new set of data in state which has been filtered to match the sidebar
        this.setState({filteredData: filteredData},
            this.updateCharts)
    }


    //Function to update all the charts
    updateCharts = () => {

        //Declaring empty chart data to make it easier to build later
        let tempPieChartData = {
            "Positive": 0,
            "Neutral": 0,
            'Negative': 0
        }

        let tempStackedBarChartData = {
            "NSWS": [0,0,0],
            "QLD": [0,0,0],
            "NSW": [0,0,0],
            "NSWN": [0,0,0],
            "WA": [0,0,0],
            "NAT": [0,0,0],
            "VIC": [0,0,0],
            null: [0,0,0]
        }

        let tempTopicBarChartData = {}


        //Loop through the filtered data and update the above temp data fields with sentiment values
        for (let i = 0; i < this.state.filteredData.length; i++) {

            switch(this.state.filteredData[i]["Sentiment"]){
                case "Positive":
                    tempPieChartData["Positive"] = tempPieChartData["Positive"] + 1;
                    tempStackedBarChartData[this.state.filteredData[i]["Region"]][0] = tempStackedBarChartData[this.state.filteredData[i]["Region"]][0] + 1;
                    if(tempTopicBarChartData[this.state.filteredData[i]["Topic"]]){
                        tempTopicBarChartData[this.state.filteredData[i]["Topic"]] += 1;
                    } else if(this.state.filteredData[i]["Topic"] != null){
                        tempTopicBarChartData[this.state.filteredData[i]["Topic"]] = 1;
                    }
                    break;
                case "Neutral":
                    tempPieChartData["Neutral"] = tempPieChartData["Neutral"] + 1;
                    tempStackedBarChartData[this.state.filteredData[i]["Region"]][1] = tempStackedBarChartData[this.state.filteredData[i]["Region"]][1] + 1;
                    break;
                case "Negative":
                    tempPieChartData["Negative"] = tempPieChartData["Negative"] + 1;
                    tempStackedBarChartData[this.state.filteredData[i]["Region"]][2] = tempStackedBarChartData[this.state.filteredData[i]["Region"]][2] + 1;
                    break;
                default:
                    break;

            }
            
        }

        //create the data which will be used in the Region by Sentiment graph
        let stackedBarChartData = [];
        for (const region in tempStackedBarChartData) {
            let regionName = region;
            if(region === 'null'){
                regionName = "Other"
            }
            stackedBarChartData.push({
                name: regionName,
                Positive: tempStackedBarChartData[region][0],
                Neutral: tempStackedBarChartData[region][1],
                Negative: tempStackedBarChartData[region][2]
            })
        }

        //create data for top5 topics graph

        //small bit of code to create an array of topics sorted by number of positive sentiments
        const sortedTopics = [];
        for(const topic in tempTopicBarChartData){
            sortedTopics.push([topic, tempTopicBarChartData[topic]])
        }
        sortedTopics.sort((a, b) => b[1] - a[1])

        //create the array and loop through the sorted topics no more than 5 times to create the top 5. 
        let topicBarChartData = [];
        for (let i = 0; i < sortedTopics.length; i++) { 
            topicBarChartData.push({
                name: sortedTopics[i][0],
                value: sortedTopics[i][1]
            })
            if(i >= 4){
                break;
            }
        }

        //Sets the state which will be used by the graphs to display the data
        this.setState({
            pieChartData: [
                {
                    name: "Positive",
                    value: tempPieChartData["Positive"]
                },
                {
                    name: "Neutral",
                    value: tempPieChartData["Neutral"]
                },
                {
                    name: "Negative",
                    value: tempPieChartData["Negative"]
                }
            ],
            stackedBarChartData: stackedBarChartData,
            topicBarChartData: topicBarChartData

        })

    }




    render(){

        return(
            <Container className='datagrid'>
                <Sidebar sendData={this.applyFilters}/>
                <div className="graph-container">
                    <div className='graphs graph1'>
                        <div className='graph-title'>POST VOLUME BY SENTIMENT</div>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie data={this.state.pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} label>
                                    <Cell dataKey="Positive" fill='#839C9A'/>
                                    <Cell dataKey="Neutral" fill='#B3B3B3'/>
                                    <Cell dataKey="Negative" fill='#B98A5E'/>
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='graphs graph2'>
                        <div className='graph-title'>TOP 5 TOPICS AMONG POSITIVE SENTIMENT</div>
                        <ResponsiveContainer>
                                <BarChart 
                                    data={this.state.topicBarChartData}
                                    layout="vertical" barCategoryGap={2}
                                    margin={{ top: 10, right: 35, left: 0, bottom: 10 }}>
                                <Tooltip />
                                <XAxis type="number" hide/>
                                <YAxis type="category" dataKey="name" hide/>
                                    
                                <Bar dataKey="value" stackId="a" fill="#839C9A" label={{position: 'right'}} />
                                
                            </BarChart>
                            </ResponsiveContainer>
                    </div>
                    <div className='graphs graph3'>
                        <div className='graph-title'>REGION BY SENTIMENT</div>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                            width={500}
                            height={300}
                            data={this.state.stackedBarChartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 0,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Negative" stackId="a" fill="#B98A5E" />
                            <Bar dataKey="Neutral" stackId="a" fill="#B3B3B3" />
                            <Bar dataKey="Positive" stackId="a" fill="#839C9A" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </Container>
        );//return
    }//render
}//class Datagrid

export default Datagrid