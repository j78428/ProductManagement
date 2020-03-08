// JavaScript Document

$(document).ready(function(e) {


    /****** ToolTip 觸發 ******/
    $("[data-toggle='tooltip']").tooltip();


    /****** 弹出框功能初始化 ******/
    $(function() {
        $('[data-toggle="popover"]').popover();
    });



    /*********** 登入頁面 - 樣式切換 ***********/
    $(".tab_admin").click(function(e) {
        $("body").removeClass("company_login_style");
    });

    $(".tab_Company").click(function(e) {
        $("body").addClass("company_login_style");
    });




    /*********** MENU 開啟/關閉 ***********/
    $(".btn_menu").click(function(e) {
        $(".menu").addClass("open");
    });

    $(".menu .btn_close").click(function(e) {
        $(".menu").removeClass("open");
    });

    $(".menu .mask").click(function(e) {
        $(".menu").removeClass("open");
    });



    /*********** sort icon設定 ***********/

    /*-----搜尋結果用-----*/
    $(".result_table button.sort_change").click(function(e) {
        var sort_status = $(this).val();
        if (sort_status == 0) {
            $(".result_table button.sort_change").removeClass("sorting_asc");
            $(".result_table button.sort_change").removeClass("sorting_desc");
            $(".result_table button.sort_change").val(0);
            $(this).addClass("sorting_asc");
            $(this).val(1);
        } else if (sort_status == 1) {
            $(this).removeClass("sorting_asc");
            $(this).addClass("sorting_desc");
            $(this).val(2);
        } else if (sort_status == 2) {
            $(this).addClass("sorting_asc");
            $(this).removeClass("sorting_desc");
            $(this).val(1);
        }

    });




    /************ 開/關批次處理功能區塊 ************/

    /*單一選擇*/
    $(".list_table .check_item").change(function(e) {
        var checked = false;
        $('.list_table .check_item').each(function() {
            if ($(this).prop('checked') == true) {
                checked = true;
            }
        });

        if (checked) {
            $(".list_table .function_block").fadeIn(50);
            $(".item_list .mask").fadeIn();
        } else {
            $(".list_table .function_block").fadeOut(50);
            $('#CheckAll').prop('checked', false);
            $(".item_list .mask").fadeOut();
        }
    });
    /*選擇全部*/
    $('#CheckAll').on('click', function() {
        $('.list_table .check_item').prop('checked', $('#CheckAll').prop('checked'));

        if ($('#CheckAll').prop('checked')) {
            $(".list_table .function_block").fadeIn(50);
            $(".item_list .mask").fadeIn();
        } else {
            $(".list_table .function_block").fadeOut(50);
            $(".item_list .mask").fadeOut();
        }
    })
    /*取消選取*/
    $('.function_block .btn_cancel_all').on('click', function() {
        $('.list_table .check_item').prop('checked', false);
        $(".list_table .function_block").fadeOut(50);
        $('#CheckAll').prop('checked', false);
        $(".item_list .mask").fadeOut();
    })




    /*********** 列表 - 搜尋產品名稱 ***********/
    $(".btn_search_name").click(function(e) {
        $(this).siblings(".search_box").show();
    });

    $(".btn_close_search").click(function(e) {
        $(this).parent().hide();
    });




    /*********** 列表 - 產品列表切換 ***********/
    $(".product_type ul li").click(function(e) {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        var ProductListType = "." + $(this).find("a").attr("name");
        $(".product_list").hide();
        $(ProductListType).fadeIn();
    });




    /******* 數字調整器 *******/
    $(".plus").click(function() {
        var max_num = 0;
        if ($(this).attr('max-num') != null) {
            max_num = parseInt($(this).attr('max-num'));
        }
        var n = $(this).siblings(".num").html();
        var num = parseInt(n) + 1;
        if (num > max_num && $(this).attr('max-num') != null) {
            return;
        }
        $(this).siblings(".num").html(num);
    });

    $(".minus").click(function() {
        var min_num = 0;
        if ($(this).attr('min-num') != null) {
            min_num = parseInt($(this).attr('min-num'));
        }
        var n = $(this).siblings(".num").html();
        var num = parseInt(n) - 1;
        if (num < min_num) {
            return
        }
        $(this).siblings(".num").html(num);
    });



    /************ 填表輸入語系切換 ************/
    $(".input_language_switch .btn").click(function() {
        var LanguageName = $(this).attr("title");
        var LanguageInputItem = ".input_" + LanguageName;
        $(this).parent().siblings().hide();
        $(this).parent().siblings(LanguageInputItem).show();
    });





    /************* 行事曆(飯店產品用) - 月份切換 ***************/
    $(".calendar_setting > ul > li").click(function() {
        $(".calendar_setting > ul > li").removeClass("active");
        $(this).addClass("active");
    });




    /************* 行事曆(飯店產品用) - 瀏覽模式切換 ***************/
    $(".switch_view .view_mode2").click(function() {
        $(".calendar_view").addClass("view_sm");
    });

    $(".switch_view .view_mode1").click(function() {
        $(".calendar_view").removeClass("view_sm");
    });


    /************ Accordion手風琴開關 ************/
    $(".accordion_title").click(function(e) {

        var content_status = $(this).siblings(".accordion_content").css("display");
        if (content_status == "none") {
            $(this).siblings(".accordion_content").slideDown();
            $(this).addClass("show");
        } else {
            $(this).siblings(".accordion_content").slideUp();
            $(this).removeClass("show");
        }
    });





    /************ 產品明細(飯店) - 語系切換DEMO ************/
    $(".cn_view").click(function(e) {
        $(".cn_info").fadeIn();
        $(".en_info").hide();
        $(".jp_info").hide();
    });

    $(".en_view").click(function(e) {
        $(".cn_info").hide();
        $(".en_info").fadeIn();
        $(".jp_info").hide();
    });

    $(".jp_view").click(function(e) {
        $(".cn_info").hide();
        $(".en_info").hide();
        $(".jp_info").fadeIn();
    });




    /************ 產品明細(飯店) - 設施設定 顯示/隱藏 ************/

    $(".basic_facility > li > .checkbox > .check_item").change(function(e) {
        if ($(this).prop('checked') == true) {
            $(this).parent().siblings().fadeIn(50);
        } else {
            $(this).parent().siblings().fadeOut(50);
        }
    });






});


