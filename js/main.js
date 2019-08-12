$(window).bind('hashchange',function(event){$.smoothScroll({offset:$("body").attr("data-offset")?-$("body").attr("data-offset"):0,scrollTarget:decodeURI(location.hash.replace(/^\#\/?/,'#'))});});$('a[href*="#"]').bind('click',function(event){var hash=this.hash.replace(/^#/,'')
if(this.pathname===location.pathname&&hash){event.preventDefault();location.hash='#/'+hash;}});if(location.hash){$(window).trigger('hashchange');}
$(document).ready(function(){$('.qualitypick').change(function(){video=$(this).parent().find("video");videoDOM=video.get(0);curtime=videoDOM.currentTime;source=video.find("source[label="+$(this).textContent+"]");source.remove();video.prepend(source);video.load();videoDOM.currentTime=curtime;videoDOM.play();})
try{var count=0;$('.post-header>ul.post-meta:nth-child(3)>li').attr('id','idDate'+count);for(i=1;i<6;i++){$('div.post-wrapper:nth-child('+i+') > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1)').attr('id','idDate'+count);count=count+3}}
catch(err){console.warn(err);}
function miladiToShamsi(){var miladi=$('.date-m').text()
var miladi1=miladi.split('/');miladi1.pop();console.log(countProperties(miladi1));for(var i=0;i<countProperties(miladi1);i=i+3){console.log(miladi1)
console.log(gregorian_to_jalali(miladi1[0+i],miladi1[1+i],miladi1[2+i]));$('#idDate'+i).replaceWith('<li>'+gregorian_to_jalali(miladi1[0+i],miladi1[1+i],miladi1[2+i])+'</li>')}}
function countProperties(obj){var count=0;for(var property in obj){if(Object.prototype.hasOwnProperty.call(obj,property)){count++;}}
return count;}
function div(a,b){return parseInt((a/b));}
function gregorian_to_jalali(g_y,g_m,g_d){var g_days_in_month=[31,28,31,30,31,30,31,31,30,31,30,31];var j_days_in_month=[31,31,31,31,31,31,30,30,30,30,30,29];var jalali=[];var gy=g_y-1600;var gm=g_m-1;var gd=g_d-1;var g_day_no=365*gy+div(gy+3,4)-div(gy+99,100)+div(gy+399,400);for(var i=0;i<gm;++i)
g_day_no+=g_days_in_month[i];if(gm>1&&((gy%4==0&&gy%100!=0)||(gy%400==0)))
g_day_no++;g_day_no+=gd;var j_day_no=g_day_no-79;var j_np=div(j_day_no,12053);j_day_no=j_day_no%12053;var jy=979+33*j_np+4*div(j_day_no,1461);j_day_no%=1461;if(j_day_no>=366){jy+=div(j_day_no-1,365);j_day_no=(j_day_no-1)%365;}
for(var i=0;i<11&&j_day_no>=j_days_in_month[i];++i)
j_day_no-=j_days_in_month[i];var jm=i+1;var jd=j_day_no+1;jalali[0]=jy;jalali[1]=jm;jalali[2]=jd;jm=get_persian_month(jm);return jd+" - "+jm+" - "+jy;}
function get_year_month_day(date){var convertDate;var y=date.substr(0,4);var m=date.substr(5,2);var d=date.substr(8,2);convertDate=gregorian_to_jalali(y,m,d);return convertDate;}
function get_hour_minute_second(time){var convertTime=[];convertTime[0]=time.substr(0,2);convertTime[1]=time.substr(3,2);convertTime[2]=time.substr(6,2);return convertTime;}
function convertDate(date){var convertDateTime=get_year_month_day(date.substr(0,10));convertDateTime=convertDateTime[0]+"/"+convertDateTime[1]+"/"+convertDateTime[2]+" "+date.substr(10);return convertDateTime;}
function get_persian_month(month){switch(month){case 1:return"فروردین";break;case 2:return"اردیبهشت";break;case 3:return"خرداد";break;case 4:return"تیر";break;case 5:return"مرداد";break;case 6:return"شهریور";break;case 7:return"مهر";break;case 8:return"آبان";break;case 9:return"آذر";break;case 10:return"دی";break;case 11:return"بهمن";break;case 12:return"اسفند";break;}}
miladiToShamsi();})
