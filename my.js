function SetCookie(name,value)
{
    var Days = 1; 
    var exp  = new Date();    
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}





var mobile=false;
if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobile=true;
	 var url = window.location.pathname;
     var filename = url.substring(url.lastIndexOf('/')+1);
     if(filename!="kinmen_mobile_page.html"){		
	 location.replace("kinmen_mobile_page.html");
	 }	
}
else {
    mobile=false;
}


var Item = function (size) {
   this.table =  new Array(size);
	var i;
	for(i=0;i<this.table.length;i++){		
	this.table[i]=0;
	} 
  this.index=0;
  this.count=0;
  this.temp=-1;
  
};

Item.prototype.rand=function() {
    var p;
	var disable=false;
	do {
       p=getRandomInt(0,this.table.length-1);
	  if(this.table[p]==this.index  && this.temp!=p){
		  this.temp=p;
		  this.table[p]=this.index+1;
          this.count+=1;
		  disable=true;	 
		if(this.count==this.table.length){
		this.count=0;
		this.index+=1;		
          alert("資料完畢");		
		}          		 
	   }
	  
      }
    while (!disable);
	return p;
  
};


//午晚餐
var Jinhu_dinner=new Item(13);
var Jincheng_dinner=new Item(12);
var Jinning_dinner =new Item(4);
var Jinhu_pastry2 =new Item(2);
var Jincheng_pastry2=new Item(2);


function show_myinfo(){
   var index=getRandomInt(1,2);
   
    switch(index){
	
	 case 1:
	 document.write("<a href='http://null-adventure-diarytwo.blogspot.tw/2016/01/my-works-mosaics-tool-ver10.html'>");
 document.write("<img border='0'  src='https://3.bp.blogspot.com/-F6bJCU5a4bM/We8JASwUKNI/AAAAAAAABbs/tfk16jwirsAOky0DODa2SeYCyCvlG16_ACLcBGAs/s1600/gggggffsf.jpg'></a>");

	  break;
	  case 2:
 document.write("<a href='http://null-adventure-diarytwo.blogspot.com/2015/10/my-worksadjust-picture-tone-tool-ver10.html'>");
 document.write("<img border='0'  src='https://3.bp.blogspot.com/-FqF9-m_lztA/WfPdnMdH_aI/AAAAAAAABgE/3FfBFrm2oFsAAApdxgv393WOvp8Wa00swCLcBGAs/s1600/ggdfg.jpg'></a>");

	  break;
		
	}
   

}

function select_item(){
	
/*
if(readCookie("Visit")==null){
   SetCookie("Visit",10);
  var a= Math.floor(Math.random() * 10); 
   if(a<=2)
   window.open("http://null-adventure-diarytwo.blogspot.com/2017/12/blog-post.html");
}*/

	
	
	var e = document.getElementById("category");
	var category= e.options[e.selectedIndex].value;

	
	 switch(category){
		 
		 case "1":
		 lanunch_and_dinner();
		 break;
		 case "2":
		 breakfast();
		 break;
		 case "3":
		 pastry();
		 break;
		 		 
		 case "4":
		 drink();
		 break;
		 case "5":
		 midnight();
		 break;
		 
	 }
	
	
	
}


function lanunch_and_dinner(){
	
	var e = document.getElementById("region");
	var region= e.options[e.selectedIndex].value;
			 
	switch(region){
		
		case "1": //金湖
		Jinhu_lanunch_and_dinner();
		break;
		case "2": //金沙
		Jinsha_lanunch_and_dinner();
		break;
		case "3": //金城
		Jincheng_lanunch_and_dinner();
		break;
		case "4"://金寧
		Jinning_lanunch_and_dinner();
		break;
		
		
	}

	
	 
}

function breakfast(){
   var e = document.getElementById("region");
	var region= e.options[e.selectedIndex].value;
			 
	switch(region){
		
		case "2":  //金沙
		Jinsha_breakfast();
		break;
		case "3": //金城
		Jincheng_breakfast();
		break;
		
        
		
	}

}

