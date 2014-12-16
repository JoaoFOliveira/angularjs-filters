/**
 * AngularJS Filters
 *
 * @author João Oliveira <@Joao_Oliveira>
 * load and initialize angular.js application
 *
 */
"use strict";

//
// Returns url of photo
// johndoe_avatar -> /photos/johndoe_avatar.png
//
app.filter("jsPhotourl", function() {
    return function(photoId) {
    	return photoId ? "/photos/" + photoId + ".png" : "";
    };
});
