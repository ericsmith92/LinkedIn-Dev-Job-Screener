//array of skills to check against
const skills = ["CSS", "JavaScript", "AJAX", "html", "git", "CSS3", "html5", "php", "bootstrap", "ASP.NET", "LASS", "SASS", "Angular", "JQUERY", "HTML5"];

//grab all bullet points in the job details div
const jobDetails = document.querySelector('#job-details');

//get all li's from jobDetails
const bulletPoints = jobDetails.querySelectorAll('li');

//array to push each li textContent into
let textCont = [];


bulletPoints.forEach(point => textCont.push(point.textContent.split(' ')));

//flatten array with ES6 notation
const textContFlat = [].concat(...textCont);

for(var i = 0; i < textContFlat.length; i++){
    if(skills.includes(textContFlat[i])){
        console.log(textContFlat[i]);
    }
}