function pastry(){
    var e = document.getElementById("region");
	var region= e.options[e.selectedIndex].value;
			 
	switch(region){
		
		case "1": //金湖
		Jinhu_pastry();
		break;
		case "3": //金城
		Jincheng_pastry();
		break;
        
		
	}

}

function drink(){
    var e = document.getElementById("region");
	var region= e.options[e.selectedIndex].value;
			 
			
	switch(region){
		
		case "1": //金湖
		Jinhu_drink();
		break;
		
		case "3": //金城
		Jincheng_drink();
		break;
		
        
		
	}

}
function midnight(){
	 var e = document.getElementById("region");
	var region= e.options[e.selectedIndex].value;
			 
			
	switch(region){
				
		case "3": //金城
		midnight_Jincheng();
		break;
		
        
		
	}
	
	
}


function set_info(name,time,img){
    var info="";
	info=info+"<p>";
	info=info+"店家名稱:"+name;
	info=info+"<br/>";
    info=info+"營業時間:"+time;
    info=info+"<br/>";
	info=info+"價目表:(僅供參考實際以到場為準)";
	info=info+"<br/>";
	info=info+"</p>";
    if(mobile==true){	
    info=info+"<img src='"+img+"' width='100%;' height='auto;' />";
	}
	else{
		 info=info+"<img src='"+img+"'  />";
	}
   
	document.getElementById("info").innerHTML=info;	
    

}

function set_map(la,lng,myzoom){
	
	remove_extra_map();
 var mapOptions;
 var map;
 var marker;	
 var myLatLng=new google.maps.LatLng(la, lng);
	 mapOptions = {
    center: myLatLng,
    zoom: myzoom,
    mapTypeId:google.maps.MapTypeId.ROADMAP
   }
   
   map = new google.maps.Map(document.getElementById("map"), mapOptions);	
   marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: name
        });	
}






