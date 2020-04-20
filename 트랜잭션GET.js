var tranParams = 
	{
		id       : 	"패키지명"
		,inDs    :  "input1=조건데이터셋"
        ,outDs   : 	"리스트데이터셋=output1"
        ,method  : 	"callProc"
        ,sqlId   :  "패키지명"
		,arg     :	{ 조건컬럼명 : 조건데이터 }
		,callback : function(id, data)
		{
			if(this.gfn_hasData(리스트데이터셋))
			{
				if(리스트데이터셋.getColumn(0, "MSG_TYPE") == "N")
				{
					alert(리스트데이터셋.getColumn(0, "MSG_TEXT"));
				}
				else // 정상
				{
					trace("성공");
				}
			}
		}
	}
	this.gfn_transaction(tranParams);