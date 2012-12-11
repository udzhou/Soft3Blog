/**
 * @author udzhou
 */
function creWelcome() {
	var canvas = document.getElementById("welcome");
	var canvas2 = document.getElementById("top");
	var context = canvas.getContext("2d");
	var context2 = canvas2.getContext("2d");
	var img = new Image();
	img.src = "images/ruanjian3.jpg";
	img.onload = function() {
		context2.save();
		context2.font = "60px impact";
		context2.fillStyle = '#99FF33';
		context2.textAlign = 'center';
		context2.shadowColor = 'rgba(255,153,0,0.8)';
		//context2.shadowOffsetX=25;
		context2.shadowOffsetY = -6;
		context2.shadowBlur = 2;
		context2.fillText('欢迎观临深职院2010届软件三班之家', 430, 60, 400);
		context2.restore();
		context.drawImage(img, 0, 8, 895, 576);
	}
}

objHome = document.getElementById("Home");
objMember = document.getElementById("Member");
objAlbum = document.getElementById("Album");
objBlog=document.getElementById("Blog");
objActivity=document.getElementById("Activity");
objInfo=document.getElementById("Info");
function creHome() {
	if(objHome != true) {
		var home = document.createElement("iframe");
		home.width = "895px";
		home.height = "584px";
		home.src = "frames/home.html";
		home.id = "Home";
		var homeTitle = document.createElement("p");
		homeTitle.height = "30px";
		homeTitle.innerText = "班级主页";
		homeTitle.id = "homeTitle";
		var anchor = document.createElement("a");
		anchor.id = "home";
		document.getElementById("content").appendChild(homeTitle);
		document.getElementById("homeTitle").appendChild(anchor);
		document.getElementById("content").appendChild(home);
		location.href = "#home";
	}
	if( objHome = true)
		location.href = "#home";
}

function creAlbum() {
	if(objAlbum != true) {
		var album = document.createElement("iframe");
		album.width = "895px";
		album.height = "584px";
		album.src = "frames/album.html";
		album.id = "Album";
		var albumTitle = document.createElement("p");
		albumTitle.height = "30px";
		albumTitle.innerText = "班级相册";
		albumTitle.id = "albumTitle";
		var anchor = document.createElement("a");
		anchor.id = "album";
		document.getElementById("content").appendChild(albumTitle);
		document.getElementById("albumTitle").appendChild(anchor);
		document.getElementById("content").appendChild(album);
		location.href = "#album";
	}
	if( objAlbum = true)
		location.href = "#album";
}

function creMember() {
	if(objMember != true) {
		var member = document.createElement("iframe");
		member.width = "895px";
		member.height = "584px";
		member.src = "frames/member.html";
		member.id = "Member";
		var memberTitle = document.createElement("p");
		memberTitle.height = "30px";
		memberTitle.innerText = "班级成员";
		memberTitle.id = "memberTitle";
		var anchor = document.createElement("a");
		anchor.id = "member";
		document.getElementById("content").appendChild(memberTitle);
		document.getElementById("memberTitle").appendChild(anchor);
		document.getElementById("content").appendChild(member);
		location.href = "#member";
	}
	if( objMember = true)
		location.href = "#member";
}

function creBlog() {
	if(objBlog != true) {
		var blog = document.createElement("iframe");
		blog.width = "895px";
		blog.height = "584px";
		blog.src = "frames/blog.html";
		blog.id = "Blog";
		var blogTitle = document.createElement("p");
		blogTitle.height = "30px";
		blogTitle.innerText = "班级博客";
		blogTitle.id = "blogTitle";
		var anchor = document.createElement("a");
		anchor.id = "blog";
		document.getElementById("content").appendChild(blogTitle);
		document.getElementById("blogTitle").appendChild(anchor);
		document.getElementById("content").appendChild(blog);
		location.href = "#blog";
	}
	if( objBlog = true)
		location.href = "#blog";
}

function creActivity() {
	if(objActivity != true) {
		var activity = document.createElement("iframe");
		activity.width = "895px";
		activity.height = "584px";
		activity.src = "frames/activity.html";
		activity.id = "Activity";
		var activityTitle = document.createElement("p");
		activityTitle.height = "30px";
		activityTitle.innerText = "班级活动";
		activityTitle.id = "activityTitle";
		var anchor = document.createElement("a");
		anchor.id = "activity";
		document.getElementById("content").appendChild(activityTitle);
		document.getElementById("activityTitle").appendChild(anchor);
		document.getElementById("content").appendChild(activity);
		location.href = "#activity";
	}
	if( objActivity = true)
		location.href = "#activity";
}
function creInfo(){
	if(objInfo != true) {
		var info = document.createElement("iframe");
		info.width = "895px";
		info.height = "584px";		
		info.id = "Info";
		info.src="frames/info.html";
		var infoTitle = document.createElement("p");
		infoTitle.height = "30px";
		infoTitle.innerText = "班级资料";
		infoTitle.id = "infoTitle";
		var anchor = document.createElement("a");
		anchor.id = "info";
		document.getElementById("content").appendChild(infoTitle);
		document.getElementById("infoTitle").appendChild(anchor);
		document.getElementById("content").appendChild(info);
		location.href = "#info";
	}
	if( objInfo = true)
		location.href = "#info";
}