function Jinhu_lanunch_and_dinner(){
	
	var index=Jinhu_dinner.rand();
	
	
	switch(index){

		case 0: 	
	set_info("綠園餐館","08:00~13:30 ,15:30-20:00",
	"https://1.bp.blogspot.com/-2g-FggSD_RQ/WeCGRMV3xGI/AAAAAAAABNU/13wyM9rCh6kX63tJu-QlJuegdU-LZCMxgCEwYBhgL/s640/1.jpg"
	);
	set_map( 24.452455, 118.423668,18);
		break;		
      case 1:
	  set_info("好口味海鮮餐廳","10:00-22:00",
	"https://2.bp.blogspot.com/-NnIgggN3_BY/WeboLjT-ESI/AAAAAAAABVk/wtiOG-Z6rAQSYSEsoY4PjMivQw3EC8mywCLcBGAs/s1600/3.jpg"
	);
	 set_map( 24.436500, 118.410497,18);
	  break;
	  
	  case 2:
  set_info("九色醬燒 完美滷藝","11:00 - 22:30 外送&訂購專線 082-332297",
	"https://2.bp.blogspot.com/-1xMbYtu42W8/WecW0Tn5FvI/AAAAAAAABWQ/aPC3MIxv2QwKrMf7wVqGlaKKOOHNXb02ACLcBGAs/s640/ee.jpg"
	);
  set_map(24.440557, 118.419647,18);
     break;
    case 3:
			set_info("百樂門食堂","11:00-14:00,17:00-20:00",
	"https://2.bp.blogspot.com/-EL9nZrsJDzY/WeN-a13sUNI/AAAAAAAABSc/-CKlBWEw4BseTXyJ0FkPiIP4t1FMrUBLwCLcBGAs/s640/ffs.jpg"
	);		
	set_map(24.452501, 118.426258,18);	
		break;
     case 4:
	 set_info("金湖三媽臭臭鍋","1100-1400 1700-2100",
	"https://2.bp.blogspot.com/-M7wMyKBow0w/WeVrSmt4mqI/AAAAAAAABUM/ZAHXJY1mvLcBkrZVKgT9TbtKFiefqSUbgCLcBGAs/s1600/cc.jpg"
	);		
	set_map(24.439302, 118.413383,18);	
         break;
	case 5:
	set_info("金湖雙醬咖哩","11:00 - 21:00",
	"https://2.bp.blogspot.com/-lv2cjLoZZTs/WeVnKY1xtqI/AAAAAAAABUE/m8YDiRoxKiQSoebElBEDOn2CKcdz1TXxwCLcBGAs/s1600/dsa.jpg"
	);		
    set_map(24.443246, 118.414970,18);

    break;	  
	 case 6:
	set_info("山外陽春麵","11:00 - 21:00",
	"https://4.bp.blogspot.com/-Z1ZrkpYiRNE/Weak-c9a8wI/AAAAAAAABVU/oTHCanaK-8MoSB1Y4QWw_qjzcS01zM32wCLcBGAs/s640/aa.jpg"
	);
	 set_map(24.437754, 118.410276,18);
		
     break;
		
     case 7:
	set_info("山外不一樣雞排","10:00 - 21:00",
	"https://4.bp.blogspot.com/-ZeFSccCRnuk/WednEQCSR9I/AAAAAAAABW8/jbthNgcOhtwwigG7njYMtKGRXQP7t3t3ACEwYBhgL/s640/dssd.jpg"
	);	
	set_map(24.440679, 118.416085,18);	
	 break;
	
     case 8:
	set_info("3Q脆皮雞排","13:00 - 22:00",
	"https://1.bp.blogspot.com/-3WQSUpKulgg/Wef3n8F0gzI/AAAAAAAABXM/0OH1XwF2fU0dpbb8mlDLGciYA6wG1hFEQCLcBGAs/s640/sddfx.jpg"
	);	
	 set_map(24.440778, 118.415179,18);	

      break;	 
	case 9:

	set_info("陳記傳統美食","11:00 - 21:00",
	"https://3.bp.blogspot.com/-125qbo8hkFE/Wef5iD9imGI/AAAAAAAABXY/e0QnWI6V67QhGfTqDdAhLbwBJ6s19gYQACLcBGAs/s640/sdaaa.jpg"
	);		
	set_map(24.443505, 118.415138,18);	
      break;	
	case 10:
	set_info("阿卡拉炸雞","11:30 - 21:00",
	"https://1.bp.blogspot.com/-EX9iabwGwqE/WelIrMFe7YI/AAAAAAAABYU/NONd6En1I8wh3YnJlPgG0D30zAZrIIsLwCLcBGAs/s640/sssss.jpg"
	);		
	set_map(24.440738, 118.415860,18);	

      break;	
	 case 11:
set_info("四知味羊肉爐","11:00~14:00  17:00~21:00",
	"https://2.bp.blogspot.com/-NDUFB4tXMYE/WfCHA93RGfI/AAAAAAAABco/4q0lzpG9ebQ2diqGv2_Sgx3ucmpQEO-QgCLcBGAs/s1600/ddd.jpg"
	);		
	set_map(24.427863, 118.434568,18);	

      break;	 
	 case 12:
	 set_info("三言兩語鮮茶咖啡美食館","09:00~21:00",
	"https://2.bp.blogspot.com/-zfMTIIX6ALU/WfXBC_gQZ4I/AAAAAAAABhU/MS_4ftV_EMYoFd9N_LMcMaYOuol08mneQCLcBGAs/s1600/zxcvddf.jpg"
	);	
	 set_map(24.442119, 118.414778,18);	

      break;	 
		
		
	}
	
	
}
//金沙餐點
function Jinsha_lanunch_and_dinner(){

     var index;
      index=getRandomInt(1,1);
    
	switch(index){
	
		case 1:
	 set_info("四合味便當","中午 晚上",
	"https://1.bp.blogspot.com/-T_5tHPP6SUw/WfcsyzLIsxI/AAAAAAAABiA/hFGaVb5EmnsOjcALrgEWH2IaTVJpot6AQCLcBGAs/s1600/ffghg.jpg"
	);	
		
    set_map(24.488019, 118.413755,18);	
        break;
     }
	 
	 
	 
}

