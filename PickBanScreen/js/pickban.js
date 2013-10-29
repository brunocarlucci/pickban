var players= {'navi':['XBOCT','Dendi','Funn1k','Puppey','KurokY'],
			  'alliance':['Loda','S4','AdmiralBulldog','Akke','EGM'],
			  'vp':['LightOfHeaven','God','Solo','NS','Ars-Art'],
			  'fnatic':['Era','H4nni','Trixi','N0tail','Fly'],
			  'liquid':['TC','Bulba','qojqva','FLUFFNSTUFF','waytosexy'],
			  'eg':['Jeyo','MSS','Universe','Fear','Fogged'],
}; //List of players for this competition


function showInfoStats()
{
	$("#skillsvideo")[0].pause();
	$("#skills").hide();
	$("#info").hide();
	$("#players").hide();
	$("#teams").hide();
	$("#info").show("slide");
}

function showInfoTeams()
{
	$("#skillsvideo")[0].pause();
	$("#skills").hide();
	$("#info").hide();
	$("#players").hide();
	$("#teams").hide();
	$("#teams").show("slide");
}

function showInfoPlayers()
{
	$("#skillsvideo")[0].pause();
	$("#skills").hide();
	$("#info").hide();
	$("#players").hide();
	$("#teams").hide();
	$("#players").show("slide");
}

function showInfoSkills()
{
	$("#info").hide();
	$("#players").hide();
	$("#teams").hide();
	$("#skills").show("slide",1000,function(){$("#skillsvideo")[0].play();});
	
}

setBan= function(side, number, hero)
{
	$("#" + side +"ban" + number)[0].src="images/banicons/" + hero + ".png";
	$("#" + side +"ban" + number).show("slide",1000);
};
pickedheroes={radiant:[],dire:[]};

setPick= function(side, number, hero)
{
	$("#" + side +"pick" + number)[0].src="webm/npc_dota_hero_" + hero + ".webm";
	$("#" + side +"pick" + number)[0].play();
	$("#" + side +"pickname" + number).text(hero);
	$("#" + side +"pickname" + number).show();
	$("#" + side +"pick" + number).show("scale",1000, function(){$("#" + side +"pick" + number)[0].play();});
	$(".minimap-" + side+"-hero" + number)[0].src="images/minimapicons/" + hero + ".png";
	$(".minimap-" + side+"-hero" + number).show("pulsate");
	pickedheroes[side].concat(hero);
	
};



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
			                    distance: -50,
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
    
    
var radiantlanes={top:[],mid:[],bottom:[],junglesafe:[],jungleoff:[]}; //Top, Mid, Bottom, Jungle
var direlanes={top:[],mid:[],bottom:[],junglesafe:[],jungleoff:[]}; //Top, Mid, Bottom, Jungle

var movepositions = {
	diremid1:['715','220',300, 
			 '476','429',6300],
	direbottom1:['815','265',300,
				'815','595',6300],
	diretop1:['654','114',300,
			 '82','149',6300],
	direjunglesafe1:['654','114',300,
			 '425','100',4600,
			 '379','200',4600],
	
	direroam1:['654','114',300,
				   '482','114',600,
				   '439','362',4000,
				   '330','352',3000,
				   '252','291',3600,
				   '73','266',2600,
				   '254','158',4000,
				   '409','158',5000,
				   '469','182',4000
				   ],
				   				
	radiantmid1:['176','680',300,
				'376','490',6300],
				
	radiantjungleoff1:['176','680',300,
				'412' ,'456',6300,
				'286' ,'283',5300,
				'371' ,'189',3300
				],
				
				
	direjungleoff1:['715','220',300, 
			 	'476','429',6300,
				'586','526',4300,
				'597','671',4300,
				],
	radiantbottom1:['228','800',300,
				   '793','753',6300],
	radianttop1:['61','638',300,
			    '69','306',6300],
	radiantjunglesafe1:['228','800',300,
				   '454','803',4600,
				   '554','703',4600,
				   ],
	
	radiantroam1:['228','800',300,
				   '454','803',600,
				   '541','728',4000,
				   '716','728',3600,
				   '770','631',3600,
				   '770','603',2600,
				   '664','601',4000,
				   '411','478',5000,
				   '420','581',4000,
				   '471','581',3600
				   ],
				   
				   
	
	
};

function partial(func /*, 0..n args */) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var allArguments = args.concat(Array.prototype.slice.call(arguments));
    return func.apply(this, allArguments);
  };
}

