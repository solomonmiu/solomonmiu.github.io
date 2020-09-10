/* eslint-disable no-undef */
"use strict";
/** get input from user and create book object
 * @returns {noreturn} no return
 */
function mylibrary() 
{
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let libraryId = document.getElementById("libId").value;
    let book =
     {
        bookTitle: title,
        bookAuthor: author,
        bookLibraryId: libraryId
    };
    alert("Book Object is  created succesfully");

}

let library = [
    {
        title: "The Road Ahead", author: "Bill Gates", libraryID: 1254
    },
    {
        title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245
    }];
// eslint-disable-next-line valid-jsdoc
/**
 * @param  {string} userButton user requirement
 * 
 */
function showInfoOnMouseOver(userButton)
 {
let mydisplayarray=[];// stores the info on user mouse over event
for(let index=0;index<library.length;index++)
{
    if(userButton=="title"){
        mydisplayarray[index]=library[index].title;
    }
    else if(userButton=="author"){
        mydisplayarray[index]=library[index].author;
    }
    else {
        mydisplayarray[index]=library[index].libraryID;
    }
   

}
mydisplayarray = mydisplayarray.sort().join("<br>");// sort the array and join them with newline
document.getElementById("diplayOnMouseOver").innerHTML=mydisplayarray;

}
/**
 * @param  {string} userButton display info when user click
 * @returns {noreturn} no returns
 */
function showInfoOnMouseClick(userButton) {
    let mydisplayarray=[];// stores the info on user mouse over event
    for(let index=0;index<library.length;index++)
    {
        if(userButton=="title"){
            mydisplayarray[index]=library[index].title;
        }
        else if(userButton=="author"){
            mydisplayarray[index]=library[index].author;
        }
        else {
            mydisplayarray[index]=library[index].libraryID;
        }
       
    
    }
    mydisplayarray = mydisplayarray.sort().join("\n");// sort the array and join them with newline
    document.getElementById("diplayOnMouseClick").hidden=false;
    document.getElementById("diplayOnMouseClick").innerHTML=mydisplayarray;
    
    }