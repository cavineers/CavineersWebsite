(this.webpackJsonpcavineers=this.webpackJsonpcavineers||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(22),o=a.n(i),r=(a(29),a(30),a(23)),c=a(2),l=a(7),d=a(8),h=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"returnToMain",value:function(){sessionStorage.clear(),window.location.replace("/")}},{key:"openSide",value:function(){document.getElementById("side-menu").style.width="250px"}},{key:"closeSide",value:function(){document.getElementById("side-menu").style.width="0px"}},{key:"animations",value:function(e){var t=function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};t.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'.concat(this.txt,"</span>");var a=this,s=300-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500):(s=this.period,this.isDeleting=!0),setTimeout((function(){a.tick()}),s)};for(var a=document.getElementsByClassName("txt-rotate"),s=0;s<a.length;s++){var n=a[s].getAttribute("data-rotate"),i=a[s].getAttribute("data-period");n&&new t(a[s],JSON.parse(n),i)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(o);var r=document.querySelector(".introSec"),c=document.querySelector(".secondSec");document.body.style.overflow="hidden",setTimeout((function(){document.body.style.overflow="auto",r.style.animation="backgroundAnimation 0.80s linear",r.style.animationFillMode="forwards",c.style.animation="backgroundAnimationRev 0.80s linear",c.style.animationFillMode="forwards",document.getElementById("num").style.animation="changeColorToWhite 0.50s linear",document.getElementById("num").style.animationFillMode="forwards",document.getElementById("name").style.animation="changeColorToWhite 0.50s linear",document.getElementById("name").style.animationFillMode="forwards",document.getElementById("introTextCont").style.animation="changeColorToWhite 0.50s linear",document.getElementById("introTextCont").style.animationFillMode="forwards"}),2700),window.onbeforeunload=function(){window.scrollTo(0,0)}}}]),e}(),j=(a(19),a(31),a(0)),b=function(){return Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("span",{className:"open-slide",children:Object(j.jsx)("button",{type:"button",onClick:function(){return h.openSide()},children:Object(j.jsxs)("svg",{width:"30",height:"30",children:[Object(j.jsx)("path",{d:"M0,5 30,5",stroke:"#fff",strokeWidth:"5"}),Object(j.jsx)("path",{d:"M0,14 30,14",stroke:"#fff",strokeWidth:"5"}),Object(j.jsx)("path",{d:"M0,23 30,23",stroke:"#fff",strokeWidth:"5"})]})})}),Object(j.jsxs)("div",{className:"topnav",children:[Object(j.jsxs)("div",{style:{float:"left"},children:[Object(j.jsx)("a",{href:"/",children:"Home"}),Object(j.jsx)("a",{href:"/about",children:"About Us"}),Object(j.jsx)("a",{href:"/outreach",children:"Outreach"}),Object(j.jsx)("a",{href:"/sponsors",children:"Sponsors"}),Object(j.jsxs)("div",{className:"dropdown",children:[Object(j.jsxs)("a",{href:"/bots",className:"dropbtn",children:["Meet Our Robots",Object(j.jsx)("i",{style:{marginLeft:"4px"},className:"fa fa-caret-down"})]}),Object(j.jsxs)("div",{className:"dropdown-content",children:[Object(j.jsx)("a",{href:"/bots/2019",children:"2019"}),Object(j.jsx)("a",{href:"/bots/2018",children:"2018"}),Object(j.jsx)("a",{href:"/bots/2017",children:"2017"}),Object(j.jsx)("a",{href:"/bots/2016",children:"2016"}),Object(j.jsx)("a",{href:"/bots/2015",children:"2015"}),Object(j.jsx)("a",{href:"/bots/2014",children:"2014"}),Object(j.jsx)("a",{href:"/bots/2013",children:"2013"})]})]})]}),Object(j.jsxs)("div",{style:{float:"right"},children:[Object(j.jsx)("a",{target:"__blank",className:"socialMedia",href:"https://github.com/cavineers",children:Object(j.jsx)("i",{className:"fa fa-github"})}),Object(j.jsx)("a",{target:"__blank",href:"https://www.instagram.com/4541cavineers/?hl=en",className:"socialMedia",children:Object(j.jsx)("i",{className:"fa fa-instagram"})}),Object(j.jsx)("a",{target:"__blank",href:"https://twitter.com/4541cavineers",className:"socialMedia",children:Object(j.jsx)("i",{className:"fa fa-twitter"})}),Object(j.jsx)("a",{target:"__blank",href:"https://www.youtube.com/channel/UCU1wWjfG1Zcf-MTvqTj79Fg",className:"socialMedia",children:Object(j.jsx)("i",{className:"fa fa-youtube"})})]})]})]})},m=function(){return Object(j.jsxs)("div",{id:"side-menu",className:"side-nav",children:[Object(j.jsx)("button",{type:"button",className:"btn-close",onClick:function(){return h.closeSide()},children:"\xd7"}),Object(j.jsx)("a",{href:"/",children:"Home"}),Object(j.jsx)("a",{href:"/outreach",children:"Outreach"}),Object(j.jsx)("a",{href:"/about",children:"About Us"}),Object(j.jsx)("a",{href:"/sponsors",children:"Our Sponsors"}),Object(j.jsx)("a",{href:"/bots",children:"Meet Our Bots"}),Object(j.jsx)("a",{href:"/bots/2019",children:"\xa0\xa0\xa0\xa0\xa0-2019"}),Object(j.jsx)("a",{href:"/bots/2018",children:"\xa0\xa0\xa0\xa0\xa0-2018"}),Object(j.jsx)("a",{href:"/bots/2017",children:"\xa0\xa0\xa0\xa0\xa0-2017"}),Object(j.jsx)("a",{href:"/bots/2016",children:"\xa0\xa0\xa0\xa0\xa0-2016"}),Object(j.jsx)("a",{href:"/bots/2015",children:"\xa0\xa0\xa0\xa0\xa0-2015"}),Object(j.jsx)("a",{href:"/bots/2014",children:"\xa0\xa0\xa0\xa0\xa0-2014"}),Object(j.jsx)("a",{href:"/bots/2013",children:"\xa0\xa0\xa0\xa0\xa0-2013"})]})},p=a(12),x=a(11),u=(a(33),a(20),a(10)),g=a.n(u),f=(a(16),function(){return Object(j.jsxs)("footer",{style:{WebkitAlignItems:"center",alignItems:"center",background:"#eceff1",fontWeight:300,padding:"32px 20px 50px",borderRadius:"12px"},children:["Application provided by: ",Object(j.jsx)("i",{children:"FRC 4541 Scouting"})]})}),O=function(e){Object(p.a)(a,e);var t=Object(x.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){h.animations(this.props),g.a.init({duration:2e3,offset:0})}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"page",id:"page",children:[Object(j.jsx)("div",{className:"introSec animate",children:Object(j.jsxs)("div",{className:"texts",children:[Object(j.jsx)("p",{"data-aos":"fade-in",className:"line colored",id:"num",children:"4541"}),Object(j.jsxs)("p",{"data-aos":"fade-in","data-aos-delay":"750",className:"line colored",id:"name",children:[" ","Cavineers"]}),Object(j.jsx)("p",{"data-aos":"fade-in","data-aos-delay":"1300",children:Object(j.jsx)("span",{id:"introTextCont",style:{background:"linear-gradient(to bottom, rgb(255, 136, 0), rgb(255, 230, 0))",color:"transparent",backgroundClip:"text",WebkitBackgroundClip:"text"},children:"Inspiration. Leads to Innovation."})})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"secondSec animate",style:{overflow:"hidden"},children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"texts textBlockRight",children:[Object(j.jsxs)("p",{"data-aos":"fade-down",style:{padding:"10px",borderBottom:"2px solid grey"},children:["Who We Are. ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{style:{fontSize:"25px",fontWeight:300},children:"Inspired and Ready To Change the World."})]}),Object(j.jsxs)("p",{"data-aos":"fade-up","data-aos-delay":"700",className:"infoTexts",children:["The 4541 Cavineers are a dedicated team of passionate high schoolers who strive to not only compete in the FIRST Robotics Competition but spread their love of STEM with their community.",Object(j.jsx)("em",{children:"It is our mission to spread innovation across our community and create an environment where innovation not only takes place, but is encouraged in every sense of the word."})," ","We are based out of Archbishop Spalding High School in Severn Maryland and are led by two amazing coaches who push and inspire us to innovate."]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"texts2 textBlockLeft",children:[Object(j.jsxs)("p",{"data-aos":"fade-left",style:{padding:"10px",borderBottom:"2px solid grey",textAlign:"right"},children:["Mental Health Initiative. ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{style:{fontSize:"25px",fontWeight:300},children:"Helping Us to Live Better, Happier Lives."})]}),Object(j.jsxs)("p",{"data-aos":"fade-right","data-aos-delay":"700",className:"infoTexts",children:["Team 4541 is committed to all forms of safety and health, including mental health. Stress balls open up a conversation about mental health and its importance. They also provide a physical way to relieve stress at a time when it is at its peak. It is a method of raising awareness of mental health. We're all in this together and we should look out for each other. In order to support this initiative and raise awareness, we designed a stress ball which is also a link to important information about stress and time management. ",Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"mentalHealth.html",style:{color:"white"},children:"Click here to learn more about mental health"})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"texts textBlockRight",children:[Object(j.jsxs)("p",{"data-aos":"fade-in","data-aos-delay":"700",style:{padding:"10px",borderBottom:"2px solid grey",textAlign:"left"},children:["Summer Engineering Camp. ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{style:{fontSize:"25px",fontWeight:300},children:"Inspire the Next Generation of Engineers."})]}),Object(j.jsxs)("p",{"data-aos":"fade-left","data-aos-delay":"700",className:"infoTexts",children:[Object(j.jsx)("em",{children:"How can you launch a rocket with a chemical reaction? How can you build, and program, a robot to follow instructions? How does your hand provide valuable security information?"})," ","All these questions and more will be answered at Archbishop Spalding's Cavalier Engineering Camp. Designed for rising 6th, 7th, and 8th grade students, the Cavalier Engineering Camp explores a variety of engineering concepts and careers through hands-on projects and experiential learning. The camp introduces participants to engineering in a fun and exciting environment. Participation takes place under the guidance of engineering and robotics students, serving as camp counselors."]})]}),Object(j.jsxs)("div",{className:"texts textBlockLeft",children:[Object(j.jsxs)("p",{"data-aos":"fade-up",style:{padding:"10px",borderBottom:"2px solid grey",textAlign:"right"},children:["Safety Initiative. ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{style:{fontSize:"25px",fontWeight:300},children:"Because Safety Is Simply Important."})]}),Object(j.jsx)("p",{"data-aos":"fade-down","data-aos-delay":"700",className:"infoTexts",children:"Our teams top priority always is safety! As a team we take safety seriously and take many steps to ensure safety on the field, in the class room, and when building is always being maintained to the highest standard. Some of these steps include, ensure a mentor or coach is present when machinery is being used, always cleaning up after we finish a project, being careful with tools and making sure to keep proper space and follow all safety protocols given by manufactures, and much more. All these measures help to keep us safe and we encourage everyone to follow these procedures as well when working in the engineering lab."})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"texts textBlockRight",id:"Covid",children:[Object(j.jsxs)("p",{"data-aos":"fade-down-right",style:{padding:"10px",borderBottom:"2px solid grey",textAlign:"left"},children:["Our Covid-19 Response. ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{style:{fontSize:"25px",fontWeight:300},children:"Keeping Us Safe. While Helping To Keep Others Safe."})]}),Object(j.jsx)("p",{"data-aos":"fade-up-left","data-aos-delay":"700",className:"infoTexts",children:"Through these difficult times our team is working hard to ensure that everyone is staying safe and healthy. Safety is our top priority always! Due to the pandemic, all of our competitions have been cancelled and we have cancelled all of our in person meetings to help with social distancing. We are continuing meetings online to keep innovation moving. Our team members have also formed a task force to help 3D print face shields and masks for our community to help the brave workers risking their lives for us. We are teaching coding and CADing lessons online so we can keep learning. We are providing materials to all our members to help promote mental health through the quarantine. Likewise, we have decided to cancel our engineering summer camp this year for safety concerns. We apologize for any inconvenience and wish everyone well."}),Object(j.jsxs)("p",{"data-aos":"fade-up-right","data-aos-delay":"700",className:"infoTexts",children:[Object(j.jsx)("span",{style:{fontSize:"25px",fontWeight:300,borderBottom:"2px solid grey"},children:"Our Approach to Reopening Our Team."})," ","While we have continued to teach, learn, and help our community online, some things just are not the same. We have recently submitted a plan to reopen our workshop to students. Due to the pandemic, we are taking extreme precautions to ensure the safety of everyone! While in the workshop, masks are required at all times (along with safety goggles). We have assigned seating and working areas to ensure proper distancing and contract tracing can happen. We have divided our team into 3 groups who alternate through the workshop (with full online being an option) to limit the number of people in person. Temperature checks are conducted to each person who enters the workspace. CDC approved cleaning occurs before and after each meeting with a deep cleaning day in between meetings. All students and staff are remaining distant and we are prepared to return to full online at any time! All mentors are being asked to visit and assist online until further notice. We know these procedures will help to ensure safety and hope to see everyone back in the workshop really soon."]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"texts textBlockLeft",children:[Object(j.jsxs)("p",{"data-aos":"fade-up",style:{padding:"10px",borderBottom:"2px solid grey",textAlign:"right"},children:["The Catholic Robotics League. ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{style:{fontSize:"25px",fontWeight:300},children:"Bringing Schools Together. So We Can Work Together."})]}),Object(j.jsxs)("p",{"data-aos":"fade-down","data-aos-delay":"700",className:"infoTexts",children:["The Catholic Robotics League or CRL is a community of robotics teams who' inspire innovation within a group of students. Check out the CRL website to learn more about their mission"," ",Object(j.jsx)("a",{target:"__blank",style:{color:"white"},href:"https://biancagiudici.wixsite.com/crlbaltimore",children:"Catholic Robotics League Website"})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})})]}),Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"allCont",style:{width:"100%"},children:[Object(j.jsxs)("div",{className:"mainDiv",children:[Object(j.jsxs)("h1",{className:"message",children:["The Cavineers are"," ",Object(j.jsx)("span",{className:"txt-rotate","data-period":"1500","data-rotate":'[ "Innovative.", "Inspired.", "Changing the World.", "Igniting the Spark."]'})]}),Object(j.jsxs)("div",{className:"infoBox1",id:"mainTag","data-aos":"fade-down",children:[Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("p",{style:{color:"rgb(83, 83, 83)",fontSize:"24px",lineHeight:1.6},children:[Object(j.jsx)("span",{className:"headTxt",children:Object(j.jsx)("b",{children:"About Us:"})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})," The 4541 Cavineers are a dedicated team of passionate high schoolers who strive to not only compete in the FIRST Robotics Competition but spread their love of STEM with their community.",Object(j.jsx)("em",{children:"It is our mission to spread innovation accross our community and create an environment where innovation not only takes place, but is encouraged in every sense of the word."})," ","We are based out of Archbishop Spalding High School in Severn Maryland and are led by two amazing coaches who push and inspire us to innovate."]})}),Object(j.jsx)(f,{})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"infoBox1",id:"mainTag",children:[Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("p",{style:{color:"rgb(83, 83, 83)",fontSize:"24px",lineHeight:1.6},children:[Object(j.jsx)("span",{className:"headTxt",children:Object(j.jsx)("b",{children:"Summer Engineering Camp:"})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})," ",Object(j.jsx)("em",{children:"How can you launch a rocket with a chemical reaction? How can you build, and program, a robot to follow instructions? How does your hand provide valuable security information?"})," ","All these questions and more will be answered at Archbishop Spalding\u2019s Cavalier Engineering Camp. Designed for rising 6th, 7th, and 8th grade students, the Cavalier Engineering Camp explores a variety of engineering concepts and careers through hands-on projects and experiential learning. The camp introduces participants to engineering in a fun and exciting environment. Participation takes place under the guidance of engineering and robotics students, serving as camp counselors."]})}),Object(j.jsx)(f,{})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"infoBox1",id:"mainTag",children:[Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("p",{style:{color:"rgb(83, 83, 83)",fontSize:"24px",lineHeight:1.6},children:[Object(j.jsx)("span",{className:"headTxt",children:Object(j.jsx)("b",{children:"Mental Health Initiative:"})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})," Team 4541 is committed to all forms of safety and health, including mental health. Stress balls open up a conversation about mental health and its importance. They also provide a physical way to relieve stress at a time when it is at its peak. It is a method of raising awareness of mental health. We're all in this together and we should look out for each other. In order to support this initiative and raise awareness, we designed a stress ball which is also a link to important information about stress and time management. ",Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"mentalHealth.html",children:"Click here to learn more about mental health"})]})}),Object(j.jsx)(f,{})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"infoBox1",id:"mainTag",children:[Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("p",{style:{color:"rgb(83, 83, 83)",fontSize:"24px",lineHeight:1.6},children:[Object(j.jsx)("span",{className:"headTxt",children:Object(j.jsx)("b",{children:"Safety Initiative:"})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})," Our teams top priority always is safety! As a team we take safety seriously and take many steps to ensure safety on the field, in the class room, and when building is always being maintained to the highest standard. Some of these steps include, ensure a mentor or coach is present when machinery is being used, always cleaning up after we finish a project, being careful with tools and making sure to keep proper space and follow all safety protocols given by manufactures, and much more. All these measures help to keep us safe and we encourage everyone to follow these procedures as well when working in the engineering lab."]})}),Object(j.jsx)(f,{})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"infoBox1",id:"mainTag",children:[Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("p",{style:{color:"rgb(83, 83, 83)",fontSize:"24px",lineHeight:1.6},children:[Object(j.jsx)("span",{className:"headTxt",children:Object(j.jsx)("b",{children:"Catholic Robotics League:"})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})," The Catholic Robotics League or CRL is a community of robotics teams who's mission is to inspire innovation within a group of students. Check out the CRL website to learn more about their mission"," ",Object(j.jsx)("a",{target:"__blank",href:"https://biancagiudici.wixsite.com/crlbaltimore",children:"Catholic Robotics League"})]})}),Object(j.jsx)(f,{})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"infoBox1",id:"Covid",children:[Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("p",{style:{color:"rgb(83, 83, 83)",fontSize:"24px",lineHeight:1.6},children:[Object(j.jsx)("span",{className:"headTxt",children:Object(j.jsx)("b",{children:"Covid-19 Response:"})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})," Through these difficult times our team is working hard to ensure that everyone is staying safe and healthy. Safety is our top priority always! Due to the pandemic, all of our competitions have been cancelled and we have cancelled all of our in person meetings to help with social distancing. We are continuing meetings online to keep innovation moving. Our team members have also formed a task force to help 3D print face shields and masks for our community to help the brave workers risking their lives for us. We are teaching coding and CADing lessons online so we can keep learning. We are providing materials to all our members to help promote mental health through the quarantine. Likewise, we have decided to cancel our engineering summer camp this year for safety concerns. We apologize for any inconvenience and wish everyone well."]})}),Object(j.jsx)(f,{})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})})]})}}]),a}(n.a.Component),y=a.p+"static/media/logo.11de7ae7.png",v=a.p+"static/media/homepage.9d1366a6.mp4",w=a.p+"static/media/firstLogo.78d6c76b.svg",k=a.p+"static/media/ASHS.7b7b61ae.png",N=a.p+"static/media/ClearEdgeIT.16edc13c.png",S=a.p+"static/media/raskobFoundation.097c3db1.jpg",C=(a(34),function(e){Object(p.a)(a,e);var t=Object(x.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){g.a.init({offset:50,duration:1500}),document.querySelector("video").playbackRate=.8}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"wholeScreen",children:[Object(j.jsxs)("header",{className:"v-header container",children:[Object(j.jsx)("div",{className:"fullscreen-video-wrap",children:Object(j.jsx)("video",{src:v,muted:!0,autoPlay:!0,loop:!0})}),Object(j.jsx)("div",{className:"header-overlay"}),Object(j.jsxs)("div",{className:"header-content text-md-center",children:[Object(j.jsx)("div",{className:"alert",children:Object(j.jsx)("a",{href:"/about#Covid",className:"alertCovid",children:"Read about what we are doing under Covid-19"})}),Object(j.jsx)("h1",{children:"4541 Cavineers"}),Object(j.jsx)("p",{children:"Team 4541\u2019s mission is to instruct and inspire the next generation of engineers. We have ignited a spark of inspiration in our community, and now it is our team\u2019s responsibility to fan the flame."}),Object(j.jsx)("div",{className:"btnDiv",children:Object(j.jsx)("a",{href:"about.html",className:"btn",children:"Find Out More"})})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"div-container",children:[Object(j.jsxs)("div",{className:"colors",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("div",{style:{display:"flex",marginLeft:"55px",marginRight:"50px",justifyContent:"space-between"},children:[Object(j.jsxs)("p",{style:{fontSize:"7vw",color:"#258ede",lineHeight:1,letterSpacing:0,fontWeight:500},children:["Innovative.",Object(j.jsx)("br",{}),"Collaborative.",Object(j.jsx)("br",{}),"Inspired."]}),Object(j.jsx)("img",{src:y,alt:"4541 Logo",style:{float:"right"},width:"300",height:"auto"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",marginLeft:"55px",marginRight:"30px"},children:[Object(j.jsxs)("div",{className:"banner",children:[Object(j.jsx)("img",{src:w,alt:"FIRST",height:"55px",width:"60px"}),Object(j.jsx)("div",{className:"award-name",children:Object(j.jsx)("span",{children:"Chairman's Award"})}),Object(j.jsx)("div",{className:"award-event",children:Object(j.jsx)("span",{style:{fontSize:"17px"},children:"2020 CHS DISTRICT"})})]}),Object(j.jsxs)("div",{className:"banner",style:{marginLeft:"20px"},children:[Object(j.jsx)("img",{src:w,alt:"FIRST",height:"55px",width:"60px"}),Object(j.jsx)("div",{className:"award-name",children:Object(j.jsx)("span",{children:"Chairman's Award"})}),Object(j.jsx)("div",{className:"award-event",style:{marginLeft:"20px"},children:Object(j.jsx)("span",{style:{fontSize:"17px"},children:"2019 Oxon Hill MD District"})})]}),Object(j.jsxs)("div",{className:"banner",style:{marginLeft:"20px"},children:[Object(j.jsx)("img",{src:w,alt:"FIRST",height:"55px",width:"60px"}),Object(j.jsx)("div",{className:"award-name ",children:Object(j.jsx)("span",{children:"Winner"})}),Object(j.jsx)("div",{className:"award-event",children:Object(j.jsx)("span",{style:{fontSize:"17px"},children:"2019 CHESAPEAKE DISTRICT CHAMPIONSHIP"})})]}),Object(j.jsxs)("div",{className:"banner",style:{marginLeft:"20px"},children:[Object(j.jsx)("img",{src:w,alt:"FIRST",height:"55px",width:"60px"}),Object(j.jsx)("div",{className:"award-name",children:Object(j.jsx)("span",{children:"Winner"})}),Object(j.jsx)("div",{className:"award-event",children:Object(j.jsx)("span",{style:{fontSize:"17px"},children:"2018 ARCHIMEDES DIVISION"})})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{style:{background:"rgb(41, 38, 38)"},children:[Object(j.jsx)("table",{className:"sponsors",cellSpacing:"60",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsx)("h1",{className:"sponsorsTags",style:{fontSize:"50px",textShadow:"2px 2px 5px red",textAlign:"center"},children:"Our Sponsors"})}),Object(j.jsxs)("th",{children:[Object(j.jsx)("a",{href:"sponsors.html",style:{color:"#fff",textAlign:"center",fontSize:"23px"},className:"linkSpo",children:"Learn More About All Our Sponsors"}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"https://05592312-dc86-4140-acf3-b153752ef285.filesusr.com/ugd/fdf981_fc86978c525c4ebeac281e2738c66cbe.pdf",target:"__blank",style:{color:"#fff",textAlign:"center",fontSize:"23px"},className:"linkSpo",children:"Want to Sponsor Us?"})]})]})}),Object(j.jsxs)("div",{className:"grid-container",children:[Object(j.jsx)("div",{className:"grid-item",children:Object(j.jsx)("img",{src:N,alt:"ClearEdge IT",height:"165px",width:"65%"})}),Object(j.jsx)("div",{className:"grid-item",children:Object(j.jsx)("img",{src:S,alt:"Raskob Foundation",height:"25%",width:"55%"})}),Object(j.jsx)("div",{className:"grid-item",children:Object(j.jsx)("img",{src:k,alt:"Archbishop Spalding",height:"40%",width:"75%"})})]})]})]})]})}}]),a}(n.a.Component)),T=function(e){Object(p.a)(a,e);var t=Object(x.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){g.a.init({duration:2e3,offset:0})}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{textAlign:"center",fontSize:"50px",textShadow:"1px 1px 3px red"},children:"Outreach Events"}),Object(j.jsx)("div",{className:"AOSPac","data-aos":"fade-in",children:Object(j.jsxs)("h1",{children:["OUR TEAM HAS COMPLETED OVER 2,500 SERVICE ",Object(j.jsx)("br",{})," HOURS IN THE PAST 2 YEARS!"]})})]})}}]),a}(n.a.Component);var I=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(m,{}),Object(j.jsx)(c.a,{exact:!0,path:"/about",component:O}),Object(j.jsx)(c.a,{exact:!0,path:"/",component:C}),Object(j.jsx)(c.a,{exact:!0,path:"/outreach",component:T})]})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),s(e),n(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root")),A()}},[[40,1,2]]]);
//# sourceMappingURL=main.78798690.chunk.js.map