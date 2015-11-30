'use strict';

angular.module('mainApp')
    /* ****************************************** */
    /* Slim Scroll */
    /* ****************************************** */
    .directive('appScroll', function() {
        return {
            restrict: 'A',
            link: function(scope, element){
                $(element).addClass('scroll').slimScroll({
                    height: '315px',
                    size: '5px',
                    color:'rgba(50,50,50,0.3)'
                });
            }
        }
    });