//金城餐點
function Jincheng_lanunch_and_dinner(){

	
	 var index=Jincheng_dinner.rand();
	
	
	
	switch(index){
	
		case 0:
		set_info("Show泰 泰式料理","10:00–14:00, 17:00–21:30",
	"https://3.bp.blogspot.com/-rY-X7fDZIrY/WeHhkgrNl2I/AAAAAAAABPI/zkh0tnUBmwcAwh7UehLhC2DzT8FP8jUzwCEwYBhgL/s1600/aas.jpg"
	);
		set_map( 24.441052, 118.322457,18);
	
		break;	
        case 1:
		set_info("金城雙醬咖哩","11:00-19:30",
	"https://4.bp.blogspot.com/-8JLQOp7FMkM/Wk2AMtAGuwI/AAAAAAAABv0/_0MY7Y-vskEozuKUWXi_Mlrhr0r3KhVmQCLcBGAs/s1600/26195829_2029793733714159_4391579567934089103_n.jpg"
	);
		set_map(24.434847, 118.320189,18);
		break;
        case 2:
		set_info("伍師傅燒臘店","10:30-13:30 16:30~19:30",
	"https://4.bp.blogspot.com/-8JZUgqYyMs8/WeNOvcBga2I/AAAAAAAABRw/dxJkI5pdI24AGaFvv5uX3B06GNONXGnfACLcBGAs/s640/zxc.jpg"
	);
		set_map(24.434057, 118.316897,18);		
		break;
       case 3:
	   	set_info("牛二爺 金門酒糟全牛海鮮料理館","11:00-14:00,17:00-20:30",
	"https://2.bp.blogspot.com/-QamblZjzgSM/WeODVKq8W4I/AAAAAAAABSw/oWge7N00pb8RK0U_A3tsE1oYKnqykOlvACPcBGAYYCw/s1600/hfg.jpg"
	);
	   set_map(24.434362, 118.315945,18);
	   break;
		case 4:
		set_info("安康私廚","11:30-14:00 17:30-21:00 電話0956710522",
	"https://4.bp.blogspot.com/-DIutOfAR2QI/WeXfP4GLC0I/AAAAAAAABU4/Hf1C-2lDhuQ8Iq_VkdXXm52UoDfIko5zACLcBGAs/s640/ggdf.jpg"
	);			
		set_map(24.434201, 118.319652,18);		
		 break;
		case 5:
	set_info("金城漢王薑母鴨","17:00-24:00 電話082-371436",
	"https://2.bp.blogspot.com/-SiL3M2Vbg0I/WecEa9rx9PI/AAAAAAAABV4/DC-nF0iLyG8Hprb0H5vPMTlWIVe3RVghQCLcBGAs/s640/gfhd.jpg"
	);
		set_map(24.435065, 118.311848,18);			
		break;
		case 6:
		set_info("小莓小吃","9:30~20:00 電話082-326200",
	"https://1.bp.blogspot.com/-XOMu354GZfE/WemPceFo_BI/AAAAAAAABY0/wZZRt6a3vygdmqjcOKSUcOM4xXkf3Fv7QCLcBGAs/s1600/dddsa.jpg"
	);
		set_map(24.432592, 118.316734,18);	
		
		break;
        case 7:
			set_info("Venetia 威尼獅義式手作廚房","11:30~賣完 電話371002",
	"https://3.bp.blogspot.com/-Xlh5NGzXk5s/WfCOt-LI5oI/AAAAAAAABdE/nsSJgtSvjCAVmMk3KY8mOhhSF2wBJAVAACLcBGAs/s1600/sdsd.jpg"
	);
		set_map(24.435751, 118.318525,18);	
		
		break;
		case 8:
	set_info("岡山羊肉","10:30~20:00",
	"https://2.bp.blogspot.com/-S0M3NY89dOk/WfaNCpCvyEI/AAAAAAAABhk/RFI3VAwYazQTk0Gh7zNh5H7Ijt7DKsLYwCLcBGAs/s640/asdsfgg.jpg"
	);		
		set_map(24.429464, 118.318969,18);
		break;
		case 9:
		set_info("金食堂","11:30-14:00 17:30-22:00",
	"https://2.bp.blogspot.com/-RpBZ_2oJyKE/Wfsjf7B96UI/AAAAAAAABis/VGnbrB-YAOY7DDlKRUImuse04fXoTpc2ACLcBGAs/s1600/23031149_10208922155486146_3158417579077719012_n.jpg"
	);
		set_map(24.433495, 118.314484,18);		
		break;
		case 10:
	set_info("食話年代","11:00~15:00 17:00~22:00 電話：082-316520 (外帶較便宜)",
	"https://4.bp.blogspot.com/-BCbzBqn68xQ/Wfsk0-PquFI/AAAAAAAABi4/cMBZixiu9BoP3s7ftG5Vw7Zj48QRdwhiwCLcBGAs/s1600/sdf.jpg"
	);	
	  set_map(24.440290, 118.321743,18);						
		break;
		
		case 11:		
	set_info("金門Miss Korea韓國炸雞","15:30~22:00",
	"https://4.bp.blogspot.com/-Rh2kuU9ka7I/WfwG7KNWuKI/AAAAAAAABjk/J7U6kJslV8QiOhR9CbPf02PphAn3Y4eAwCLcBGAs/s640/zbbbsss.jpg"
	);	
		 set_map(24.433920, 118.314167,18);			
		break;
		
		
	}
	

}
//金寧餐點
function Jinning_lanunch_and_dinner(){
	
	
     var index=Jinning_dinner.rand();
	
	
	switch(index){
	
		case 0: 
			set_info("五井拉麵(金門環島店)","11:00–14:00、17:00–21:00 電話:320889",
"https://3.bp.blogspot.com/-1pimFkQXP48/WeHm171PkWI/AAAAAAAABPQ/hSoeGwNYruEgukCM-r8lBbm7Vg1ic42LwCLcBGAs/s1600/sb.jpg"
	);
		set_map( 24.441751, 118.319956,18);
	
		break;
		case 1:
	set_info("金泰棧","10:00~14:00、17:00–21:00 電話:082-325995",
"https://2.bp.blogspot.com/-XTD-igFKpOc/WeS7cAlpLHI/AAAAAAAABTY/Lk5ydOCgHAscQDYiRfylT4hYQNU1XVfaACLcBGAs/s640/hgf.jpg"
	);
		
		set_map( 24.448347, 118.339107,18);
		break;
		case 2:
			set_info("石蚵之家美食館","09:00~1700",
"https://2.bp.blogspot.com/-RJvWSjlUs8w/We9aTU_KVwI/AAAAAAAABcI/BzU78SVi8Cc059Lju2Jk6C0jmF5s8c6sQCLcBGAs/s640/zxcv.jpg"
	);
	set_map( 24.476154, 118.317904,18);	
		break;
		case 3:
	set_info("深夜食堂","12:00-14:00 17:00-24:00",
"https://1.bp.blogspot.com/-Y9bcJ2CYTyk/WjI__hnMVYI/AAAAAAAABrk/olq8ALVtVLAv3Gtc61KNkCf-UV9fevavACLcBGAs/s1600/sdf.jpg"
	);
		set_map( 24.442015, 118.319456,18);	
		break;
		

		
		}
}
//金湖糕點
function Jinhu_pastry(){

    var index=Jinhu_pastry2.rand();

	switch(index){
	
		case 0: 
	set_info("合興餅家","10:00 - 18:00 電話:082-333814",
"https://2.bp.blogspot.com/-VByBhICefDQ/WeMcg97QPlI/AAAAAAAABRU/gG044At2FIwVATLpxyv8orBFhR6gaRz4ACLcBGAs/s640/ss.jpg"
	);		
		set_map(24.443913, 118.415399,18);
		 break;
		case 1:
			set_info("品第車輪餅","14:00 -賣完",
"https://4.bp.blogspot.com/-WpYNY4tkIDY/WgT8IVuiZXI/AAAAAAAABkg/6hPzoqvQQRwr7m1PFUhqe7jI5L4dpmMXQCLcBGAs/s640/sdsfsf.jpg"
	);			
		 set_map(24.441324, 118.415875,18);
		 
		break;
		 
		 
	}
}
//金城糕點
function Jincheng_pastry(){
 
   var index=Jincheng_pastry2.rand();
  switch(index){
	
		case 0: 
	set_info("八德饅頭","06:00 - 12:00",
"https://1.bp.blogspot.com/-GsiSzKLMYkc/WfVMHvi_SJI/AAAAAAAABhE/QZBVXJGC3eQQwhjD3Q_TMw0caT3xMB13QCLcBGAs/s640/zsdff.jpg"
	);
		
		set_map(24.431387, 118.318908,18);
		 break;
		case 1:
	set_info("金悅坊","11:00～17:30",
"https://1.bp.blogspot.com/-NXaCJCnucfw/WmSZyyht8XI/AAAAAAAABzo/pve0Wg9R3w4VdUx80f0RtCZYBoG3hSpwgCLcBGAs/s640/26731492_1888076881220304_5211352802163006775_n.jpg"
	);
		
	set_map(24.429702, 118.319199,18);
        break;		
		 
	}

}

