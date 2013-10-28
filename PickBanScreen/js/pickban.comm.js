var socket;
window.onload = function() {
 
    var messages = [];
    var messagedata={};
    socket = io.connect('http://localhost:3700');
    
 
    socket.on('message', function (data) {
        if(data.message) {
        	messagedata = JSON.parse(data.message);
        	window[messagedata['type']](messagedata);
            
        } else {
            console.log("There is a problem:", data);
        }
    });

    /*sendButton.onclick = function() {
        var text = field.value;
        socket.emit('send', { message: text });
    };*/
 
};
function test(data)
{
	alert(data['data']);
}
function move(data)
{
	console.log(data);
	window["go"+data['lane']+data['side']](data['target']);
}

function team(data)
{
	setTeams(data['team1'],data['team2'],data['bestof'],data['score1'], data['score2'],data['teaminfo']);
}

function ban(data)
{
	setBan(data['side'],data['number'],data['hero']);
}

function pick(data)
{
	setPick(data['side'],data['number'],data['hero']);
}

function pick(data)
{
	setPick(data['side'],data['number'],data['hero']);
}

function showteams(data)
{
	showInfoTeams();
}
function showplayers(data)
{
	showInfoPlayers();
}
function showskills(data)
{
	showInfoSkills();
}
function showinfo(data)
{
	showInfoStats();
}
