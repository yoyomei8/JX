require.config({baseUrl:"./libs",paths:{jquery:"jquery"}}),require(["jquery"],function(e){e(function(){var o=null;e(".navMenu h2").hover(function(){e(".categoryBox").show()},function(){o=setTimeout(function(){e(".categoryBox").hide()},100)}),e(".menuBox").hover(function(){e(".categoryBox").show()},function(){e(".categoryBox").hide()}),e(".categoryBox").mouseleave(function(){e(this).hide()}),e(".categoryBox li").hover(function(){clearInterval(o),e(this).css("background","#f2f2f2").siblings().css("background",""),e(this).siblings().children("div").css("border-left","3px solid transparent"),e(this).children("div").css("border-left","3px solid red"),e(".menuBox").hide().eq(e(this).index()).show(),o=setTimeout(function(){e(".categoryBox li").on("mouseleave",function(){e(".menuBox").hide(),e(".categoryBox li").css("background",""),e(".categoryBox li").siblings().children("div").css("border-left","3px solid transparent")})},10)}),e(".menuBox").on("mouseenter",function(){e(this).show(),e(".categoryBox li").eq(e(this).index()-2).css("background","#f2f2f2")}),e(".menuBox").on("mouseleave",function(){e(this).hide(),e(".categoryBox li").css("background",""),e(".categoryBox li").siblings().children("div").css("border-left","3px solid transparent")})})});