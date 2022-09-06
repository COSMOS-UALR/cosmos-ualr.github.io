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


var data = {
  "id"    : 1,
  "title" : "+3",
  "value" : "Multimedia OIE",
  "children": [
      {
          "id"    : 2,
          "title" : "+3",
          "value" : "Characterizing Tactics and Impact Assesment",
          "children" : [
            { 
              "id": 6,
              "title": "+7",
               "value": "Content",
              "children": [
                  {
                    "id": 59,
                    "title": "",
                    "value": "Discourse Shift"
                  },
                  {
                    "id": 60,
                    "title": "",
                    "value": "Shallow/Deep Fake"
                  },
                  {
                    "id": 61,
                    "title": "",
                    "value": "Content Cloning/repurposing"
                  },
                  {
                    "id": 62,
                    "title": "",
                    "value": "Discourse/Narrative Fusion"
                  },
                  {
                    "id": 64,
                    "title": "",
                    "value": "Coordinated Content Push"
                  },
                  {
                    "id": 65,
                    "title": "",
                    "value": "Toxicity and Community"
                  },
                  {
                    "id": 55,
                    "title": "",
                    "value": "Cross Platform Coordination"
                  },
                  {
                    "id": 58,
                    "title": "",
                    "value": "Coordinated/Deep Fakes"
                  },
                ]
            },
            {
              "id": 7,
              "title": "+6",
              "value": "Network",
               "children": [
                {
                  "id": 16,
                  "title": "",
                  "value": "Commenter Flash Mob"
                },
                {
                  "id": 26,
                  "title": "",
                  "value": "Discourse/ Narrative Fusion"
                },
                {
                  "id": 36,
                  "title": "",
                  "value": "Content Coordinator Push"
                },
                {
                  "id": 44,
                  "title": "",
                  "value": "Toxicity and Community"
                },
                {
                  "id": 63,
                  "title": "",
                  "value": "Cross Platform Coordinator"
                },
                {
                  "id": 51,
                  "title": "",
                  "value": "Coordinated Deep Fakes"
                },
               ]
            },
            {
              "id": 8,
              "title": "+5",
              "value": "Platform Affordance",
              "children" : [
                {
                  "id": 17,
                  "title": "",
                  "value": "Algorithmic Bias Exploration"
                },
                {
                  "id": 27,
                  "title": "",
                  "value": "Artificial Engagement Boosting"
                },
                {
                  "id": 45,
                  "title": "",
                  "value": "Cross Platform Coordinaton"
                },
                {
                  "id": 37,
                  "title": "",
                  "value": "Long Term/ Short Term Game"
                },
                {
                  "id": 52,
                  "title": "",
                  "value": "Coordinated Deep Fakes"
                }
              ]
            },
          ]
      },
      {
          "id"    : 3,
          "title" : "+2",
          "value" : "Characterization of Social Process Dynamics",
          "children" : [
              {
                "id": 9,
                "title" : "+3",
                "value": "Connective Action Based Framework",
                "children": [
                  {
                    "id": 18,
                    "title": "",
                    "value": "Collective Identity"
                  },
                  {
                    "id": 23,
                    "title": "",
                    "value": "Network Organization"
                  },
                  {
                    "id": 38,
                    "title": "",
                    "value": "Mobilization"
                  },
                ]
              },
              {
                "id"    : 10,
                "title" : "+2",
                "value" : "S Function Characterization",
                "children": [
                  {
                    "id"    : 19,
                    "title" : "",
                    "value" : "Accelerating Phase"
                },
                {
                  "id"    : 29,
                  "title" : "",
                  "value" : "Deccelerating Phase"
              },
                ]
            },
          ]
      },
      {
        "id"    : 4,
        "title" : "+3",
        "value" : "Characterizing Information Actor",
        "children" : [
          {
            "id": 11,
            "title": "+2",
            "value": "Information Producer",
            "children": [
              {
                "id": 20,
                "title": "+5",
                "value": "Diffusion of Innovation Theory based Characterization",
                "children": [
                  {
                    "id": 30,
                    "title": "",
                    "value": "Innovators" 
                  },
                  {
                    "id": 39,
                    "title": "",
                    "value": "Early Adopters" 
                  },
                  {
                    "id": 46,
                    "title": "",
                    "value": "Early Majority" 
                  },
                  {
                    "id": 53,
                    "title": "",
                    "value": "Late Majority" 
                  },
                  {
                    "id": 56,
                    "title": "",
                    "value": "Late Adopters" 
                  },
                ]
              },
              {
                "id": 21,
                "title": "",
                "value": "S Characteristics",
                "children" : [
                  {
                    "id": 31,
                    "title": "",
                    "value": "Initiators" 
                  },
                  {
                    "id": 40,
                    "title": "",
                    "value": "Amplifiers" 
                  },
                  {
                    "id": 47,
                    "title": "",
                    "value": "Sustainers"
                  },
                ] 
              },
            ]
      },
      {
        "id": 12,
        "title": "",
        "value": "Information Consumer" 
      },
      {
        "id": 13,
        "title": "",
        "value": "Information Actor Characterization based on Toxicity Propagation" 
  },
    ]
  },
    {
      "id"    : 5,
      "title" : "+2",
      "value" : "Characterizing Network Coordinator Structure",
      "children" : [
        {
          "id"    : 64,
          "title" : "",
          "value" : "Core Structure (focal structure - core mobilizers)",
          
      },
        {
          "id"    : 65,
          "title" : "",
          "value" : "Pheripheral Structure (foot soldiers)"
      },
      ]
  }
  ]
};



// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }

// var sideBar = document.getElementsByClassName("sidebarCollapse");
// sideBar.addEventListener("click", function() {
//   sideBar.toggleClass('active');

// });

// var collapseButton = document.getElementsByClassName("collapsible_button");
// var i;

// for (i = 0; i < collapseButton.length; i++) {
//   collapseButton[i].addEventListener("click", function() {
//     var content = this.nextElementSibling;
//     this.classList.toggle("collapsible_button--active");

//     if(this.classList.toggle("collapsible_button--active")) {
//       content.style.maxHeight = content.scrollHeight + 'px';
//     } else {
//       content.style.maxHeight = 0;
//     }

    
//   });
// }

document.querySelectorAll('.collapsible_button').forEach( collapseButton => {
  collapseButton.addEventListener("click", function() {
    const content = collapseButton.nextElementSibling;
    collapseButton.classList.toggle("collapsible_button--active");

    if(content.style.maxHeight) {
     // content.style.maxHeight = content.scrollHeight + 'px';
     content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }    
  });
}

)

  // Create a new d3.mitchTree object and set the data source
  var treePlugin = new d3.mitchTree.boxedTree()
  .setData(data) // the data variable comes from simple_tree.js
  .setElement(document.getElementById("my_tree"))
  .setIdAccessor(function(data) {
      return data.id;
  })
  .setChildrenAccessor(function(data) {
      return data.children;
  })
  .setBodyDisplayTextAccessor(function(data) {
      return data.value;
  })
  .setTitleDisplayTextAccessor(function(data) {
      return data.title;
  })
  .initialize();


// $(document).ready(function () {
//   $('#sidebarCollapse').on('click', function () {
//       $('#sidebar').toggleClass('active');
//   });
// });