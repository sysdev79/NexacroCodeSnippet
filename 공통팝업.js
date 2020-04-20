this.gfn_setSearchEdit({
    popupId : "구분용팝업ID"
    , searchId : "실제호출팝업ID"
    , edtCode : 코드컴포넌트
    , btnSearch : 버튼컴포넌트
    , edtName : 명칭컴포넌트
    , callback : function (id, data)
    {
        if (this.gfn_isValid(data))
        {
            대상데이터셋.setColumn(0, "코드컬럼", data.코드);
            대상데이터셋.setColumn(0, "명칭컬럼", data.명칭);
        }
    }
});