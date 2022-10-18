// /*===== EXPANDER MENU  =====*/ 
// const showMenu = (toggleId, navbarId, bodyId)=>{
//   const toggle = document.getElementById(toggleId),
//   navbar = document.getElementById(navbarId),
//   bodypadding = document.getElementById(bodyId)
//   navbar.classList.toggle('expander')
//   bodypadding.classList.toggle('body-pd')

//   if(toggle && navbar){
//     toggle.addEventListener('click', ()=>{
//       navbar.classList.toggle('expander')
//       bodypadding.classList.toggle('body-pd')

//     })
//   }
// }
// showMenu('nav-toggle','navbar','body-pd')

// /*===== LINK ACTIVE  =====*/ 
// const linkColor = document.querySelectorAll('.nav__link')
// function colorLink(){
//   linkColor.forEach(l=> l.classList.remove('active'))
//   this.classList.add('active')
// }
// linkColor.forEach(l=> l.addEventListener('click', colorLink))


// /*===== COLLAPSE MENU  =====*/ 
// const linkCollapse = document.getElementsByClassName('collapse__link')
// var i

// for(i=0;i<linkCollapse.length;i++){
//   linkCollapse[i].addEventListener('click', function(){
//     const collapseMenu = this.nextElementSibling
//     collapseMenu.classList.toggle('showCollapse')

//     const rotate = collapseMenu.previousElementSibling
//     rotate.classList.toggle('rotate')
//   })
// }


$('.page-link2').on('click', function () {
  var item_id = $(this).attr('id');

  if (item_id == "item-2-0") {
    $(".dynamic-contents").empty();
    $(".dynamic-contents").load("sections/characterizingDynamicsOfSocialCampaign/page-2-0.html");
  }
});


$('.page-link3').on('click', function () {
  var item_id = $(this).attr('id');

  if (item_id == "item-3-0") {
    $(".dynamic-contents").empty();
    $(".dynamic-contents").load("sections/characterizingInformationActorsAndConsumersDynamically/page-3-0.html");
  }
});

$('.page-link4').on('click', function () {
  var item_id = $(this).attr('id');

  if (item_id == "item-4-0") {
    $(".dynamic-contents").empty();
    $(".dynamic-contents").load("sections/characterizationOfMobs/page-4-0.html");
  }
});

$('.page-link5').on('click', function () {
  var item_id = $(this).attr('id');

  if (item_id == "item-5-0") {
    $(".dynamic-contents").empty();
    $(".dynamic-contents").load("sections/characterizationOfNetworkCoordinateStructure/page-5-0.html");
  }
});

$(document).ready(function () {

  $(".dynamic-contents").load("sections/overview/page-0-0.html");

});

$(document).on('click', '.page-link', function () {
  var liTags = $(this).parent().children();
  for (var i = 0; i < liTags.length; i++) {
    if (liTags[i].id == $(this).attr('id')) {
      var id = $(this).attr('id');
      var index = id.slice(4, 8);
      $(".dynamic-contents").empty();
      $(".dynamic-contents").load(`sections/overview/page${index}.html`);
    }
  }
});

$(document).on('click', '.page-link1', function () {
  var liTags = $(this).parent().children();
  for (var i = 0; i < liTags.length; i++) {
    if (liTags[i].id == $(this).attr('id')) {
      var id = $(this).attr('id');
      var index = id.slice(4, 8);
      $(".dynamic-contents").empty();
      $(".dynamic-contents").load(`sections/characterizingTaticsAndImpactAssesment/page${index}.html`);
    }
  }
});

$(document).on('click', '.page-link6', function () {
   var liTags = $(this).parent().children();
   for (var i = 0; i < liTags.length; i++) {
     if (liTags[i].id == $(this).attr('id')) {
       var id = $(this).attr('id');
       var index = id.slice(4, 8);
       $(".dynamic-contents").empty();
       $(".dynamic-contents").load(`sections/taxonomyTree/page${index}.html`);
 
     }
   }
 });

