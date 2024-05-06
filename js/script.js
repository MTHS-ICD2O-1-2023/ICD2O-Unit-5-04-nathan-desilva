// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  // input
  const age = parseInt(document.getElementById('age-entered').value)
  const dayTuesdayChecked = document.getElementById('option-tuesday').checked
  const dayThursdayChecked = document.getElementById('option-thursday').checked

  // process
  if ((dayTuesdayChecked == true || dayThursdayChecked == true) || (age > 12 && age < 21)) {
    document.getElementById('answer').innerHTML = "You get the student discount."
  } else {
    document.getElementById('answer').innerHTML = "You must pay regular price."
  }
}
