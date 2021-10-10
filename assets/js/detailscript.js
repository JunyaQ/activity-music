var folderName = localStorage.getItem("pageName");
console.log(folderName);
/**
 * <h1 class="folderTitle" id="folderTitle"></h1>
<div>
<ul id="unSonglist" class="unSonglist">
    
</ul>
</div>

*/
/**local refresh */
function localrefresh(){
    var ulist = document.getElementById("unSonglist");
    ulist.innerHTML='';
    displayfoldermusic();
}

//display folder title on the top
/**for the title of the folder should display on the top of the page: 
 * id&class: folderTitle
 */
h1 = document.getElementById("folderTitle");
h1.innerHTML = folderName;

displayfoldermusic();
/**delete song function */
function deletesong(click_id){
    var id = click_id;
console.log(id);

var tempid = id.split(',');
//var folderid = tempid[0]+tempid[1];
var tempname = tempid[0];
var tempartist = tempid[1];
for(var i=0; i<localStorage.length;i++){
var llength = localStorage.length;
var key = localStorage.getItem("folderList");
var songitem = localStorage.getItem(i);
if(songitem!=key&& songitem!=null){
  var temp = songitem.split(',');
var songname = temp[1];
var songartist = temp[2];
if(songname == tempname && songartist==tempartist){
  localStorage.removeItem(i);
  var num =i+1;
  for(var j=num; j<llength;j++){
    var s =[];
    var st = localStorage.getItem(j);
    if(st!=key&& st!=null){
    var songtemp = st.split(',');
    var songfolder = songtemp[0];
    var songnametemp = songtemp[1];
    var songartisttemp = songtemp[2];
    localStorage.removeItem(j);
    s.push(songfolder);
    s.push(songnametemp);
    s.push(songartisttemp);
    localStorage.setItem(j-1,s);
    }
  }
  }
}

localrefresh();
}

}

// display the playlist
/**for each list item, class: folderSongList, for the entire order: class&id: unSonglist */
function displayfoldermusic(){
for(var i=0; i<localStorage.length;i++){
var key = localStorage.getItem("folderList");
var songitem = localStorage.getItem(i);
// console.log("key: "+key);
//console.log("item: "+songitem);

if(songitem!=key&& songitem!=null){
    var temp = songitem.split(',');
    if(temp[0]==folderName){
var songname = temp[1];
var songartist = temp[2];
console.log("song: "+songname+songartist);

if(songname!=undefined){
var ulist = document.getElementById("unSonglist");
var li = document.createElement("li");
li.innerHTML = "Song: "+songname+'&nbsp &nbsp &nbsp &nbsp &nbsp'+" Artist: "+songartist;
li.setAttribute("id",songname+","+songartist+","+"li");
li.setAttribute("draggable",true);
li.setAttribute("style","line-height: 200%;");
li.setAttribute("class","folderSongList");
ulist.appendChild(li);

var delsong = document.createElement("button");
delsong.innerHTML='Delete';
delsong.setAttribute("id",songname+","+songartist+","+"del");
delsong.setAttribute("onclick","deletesong(this.id)");
delsong.setAttribute("class","delsongclass");
delsong.setAttribute("value","delete");
li.appendChild(delsong);
}
}
}
}
}
/**drag and drop function for item to change order */
var item = null;

function handleDragStart(e) {
item = this;
e.dataTransfer.effectAllowed = 'move';
e.dataTransfer.setData('text/html', this.innerHTML);
}
function handleDragOver(e) {
if (e.preventDefault) {
    e.preventDefault(); 
}
e.dataTransfer.dropEffect = 'move'; 
return false;
}
function handleDragEnter(e) {
this.classList.add('over');
}

function handleDragLeave(e) {
this.classList.remove('over');  
}
function handleDrop(e) {
if (e.stopPropagation) {
    e.stopPropagation(); 
}

if (item != this) {
    
    item.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
}
return false;
}
function handleDragEnd(e) {
[].forEach.call(items, function (col) {
    col.classList.remove('over');
});
}

var items = document.querySelectorAll('#unSonglist .folderSongList');
[].forEach.call(items, function (litem) {
litem.addEventListener('dragstart', handleDragStart, false);
litem.addEventListener('dragenter', handleDragEnter, false)
litem.addEventListener('dragover', handleDragOver, false);
litem.addEventListener('dragleave', handleDragLeave, false);
litem.addEventListener('drop', handleDrop, false);
litem.addEventListener('dragend', handleDragEnd, false);
});