//金沙早餐
function Jinsha_breakfast(){
	
	 var index=getRandomInt(1,1);
	

	switch(index){
	
		case 1: 
	set_info("沙美【冒煙早餐車】","早上",
"https://1.bp.blogspot.com/-yP-2_-8pTCk/WgugSRUtmqI/AAAAAAAABlA/w65F9JevAxgZRLeYcu3uC7xjwn2qHNgRACLcBGAs/s400/23.jpg"
	);
		
		set_map(24.488803, 118.413386,18);
		 break;
	}
	
	
	
}

function Jincheng_breakfast(){

 var index=getRandomInt(1,1);
	

	switch(index){
	
		case 1: 
	set_info("萬佳鄉早餐店","早上",
"https://4.bp.blogspot.com/-A3W87Oap2zY/Wexsh1aTHVI/AAAAAAAABZ4/S6Rba7LpP78qwkAXMj8sDZ04bQVob_VZQCLcBGAs/s640/zxcsa.jpg"
	);
		
		set_map(24.434170, 118.319346,18);
		 break;
	}

}


//飲料類

function Jinhu_drink(){
	 var index=getRandomInt(1,1);
	
	switch(index){
	
		case 1: 
	set_info("手作功夫茶金門山外店","11:00-21:00 電話:082-330924",
"https://3.bp.blogspot.com/-5I6CZdSxwW4/WfFtlICPpdI/AAAAAAAABfM/aP9IVeyjJloj2Zm3sd-vZQV0TycsJOLygCLcBGAs/s1600/bbzc.jpg"
	);		
	set_map(24.441267, 118.416014,18);
	 
		 break;
	}
	
	
}

