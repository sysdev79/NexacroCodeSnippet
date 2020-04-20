for(var i = 0 ; i < 대상데이터셋.rowcount ; i ++)
{
    if(대상데이터셋.getRowType(i) == Dataset.ROWTYPE_INSERT)
    {
        nRow_M = 저장데이터셋.addRow();
        저장데이터셋.copyRow(nRow_M, 대상데이터셋, i);
        저장데이터셋.setColumn(nRow_M,"IUD" ,"I");
    }
    else if (대상데이터셋.getRowType(i) == Dataset.ROWTYPE_UPDATE)
    {
        nRow_M = 저장데이터셋.addRow();
        저장데이터셋.copyRow(nRow_M, 대상데이터셋, i);
        저장데이터셋.setColumn(nRow_M,"IUD" ,"U");
    }
}
for (var i = 0; i < 대상데이터셋.getDeletedRowCount() ; i ++ )
{
    nRow_M = 저장데이터셋.addRow();
    저장데이터셋.setColumn(nRow_M,"IUD" ,"D");
    저장데이터셋.setColumn(nRow_M,"키컬럼" ,대상데이터셋.getDeletedColumn(i,"키컬럼"));
}