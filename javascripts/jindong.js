/**
 * Created by BruceOne on 2016/7/17.
 */
/*置顶*/

function zhiding(){
    document.getElementById("title_top").scrollIntoView(true);	 //这个意思其实就是将这个元素到顶部来浏览器窗口的顶部来显示
}
/*
大图
 图片滚动*/
$(document).ready(function () {
  page = 1;
    Pages = 6
    try {
        $(".prev").click(function () {
           clearTimeout("st");
            if ($(".gundong_img li").is(':visible')) {
                if (page == 0) {
                    $(".gundong_img li").eq(5).addClass("selected_img").siblings().removeClass("selected_img").show();
                    page = Pages;
                } else {
                    $(".gundong_img li").eq(page - 1).addClass("selected_img").siblings().removeClass("selected_img").show();
                    page--;
                }
            }
            $(".xiaoyuandian li").eq(page).addClass("cur").siblings().removeClass("cur");
        })
        $(".next").click(function () {
            clearTimeout("st");
            if ($(".gundong_img li").is(':visible')) {
                if (page == Pages) {
                    $(".gundong_img li").eq(0).addClass("selected_img").siblings().removeClass("selected_img").show();
                    page = 1;
                } else {
                    $(".gundong_img li").eq(page).addClass("selected_img").siblings().removeClass("selected_img").show();
                    page++;
                }
            }
            $(".xiaoyuandian li").eq(page - 1).addClass("cur").siblings().removeClass("cur");
        })
        /*点击小圆点滚动*/
        $(".xiaoyuandian li").mousemove(function(){
            clearTimeout("st");
           var xyd= $(this).index()
            $(".gundong_img li").eq(xyd).addClass("selected_img").siblings().removeClass("selected_img").show();
            $(this).addClass("cur").siblings().removeClass("cur");
            page=xyd+1;
        })
    } catch (e) {
        alert(e.message)
    } finally {
        st=setTimeout("showgun()",4000);
    }
})

function showgun(){
    if ($(".gundong_img li").is(':visible')) {
        if (page ==Pages) {
            $(".gundong_img li").eq(0).addClass("selected_img").siblings().removeClass("selected_img").show();
            page=1;
        } else {
            $(".gundong_img li").eq(page).addClass("selected_img").siblings().removeClass("selected_img").show();
            page++;
        }
    }
    $(".xiaoyuandian li").eq(page-1).addClass("cur").siblings().removeClass("cur");
   st=setTimeout("showgun()",4000);
}
showgun();

/*
长型图片推荐
 图片滚动*/

/*
-------------------------置顶----------------------------*/
