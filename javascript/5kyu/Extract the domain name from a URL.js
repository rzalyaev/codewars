// https://www.codewars.com/kata/514a024011ea4fb54200004b

// My variation

function domainName(url){
  let croppedStartURL = url.replace(/[htpsw:/.]+(\/|\.)/, "");
  return croppedStartURL.replace(/\.[a-z./]+/, "");
}

// Best practice

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};