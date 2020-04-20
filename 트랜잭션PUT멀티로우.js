if( ! this.fn_isValidSave() )
{
    return false;
}
this.gfn_save({
                id : "패키지명"
                ,inDs : "input1=저장데이터셋1 input2=저장데이터셋2"
                ,outDs : "리턴데이터셋1=output1 리턴데이터셋2=output2"
                ,sqlId :  "패키지명"
                ,useIudSql : "N"
                ,async : false
                ,saveConfirm : false // 확인메시지처리
                ,callback : function()
                {
                    if(리턴데이터셋.rowcount > 0)
                    {
                        if(리턴데이터셋.getColumn(0, "MSG_TYPE") == "Y")
                        {
                            alert("성공");
                        }
                        else
                        {
                            alert(리턴데이터셋.getColumn(0, 'MSG_TEXT'));
                            return;
                        }
                    }
                }
            });		