/****** mouse touch scroll *******/
$(function() {
    var curDown = false,
        curYPos = 0,
        curXPos = 0;
    $(".month_list").mousemove(function(m) {
        if (curDown === true) {
            $(".month_list").scrollTop($(".month_list").scrollTop() + (curYPos - m.pageY));
            $(".month_list").scrollLeft($(".month_list").scrollLeft() + (curXPos - m.pageX));
        }
    });

    $(".month_list").mousedown(function(m) {
        curDown = true;
        curYPos = m.pageY;
        curXPos = m.pageX;
    });

    $(".month_list").mouseup(function() {
        curDown = false;
    });
})



/******** 說明頁 - 主類別區塊浮動 **********/
    $(document).scroll(function() {
        //設定觸發動作的高度
        var _jumpOutHeight = 700;
        //取得目前捲動的高度
        var height = $(document).scrollTop();

        if (height >= _jumpOutHeight) {
            $(".nav_list").addClass("floating");

        } else {
            $(".nav_list").removeClass("floating");
        }

    });







/****** datepicker setting *******/
$.datepicker.regional['zh-TW'] = {
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    prevText: "上月",
    nextText: "次月",
    weekHeader: "週"
};
//將預設語系設定為中文
$.datepicker.setDefaults($.datepicker.regional["zh-TW"]);

$(function() {
    $(".birthday").datepicker({
        maxDate: '0',
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd'
    });
    $("#StartDate1").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd',
        onClose: function(selectedDate) {
            $("#ToDate").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#EndDate1").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd',
        onClose: function(selectedDate) {
            $("#FromDate").datepicker("option", "maxDate", selectedDate);
        }
    });
});