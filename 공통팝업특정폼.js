this.gfn_popupOpen("팝업구분명"
                            ,{
                                    ARG1 : 팝업에전달할데이터1,
                                    ARG2 : 팝업에전달할데이터2
                                    ,callback : function(id, rtn){
                                                if ( !this.gfn_isNull( rtn ))
                                                {
                                                    처리결과전달받을데이터셋.clearData();
                                                    var new_row = 처리결과전달받을데이터셋.addRow();
                                                    처리결과전달받을데이터셋.setColumn(new_row, "컬럼명1", rtn.VAL1);
                                                    처리결과전달받을데이터셋.setColumn(new_row, "컬럼명2", rtn.VAL2);
                                                }
                                            }	
                            } 
                            ,"팝업을포함한서비스명::해당팝업폼명.xfdl"
                            );