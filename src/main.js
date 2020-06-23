import {Triangle} from './triangle';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';


$(document).ready(function() {
  $("triangle-tracker-form#").submit(function(event) {
    event.preventDefault();
    const sideOne = parseInt($("input#").val());
    const sideTwo = parseInt($("input#").val());
    const sideThree = parseInt($("input#").val());
    const result = triangleType(triangle);

    $("solution").text(triangle);
  });
});