"use strict";
/* global assert isREverse*/
/* that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
otherwise. */
describe("is rverse of string", function () {
 it("word reverse", function () {
 assert.equal(reverseArray("welocom to msd"), " mocolew ot dsm ");
 })
});

describe("is rverse of string", function () {
    it("word reverse", function () {
    assert.equal(reverseArray("mom waw dad"), "dad waw mom");
    })
   });

   describe("is the longest word", function () {
    it("return the longest word", function () {
    assert.equal(findLongWord(["hello","bye","hi","greetings"],3), ["greetings"]);
    })
   });