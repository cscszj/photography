/*var svg = Snap("#svg"),elements = [];

var opts = {
    x: 0,
    y: 0,
    width: 960,
    height: 600,
    points: [
      [[180,200],[180,160],[140,160]],
      [[360,360],[360,330],[140,480]],
      [[520,70],[520,50],[660,50]],
      [[640,130],[640,100],[800,100]],
      [[650,240],[650,210],[780,280]]
    ]
};

function draw() {

  var g = svg.paper.g().attr({id: 'gdef'});
  
  // 圆点
  var circle = svg.paper.circle(3, 3, 3).attr({
    fill: '#fff',
    opacity:0
  });
  
  // 椭圆
  var ellipse = svg.paper.ellipse(6, 6, 3, 6).attr({
    fill: '#888',
    opacity: 0.25
  });
  
  // 变身标记
  var markerStart = ellipse.marker(0, 0, 12, 12, 6, 6), markerEnd = circle.marker(0, 0, 10, 10, 3, 3);
  
  g.add(markerStart, markerEnd);
  
  function show(element) {
 
    var length = element[1].getTotalLength();
    // 设置初始值
    element[1].attr({
      markerStart: element[0],
      markerEnd: element[2],
      strokeDasharray: length + ' ' + length,
      strokeDashoffset: length
    });
    
    // 图形展开
    Snap.animate(length, 0, function(x) {
      element[1].attr({
        strokeDashoffset:x
      })
    }, 500, mina.easeout, function(){
      
      var x = element[3].getBBox().x,
      offset = x/2 + 25;
      element[3].attr({
        transform: "t"+offset+",80s0.5,0.5,0,0"
      });
      
      element[2].select("circle").attr({
        opacity: 1
      });
      
      element[3].animate({opacity:1,transform:"t0,0s1,1,0,0"}, 500, mina.elastic);
      
    });
    
  }
  
  function showAll(elements) {
    for(var i = 0; i < elements.length; i++) {
      g.add(elements[i][1],elements[i][3]);
      show(elements[i]);
    }
  }
  
  function elementMarker(text, points, dir) {
    
    var ePath = 'M' + points.join("L");
    
    //文字
    var text = svg.paper.text(points[points.length - 1][0] - 70, points[points.length - 1][1] + (dir ? -8: 20), text).attr({
      opacity:0,
      fill: '#fff',
      fontSize: '16px'
    });
    
    // 添加一个路径
    var path = svg.paper.path(ePath).attr({
        // 描边
        stroke: "#eaeaea",
        strokeWidth: 1,
        fill: "none"
    });
    
    return [markerStart, path, markerEnd, text];
    

  }

  var x = 0;
  var y = 0;
  var width = $('.main-new .main-box .main-box-svg').width();
  var height = $('.main-new .main-box .main-box-svg').height();

  var points = new Array();
  for(var i = 0; i< opts.points.length;i++) {
    var line = new Array();
    for(var j = 0; j < opts.points[i].length; j++) {
      var point = [ opts.points[i][j][0] / opts.width * width, opts.points[i][j][1] / opts.height * height]
      line.push(point);
    }
    points.push(line);
  }
  
  var c = svg.paper.image("static/images/mbox/box.png", x, y, width, height);

  var yijianxiche = svg.paper.image("static/images/mbox/yijianxiche.png", x, y, width, height);
  var baoxianfuwu = svg.paper.image("static/images/mbox/baoxianfuwu.png", x, y, width, height);
  var meizhouliquan = svg.paper.image("static/images/mbox/meizhouliquan.png", x, y, width, height);
  var shenqingdaiban = svg.paper.image("static/images/mbox/shenqingdaiban.png", x, y, width, height);
  var zhuanyejiuyuan = svg.paper.image("static/images/mbox/zhuanyejiuyuan.png", x, y, width, height);
  
  g.add(c,yijianxiche,baoxianfuwu,meizhouliquan,shenqingdaiban,zhuanyejiuyuan);

  elements[0] = elementMarker("首单即享1分钱洗车", points[0], true);
  elements[1] = elementMarker("精确报价,优惠套餐随您选", points[1], false);
  elements[2] = elementMarker("洗车礼券周周免费领", points[2], true);
  elements[3] = elementMarker("专业救援，出行无忧", points[3], false);
  elements[4] = elementMarker("年检协办，省时省力", points[4], false);
  
  showAll(elements);
  
  for(var i = 0; i< points.length;i++) {
    var lines = points[i];
    var str = '';
    for(var j = 0; j < lines.length; j++) {
      str += '[' + lines[j][0] / width + ',' + lines[j][1] / height + '],';
    }
  }
  
  
  var points = new Array();
  for(var i = 0; i< rates.length;i++) {
    var line = new Array();
    for(var j = 0; j < rates[i].length; j++) {
      var point = [ rates[i][j][0] * width, rates[i][j][1] * height]
      line.push(point);
    }
    points.push(line);
  }
}


function redraw() {
  
  var x = 0;
  var y = 0;
  var width = $('.main-new .main-box .main-box-svg').width();
  var height = $('.main-new .main-box .main-box-svg').height();
  
  var imageSet = svg.selectAll('image');
  imageSet.forEach(function(element, index) {
    element.attr({
      width: width,
      height: height
    });
  });
  
  var points = new Array();
  for(var i = 0; i< opts.points.length;i++) {
    var line = new Array();
    for(var j = 0; j < opts.points[i].length; j++) {
      var point = [ opts.points[i][j][0] / opts.width * width, opts.points[i][j][1] / opts.height * height]
      line.push(point);
    }
    points.push(line);
  }
  
  var pathSet = svg.selectAll('path');
  pathSet.forEach(function(element, index) {
    var ePath = 'M' + points[index].join("L");
    element.attr({
      path: ePath
    });
    
    var length = element.getTotalLength();
    // 设置初始值
    element.attr({
      strokeDasharray: length + ' ' + length,
      strokeDashoffset: 0
    });
    
  });
  
  var textSet = svg.selectAll('text');
  textSet.forEach(function(element, index) {
    var dir = [true,false,true,false,false];
    element.attr({
      x: points[index][points[index].length - 1][0] - 70,
      y: points[index][points[index].length - 1][1] + (dir[index] ? -8: 20)
    });
  });
  
}*/

