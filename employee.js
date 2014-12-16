/**
 * AngularJS Filters
 *
 * @author João Oliveira <@Joao_Oliveira>
 * load and initialize angular.js application
 *
 */
'use strict';

//
// Padded employee number
// 99 -> 00000099
//
app.filter('jsEmployee', function(){    
    return function(id) {
        var str = '' + id;
        while (str.length < 8) {
            str = '0' + str;
        }
        return str;
    }; 
});