/**
 * AngularJS Filters
 *
 * @author João Oliveira <@Joao_Oliveira>
 *
 */
'use strict';

/**
 * Unix Timestamp to Human Date Format
 * 123456789 -> 2014-01-01
 */
app.filter('jsDate', function($filter){    
    return function(date) {
        return date ? moment(date,'YYYY-MM-DD HH:mm:ss').format('DD-MM-YYYY') : '';
    }; 
});

/**
 * Filter to convert date to weekday
 * 1984-02-28 00:00:00 -> Tuesday
 */
app.filter('jsWeekday', function($filter){
	return function(date) {
		return moment(date,'YYYY-MM-DD HH:mm:ss').lang('pt').format('dddd');
	};
});

/**
 * Filter to convert date and time without seconds
 * 1984-02-28 00:00:00 -> 1984-02-28 00:00
 */
app.filter('jsDateTimeMinutes', function($filter){    
    return function(date) {
        return date ? moment(date,'YYYY-MM-DD HH:mm:ss').format('DD-MM-YYYY HH:mm') : '';
    }; 
});
