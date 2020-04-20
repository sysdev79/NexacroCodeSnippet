this.gfn_calendar( 대상캘린더컴포넌트
	                 ,{ callback : function(id, rtn){
								if ( !this.gfn_isNull( rtn )){
									대상캘린더컴포넌트.set_value(rtn.date);
									대상데이터셋.setColumn(0, "대상컬럼", rtn.date);
								}
							}
						}
					);