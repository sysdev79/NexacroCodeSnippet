// 행추가
대상그리드.commonAdd.setOpts({
    pre : function (){
        if(대상데이터셋.rowcount > 0)
        {
            return false;
        }
    }
    ,post : function (grid, ds, idx){
            // 그리드 팝업이 존재하는경우 setColumn으로 row생성시
            // 기존동작방식대로 팝업이 뜨면 안되는 경우 처리 
            대상데이터셋.set_enableevent(false); // 데이터셋 이벤트 off
            //=======================================================

        
            
            //=======================================================
            대상데이터셋.set_enableevent(true); // 데이터셋 이벤트 on
    }
});

// 행삭제
대상그리드.commonDelete.setOpts({
    pre : function (){
    }
});

// 행복사
대상그리드.commonCopy.setOpts({
    pre : function ()
    {
    }
    ,post : function (grid, ds, idx)
    {
    }
});