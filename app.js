// const ConsoleWindow = require("node-hide-console-window");
//To hide your console just call:
// ConsoleWindow.hideConsole(); <- cmd 창 지우기 
// playwright 1.23.0
const { chromium } = require('playwright');
const common_Result = require(__dirname + "/File_js/common_Result.js");

function IsJsonString(str) {
  try {
    inputJson = JSON.parse(str);
    return (typeof inputJson === 'object');
  } catch (e) {
    return false;
  }
}

function myPlayWright () {
  const base64Encoded = process.argv[2];

  if (!base64Encoded) {// const ConsoleWindow = require("node-hide-console-window");
//To hide your console just call:
// ConsoleWindow.hideConsole(); <- cmd 창 지우기 
// playwright 1.23.0
const { chromium } = require('playwright');
const common_Result = require(__dirname + "/File_js/common_Result.js");

function IsJsonString(str) {
  try {
    inputJson = JSON.parse(str);
    return (typeof inputJson === 'object');
  } catch (e) {
    return false;
  }
}chromium.launch

function myPlayWright () {
  const base64Encoded = process.argv[2];

  if (!base64Encoded) {
    return common_Result.prototype._Result("8000F200");
  }
  console.log("1. Base64: " + base64Encoded);

  const parameters = Buffer.from(base64Encoded, "base64").toString('utf8');
  console.log("2. PlainText: " + parameters);

  if (!IsJsonString(parameters)) { //Json 형식이 아님으로 종료
    return common_Result.prototype._Result("8000F100");
  }

  var json = JSON.parse(parameters);
  const moduleName = json['FileName'];
  const jobName = json['jobName'];
  const ModuleSite = require(__dirname + "/File_js/" + moduleName);

  console.log("JS 실행");
  ModuleSite.prototype[jobName](chromium, parameters).then (function (data) {
      console.log("Result data: " + data);
      console.log("json String data: " + JSON.stringify(data) );
  });
      
}

myPlayWright();
    return common_Result.prototype._Result("8000F200");
  }
  console.log("1. Base64: " + base64Encoded);

  const parameters = Buffer.from(base64Encoded, "base64").toString('utf8');
  console.log("2. PlainText: " + parameters);

  if (!IsJsonString(parameters)) { //Json 형식이 아님으로 종료
    return common_Result.prototype._Result("8000F100");
  }

  var json = JSON.parse(parameters);
  const moduleName = json['FileName'];
  const jobName = json['jobName'];
  const ModuleSite = require(__dirname + "/File_js/" + moduleName);

  console.log("JS 실행");
  ModuleSite.prototype[jobName](chromium, parameters).then (function (data) {
      console.log("obJect data: " + data);
      console.log("String data: " + JSON.stringify(data) );
  });
      
}

myPlayWright();
