#!/usr/bin/env node
/**
Author: Christopher Mortimer
Date:   2020-10-01
Desc:   Testing using Lunar
Usage:  npm run main
Notes:  Using this https://lunrjs.com/guides/getting_started.html
*/

const lunr = require("lunr");

/**
 * Print the raw HTML of the pjax-container 
 */
const lunarTest = () => {
  var documents = [{
    "name": "headsupp",
    "date": "01 Oct 2020",
    "text": `
About HeaDS UPP
The Health Demand and Supply Utilisation Patterns Planning (HeaDS UPP) Tool is a new integrated source of health workforce and services data that informs workforce planning and analysis. HeaDS UPP brings health data together to visually highlight how the community uses and accesses health services and the health workforce. It provides a single access point to workforce data from a number of data sets such the Medicare Benefits Schedule, Australian General Practitioner Training, Royal Flying Doctor Service Program, National Health Workforce data set, National Health Service Directory, and others
You can see this data mapped according to geographical regions, such as the newly created General Practitioner (GP) Catchment areas, and use this data to better understand workforce issues at a local level
Additional information is available in the HeaDS UPP Tool Factsheet
The HeaDS UPP Tool
HeaDS UPP will be available to a variety of government and non-government organisations involved in health workforce planning, including
Rural Workforce Agencies
Primary Health Networks
Local Health Districts
Medical Colleges
States and Territory governments
Please email the Department via headsupp@health.gov.au if you have any questions about HeaDS UPP
`
  }, {
    "name": "home",
    "date": "01 Oct 2020",
    "text": `
Welcome to the Department’s Health Workforce Data website
This website and integrated Health workforce data tool provide access to reports and summary tables for the health workforce in Australia
Latest resources
`  
  }, {
    "name": "met",
    "date": "01 Oct 2020",
    "text": `
Medical Education and Training (3rd) report tables
With the functions of the Medical Training Review Panel (MTRP) report being absorbed by National Medical Training Advisory Network (NMTAN) in early 2017, NMTAN agreed to release medical education and training (MET) data similar to that published in previous MTRP reports
The newly created Medical Education and Training (MET) Dataset is made available online each year and reports the annual changes in medical education and training in Australia
The dataset aims to continue the time series from MTRP and is presented in the same tabled format as the former publications
The tables contained in the MET report are found below, by chapter and by keyword search
`
}];

  var idx = lunr(function () {
    this.ref('name')
    this.field('text')
    this.metadataWhitelist = ['position']
  
    documents.forEach(function (doc) {
      this.add(doc)
    }, this)
  });

  var res = idx.search("education training");
  console.log(JSON.stringify(res));
}

/**
Process relevant command.
*/
const processCommand = (command, args) => {
  lunarTest();
}

/**
Initialisation
*/
(() => {
  const [, , command, ...args] = process.argv;
  processCommand(command, args);
})();