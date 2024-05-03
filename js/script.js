// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  // day of week variables
  const tuesday = document.getElementById("option-tuesday").checked
  const thursday = document.getElementById("option-thursday").checked

  // user age variable
  const ageOfUser = parseInt(document.getElementById("age-of-user").value)

  // add price of basic burger
  if (((tuesday == true) || (thursday == true)) || ((ageOfUser > 12) && (ageOfUser < 21))) {
    // output
    document.getElementById("eligibility-for-user").innerHTML = "You are eligible for student pricing!"
  } else {
    // output
    document.getElementById("eligibility-for-user").innerHTML = "You must pay regular price."
  }
}
