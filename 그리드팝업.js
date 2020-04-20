this.gfn_setSearchGrid({
    popupId : "구분용팝업ID"
    ,searchId : "실제호출팝업ID"
    ,grid : 대상그리드
    ,codeCol : "코드컬럼"
    ,nameCol : "명칭컬럼"
    ,refCol : ["레퍼런스코드컬럼", "레퍼런스명칭컬럼"]
    ,refDs : 레퍼런스데이터셋
    ,popupParam : {LOCK_FLAG:"Y"} // 필수요소Validation
    ,callback : function (id, data){
        if( id == "구분용팝업ID" )
        {
            if( this.gfn_isValid(data) ) 
            {
                대상데이터셋.setColumn(대상데이터셋.rowposition, "코드컬럼", data.코드컬럼);
                대상데이터셋.setColumn(대상데이터셋.rowposition, "명칭컬럼", data.명칭컬럼);
            }
            else
            {
                if( this.gfn_isNull(대상데이터셋.getColumn(대상데이터셋.rowposition, "명칭컬럼")) )
                {
                    대상데이터셋.setColumn(대상데이터셋.rowposition, "코드컬럼", null);
                    대상데이터셋.setColumn(대상데이터셋.rowposition, "명칭컬럼", null);
                }
            }
            
            if(this.getFocus().name != "대상그리드명칭")
            {
                대상그리드.setFocus();
                대상그리드.setCellPos(대상그리드.getBindCellIndex("body", "코드컬럼"));
            }
        }
    }
});
