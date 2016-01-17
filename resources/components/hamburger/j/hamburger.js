
var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {   
    var str = '<nav id="lNav" class="navWrp bgdef">'
                +'<div class="navCont" id="navscroll">'
                +'<ul class="nav">'
                +'<!--<li><a href="http://www.naukrigulf.com"><small class="homeIco"></small>Home</a></li>-->'
                +     '<li><a href="https://login.naukrigulf.com/ni/nimnj/mnj_main.php?source="><small class="navLoginIco"></small>Login</a></li>'
                +'<li><a href="/search-jobs"><small class="navSearchIco"></small>Search Jobs</a></li>'
                +' <li><a href="/ng/jobsearch/searchresult/shortlistedJobs"><small class="navShortlistIco"></small>Shortlisted Jobs</a></li>'
                +'       <li><a href="http://www.naukrigulf.com/ni/nimnj/mnj_aboutus.m.php?"><small class="navAboutIco"></small>About Us</a></li>'
                +' <li><a href="http://www.naukrigulf.com/ni/nimnj/mnj_feedback.php?"><small class="navFeedbackIco"></small>Feedback</a></li>'
                +'<li class="ftfx">'
                +'<a href="http://www.naukrigulf.com?env=en_locale">Visit Desktop Site</a>'
                +' <small>All rights reserved &copy; 2001- 2013 Info Edge (India) Ltd.</small>'
                +'</li>'
                +'</ul>   ' 
                +'</div>'
                +'</nav> ';

    this.innerHTML = str;

};


proto.attachedCallback = function() {

    var opner=$('#dataIcon'),//button which open listview 
    mainWrp=$('#slp'),//main content wrapper  
    ifFix=false,//element that has fixed position 
    elm2open=$('#lNav'),//list container 
    reqWidth=266,//list-container width  
    dir="left";//direction left or riht 
    listViewer(opner,mainWrp,ifFix,elm2open,reqWidth,dir); 

};

document.registerElement('nk-hamburger', {prototype: proto});





