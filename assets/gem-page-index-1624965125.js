

(function( jQuery ){
  // var $module = jQuery('#m-1624965155582').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1624965592890').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1624967109247').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1624967237348').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1624967306771').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1624967092342').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var autoplay = $module.data('autoplay'), 
          loop = $module.data('loop');
    } else {
      var autoplay = 0, 
          loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
              items:colxs,
              nav: navxs,
              dots:dotsxs,
              margin: marginxs
          },
          768:{
              items:colsm,
              nav: navsm,
              dots:dotssm,
              margin: marginsm
          },
          992:{
              items:colmd,
              nav: navmd,
              dots:dotsmd,
              margin: marginmd
          },
          1200:{
              items:collg,
              nav: navlg,
              dots:dotslg,
              margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
        setTimeout(function() {	
            initCarousel();	
        }, 300)	
    } else {	
        initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    window.__gfAnimate.registerScroll(jQuery("#e-1624968209972"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"fade_in-left","delay":0,"duration":500},"interaction":{"key":"scroll-into-view","type":"level2"}}');
    
    
    
    
    
    
    
    
    window.__gfAnimate.registerScroll(jQuery("#e-1624968676393"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"fade_in-left","delay":0,"duration":500},"interaction":{"key":"scroll-into-view","type":"level2"}}');
    
    
    
    
    
    
    
    
    window.__gfAnimate.registerScroll(jQuery("#e-1624968669173"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"fade_in-left","delay":0,"duration":500},"interaction":{"key":"scroll-into-view","type":"level2"}}');
    
    
    
    window.__gfAnimate.registerScroll(jQuery("#e-1624969265450"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"fade_in-left","delay":0,"duration":500},"interaction":{"key":"scroll-into-view","type":"level2"}}');
    
    window.__gfAnimate.registerScroll(jQuery("#e-1625049218023"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"fade_in-left","delay":0,"duration":500},"interaction":{"key":"scroll-into-view","type":"level2"}}');
    window.__gfAnimate.registerScroll(jQuery("#e-1624969405524"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"fade_in-right","delay":0,"duration":500},"interaction":{"key":"scroll-into-view","type":"level2"}}');
    window.__gfAnimate.registerScroll(jQuery("#e-1624969332520"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"fade_in-right","delay":0,"duration":500},"interaction":{"key":"scroll-into-view","type":"level2"}}');
    window.__gfAnimate.registerScroll(jQuery("#e-1624969343419"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"fade_in-right","delay":0,"duration":500},"interaction":{"key":"scroll-into-view","type":"level2"}}');
    
    
(function( jQuery ){
  var $module = jQuery('#m-1624970679721').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1624970724288').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'production') { 
    $module.children('form').on('submit', function() {
      try {
        localStorage.setItem('gemId', '#m-1624970724288');
      } catch(err) {}
    });

    var gemId = '';
    try {
      var gemId = localStorage.getItem('gemId');
    } catch(err) {}

    if(gemId != '') {
      var moduleId = '#' + $module.parent().attr('id');
      if(gemId == moduleId) {
        $module.find(".note").show();
        
        var $note = $module.find('.note.form-success, .note.form-error');
        if ($note.length > 0) {
          $popup = $module.closest('.module-wrap[data-label="Popup"]');
          if ($popup.children('.module').data('gfv1popup')) {
            $popup.children('.module').data('gfv1popup').show();
          }
        }
          
        var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';

        if(cbLink && cbLink != '') {
          try {
            localStorage.setItem('gemId', 'redirected');
          } catch(err) {}

          var target = $module.attr("data-target") || '';
          if(target!=="_blank"){
            window.location.href = cbLink;
          }else {
            window.open(cbLink, '_blank')
          }
        }
      }
    } else {
      var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';
      
      var $note = $module.find('.note.form-success, .note.form-error');
      if ($note.length > 0) {
        $popup = $module.closest('.module-wrap[data-label="Popup"]');
        if ($popup.children('.module').data('gfv1popup')) {
          $popup.children('.module').data('gfv1popup').show();
        }
      }

      if(cbLink && cbLink != '') {
        var target = $module.attr("data-target") || '';
        if(target!=="_blank"){
          window.location.href = cbLink;
        }else {
          window.open(cbLink, '_blank')
        }
      }
    }
  }
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
                          (function( jQuery ){
                              try{
                                  if(jQuery().gfV2Lazyload){
                                      var $module = jQuery(window);
                                      $module.gfV2Lazyload({delay:125})
                                  }
                              }catch(err){
                                  console.error(err)
                              }
                          })( window.GemQuery || jQuery );
                      window.__gfFlowActions = []; window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]);window.__gfFlowActions.push([]); window.__gfV1FlowActions.init();