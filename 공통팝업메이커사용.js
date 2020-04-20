this.popup.make({
        id : "호출팝업명"
        ,url : "comm::호출팝업명.xfdl"
        ,callback : function (id, data)
        {
            if(!this.gfn_isNull(data))
            {
                대상데이터셋.setColumn(대상데이터셋.rowposition, "코드컬럼명" , data.UID_NO)
                대상데이터셋.setColumn(대상데이터셋.rowposition, "명칭컬럼명" , data.MINOR_NAM)
            }
        }
    });
var params = {SEARCH_CODE : "공통코드-메이저코드", TITLE : "팝업타이틀명"};
this.popup.호출팝업명.open(params);