function Jincheng_drink(){

 var index=getRandomInt(1,1);
	

	switch(index){
	
		case 1: 
	set_info("婔花園咖啡廳CoffeeGarden","11:00-22:30 電話:0937577338",
"https://4.bp.blogspot.com/-Kpob6thqQ4U/WerGnJAXlzI/AAAAAAAABZU/3DYqyPcQXagfGkTnk1GQxL-aa7AKaGZngCPcBGAYYCw/s1600/dzcv.jpg"
	);		
	set_map(24.432805, 118.315578,18);
	 
		 break;
	}



}

//宵夜
function midnight_Jincheng(){
	
	 var index=getRandomInt(1,1);
	

	switch(index){
	
		case 1: 
	set_info("阿程小吃","20:00-02:30 電話:0987-798-982",
"https://3.bp.blogspot.com/-dJNTF9HRcCQ/WfKzHG7RGWI/AAAAAAAABfo/BzJ6Psp-ockt6tei0V4vBA0wX3s030GMwCLcBGAs/s1600/ffgdg.jpg"
	);		
	set_map(24.436322, 118.328062,18);
	 
		 break;
	}
	
}

function remove_extra_map(){
	
	    var scripts = document.getElementsByTagName("script");
		var api_key="initMap";
		
        for(var i = 0; i < scripts.length; i++) {
			if(scripts[i].src.match(api_key)){		
				continue;
			}
            if (scripts[i].src.match(/google/) ) {
                scripts[i].parentNode.removeChild(scripts[i]);
            }
			
        }
	
}

function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}