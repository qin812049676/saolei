$(function(){
    (function(){
        var el=" ";
        var row=12;
        var colors=['blue','yellow','green','pink']
        for (var i = 0; i < row*row; i++) {
          el+="<div></div>"
        }
        $('.box')
        .html(el)
        .find('div')
        .addClass(function(i){
          return 'block '/*+ colors[i%4]*/;
        })
        .end()
        .find('div:lt(12)')
        .removeClass()
        .end()
        .find('div:gt(131)')
        .removeClass()
        .end()
        .find('div:nth-child(12n)')
        .removeClass()
        .end()
        .find('div:nth-child(12n+1)')
        .removeClass()
        .end()
        .find('div')
        .each(function(i){
          $(this).data('index',i)
        })
        .end()
        .find('.block')
        .each(function(i){
          if(Math.random()>0.8){
            $(this).data('lei',true)//.text('lei')
          }
        })
        .click(function(i){
             if($(this).data('lei')){
              // alert('bow!!');
               // $(this).text('lei').css({'font-size':'30px','color':'white','text-align':'center','line-height':'50px'});
              /*$('.box .block').addClass(function(i){
                     if($('.box').find('.block').eq(i).data('lei')){
                      return 'red '+'scale'
                     }
              })*/
               $('.box .block').each(function(i){
                 if($(this).data('lei')){
                   $(this).addClass('red scale');
                 }
                 $(this).css('animation-delay',(Math.random()*2).toFixed(1)+'s');
               })
               

             }else{
              var shuzi=0;
              var pos=$(this).data('index');
              if($('.box div').eq(pos+1).data('lei')){shuzi++};
              if($('.box div').eq(pos-1).data('lei')){shuzi++};
              if($('.box div').eq(pos+12).data('lei')){shuzi++};
              if($('.box div').eq(pos+13).data('lei')){shuzi++};
              if($('.box div').eq(pos+11).data('lei')){shuzi++};
              if($('.box div').eq(pos-12).data('lei')){shuzi++};
              if($('.box div').eq(pos-13).data('lei')){shuzi++};
              if($('.box div').eq(pos-11).data('lei')){shuzi++};
              $(this).text(shuzi).css({'font-size':'30px','color':'white','text-align':'center','line-height':'50px'});
             }
        })
        $('.start').bind('click',function(){
         location.reload();
       })
    })()
    //  (function(){
      // var el='';
      // var row=20;
      // for (var i = 0; i <row*row; i++) {
     //        el+='<div></div>'
      // };

      // // $('.box').find('div:lt(22)').removeClass();
      // // $('.box').find('div:gt(462)').removeClass();
      // // $('.box').find('div:nth-child(12n+1)').removeClass();
      // // $('.box').find('div:gt(462)').removeClass();
         
      // $('.box').html(el)
      // .find('div')
      // .addClass('block')
      // /*.attr('lei',function(){
    //      if(Math.random()>0.8){
    //        $(this).addClass('lei');
    //        return true;
    //      }
      // })*/
      // .each(function(i){
      //  if(Math.random()>0.8){
      //    $(this).data('lei',true);
      //  }
      //  $(this).data('index',i);
      // })
      // .click(function(i){
      //  if($(this).data('lei')){
      //    alert('woll!!');
      //    $(this).addClass('red');
    //              // $('.box div').eq(i).data('lei').addClass('red');
      //    $('.box div').each(function(i){
      //      if($(this).data('lei')){
      //        $(this).addClass('red scale');
      //      }
      //    })
      //  }else{
      //    var pos=$(this).data('index');
      //    var shuzi=0;
      //    if( $('.box div').eq(pos-1).data('lei') ){shuzi++};
      //    if( $('.box div').eq(pos+1).data('lei') ){shuzi++};
      //    if( $('.box div').eq(pos-19).data('lei') ){shuzi++};
      //    if( $('.box div').eq(pos-20).data('lei') ){shuzi++};
      //    if( $('.box div').eq(pos-21).data('lei') ){shuzi++};
      //    if( $('.box div').eq(pos+19).data('lei') ){shuzi++};
      //    if( $('.box div').eq(pos+20).data('lei') ){shuzi++};
      //    if( $('.box div').eq(pos+21).data('lei') ){shuzi++};
      //    $(this).text(shuzi).css({'font-size':'24px','text-align':'center'});
      //  }
        
      // } )

    //  })();
})