var data =  {
   "node_name": "0",
   "name": "0",
   "type": "type1",
   "code": "N0",
   "value": "Multimedia OIE Characterization",
   "title": "v1.0",
   "link": {
      "node_name": "Multimedia OIE Characterization",
      "name": "Link Node Name 0",
      "url": "",
      "direction": "ASYN"
   },
   "children": [
      {
         "node_name": "00",
         "name": "00",
         "type": "type1",
         "code": "N00",
         "value": "Characterizing tactics and impact assessment",
         "title": "v1.0",
         "link": {
            "node_name": "Characterizing tactics and impact assessment",
            "name": "Link Node Name 0",
            "url": "",
            "direction": "ASYN"
         },
         "children": [
            {
               "node_name": "000",
               "name": "000",
               "type": "type1",
               "code": "N000",
               "value": "Content",
               "title": "v1.0",
               "link": {
                  "node_name": "Content",
                  "name": "Link Node Name 00",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [
                  {
                     "node_name": "0000",
                     "name": "0000",
                     "type": "type1",
                     "code": "N0000",
                     "value": "Discourse Shift",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Discourse Shift",
                        "name": "Link Node Name 000",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0001",
                     "name": "0001",
                     "type": "type1",
                     "code": "N0001",
                     "value": "Shallow Deep Fakes",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Shallow Deep Fakes",
                        "name": [
                           "Link Node Name 000",
                           ""
                        ],
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0002",
                     "name": "0002",
                     "type": "type1",
                     "code": "N0002",
                     "value": "Content Cloning /Repurposing",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Content Cloning /Repurposing",
                        "name": "Link Node Name 000",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0003",
                     "name": "0003",
                     "type": "type1",
                     "code": "N0003",
                     "value": "Discourse/Narrative Fusion",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Discourse/Narrative Fusion",
                        "name": "Link Node Name 000",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0004",
                     "name": "0004",
                     "type": "type1",
                     "code": "N0004",
                     "value": "Coordinated Content Push",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Discourse/Narrative Fusion",
                        "name": "Link Node Name 000",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0004",
                     "name": "0004",
                     "type": "type1",
                     "code": "N0004",
                     "value": "Toxicity And Community",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Toxicity And Community",
                        "name": "Link Node Name 000",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0005",
                     "name": "0005",
                     "type": "type1",
                     "code": "N0005",
                     "value": "Cross Platform Coordination",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Cross Platform Coordination",
                        "name": "Link Node Name 000",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0006",
                     "name": "0006",
                     "type": "type1",
                     "code": "N0006",
                     "value": "Coordinated Deep Fake",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Coordinated Deep Fake",
                        "name": "Link Node Name 000",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  }
               ]
            },
            {
               "node_name": "001",
               "name": "001",
               "type": "type1",
               "code": "N001",
               "value": "Network",
               "title": "v1.0",
               "link": {
                  "node_name": "Content",
                  "name": "Link Node Name 00",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [
                  {
                     "node_name": "0010",
                     "name": "0010",
                     "type": "type1",
                     "code": "N0010",
                     "value": "Commenter Flash Mob",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Commenter Flash Mob",
                        "name": "Link Node Name 001",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0011",
                     "name": "0011",
                     "type": "type1",
                     "code": "N0011",
                     "value": "Discourse/Narrative Fusion",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Commenter Flash Mob",
                        "name": "Link Node Name 001",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0012",
                     "name": "0012",
                     "type": "type1",
                     "code": "N0012",
                     "value": "Coordinated Content Push",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Coordinated Content Push",
                        "name": "Link Node Name 001",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0013",
                     "name": "0013",
                     "type": "type1",
                     "code": "N0013",
                     "value": "Toxicity And Community",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Toxicity And Community",
                        "name": "Link Node Name 001",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0014",
                     "name": "0014",
                     "type": "type1",
                     "code": "N0014",
                     "value": "Cross Platform Coordination",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Cross Platform Coordination",
                        "name": "Link Node Name 001",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0015",
                     "name": "0015",
                     "type": "type1",
                     "code": "N0015",
                     "value": "Coordinated Deep Fake",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Coordinated Deep Fake",
                        "name": "Link Node Name 001",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  }
               ]
            },
            {
               "node_name": "002",
               "name": "002",
               "type": "type1",
               "code": "N002",
               "value": "Platform Affordance",
               "title": "v1.0",
               "link": {
                  "node_name": "Content",
                  "name": "Link Node Name 00",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [
                  {
                     "node_name": "0020",
                     "name": "0020",
                     "type": "type1",
                     "code": "N0020",
                     "value": "Algorithmic Bias Exploitation",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Algorithmic Bias Exploitation",
                        "name": "Link Node Name 002",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0021",
                     "name": "0021",
                     "type": "type1",
                     "code": "N0021",
                     "value": "Artificial Engagement Boosting",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Artificial Engagement Boosting",
                        "name": "Link Node Name 002",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0022",
                     "name": "0022",
                     "type": "type1",
                     "code": "N0022",
                     "value": "Long Term/Short Term Gain",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Long Term/Short Term Gain",
                        "name": "Link Node Name 002",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0023",
                     "name": "0023",
                     "type": "type1",
                     "code": "N0023",
                     "value": "Cross Platform Coordination",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Cross Platform Coordination",
                        "name": "Link Node Name 002",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0024",
                     "name": "0024",
                     "type": "type1",
                     "code": "N0024",
                     "value": "Coordinated Deep Fake",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Coordinated Deep Fake",
                        "name": "Link Node Name 002",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  }
               ]
            }
         ]
      },
      {
         "node_name": "01",
         "name": "01",
         "type": "type2",
         "code": "N01",
         "value": "Characterizing socioCampaign process dynamics",
         "title": "v1.0",
         "link": {
            "node_name": "Characterizing socioCampaign process dynamics",
            "name": "Link Node Name 0",
            "url": "",
            "direction": "ASYN"
         },
         "children": [
            {
               "node_name": "010",
               "name": "010",
               "type": "type2",
               "code": "N010",
               "value": "Connective Action Based Framework",
               "title": "v1.0",
               "link": {
                  "node_name": "Connective Action Based Framework",
                  "name": "Link Node Name 01",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [
                  {
                     "node_name": "0100",
                     "name": "0100",
                     "type": "type2",
                     "code": "N0100",
                     "value": "Collective Identity",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Collective Identity",
                        "name": "Link Node Name 010",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0101",
                     "name": "0101",
                     "type": "type2",
                     "code": "N0101",
                     "value": "Network Organization",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Network Organization",
                        "name": "Link Node Name 010",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0102",
                     "name": "0102",
                     "type": "type2",
                     "code": "N0102",
                     "value": "Mobilization",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Mobilization",
                        "name": "Link Node Name 010",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  }
               ]
            },
            {
               "node_name": "011",
               "name": "011",
               "type": "type2",
               "code": "N011",
               "value": "s-function Characterization",
               "title": "v1.0",
               "link": {
                  "node_name": "s-function Characterization",
                  "name": "Link Node Name 01",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [
                  {
                     "node_name": "0110",
                     "name": "0110",
                     "type": "type2",
                     "code": "N0110",
                     "value": "Accelerating Phase",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Accelerating Phase",
                        "name": "Link Node Name 011",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0111",
                     "name": "0111",
                     "type": "type2",
                     "code": "N0111",
                     "value": "Decelerating Phase",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Decelerating Phase",
                        "name": "Link Node Name 011",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  }
               ]
            }
         ]
      },
      {
         "node_name": "02",
         "name": "02",
         "type": "type3",
         "code": "N02",
         "value": "Characterizing Information Actors",
         "title": "v1.0",
         "link": {
            "node_name": "Characterizing Information Actors",
            "name": "Link Node Name 0",
            "url": "",
            "direction": "ASYN"
         },
         "children": [
            {
               "node_name": "020",
               "name": "020",
               "type": "type3",
               "code": "N020",
               "value": "Information Producer",
               "title": "v1.0",
               "link": {
                  "node_name": "Information Producer",
                  "name": "Link Node Name 02",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [
                  {
                     "node_name": "0200",
                     "name": "0200",
                     "type": "type3",
                     "code": "N0200",
                     "value": "Diffusion Of Innovation Theory Based On Toxicity Propaganda",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Diffusion Of Innovation Theory Based On Toxicity Propaganda",
                        "name": "Link Node Name 020",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": [
                        {
                           "node_name": "02000",
                           "name": "02000",
                           "type": "type3",
                           "code": "N02000",
                           "value": "Innovators",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Innovators",
                              "name": "Link Node Name 0200",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        },
                        {
                           "node_name": "02001",
                           "name": "02001",
                           "type": "type3",
                           "code": "N02001",
                           "value": "Early Adopters",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Early Adopters",
                              "name": "Link Node Name 0200",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        },
                        {
                           "node_name": "02002",
                           "name": "02002",
                           "type": "type3",
                           "code": "N02002",
                           "value": "Early Majority",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Early Majority",
                              "name": "Link Node Name 0200",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        },
                        {
                           "node_name": "02003",
                           "name": "02003",
                           "type": "type3",
                           "code": "N02003",
                           "value": "Late Majority",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Late Majority",
                              "name": "Link Node Name 0200",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        },
                        {
                           "node_name": "02004",
                           "name": "02004",
                           "type": "type3",
                           "code": "N02004",
                           "value": "Late Adopters",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Late Adopters",
                              "name": "Link Node Name 0200",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        }
                     ]
                  },
                  {
                     "node_name": "0201",
                     "name": "0201",
                     "type": "type3",
                     "code": "N0201",
                     "value": "n Shaped Characteristics",
                     "title": "v1.0",
                     "link": {
                        "node_name": "n Shaped Characteristics",
                        "name": "Link Node Name 020",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": [
                        {
                           "node_name": "02010",
                           "name": "02010",
                           "type": "type3",
                           "code": "N02010",
                           "value": "Initiators",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Initiators",
                              "name": "Link Node Name 0201",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        },
                        {
                           "node_name": "02011",
                           "name": "02011",
                           "type": "type3",
                           "code": "N02011",
                           "value": "Amplifiers",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Amplifiers",
                              "name": "Link Node Name 0201",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        },
                        {
                           "node_name": "02012",
                           "name": "02012",
                           "type": "type3",
                           "code": "N02012",
                           "value": "Sustainers",
                           "title": "v1.0",
                           "link": {
                              "node_name": "sustainers",
                              "name": "Link Node Name 0201",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        }
                     ]
                  }
               ]
            },
            {
               "node_name": "021",
               "name": "021",
               "type": "type3",
               "code": "N021",
               "value": "Information Consumer",
               "title": "v1.0",
               "link": {
                  "node_name": "Information Consumer",
                  "name": "Link Node Name 02",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [
                  {
                     "node_name": "0210",
                     "name": "0210",
                     "type": "type3",
                     "code": "N0210",
                     "value": "Epidemiological Model based Characterization",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Epidemiological Model based Characterization",
                        "name": "Link Node Name 021",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": [
                        {
                           "node_name": "02100",
                           "name": "02100",
                           "type": "type3",
                           "code": "N02100",
                           "value": "Susceptible",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Susceptible",
                              "name": "Link Node Name 0210",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        },
                        {
                           "node_name": "02101",
                           "name": "02101",
                           "type": "type3",
                           "code": "N02101",
                           "value": "Exposed",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Exposed",
                              "name": "Link Node Name 0210",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        },
                        {
                           "node_name": "02102",
                           "name": "02102",
                           "type": "type3",
                           "code": "N02102",
                           "value": "Infected",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Infected",
                              "name": "Link Node Name 0210",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        },
                        {
                           "node_name": "02103",
                           "name": "02103",
                           "type": "type3",
                           "code": "N02103",
                           "value": "Skeptic",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Skeptic",
                              "name": "Link Node Name 0210",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        }
                     ]
                  }
               ]
            },
            {
               "node_name": "022",
               "name": "022",
               "type": "type3",
               "code": "N022",
               "value": "Information Actors Characterization Based On Toxicity Propaganda",
               "title": "v1.0",
               "link": {
                  "node_name": "Content",
                  "name": "Link Node Name 02",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [
                  {
                     "node_name": "0220",
                     "name": "0220",
                     "type": "type3",
                     "code": "N0220",
                     "value": "Epidemiological Model based Characterization(STRS model)",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Epidemiological Model based Characterization",
                        "name": "Link Node Name 022",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": [
                        {
                           "node_name": "02200",
                           "name": "02200",
                           "type": "type3",
                           "code": "N02200",
                           "value": "Susceptible",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Susceptible",
                              "name": "Link Node Name 0220",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        },
                        {
                           "node_name": "02201",
                           "name": "02201",
                           "type": "type3",
                           "code": "N02201",
                           "value": "Toxic",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Toxic",
                              "name": "Link Node Name 0220",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        },
                        {
                           "node_name": "02202",
                           "name": "02202",
                           "type": "type3",
                           "code": "N02202",
                           "value": "Recovered",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Recovered",
                              "name": "Link Node Name 0220",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        }
                     ]
                  }
               ]
            }
         ]
      },
      {
         "node_name": "03",
         "name": "03",
         "type": "type4",
         "code": "N03",
         "value": "Characterizing Network Coordinating Structures",
         "title": "v1.0",
         "link": {
            "node_name": "Characterizing Network Coordinating Structures",
            "name": "Link Node Name 0",
            "url": "",
            "direction": "ASYN"
         },
         "children": [
            {
               "node_name": "030",
               "name": "030",
               "type": "type4",
               "code": "N030",
               "value": "Contextual Focal Structure Analysis",
               "title": "v1.0",
               "link": {
                  "node_name": "Contextual Focal Structure Analysis",
                  "name": "Link Node Name 03",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [
                  {
                     "node_name": "0300",
                     "name": "0300",
                     "type": "type4",
                     "code": "N0300",
                     "value": "Core Structure(focal structure-core mobilizers)",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Core Structure(focal structure-core mobilizers)",
                        "name": "Link Node Name 030",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": [
                        {
                           "node_name": "03000",
                           "name": "03000",
                           "type": "type4",
                           "code": "N03000",
                           "value": "Peripheral structure(foot soldiers)",
                           "title": "v1.0",
                           "link": {
                              "node_name": "Peripheral structure(foot soldiers)",
                              "name": "Link Node Name 030",
                              "url": "",
                              "direction": "ASYN"
                           },
                           "children": []
                        }
                     ]
                  }
               ]
            }
         ]
      },
      {
         "node_name": "04",
         "name": "04",
         "type": "type5",
         "code": "N04",
         "value": "Characterizing Mobs",
         "title": "v1.0",
         "link": {
            "node_name": "Characterizing Mobs",
            "name": "Link Node Name 0",
            "url": "",
            "direction": "ASYN"
         },
         "children": [
            {
               "node_name": "040",
               "name": "040",
               "type": "type1",
               "code": "N040",
               "value": "Environment-based Characterization",
               "title": "v1.0",
               "link": {
                  "node_name": "Environment-based Characterization",
                  "name": "Link Node Name 04",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [
                  {
                     "node_name": "0400",
                     "name": "0400",
                     "type": "type1",
                     "code": "N0400",
                     "value": "Cyber Mob",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Cyber Mob",
                        "name": "Link Node Name 040",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0401",
                     "name": "0401",
                     "type": "type1",
                     "code": "N0401",
                     "value": "Physical Mob",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Physical Mob",
                        "name": "Link Node Name 040",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0402",
                     "name": "0402",
                     "type": "type1",
                     "code": "N0402",
                     "value": "Cybernetic Mob",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Cybernetic Mob",
                        "name": "Link Node Name 040",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  }
               ]
            },
            {
               "node_name": "041",
               "name": "041",
               "type": "type2",
               "code": "N041",
               "value": "Time based Characterization",
               "title": "v1.0",
               "link": {
                  "node_name": "Time based Characterization",
                  "name": "Link Node Name 04",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [
                  {
                     "node_name": "0410",
                     "name": "0410",
                     "type": "type2",
                     "code": "N0410",
                     "value": "Flash Mob",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Flash Mob",
                        "name": "Link Node Name 041",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0411",
                     "name": "0411",
                     "type": "type2",
                     "code": "N0411",
                     "value": "Long Mob",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Long Mob",
                        "name": "Link Node Name 041",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  }
               ]
            },
            {
               "node_name": "042",
               "name": "042",
               "type": "type3",
               "code": "N042",
               "value": "Motive-based Characterization",
               "title": "v1.0",
               "link": {
                  "node_name": "Motive-based Characterization",
                  "name": "Link Node Name 04",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [
                  {
                     "node_name": "0420",
                     "name": "0420",
                     "type": "type3",
                     "code": "N0420",
                     "value": "Entertainment Mob",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Entertainment Mob",
                        "name": "Link Node Name 042",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0421",
                     "name": "0421",
                     "type": "type3",
                     "code": "N0421",
                     "value": "Malicious Deviant Mob",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Malicious Deviant Mob",
                        "name": "Link Node Name 042",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  }
               ]
            },
            {
               "node_name": "043",
               "name": "043",
               "type": "type4",
               "code": "N043",
               "value": "Actor-based Characterization",
               "title": "v1.0",
               "link": {
                  "node_name": "Actor-based Characterization",
                  "name": "Link Node Name 04",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [
                  {
                     "node_name": "0430",
                     "name": "0430",
                     "type": "type4",
                     "code": "N0430",
                     "value": "Human Actor",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Human Actor",
                        "name": "Link Node Name 043",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0431",
                     "name": "0431",
                     "type": "type4",
                     "code": "N0431",
                     "value": "Automated(AI) Actor",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Automated(AI) Actor",
                        "name": "Link Node Name 043",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  },
                  {
                     "node_name": "0432",
                     "name": "0432",
                     "type": "type4",
                     "code": "N0432",
                     "value": "Hybrid Actor",
                     "title": "v1.0",
                     "link": {
                        "node_name": "Hybrid Actor",
                        "name": "Link Node Name 043",
                        "url": "",
                        "direction": "ASYN"
                     },
                     "children": []
                  }
               ]
            }
         ]
      }
   ]
};

//content or data tree
var data2 = {
   "node_name": "0",
 "name": "0",
 "type": "type1",
 "code": "N0",
 "value": "Multimedia OIE Characterization",
 "title": "v1.0",
 "link": {
    "node_name": "Multimedia OIE Characterization",
    "name": "Link Node Name 0",
    "url": "",
    "direction": "ASYN"
 },
 "children": [
   {
 "node_name": "00",
 "name": "00",
 "type": "type1",
 "code": "N00",
 "value": "Content Type",
 "title": "v1.0",
 "link": {
    "node_name": "Content Type",
    "name": "Link Node Name 0",
    "url": "",
    "direction": "ASYN"
 },
 "children": [
   {
       "node_name": "000",
       "name": "000",
       "type": "type1",
       "code": "N000",
       "value": "Video",
       "title": "v1.0",
       "link": {
          "node_name": "Video",
          "name": "Link Node Name 00",
          "url": "",
          "direction": "ASYN"
       },
       "children": [ 
           {
               "node_name": "0000",
               "name": "0000",
               "type": "type1",
               "code": "N0000",
               "value": "Barcode(color theory)",
               "title": "v1.0",
               "link": {
                  "node_name": "Barcode(color theory)",
                  "name": "Link Node Name 000",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0001",
               "name": "0001",
               "type": "type1",
               "code": "N0001",
               "value": "Object Detection/Recognition",
               "title": "v1.0",
               "link": {
                  "node_name": "Object Detection/Recognition",
                  "name": "Link Node Name 000",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0002",
               "name": "0002",
               "type": "type1",
               "code": "N0002",
               "value": "Scene Detection",
               "title": "v1.0",
               "link": {
                  "node_name": "Scene Detection",
                  "name": "Link Node Name 000",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": []
           }
       ]
   },
   {
       "node_name": "001",
       "name": "001",
       "type": "type2",
       "code": "N001",
       "value": "Audio",
       "title": "v1.0",
       "link": {
          "node_name": "Audio",
          "name": "Link Node Name 00",
          "url": "",
          "direction": "ASYN"
       },
       "children": [ 
           {
               "node_name": "0010",
               "name": "0010",
               "type": "type2",
               "code": "N0010",
               "value": "Signal",
               "title": "v1.0",
               "link": {
               "node_name": "Signal",
               "name": "Link Node Name 001",
               "url": "",
               "direction": "ASYN"
               },
               "children": []
           
           }
       ]
   },
   {
       "node_name": "002",
       "name": "002",
       "type": "type3",
       "code": "N002",
       "value": "Text",
       "title": "v1.0",
       "link": {
          "node_name": "Text",
          "name": "Link Node Name 002",
          "url": "",
          "direction": "ASYN"
       },
       "children": [ 
           {
               "node_name": "0020",
               "name": "0020",
               "type": "type3",
               "code": "N0020",
               "value": "Content Producer(Youtuber)",
               "title": "v1.0",
               "link": {
               "node_name": "Content Producer(Youtuber)",
               "name": "Link Node Name 002",
               "url": "",
               "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00200",
                       "name": "00200",
                       "type": "type3",
                       "code": "N00200",
                       "value": "Channel Description",
                       "title": "v1.0",
                       "link": {
                       "node_name": "Channel Description",
                       "name": "Link Node Name 0020",
                       "url": "",
                       "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00201",
                       "name": "00201",
                       "type": "type3",
                       "code": "N00201",
                       "value": "Video Title",
                       "title": "v1.0",
                       "link": {
                       "node_name": "Video Title",
                       "name": "Link Node Name 0020",
                       "url": "",
                       "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00202",
                       "name": "00202",
                       "type": "type3",
                       "code": "N00202",
                       "value": "Video Description",
                       "title": "v1.0",
                       "link": {
                       "node_name": "Video Description",
                       "name": "Link Node Name 0020",
                       "url": "",
                       "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00203",
                       "name": "00203",
                       "type": "type3",
                       "code": "N00203",
                       "value": "Transcript",
                       "title": "v1.0",
                       "link": {
                       "node_name": "Transcript",
                       "name": "Link Node Name 0020",
                       "url": "",
                       "direction": "ASYN"
                       },
                       "children": []
                   }
               ] 
           },
           {
               "node_name": "0021",
               "name": "0021",
               "type": "type3",
               "code": "N0021",
               "value": "Content Consumer(Commenter)",
               "title": "v1.0",
               "link": {
               "node_name": "Content Consumer(Commenter)",
               "name": "Link Node Name 002",
               "url": "",
               "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00210",
                       "name": "00210",
                       "type": "type3",
                       "code": "N00210",
                       "value": "Comment",
                       "title": "v1.0",
                       "link": {
                       "node_name": "Comment",
                       "name": "Link Node Name 0021",
                       "url": "",
                       "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00211",
                       "name": "00211",
                       "type": "type3",
                       "code": "N00211",
                       "value": "Reply To Comment",
                       "title": "v1.0",
                       "link": {
                       "node_name": "Reply To Comment",
                       "name": "Link Node Name 0021",
                       "url": "",
                       "direction": "ASYN"
                       },
                       "children": []
                   }
               ] 
           }
       ]
   },
   {
       "node_name": "003",
       "name": "003",
       "type": "type4",
       "code": "N003",
       "value": "Network",
       "title": "v1.0",
       "link": {
          "node_name": "Network",
          "name": "Link Node Name 00",
          "url": "",
          "direction": "ASYN"
       },
       "children": [ 
           {
               "node_name": "0030",
               "name": "0030",
               "type": "type4",
               "code": "N0030",
               "value": "Commenter Network",
               "title": "v1.0",
               "link": {
               "node_name": "Commenter Network",
               "name": "Link Node Name 003",
               "url": "",
               "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0031",
               "name": "0031",
               "type": "type4",
               "code": "N0031",
               "value": "Subsciber Network",
               "title": "v1.0",
               "link": {
               "node_name": "Subsciber Network",
               "name": "Link Node Name 003",
               "url": "",
               "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0032",
               "name": "0032",
               "type": "type4",
               "code": "N0032",
               "value": "Recommendation Network",
               "title": "v1.0",
               "link": {
               "node_name": "Recommendation Network",
               "name": "Link Node Name 003",
               "url": "",
               "direction": "ASYN"
               },
               "children": []
           }
       ]
   },
   {
       "node_name": "004",
       "name": "004",
       "type": "type5",
       "code": "N004",
       "value": "Engagement or Reach",
       "title": "v1.0",
       "link": {
          "node_name": "Engagement or Reach",
          "name": "Link Node Name 00",
          "url": "",
          "direction": "ASYN"
       },
       "children": [ 
           {
               "node_name": "0040",
               "name": "0040",
               "type": "type5",
               "code": "N0040",
               "value": "Number of Views",
               "title": "v1.0",
               "link": {
                  "node_name": "Number of Views",
                  "name": "Link Node Name 004",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [] 
           },
           {
               "node_name": "0041",
               "name": "0041",
               "type": "type5",
               "code": "N0041",
               "value": "Number of Likes",
               "title": "v1.0",
               "link": {
                  "node_name": "Number of Likes",
                  "name": "Link Node Name 004",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [] 
           },
           {
               "node_name": "0042",
               "name": "0042",
               "type": "type5",
               "code": "N0042",
               "value": "Number of Dislikes",
               "title": "v1.0",
               "link": {
                  "node_name": "Number of Dislikes",
                  "name": "Link Node Name 004",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [] 
           },
           {
               "node_name": "0043",
               "name": "0043",
               "type": "type5",
               "code": "N0043",
               "value": "Number of Comments(likes,dislikes,replies)",
               "title": "v1.0",
               "link": {
                  "node_name": "Number of Comments(likes,dislikes,replies)",
                  "name": "Link Node Name 004",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [] 
           },
           {
               "node_name": "0044",
               "name": "0044",
               "type": "type5",
               "code": "N0044",
               "value": "Number of Subscribers",
               "title": "v1.0",
               "link": {
                  "node_name": "Number of Subscribers",
                  "name": "Link Node Name 004",
                  "url": "",
                  "direction": "ASYN"
               },
               "children": [] 
           }
       ]
   },
   {
       "node_name": "005",
       "name": "005",
       "type": "type6",
       "code": "N005",
       "value": "Metadata",
       "title": "v1.0",
       "link": {
          "node_name": "Metadata",
          "name": "Link Node Name 00",
          "url": "",
          "direction": "ASYN"
       },
       "children": [ 
           {
               "node_name": "0050",
               "name": "0050",
               "type": "type6",
               "code": "N0050",
               "value": "Cross-platform Information",
               "title": "v1.0",
               "link": {
               "node_name": "Cross-platform Information",
               "name": "Link Node Name 005",
               "url": "",
               "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0051",
               "name": "0051",
               "type": "type6",
               "code": "N0051",
               "value": "Locaton",
               "title": "v1.0",
               "link": {
               "node_name": "Location",
               "name": "Link Node Name 005",
               "url": "",
               "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0052",
               "name": "0052",
               "type": "type6",
               "code": "N0052",
               "value": "Timestamp(channel,video,comment)",
               "title": "v1.0",
               "link": {
               "node_name": "Timestamp(channel,video,comment)",
               "name": "Link Node Name 005",
               "url": "",
               "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0053",
               "name": "0053",
               "type": "type6",
               "code": "N0053",
               "value": "Category(video,channel)",
               "title": "v1.0",
               "link": {
               "node_name": "Category(video,channel)",
               "name": "Link Node Name 005",
               "url": "",
               "direction": "ASYN"
               },
               "children": []
           }
       ]
   }
 ]
   }
 ]
};

// analytic tree
var data3 = {
   "node_name": "0",
 "name": "0",
 "type": "type1",
 "code": "N0",
 "value": "Multimedia OIE Characterization",
 "title": "v1.0",
 "link": {
    "node_name": "Multimedia OIE Characterization",
    "name": "Link Node Name 0",
    "url": "",
    "direction": "ASYN"
 },
 "children": [
   {
       "node_name": "00",
 "name": "00",
 "type": "type1",
 "code": "N00",
 "value": "Analysis Type",
 "title": "v1.0",
 "link": {
    "node_name": "Analysis Type",
    "name": "Link Node Name 0",
    "url": "",
    "direction": "ASYN"
 },
 "children": [
   {
       "node_name": "000",
       "name": "000",
       "type": "type1",
       "code": "N000",
       "value": "Behaviour Analysis",
       "title": "v1.0",
       "link": {
           "node_name": "Behaviour Analysis",
           "name": "Link Node Name 00",
           "url": "",
           "direction": "ASYN"
       },
       "children": [
           {
               "node_name": "0000",
               "name": "0000",
               "type": "type1",
               "code": "N0000",
               "value": "Engagement or Reach",
               "title": "v1.0",
               "link": {
                   "node_name": "Engagement or Reach",
                   "name": "Link Node Name 000",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00000",
                       "name": "00000",
                       "type": "type1",
                       "code": "N00000",
                       "value": "Suspicious vs. non-suspicious",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Suspicious vs. non-suspicious",
                           "name": "Link Node Name 0000",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00001",
                       "name": "00001",
                       "type": "type1",
                       "code": "N00001",
                       "value": "Coordinated Inauthentic Behaviour",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Coordinated Inauthentic Behaviour",
                           "name": "Link Node Name 0000",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   }
               ]
           },
           {
               "node_name": "0001",
               "name": "0001",
               "type": "type1",
               "code": "N0001",
               "value": "Commenter Network Structure Based Analysis",
               "title": "v1.0",
               "link": {
                   "node_name": "Commenter Network Structure Based Analysis",
                   "name": "Link Node Name 000",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00010",
                       "name": "00010",
                       "type": "type1",
                       "code": "N0001",
                       "value": "Mob/cliquish vs. non-cliquish",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Mob/cliquish vs. non-cliquish",
                           "name": "Link Node Name 0001",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00011",
                       "name": "00011",
                       "type": "type1",
                       "code": "N00011",
                       "value": "Discourse Fusion vs. Isolated Discourse",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Discourse Fusion vs. Isolated Discourse",
                           "name": "Link Node Name 0001",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   }
               ]
           },
           {
               "node_name": "0002",
               "name": "0002",
               "type": "type1",
               "code": "N0002",
               "value": "Subscriber Network Structure Based Analysis",
               "title": "v1.0",
               "link": {
                   "node_name": "Subscriber Network Structure Based Analysis",
                   "name": "Link Node Name 000",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00020",
                       "name": "00020",
                       "type": "type1",
                       "code": "N00020",
                       "value": "Cliquish vs. non-cliquish",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Cliquish vs. non-cliquish",
                           "name": "Link Node Name 000",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   }
               ]
           }

       ]
   },
   {
       "node_name": "001",
       "name": "001",
       "type": "type2",
       "code": "N001",
       "value": "Platform Bias Analysis",
       "title": "v1.0",
       "link": {
           "node_name": "Platform Bias Analysis",
           "name": "Link Node Name 00",
           "url": "",
           "direction": "ASYN"
       },
       "children": [
           {
               "node_name": "0010",
               "name": "0010",
               "type": "type2",
               "code": "N0010",
               "value": "Bias based Characterization",
               "title": "v1.0",
               "link": {
                   "node_name": "Bias based Characterization",
                   "name": "Link Node Name 001",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00100",
                       "name": "00100",
                       "type": "type2",
                       "code": "N00100",
                       "value": "Recommendation Bias vs hyper bias",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Recommendation Bias vs hyper bias",
                           "name": "Link Node Name 0010",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   }
               ]
           }
       ]
   },
   {
       "node_name": "002",
       "name": "002",
       "type": "type3",
       "code": "N002",
       "value": "Cross-platform  Analysis",
       "title": "v1.0",
       "link": {
           "node_name": "Cross-platform Analysis",
           "name": "Link Node Name 00",
           "url": "",
           "direction": "ASYN"
       },
       "children": [
           {
               "node_name": "0020",
               "name": "0020",
               "type": "type3",
               "code": "N0020",
               "value": "Social Cyber Forensic",
               "title": "v1.0",
               "link": {
                   "node_name": "Social Cyber Forensic",
                   "name": "Link Node Name 002",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           }
       ]
   },
   {
       "node_name": "003",
       "name": "003",
       "type": "type4",
       "code": "N003",
       "value": "Collective or Connective Action Analysis",
       "title": "v1.0",
       "link": {
           "node_name": "Collective or Connective Action Analysis",
           "name": "Link Node Name 00",
           "url": "",
           "direction": "ASYN"
       },
       "children": [
           {
               "node_name": "0030",
               "name": "0030",
               "type": "type4",
               "code": "N0030",
               "value": "Collective Identity Assessment",
               "title": "v1.0",
               "link": {
                   "node_name": "Collective Identity Assessment",
                   "name": "Link Node Name 003",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00300",
                       "name": "00300",
                       "type": "type4",
                       "code": "N00300",
                       "value": "Topical Convergence",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Topical Convergence",
                           "name": "Link Node Name 0030",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00301",
                       "name": "00301",
                       "type": "type4",
                       "code": "N00301",
                       "value": "Emotion Convergence",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Emotion Convergence",
                           "name": "Link Node Name 0030",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00302",
                       "name": "00302",
                       "type": "type4",
                       "code": "N00302",
                       "value": "Code Switching",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Code Switching",
                           "name": "Link Node Name 0030",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00303",
                       "name": "00303",
                       "type": "type4",
                       "code": "N00303",
                       "value": "Morality Foundation Theory(loyalty,etc. assessment)",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Morality Foundation Theory(loyalty,etc. assessment)",
                           "name": "Link Node Name 0030",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   }
               ]
           },
           {
               "node_name": "0031",
               "name": "0031",
               "type": "type4",
               "code": "N0031",
               "value": "Network Organization",
               "title": "v1.0",
               "link": {
                   "node_name": "Network Organization",
                   "name": "Link Node Name 003",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00310",
                       "name": "00310",
                       "type": "type4",
                       "code": "N00310",
                       "value": "Network Structural Measures (modularity,clustering coefficient)",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Network Structural Measures (modularity,clustering coefficient)",
                           "name": "Link Node Name 0031",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   }
               ]
           },
           {
               "node_name": "0032",
               "name": "0032",
               "type": "type4",
               "code": "N0032",
               "value": "Mobilization",
               "title": "v1.0",
               "link": {
                   "node_name": "Mobilization",
                   "name": "Link Node Name 003",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00320",
                       "name": "00320",
                       "type": "type4",
                       "code": "N00320",
                       "value": "Individual,shared,collective affordances",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Individual,shared,collective affordances",
                           "name": "Link Node Name 0032",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00321",
                       "name": "00321",
                       "type": "type4",
                       "code": "N00321",
                       "value": "Contextual FocalStructure Analysis(CFSA)",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Contextual FocalStructure Analysis(CFSA)",
                           "name": "Link Node Name 0032",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00322",
                       "name": "00322",
                       "type": "type4",
                       "code": "N00322",
                       "value": "DCFM power function analysis using S-shaped campaign productionfunction (acceleratingand decelerating phases)",
                       "title": "v1.0",
                       "link": {
                           "node_name": "DCFM power function analysis using S-shaped campaign productionfunction (acceleratingand decelerating phases)",
                           "name": "Link Node Name 0032",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00323",
                       "name": "00323",
                       "type": "type4",
                       "code": "N00323",
                       "value": "Resource Mobilization Theory (spillover effect)",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Resource Mobilization Theory (spillover effect)",
                           "name": "Link Node Name 0032",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   }
               ]
           }
       ]
   },
   {
       "node_name": "004",
       "name": "004",
       "type": "type5",
       "code": "N004",
       "value": "Information Actor Analysis",
       "title": "v1.0",
       "link": {
           "node_name": "Information Actor Analysis",
           "name": "Link Node Name 00",
           "url": "",
           "direction": "ASYN"
       },
       "children": [
           {
               "node_name": "0040",
               "name": "0040",
               "type": "type5",
               "code": "N0040",
               "value": "Information producer analysis",
               "title": "v1.0",
               "link": {
                   "node_name": "Information producer analysis",
                   "name": "Link Node Name 004",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00400",
                       "name": "00400",
                       "type": "type5",
                       "code": "N0040",
                       "value": "Diffusion of innovation theory based characterization",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Diffusion of innovation theory based characterization",
                           "name": "Link Node Name 0040",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": [
                           {
                               "node_name": "004000",
                               "name": "004000",
                               "type": "type5",
                               "code": "N00400",
                               "value": "Innovators, early adopters, late mojority,laggards",
                               "title": "v1.0",
                               "link": {
                                   "node_name": "Innovators, early adopters, late mojority,laggards",
                                   "name": "Link Node Name 00400",
                                   "url": "",
                                   "direction": "ASYN"
                               },
                               "children": []
                           }
                       ]
                   }
               ]
           },
           {
               "node_name": "0041",
               "name": "0041",
               "type": "type5",
               "code": "N0041",
               "value": "Information Consumer analysis",
               "title": "v1.0",
               "link": {
                   "node_name": "Information Consumer analysis",
                   "name": "Link Node Name 004",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00410",
                       "name": "00410",
                       "type": "type5",
                       "code": "N00410",
                       "value": "Epidemiological modeling based characterization",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Epidemiological modeling based characterization",
                           "name": "Link Node Name 0041",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": [
                           {
                               "node_name": "004100",
                               "name": "004100",
                               "type": "type5",
                               "code": "N004100",
                               "value": "SEIZ (susceptible,exposed, infected,skeptic)",
                               "title": "v1.0",
                               "link": {
                                   "node_name": "SEIZ (susceptible,exposed, infected,skeptic)",
                                   "name": "Link Node Name 00410",
                                   "url": "",
                                   "direction": "ASYN"
                               },
                               "children": []
                           }
                       ]
                   }
               ]
           }
           
       ]
   },
   {
       "node_name": "005",
       "name": "005",
       "type": "type6",
       "code": "N005",
       "value": "Visual Narrative Elements",
       "title": "v1.0",
       "link": {
           "node_name": "Visual Narrative Elements",
           "name": "Link Node Name 00",
           "url": "",
           "direction": "ASYN"
       },
       "children": [
           {
               "node_name": "0050",
               "name": "0050",
               "type": "type6",
               "code": "N0050",
               "value": "Video Barcode based Characterization",
               "title": "v1.0",
               "link": {
                   "node_name": "Video Barcode based Characterization",
                   "name": "Link Node Name 005",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0051",
               "name": "0051",
               "type": "type6",
               "code": "N0051",
               "value": "Object Detection",
               "title": "v1.0",
               "link": {
                   "node_name": "Object Detection",
                   "name": "Link Node Name 005",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0052",
               "name": "0052",
               "type": "type6",
               "code": "N0052",
               "value": "Entity Detection",
               "title": "v1.0",
               "link": {
                   "node_name": "Entity Detection",
                   "name": "Link Node Name 005",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           }
       ]
   },
   {
       "node_name": "006",
       "name": "006",
       "type": "type7",
       "code": "N006",
       "value": "Audio Signal Analysis",
       "title": "v1.0",
       "link": {
           "node_name": "Audio Signal Analysis",
           "name": "Link Node Name 00",
           "url": "",
           "direction": "ASYN"
       },
       "children": [
           {
               "node_name": "0060",
               "name": "0060",
               "type": "type7",
               "code": "N0060",
               "value": "Audio Signal Similarity based Characterization",
               "title": "v1.0",
               "link": {
                   "node_name": "Audio Signal Similarity based Characterization",
                   "name": "Link Node Name 006",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           }
       ]
   },
   {
       "node_name": "007",
       "name": "007",
       "type": "type8",
       "code": "N007",
       "value": "Emotion Analysis",
       "title": "v1.0",
       "link": {
           "node_name": "Emotion Analysis",
           "name": "Link Node Name 00",
           "url": "",
           "direction": "ASYN"
       },
       "children": [
           {
               "node_name": "0070",
               "name": "0070",
               "type": "type8",
               "code": "N0070",
               "value": "Text based Emotion Analysis",
               "title": "v1.0",
               "link": {
                   "node_name": "Text based Emotion Analysis",
                   "name": "Link Node Name 007",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00700",
                       "name": "00700",
                       "type": "type8",
                       "code": "N00700",
                       "value": "Anticipation",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Anticipation",
                           "name": "Link Node Name 0070",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00701",
                       "name": "00701",
                       "type": "type8",
                       "code": "N00701",
                       "value": "Joy",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Joy",
                           "name": "Link Node Name 0070",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00702",
                       "name": "00702",
                       "type": "type8",
                       "code": "N00702",
                       "value": "Sadness",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Sadness",
                           "name": "Link Node Name 0070",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00703",
                       "name": "00703",
                       "type": "type8",
                       "code": "N00703",
                       "value": "Anger",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Anger",
                           "name": "Link Node Name 0070",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00704",
                       "name": "00704",
                       "type": "type8",
                       "code": "N00704",
                       "value": "Fear",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Fear",
                           "name": "Link Node Name 0070",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00705",
                       "name": "00705",
                       "type": "type8",
                       "code": "N00705",
                       "value": "Surprise",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Surprise",
                           "name": "Link Node Name 0070",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00706",
                       "name": "00706",
                       "type": "type8",
                       "code": "N00706",
                       "value": "Trust",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Trust",
                           "name": "Link Node Name 0070",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00707",
                       "name": "00707",
                       "type": "type8",
                       "code": "N00707",
                       "value": "Disgust",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Disgust",
                           "name": "Link Node Name 0070",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   }
               ]
           },
           {
               "node_name": "0071",
               "name": "0071",
               "type": "type8",
               "code": "N0071",
               "value": "Audio Signal based Emotion Analysis",
               "title": "v1.0",
               "link": {
                   "node_name": "Audio Signal based Emotion Analysis",
                   "name": "Link Node Name 007",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": [
                   
                           {
                               "node_name": "00710",
                               "name": "00710",
                               "type": "type8",
                               "code": "N00710",
                               "value": "Neutral",
                               "title": "v1.0",
                               "link": {
                                   "node_name": "Neutral",
                                   "name": "Link Node Name 0071",
                                   "url": "",
                                   "direction": "ASYN"
                               },
                               "children": []
                           },
                           {
                               "node_name": "00711",
                               "name": "00711",
                               "type": "type8",
                               "code": "N00701",
                               "value": "Happy",
                               "title": "v1.0",
                               "link": {
                                   "node_name": "Happy",
                                   "name": "Link Node Name 0071",
                                   "url": "",
                                   "direction": "ASYN"
                               },
                               "children": []
                           },
                           {
                               "node_name": "00712",
                               "name": "00712",
                               "type": "type8",
                               "code": "N00712",
                               "value": "Sad",
                               "title": "v1.0",
                               "link": {
                                   "node_name": "Sad",
                                   "name": "Link Node Name 0071",
                                   "url": "",
                                   "direction": "ASYN"
                               },
                               "children": []
                           },
                           {
                               "node_name": "00713",
                               "name": "00713",
                               "type": "type8",
                               "code": "N00713",
                               "value": "Angry",
                               "title": "v1.0",
                               "link": {
                                   "node_name": "Angry",
                                   "name": "Link Node Name 0071",
                                   "url": "",
                                   "direction": "ASYN"
                               },
                               "children": []
                           },
                           {
                               "node_name": "00714",
                               "name": "00714",
                               "type": "type8",
                               "code": "N00714",
                               "value": "Fearful",
                               "title": "v1.0",
                               "link": {
                                   "node_name": "Fearful",
                                   "name": "Link Node Name 0071",
                                   "url": "",
                                   "direction": "ASYN"
                               },
                               "children": []
                           },
                           {
                               "node_name": "00715",
                               "name": "00715",
                               "type": "type8",
                               "code": "N00715",
                               "value": "Surprised",
                               "title": "v1.0",
                               "link": {
                                   "node_name": "Surprised",
                                   "name": "Link Node Name 0071",
                                   "url": "",
                                   "direction": "ASYN"
                               },
                               "children": []
                           },
                           {
                               "node_name": "00716",
                               "name": "00716",
                               "type": "type8",
                               "code": "N00716",
                               "value": "Calm",
                               "title": "v1.0",
                               "link": {
                                   "node_name": "Calm",
                                   "name": "Link Node Name 0071",
                                   "url": "",
                                   "direction": "ASYN"
                               },
                               "children": []
                           },
                           {
                               "node_name": "00717",
                               "name": "00717",
                               "type": "type8",
                               "code": "N00717",
                               "value": "Disgust",
                               "title": "v1.0",
                               "link": {
                                   "node_name": "Disgust",
                                   "name": "Link Node Name 0071",
                                   "url": "",
                                   "direction": "ASYN"
                               },
                               "children": []
                           }
               ]
               },
               {
                   "node_name": "0072",
                   "name": "0072",
                   "type": "type8",
                   "code": "N0072",
                   "value": "Color Theory based Emotion Analysis",
                   "title": "v1.0",
                   "link": {
                       "node_name": "Color Theory based Emotion Analysis",
                       "name": "Link Node Name 007",
                       "url": "",
                       "direction": "ASYN"
                   },
                   "children": []
              },
              {
               "node_name": "0073",
               "name": "0073",
               "type": "type8",
               "code": "N0073",
               "value": "Facial Emotion Analysis",
               "title": "v1.0",
               "link": {
                   "node_name": "Facial Emotion Analysis",
                   "name": "Link Node Name 007",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
          }
       ]
   },
   {
       "node_name": "008",
       "name": "008",
       "type": "type9",
       "code": "N008",
       "value": "Toxicity Analysis",
       "title": "v1.0",
       "link": {
           "node_name": "Toxicity Analysis",
           "name": "Link Node Name 00",
           "url": "",
           "direction": "ASYN"
       },
       "children": [
           {
               "node_name": "0080",
               "name": "0080",
               "type": "type9",
               "code": "N0080",
               "value": "Severe Toxicity",
               "title": "v1.0",
               "link": {
                   "node_name": "Severe Toxicity",
                   "name": "Link Node Name 008",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0081",
               "name": "0081",
               "type": "type9",
               "code": "N0081",
               "value": "Identity Attack",
               "title": "v1.0",
               "link": {
                   "node_name": "Identity Attack",
                   "name": "Link Node Name 008",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0082",
               "name": "0082",
               "type": "type9",
               "code": "N0082",
               "value": "Insult",
               "title": "v1.0",
               "link": {
                   "node_name": "Insult",
                   "name": "Link Node Name 008",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0083",
               "name": "0083",
               "type": "type9",
               "code": "N0083",
               "value": "Profanity",
               "title": "v1.0",
               "link": {
                   "node_name": "Profanity",
                   "name": "Link Node Name 008",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0084",
               "name": "0084",
               "type": "type9",
               "code": "N0084",
               "value": "Threat",
               "title": "v1.0",
               "link": {
                   "node_name": "Threat",
                   "name": "Link Node Name 008",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           }
       ]
   },
   {
       "node_name": "009",
       "name": "009",
       "type": "type9",
       "code": "N009",
       "value": "Text Analysis",
       "title": "v1.0",
       "link": {
           "node_name": "Text Analysis",
           "name": "Link Node Name 00",
           "url": "",
           "direction": "ASYN"
       },
       "children": [
           {
               "node_name": "0090",
               "name": "0090",
               "type": "type9",
               "code": "N0090",
               "value": "Text Similarity based Characterization",
               "title": "v1.0",
               "link": {
                   "node_name": "Text Similarity based Characterization",
                   "name": "Link Node Name 009",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0091",
               "name": "0091",
               "type": "type10",
               "code": "N0091",
               "value": "Topic Modeling",
               "title": "v1.0",
               "link": {
                   "node_name": "Topic Modeling",
                   "name": "Link Node Name 009",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00910",
                       "name": "00910",
                       "type": "type10",
                       "code": "N00910",
                       "value": "Topic based Characterization",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Topic based Characterization",
                           "name": "Link Node Name 0091",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   },
                   {
                       "node_name": "00911",
                       "name": "00911",
                       "type": "type10",
                       "code": "N00911",
                       "value": "Topic Diversity based Characterization",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Topic Diversity based Characterization",
                           "name": "Link Node Name 0091",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": [
                           {
                               "node_name": "009110",
                               "name": "009110",
                               "type": "type10",
                               "code": "N009110",
                               "value": "Diverse Topical Coverage (Novelty, Resonance,Transience)",
                               "title": "v1.0",
                               "link": {
                                   "node_name": "Diverse Topical Coverage (Novelty, Resonance,Transience)",
                                   "name": "Link Node Name 00911",
                                   "url": "",
                                   "direction": "ASYN"
                               },
                               "children": [
                                   {
                                       "node_name": "0091100",
                                       "name": "0091100",
                                       "type": "type10",
                                       "code": "N0091100",
                                       "value": "Periodic vs. aperiodic",
                                       "title": "v1.0",
                                       "link": {
                                           "node_name": "Periodic vs. aperiodic",
                                           "name": "Link Node Name 009110",
                                           "url": "",
                                           "direction": "ASYN"
                                       },
                                       "children": [
                                           
                                       ]
                                   }
                               ]
                           },
                           {
                               "node_name": "00911",
                               "name": "00911",
                               "type": "type10",
                               "code": "N00911",
                               "value": "Focused Topical Coverage",
                               "title": "v1.0",
                               "link": {
                                   "node_name": "Focused Topical Coverage",
                                   "name": "Link Node Name 0091",
                                   "url": "",
                                   "direction": "ASYN"
                               },
                               "children": []
                           } 
                       ]
                   }
               ]
           },
           {
               "node_name": "0092",
               "name": "0092",
               "type": "type10",
               "code": "N0092",
               "value": "Psycholinguistic Analysis",
               "title": "v1.0",
               "link": {
                   "node_name": "Psycholinguistic Analysis",
                   "name": "Link Node Name 009",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "0093",
               "name": "0093",
               "type": "type10",
               "code": "N0093",
               "value": "Natural Language Processing",
               "title": "v1.0",
               "link": {
                   "node_name": "Natural Language Processing",
                   "name": "Link Node Name 009",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": [
                   {
                       "node_name": "00930",
                       "name": "00930",
                       "type": "type10",
                       "code": "N00930",
                       "value": "Entity Recognition",
                       "title": "v1.0",
                       "link": {
                           "node_name": "Entity Recognition",
                           "name": "Link Node Name 0093",
                           "url": "",
                           "direction": "ASYN"
                       },
                       "children": []
                   }
               ]
           }
       ]
   },
   {
       "node_name": "0010",
       "name": "0010",
       "type": "type11",
       "code": "N0010",
       "value": "Morality Intuitions",
       "title": "v1.0",
       "link": {
           "node_name": "Morality Intuitions",
           "name": "Link Node Name 00",
           "url": "",
           "direction": "ASYN"
       },
       "children": [
           {
               "node_name": "00100",
               "name": "00100",
               "type": "type11",
               "code": "N00100",
               "value": "Care/harm",
               "title": "v1.0",
               "link": {
                   "node_name": "Care or harm",
                   "name": "Link Node Name 0010",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "00101",
               "name": "00101",
               "type": "type11",
               "code": "N00101",
               "value": "Fairness/cheating",
               "title": "v1.0",
               "link": {
                   "node_name": "Fairness/cheating",
                   "name": "Link Node Name 0010",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "00102",
               "name": "00102",
               "type": "type11",
               "code": "N00102",
               "value": "Loyalty/betrayal",
               "title": "v1.0",
               "link": {
                   "node_name": "Loyalty/betrayal",
                   "name": "Link Node Name 0010",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "00103",
               "name": "00103",
               "type": "type11",
               "code": "N00103",
               "value": "Authority/subtitle",
               "title": "v1.0",
               "link": {
                   "node_name": "Authority/subtitle",
                   "name": "Link Node Name 0010",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "00104",
               "name": "00104",
               "type": "type11",
               "code": "N00104",
               "value": "Sanctity/degradation",
               "title": "v1.0",
               "link": {
                   "node_name": "Sanctity/degradation",
                   "name": "Link Node Name 0010",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           }
       ]
   },
   {
       "node_name": "0011",
       "name": "0011",
       "type": "type12",
       "code": "N0011",
       "value": "Personality Test Assesment",
       "title": "v1.0",
       "link": {
           "node_name": "Personality Test Assesment",
           "name": "Link Node Name 00",
           "url": "",
           "direction": "ASYN"
       },
       "children": [
           {
               "node_name": "00110",
               "name": "00110",
               "type": "type12",
               "code": "N00110",
               "value": "Openness",
               "title": "v1.0",
               "link": {
                   "node_name": "Openness",
                   "name": "Link Node Name 0011",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "00111",
               "name": "00111",
               "type": "type12",
               "code": "N00111",
               "value": "Conscientiousness",
               "title": "v1.0",
               "link": {
                   "node_name": "Conscientiousness",
                   "name": "Link Node Name 0011",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "00112",
               "name": "00112",
               "type": "type12",
               "code": "N00112",
               "value": "Extratitle",
               "title": "v1.0",
               "link": {
                   "node_name": "Extratitle",
                   "name": "Link Node Name 0011",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "00113",
               "name": "00113",
               "type": "type12",
               "code": "N00113",
               "value": "Agreeableness",
               "title": "v1.0",
               "link": {
                   "node_name": "Agreeableness",
                   "name": "Link Node Name 0011",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           },
           {
               "node_name": "00104",
               "name": "00104",
               "type": "type12",
               "code": "N00104",
               "value": "Neuroticism",
               "title": "v1.0",
               "link": {
                   "node_name": "Neuroticism",
                   "name": "Link Node Name 0010",
                   "url": "",
                   "direction": "ASYN"
               },
               "children": []
           }
       ]
   }
 ]
   }
 ]
};

document.querySelectorAll('.collapsible_button').forEach(collapseButton => {
  collapseButton.addEventListener("click", function () {
    const content = collapseButton.nextElementSibling;
    collapseButton.classList.toggle("collapsible_button--active");

    if (content.style.maxHeight) {
      // content.style.maxHeight = content.scrollHeight + 'px';
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}

)



