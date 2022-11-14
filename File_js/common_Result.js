//[1.0.0.0]
function common_Result(){};

common_Result.prototype._Result = function (Code, Result_json) {

  let ErrorMsg = "";
  let Last_Result = {};
  if (!Result_json) {
    Result_json = {};
  }
  switch (Code) {
    case "8000F100": 
      ErrorMsg = "Not Valid Json Format";
      break;
    case "8000F200": 
      ErrorMsg = "parameter Null";
      break;
    case "8000FFFF": 
      ErrorMsg = "UnKnown Error";
      break;      
    default: 
      ErrorMsg = "";
  }
    Last_Result.ErrorCode = Code;
    Last_Result.ErrorMsg = ErrorMsg;
    Last_Result.Result = Result_json;

    return Last_Result;

};

module.exports = common_Result;
