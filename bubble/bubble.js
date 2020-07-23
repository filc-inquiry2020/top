(function(d,b,w){
  var q = d.createElement('div');
  q.innerHTML = '<style>html,body{overflow-x:hidden;}.bubble{position:absolute;background:rgba(255,255,255,0.1);border:thin solid rgba(255,255,225,0.3);border-radius:8px;box-shadow: 0 0 1px 1px rgba(255,255,225,0.2);}'+
  '.bubble::after{content:"";display:block;height:3px;width:3px;border-radius:2px;background:rgba(255,255,255,0.2);}</style>';
  q.id = 'bubbleparticle';
  b.appendChild(q);
  q = d.getElementById('bubbleparticle');
  var h = w.innerHeight;
  var u = d.documentElement.scrollTop || b.scrollTop;
  var z = 9999;
  var t = new Array();
  var l = new Array();
  var y = new Array();
  var s = new Array();
  var g = new Array();
  var c = new Array();
  d.addEventListener('scroll',function(){u = d.documentElement.scrollTop || b.scrollTop;},false);
  for(var i=0;i<50;i++){//【1】泡の量を指定
    var m = d.createElement('div');
    m.id = 'awa'+i;
    t[i] = Math.random()*h+u;
    l[i] = Math.random()*w.innerWidth;
    var p = Math.random()*8+6;
    m.setAttribute('style','z-index:'+(z+i)+';top:'+t[i]+'px;width:'+p+'px;height:'+p+'px;left:'+l[i]+'px;');
    m.setAttribute('class','bubble');
    q.appendChild(m);
    y[i] = Math.random()*25+0.1;
    s[i] = Math.random()*5+0.5;//【2】泡の上昇速度
    g[i] = d.getElementById('awa'+i);
    c[i] = 0;
  }
  setInterval(function(){
    for(var i=0;i<50;i++){//【1】泡の量を指定
      if(u<t[i]){
        if(y[i]>=c[i]){
          l[i] = l[i]+0.5+Math.random()*0.5;
        }else{
          l[i] = l[i]-0.5-Math.random()*0.5;
        }
        if((y[i]*2)<=c[i]){
          c[i] = 0;
        }
      }else{
        t[i] = u+h-10;
        l[i] = Math.random()*w.innerWidth;
      }
      t[i] = t[i]-s[i];
      g[i].style.top = t[i]+'px';
      g[i].style.left = l[i]+'px';
      c[i]++;
    }
  },45);//【3】繰り返しまでの数値
})(document,document.body,window);