goToLane = function(target, lane, side, patrol)
{

	patrol = typeof patrol !== 'undefined' ? patrol : -1; //default param.
	
	var hero = "minimap-" + side + "-hero" + target;
	var balloon = "balloon-"+side+ "-hero"+target;
	
	goToLane2 = function(hero2, balloon2,lane2, side2, patrol2, animationstep)
	{
		console.log('enter');
		if (animationstep<=movepositions[side2+lane2+'1'].length)
		{
			$("."+hero2).animate({left:movepositions[side2+lane2+'1'][animationstep]+'px', top:movepositions[side2+lane2+'1'][animationstep+1]+'px'},movepositions[side2+lane2+'1'][animationstep+2]);
			$("."+balloon2).animate({left:(movepositions[side2+lane2+'1'][animationstep]-10)+'px', top:(movepositions[side2+lane2+'1'][animationstep+1]-100)+'px'},movepositions[side2+lane2+'1'][animationstep+2],partial(goToLane2,hero2,balloon2, lane2, side2,patrol2, animationstep+3));

		}
		else
		{
			$("."+balloon2).hide("scale");
			if(patrol2>=0)
			{
				console.log('patrolling');
				animationstep=patrol2*3;
				goToLane2(hero2, balloon2,lane2, side2, patrol2, animationstep);
			}
			
		}
	};
	$("."+balloon).css('left',($("."+hero).position().left-10)+"px");
	$("."+balloon).css('top',($("."+hero).position().top-100)+"px");
	 
	$("."+balloon).show("bounce",1000,partial(goToLane2,hero,balloon, lane, side, patrol, 0));
	
	
	//goToLane2();
	
	
};
goMidDire = function(target) {
	goToLane(target,'mid','dire');
	if(!direlanes['mid'].indexOf(target)>-1)
		direlanes['mid'].concat(target);
} ;

goBottomDire = function(target) {
	goToLane(target,'bottom','dire');
	if(!direlanes['bottom'].indexOf(target)>-1)
		direlanes['bottom'].concat(target);
} ;

goTopDire = function(target) {
	goToLane(target,'top','dire');
	if(!direlanes['top'].indexOf(target)>-1)
		direlanes['top'].concat(target);
} ;
goJungleSafeDire = function(target) {
	goToLane(target,'junglesafe','dire');
	if(!direlanes['junglesafe'].indexOf(target)>-1)
		direlanes['junglesafe'].concat(target);
} ;

goJungleOffDire = function(target) {
	goToLane(target,'jungleoff','dire');
	if(!direlanes['jungleoff'].indexOf(target)>-1)
		direlanes['jungleoff'].concat(target);
} ;


goMidRadiant = function(target) {
	goToLane(target,'mid','radiant');
	if(!radiantlanes['mid'].indexOf(target)>-1)
		radiantlanes['mid'].concat(target);
} ;

goBottomRadiant = function(target) {
	goToLane(target,'bottom','radiant');
	if(!radiantlanes['bottom'].indexOf(target)>-1)
		radiantlanes['bottom'].concat(target);
} ;

goTopRadiant = function(target) {
	goToLane(target,'top','radiant');
	if(!radiantlanes['top'].indexOf(target)>-1)
		radiantlanes['top'].concat(target);
} ;

goJungleSafeRadiant = function(target) {
	goToLane(target,'junglesafe','radiant');
	if(!radiantlanes['junglesafe'].indexOf(target)>-1)
		radiantlanes['junglesafe'].concat(target);
} ;

goJungleOffRadiant = function(target) {
	goToLane(target,'jungleoff','radiant');
	if(!radiantlanes['jungleoff'].indexOf(target)>-1)
		radiantlanes['jungleoff'].concat(target);
} ;

goRoamRadiant = function(target) {
	goToLane(target,'roam','radiant',2);
	if(!radiantlanes['roam'].indexOf(target)>-1)
		radiantlanes['roam'].concat(target);
} ;
goRoamDire = function(target) {
	goToLane(target,'roam','dire',2);
	if(!direlanes['roam'].indexOf(target)>-1)
		direlanes['roam'].concat(target);
} ;


bounce = function(){
	
	$(".balloon").show("bounce",1000);
} ;



opposinglane={mid:'mid',bottom:'top',top:'bottom',junglesafe:'jungleoff',jungleoff:'junglesafe'};

getEnemy=function(side, lane){
	if (side=='radiant')
	{
		return direlanes[opposinglane[lane]];
	}
	else
	{
		return radiantlanes[opposinglane[lane]];
	}
};

getAlly=function(side, lane){
	if (side=='radiant')
	{
		return radiantlanes[lane];
	}
	else
	{
		return direlanes[lane];
	}
};

function setTeams(team1, team2, bestof, score1, score2,teaminfo)
{
	$("#radiantlogo")[0].src="images/teamlogos/"+team1+".png";
	$("#direlogo")[0].src="images/teamlogos/"+team2+".png";
	if (bestof==="Bo5")
	{
		$("#radiantscore")[0].src="images/assets/bo5-"+score1+".png";
		$("#direscore")[0].src="images/assets/bo5-"+score2+".png";
	}
	else if (bestof==="Bo1")
	{
		$("#radiantscore")[0].src="images/assets/bo1-0.png";
		$("#direscore")[0].src="images/assets/bo1-0.png";
	}
	else
	{
		$("#radiantscore")[0].src="images/assets/bo3-"+score1+".png";
		$("#direscore")[0].src="images/assets/bo3-"+score2+".png";
	}
	
	for(var i=1;i<6;i++)
	{
		$("#radiantportrait"+i)[0].src="images/playerlogos/"+team1+"/" + i + ".jpg";
		$("#radiantplayername"+i).text(players[team1][i-1]);
		$("#direportrait"+i)[0].src="images/playerlogos/"+team2+"/" + i + ".jpg";
		$("#direplayername"+i).text(players[team2][i-1]);
	}
	
	
	
}
