/*
 File: script.js
 Assignment: Interactive Dynamic Multiplication Table
 Sindhuja Ghale, UMass Lowell Computer Science, Sindhuja_Ghale@student.uml.edu
 Copyright (c) 2023 by Sindhuja Ghale. All rights reserved. May be
 freely copied or excerpted for educational purposes with credit to the
 author.
 Updated by SG on June 24, 2023 at 5:00 PM
 Brief Overview: This interactive multiplication table dynamically generates based on user input, utilizing the power of jQuery.
 Sources of Help: w3school, Class Notes, and Stack Overflows. 
*/

var one;
var two;
var three;
var four;

// Seting the display property of the element with ID "errorMSG" to "none" to hide it initially
var x = document.getElementById("errorMSG");
x.style.display = "none";

// Round the decimal number to the nearest whole number 
function getNums(){
    one = Math.round(document.getElementById("num1").value);
    two = Math.round(document.getElementById("num2").value);
    three = Math.round(document.getElementById("num3").value);
    four = Math.round(document.getElementById("num4").value);
}

// corrects the order of two numbers if the user inputs them in the wrong order and returns the minimum value. (Swapping )
function findMin(){
    if(Number(arguments[0]) < Number(arguments[1])){
        return arguments[0];
    }
    else{
        return arguments[1];
    }
}

// Function to  dynamically generate the table
function table() {
    getNums();

    //Sets the range of the table to be generated
    var tableXLimDown = findMin(one, two) - 2;
    var tableYLimDown = findMin(three, four) - 2;
    
    var myTableDiv = document.getElementById("table");
    var table = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    //For loop to generate one axis of the table
    for (var i = 0; i < Math.abs(two - one) + 2; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        tableXLimDown++;
        tableYLimDown = findMin(three, four) - 2;
        
        //For loop to generate the other axis of the table
        for (var j = 0; j < Math.abs(three - four) + 2; j++) {
            var th = document.createElement('TH');
            var td = document.createElement('TD');
        
            tableYLimDown++;
            
            // Sets the top left cell to be empty
            if(i == 0 && j == 0){
                th.appendChild(document.createTextNode("  "));
                tr.appendChild(th);
            }

            // Sets an axis
            else if(i == 0){
                th.appendChild(document.createTextNode(tableYLimDown));
                tr.appendChild(th);
            }

            //sets another axis
            else if(j == 0){
                th.appendChild(document.createTextNode(tableXLimDown));
                tr.appendChild(th);
            }
            
            //Sets the body of the table with correct values
            else {
                td.appendChild(document.createTextNode(tableYLimDown * tableXLimDown));
                tr.appendChild(td);
            }
        }
    }
    
    // Creates new table deleting if there is exiting table
    if(myTableDiv.hasChildNodes()){
        myTableDiv.removeChild(myTableDiv.firstChild);
        myTableDiv.appendChild(table);
    }
    else{
        myTableDiv.appendChild(table);
    }
    
}

