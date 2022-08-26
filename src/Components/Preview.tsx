import React from 'react';

const axios = require('axios');
const xml2js = require('xml2js');
const convert = require('xml-js');

const ApiKey:string = "140BgL1lrYYis3lxa32ZBVh6KFkx0Vsto0WMwp5mK2msddIBP93r9ewwTbom34Nnm2pgfaKX34NXmzzrgnQqbQ%3D%3D";

/* const url:string = "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSHRent?LAWD_CD=11110&DEAL_YMD=201512&serviceKey=" + ApiKey;

 */
/* 
const getData = async() => {
  const xml = axios.get(url, {
    headers: {
      "withCredentials":true,
    }
  });
  console.log(xml);
  const json = convert.xml2json(xml, {compact: true})
  return JSON.parse(json);
}
 */

var xhr = new XMLHttpRequest();
let url = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSHRent'; /*URL*/
let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키'; /*Service Key*/
queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent('11110'); /**/
queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent('201512'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');

console.log(xhr);



/* 

const xmlToJson = async(xml:XMLDocument) => {
  console.log(xml);

  const parser = new xml2js.Parser();
  let result;

  try{
    result = await parser.parseStringPromise(xml)
    console.log(result);
    console.log("resultCode:", result.response.header[0].resultCode[0]);
    const json = JSON.stringify(result);
    console.log(json);
  }catch(err) {
    console.error(err);
  }

} */

const authKey = "140BgL1lrYYis3lxa32ZBVh6KFkx0Vsto0WMwp5mK2msddIBP93r9ewwTbom34Nnm2pgfaKX34NXmzzrgnQqbQ%3D%3D";
const autoBey = "140BgL1lrYYis3lxa32ZBVh6KFkx0Vsto0WMwp5mK2msddIBP93r9ewwTbom34Nnm2pgfaKX34NXmzzrgnQqbQ%3D%3D"
const baseURL = 'http://api.visitkorea.or.kr/openapi/service/rest/SpnService/areaCode';


type ApiParams = [
  string,
  number,
  number,
  string,
  string,
  number,
]
/* 

const getAPI = async(prams:ApiParams) => {
  let url = 'http://api.visitkorea.or.kr/openapi/service/rest/SpnService/areaCode'; 
  let queryParams = '?' + encodeURIComponent('serviceKey') + '='+authKey; 
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); 
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
  queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC');
  queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest');
  queryParams += '&' + encodeURIComponent('areaCode') + '=' + encodeURIComponent('1');
  
  try{
    const res = await axios.get(url + queryParams);
    console.log(res);
  }catch(error){
    console.log(error);
  }
  
}

getAPI([authKey, 1, 1, "ETC", "Show-Congestion-Graph", 1]); */


/* 
const getXMLfromAPI = (url:string, authKey:string) => {
  const reqURL = url + '?serviceKey=' + authKey + '&numOfRows=10&pageNo=1&dataCd=ASOS&dateCd=DAY&startDt=20100101&endDt=20100102&stnIds=108';

  let getXML = fetch(reqURL, {
      headers : {
          mrethod : 'GET',
      }
  }).then(function(result){
      return result.text();
  }).then(function(xmlData){
  //가져온 XML을 JSON으로 변환
      let XmlNode = new DOMParser().parseFromString(xmlData, 'text/xml');
      console.log(xmlToJson(XmlNode));

  })
};


function xmlToJson(xml:any) {
  // Create the return object
  let obj: any = {};

  if (xml.nodeType == 1) {
    // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (let j = 0; j < xml.attributes.length; j++) {
        let attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) {
    // text
    obj = xml.nodeValue;
  }

  // do children
  // If all text nodes inside, get concatenated text from them.
  let textNodes = [].slice.call(xml.childNodes).filter(function(node: {nodeType: number}) {
    return node.nodeType === 3;
  });
  if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
    obj = [].slice.call(xml.childNodes).reduce(function(text, node:{nodeValue: any}) {
      return text + node.nodeValue;
    }, "");
  } else if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i++) {
      let item = xml.childNodes.item(i);
      let nodeName = item.nodeName;
      if (typeof obj[nodeName] == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push == "undefined") {
          let old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
} */

function Preview(){
  return(
    <div>
      {123}
    </div>
  )
}
export default Preview;