$(function() {
  
  var xiche;
  var timeoutids = [];

  ////检测浏览器是否是safari，并在safari下做适配。
  //var userAgent = navigator.userAgent.toLowerCase();
  //var setscrolltransforms = true;
  //var setscrollingSpeed = 700;
  //if (userAgent.indexOf("safari") > -1) {
  //  if((userAgent.indexOf("chrome") < 1) && (userAgent.indexOf("edge") < 1)){
  //    setscrolltransforms = false;
  //    setscrollingSpeed = 350;
  //  }
  //}

  var fullPage = $('#fullpage').fullpage({
    sectionsColor : ['transprant','#fff','#fff','#fff','#fff','#333'],
    navigation : true,
    //css3 : setscrolltransforms,
    //scrollingSpeed : setscrollingSpeed,
    afterRender: function() {
      $('.section .iphone').addClass("animated");
      $('.section .txt h1').addClass("animated");
      $('.section .txt p').addClass("animated");
      $('.section .hand-o-up').addClass("animated");
      $('.section .hand-o-up1').addClass("animated");
      //$('.section .activebg').addClass("animated");

      xiche = new Swiper('#xiche-iphone-swiper', {
        pagination: '#xiche-iphone-swiper .swiper-pagination',
/*        nextButton: '#xiche-iphone-screen .swiper-button-next',
        prevButton: '#xiche-iphone-screen .swiper-button-prev',*/
        slidesPerView: 1,
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        spaceBetween: 0,
        loop: true,
        autoplay: 2000
      });

      xiche.stopAutoplay();

      $('.section .iphone').hide();

      //$('.section .activebg').hide();

    },
    afterLoad: function(anchorLink, index){
      if(index == 2){
        //$('#section1 .activebg').show();
        //$('#section1 .activebg').removeClass("fadeOutDown").addClass("fadeInDown");
        $('#section1 .txt h1').show();
        $('#section1 .txt h1').removeClass("fadeOutDown").addClass("fadeInUp");
        $('#section1 .iphone').show();
        $('#section1 .iphone').removeClass("fadeOutDown").addClass("fadeInDown");

        $('#section1 .txt p').show();
        $('#section1 .txt p').removeClass("fadeOutDown").addClass("fadeInUp");
        xiche.startAutoplay();

      } else if(index == 3){
        //$('#section2 .activebg').show();
        //$('#section2 .activebg').removeClass("fadeOutDown").addClass("fadeInDown");
        $('#section2 .txt h1').show();
        $('#section2 .txt h1').removeClass("fadeOutDown").addClass("fadeInUp");
        $('#section2 .iphone').show();
        $('#section2 .iphone').removeClass("fadeOutDown").addClass("fadeInDown");

        $('#section2 .txt p').show();
        $('#section2 .txt p').removeClass("fadeOutDown").addClass("fadeInUp");

        $('#section2 .hand-o-up1').addClass("handfadeInUp");

      } else if(index == 4){
        //$('#section3 .activebg').show();
        //$('#section3 .activebg').removeClass("fadeOutDown").addClass("fadeInDown");
        $('#section3 .txt h1').show();
        $('#section3 .txt h1').removeClass("fadeOutDown").addClass("fadeInUp");
        $('#section3 .iphone').show();
        $('#section3 .iphone').removeClass("fadeOutDown").addClass("fadeInDown");

        $('#section3 .txt p').show();
        $('#section3 .txt p').removeClass("fadeOutDown").addClass("fadeInUp");

        $('#section3 .hand-o-up').addClass("handfadeInUp");

      } else if(index == 5){
        //$('#section4 .activebg').show();
        //$('#section4 .activebg').removeClass("fadeOutDown").addClass("fadeInDown");
        $('#section4 .txt h1').show();
        $('#section4 .txt h1').removeClass("fadeOutDown").addClass("fadeInUp");
        $('#section4 .iphone').show();
        $('#section4 .iphone').removeClass("fadeOutDown").addClass("fadeInDown");

        $('#section4 .txt p').show();
        $('#section4 .txt p').removeClass("fadeOutDown").addClass("fadeInUp");

        $('#section4 .hand-o-up').addClass("handfadeInUp");

      }
    },
    onLeave: function(index, direction){
      if(index == 2){
        xiche.stopAutoplay();
        //$('#section1 .activebg').removeClass("fadeInDown").addClass("fadeOutDown");
        $('#section1 .iphone').removeClass("fadeInDown").addClass("fadeOutDown");
        $('#section1 .txt h1').removeClass("fadeInUp").addClass("fadeOutDown");
        $('#section1 .txt p').removeClass("fadeInUp").addClass("fadeOutDown");
      } else if(index == 3){
        //$('#section2 .activebg').removeClass("fadeInDown").addClass("fadeOutDown");
        $('#section2 .iphone').removeClass("fadeInDown").addClass("fadeOutDown");
        $('#section2 .txt h1').removeClass("fadeInUp").addClass("fadeOutDown");
        $('#section2 .txt p').removeClass("fadeInUp").addClass("fadeOutDown");
        $('#section2 .hand-o-up1').removeClass("handfadeInUp");
      } else if(index == 4){
        //$('#section3 .activebg').removeClass("fadeInDown").addClass("fadeOutDown");
        $('#section3 .iphone').removeClass("fadeInDown").addClass("fadeOutDown");
        $('#section3 .txt h1').removeClass("fadeInUp").addClass("fadeOutDown");
        $('#section3 .txt p').removeClass("fadeInUp").addClass("fadeOutDown");
        $('#section3 .hand-o-up').removeClass("handfadeInUp");
      } else if(index == 5 && direction != 6){
        //$('#section4 .activebg').removeClass("fadeInDown").addClass("fadeOutDown");
        $('#section4 .iphone').removeClass("fadeInDown").addClass("fadeOutDown");
        $('#section4 .txt h1').removeClass("fadeInUp").addClass("fadeOutDown");
        $('#section4 .txt p').removeClass("fadeInUp").addClass("fadeOutDown");
        $('#section4 .hand-o-up').removeClass("handfadeInUp");
      }
    }
  });
  
  //draw();
  
  var swiper = new Swiper('#main-swiper', {
    nextButton: '#main-swiper .swiper-button-next',
    prevButton: '#main-swiper .swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    autoplayDisableOnInteraction: false,
    spaceBetween: 0,
    loop: true,
    autoplay: 4000
  });

  
  $('.btn-arrow').click(function(){
    $.fn.fullpage.moveSectionDown();
  });
  
/*  $(window).resize(function(){
    redraw();
  });*/
});
