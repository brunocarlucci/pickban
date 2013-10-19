$(function () {
    	
    	// Radialize the colors
		Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function(color) {
		    return {
		        radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
		        stops: [
		            [0, color],
		            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
		        ]
		    };
		});
		
		// Build the chart
        $('#container').highcharts({
            chart: {
                plotBackgroundColor: '#888',
                backgroundColor:'rgba(255, 255, 255, 0)',
                plotBorderWidth: null,
                plotShadow: false
            },
            credits: {
      			enabled: false
  			},
  			exporting: {
		        enabled: false
		    },
            title: {
                text: ''
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
			                    enabled: true,
			                    distance: -20,
		                     format: '{point.name}<br/> {point.percentage:.1f} %',

			                    style: {
			                        
			                        color: 'white',
			                        textShadow: '0px 1px 2px black'
			                    }
			                },
			                
			                
			            }
			        },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Banned',   45.0],
                    ['Picked',       26.8],
                    ['Neither',    8.5]
                    
                    
                ]
            }]
        });
        
        // Build the chart
        $('#container2').highcharts({
        	 credits: {
      			enabled: false
  			},
            chart: {
                plotBackgroundColor: null,
                backgroundColor:'rgba(255, 255, 255, 0)',
                plotBorderWidth: null,
                plotShadow: false
            },
            exporting: {
		        enabled: false
		    },
            title: {
                text: ''
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    center: ['50%', '50%'],
                    dataLabels: {
			                    enabled: true,
			                    distance: -20,
		                     format: '{point.name}<br/> {point.percentage:.1f} %',

			                    style: {
			                        
			                        color: 'white',
			                        textShadow: '0px 1px 2px black'
			                    }
			                },
			                
			                
			            }
			        },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Banned',   15.0],
                    ['Picked',       76.8],
                    ['Neither',    8.5]
                    
                    
                ]
            }]
        });
        
        
        // Build the chart
        $('#container3').highcharts({
            chart: {
            	backgroundColor:'rgba(255, 255, 255, 0)',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'column'

            },
            credits: {
      			enabled: false
  			},
  			exporting: {
		        enabled: false
		    },
            title: {
                text: ''
            },
            xAxis: {
                categories: [' '],
                title: {
                    text: null
                }
            },
            
            yAxis: {
                min: 0,
                title: {
                    text: 'Percentage',
                    align: 'low'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                column: {
                     dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        format: '{point.y} %',
                    }

                }
            },
            
            series: [{
                name: '1st',
                data: [12]
            }, {
                name: '2nd',
                data: [24]
            }, {
                name: '3rd',
                data: [33]
            }, {
                name: '4th',
                data: [4]
            }, {
                name: '5th',
                data: [27]
            }
            ]

        });
        
        // Build the chart
        $('#container4').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                backgroundColor:'rgba(255, 255, 255, 0)',
                plotShadow: false
            },
            credits: {
      			enabled: false
  			},
  			exporting: {
		        enabled: false
		    },
            title: {
                text: ''
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -30,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['75%', '75%']
            }
        },

             series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Win',   45.0],
                ['Lose',   55.0]
                
            ]

            }]
        });
    });
    
    
var radiantlanes=[0,0,0,0]; //Top, Mid, Bottom, Jungle
var direlanes=[0,0,0,0]; //Top, Mid, Bottom, Jungle

var movepositions = {
	diremid:['715','220','300', 
			 '476','429','1300'],
	direbottom:['815','265','300',
				'815','595','1300'],
	diretop:['654','114','300',
			 '82','149','1300'],
	
	radiantmid:['176','680','300',
				'376','490','1300'],
	radiantbottom:['228','800','300',
				   '793','753','1300'],
	radianttop:['61','638','300',
			    '69','306','1300'],
	
	
};

goToLane = function(target, lane, side, patrol)
{
	patrol = typeof patrol !== 'undefined' ? patrol : false; //default param.
	
	var hero = "minimap-" + side + "-hero" + target;
	goToLane2 = function()
	{
		if (animationstep<=movepositions[side+lane].length)
		{
			$("."+hero).animate({left:movepositions[side+lane][animationstep]+'px', top:movepositions[side+lane][animationstep+1]+'px'},movepositions[side+lane][animationstep+2],'swing',goToLane2);
			animationstep+=3;
		}
		else
		{
			if(patrol)
			{
				animationstep=0;
				goToLane2();
			}
		}
	};
	
	animationstep=0;
	goToLane2();
	
	
};
goMidDire = function(target) {
	goToLane(target,'mid','dire');
		
} ;

goBottomDire = function(target) {
	goToLane(target,'bottom','dire');
} ;

goTopDire = function(target) {
	goToLane(target,'top','dire');
} ;


goMidRadiant = function(target) {
	goToLane(target,'mid','radiant');
		
} ;

goBottomRadiant = function(target) {
	goToLane(target,'bottom','radiant');
} ;

goTopRadiant = function(target) {
	goToLane(target,'top','radiant');
} ;
