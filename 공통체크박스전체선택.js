//------------------------------------------------------------------------------------------------
// 펑션 - 체크박스 전체 선택
//------------------------------------------------------------------------------------------------
var gv_isCheckAll = 0;
this.fn_setChckAll = function(argColStr)
{
	this.gv_isCheckAll = (this.gv_isCheckAll ? 0 : 1);
	
	if(대상데이터셋.rowcount > 0)
	{
		for(var i=0; i< 대상데이터셋.getRowCount(); i++)
		{
			대상데이터셋.setColumn(i, argColStr, this.gv_isCheckAll);
		}
	}
	gv_isCheckAll = 0;
}