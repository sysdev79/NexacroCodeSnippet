//************************************************************************************************/
//* 작성자     : 이종일
//* 작성일     : $DATE$
//************************************************************************************************/
//* $DATE$  : $end$ 
//************************************************************************************************/

include "lib::libInclude.xjs"

/* PDA include
    include "lib::libIncludePda.xjs";
*/

//------------------------------------------------------------------------------------------------
// 공통 - 온로드
//------------------------------------------------------------------------------------------------
this.form_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
    this.gfn_initForm(obj);

    /* PDA
        this.gfn_initMobile(obj);
    */
    
    /*  
        this.gfn_enrollCloseCheck(this.ds_list);
    */
    
    /* 부모폼에서 던진 아규먼트 자식폼에서 획득 (dataset을 넘김)
        var args = this.popup.params;   
        this.ds_cond_copy.copyData(args.ARG1);
    */

    this.fn_loadCombo();

	this.fn_setComp();     
	
    this.fn_init();
};
//------------------------------------------------------------------------------------------------
// 공통 - 공통코드 콤보 로딩
//------------------------------------------------------------------------------------------------
this.fn_loadCombo = function ()
{
    /*  공통코드 콤보생성
        - 전체공란 첨부구분 배열
            - "A" : "전체"
            - "S" : "선택"
            - "E" : 공란
            - "X" : 데이터시작
            - "AC": 데이터건수가 0보다 클경우에만 "전체" 추가
        - 텍스트모드
            - N : 일반
            - B : 코드와 텍스트를 같이 나타냄
        - 데이터가져오는방식
            - T : 공통코드테이블
            - S : 프로시져
        - 아규먼트
            - { arg1:값1, arg2:값2...... }
        var codeParams = [
            [ "담을데이터셋", "대분류코드", "대표코드", "전체공란첨부구분배열", "텍스트모드", "데이터가져오는 방식", "아규먼트(JSON)"],
            [ "ds_CDCarGubun", "10", "26", "A", "N", "T", {arg1 : "C"}], // 배차대상만 REF "C"
            [ "", "10", "", "A" ,"N"],
            [ "", "10", "", "A" ,"N"]
        ];
        this.gfn_loadCombo(codeParams);
    */

    /*  법인코드 콤보
        this.gfn_copCombo(this.ds_Cmb_cop, "A"); // 법인콤보
    */

    /*  컴포넌트 인덱스 설정
        this.div_Dtl.form.cmb_Purpose.set_index(0);
        this.div_Dtl.form.cmb_Cop.set_index(0);
        this.div_Cond_Top.form.cmb_VisitPurpose.set_index(0);
    */
    
    /* 별도콤보 데이터 획득, 해당 dataset과 특정 콤보 바인딩해야함
        var tranParams = {
            id      :   "PKG_TM_011_010.SP_TM_011_010_GET_001" + nexacro.Application.gv_userId
            ,url    :   "nxCtr.do"
            ,outDs  : 	"ds_cmb_cust=output1"
            ,method : 	"callProc"
            ,sqlId  :  	"PKG_TM_011_010.SP_TM_011_010_GET_001"
            ,callback : function ()
            {
            }
        }
        this.gfn_transaction(tranParams);
    */
};
//------------------------------------------------------------------------------------------------
// 공통 - 컴포넌트 설정
//------------------------------------------------------------------------------------------------
this.fn_setComp = function ()
{
	/* 팝업01(코드/명)
		this.gfn_setSearchEdit({
				popupId : "commPopWarehouse1" // 중복일 경우 구분자 
				, searchId : "Warehouse"
				, edtCode : this.div_Top_Cond.form.edt_OutWH_CD
				, edtName : this.div_Top_Cond.form.edt_OutWH_NAM
				, btnSearch : this.div_Top_Cond.form.btn_OutWH
				, callback : function (id, data)
				{ 
					trace(id);
					if (this.gfn_isValid(data)) 
					{ 
						if(id == "commPopWarehouse1")
						{
							// 바인딩도 해야하고 아래도 필요
							this.ds_cond.setColumn(0, "OUT_WH_CD", data.UID_NO);
							this.ds_cond.setColumn(0, "OUT_WH_NAM", data.MINOR_NAM);
						}
						
					}
					
					trace(this.ds_cond.saveXML());
				}
			});	
	*/

	/* 탭페이지 설정
        this.Tab00.Tabpage1.set_url("TM031::TM031_040_001.xfdl");
        this.Tab00.Tabpage2.set_url("TM031::TM031_040_002.xfdl");
    */

    /* 날짜 Validation
        this.gfn_setValid(this.div_cond_top.form.cal_sdate, this.div_cond_top.form.cal_edate, "");
    */

    /* 캘린더 세팅(spin형태)
        this.div_Cond_Top.form.cal_StatisYear.set_dateformat("yyyy");
        this.div_Cond_Top.form.cal_StatisYear.set_editformat("yyyy");
        this.div_Cond_Top.form.cal_StatisYear.set_type("spin");
    */
   
	/* PDA popup
	this.gfn_popupOpen("popupCar"
					,{
						title:"차량선택"
						,ds : this.ds_CarList
						,colID : "CarList"
						,callback : function (id, rtn)
						{
							if(!this.gfn_isNull(rtn))
							{
								this.edt_Car.set_value(rtn.CAR_NAM);
								this.edt_CarCD.set_value(rtn.CAR_CD);
								this.ds_Cond.setColumn(0,"CAR_CD",rtn.CAR_CD);
								
								this.btn_Search.click();
							}
						}
					}
					,"commPda::commPopCar2.xfdl"
					);
	*/		

    /* PDA 캘린더 (ncore 프레임웍캘린더동작)
        this.gfn_calendar( this.cal_Date
                        ,{ callback : function(id, rtn){
                                    if ( !this.gfn_isNull( rtn )){
                                        this.cal_Date.set_value( rtn.date );
                                    }
                                }
                            }
                        );
    */

	/* 김효부장님취향존중
	    if(this.ds_list.rowcount == 0)
		{
			this.grd_list.set_autosizebandtype("body");
			this.grd_list.set_autosizingtype("none");
		}
	*/

	/* 그리드팝업 코드/명 
		this.gfn_setSearchGrid({
					popupId : "commPopWarehouse1"
				, searchId : "Warehouse"
				, grid : this.grd_List
				, codeCol : "IN_WH_CD"
				, nameCol : "IN_WH_NAM"
				//, refCol : ["", ""] // 참고컬럼
				, refDs : this.ds_list_raw
				//, popupParam : {COLUMN_NAME:"value"}
				,callback : function (id, data){
								if(this.gfn_isValid(data))
								{
									this.ds_list_raw.setColumn(this.ds_list_raw.rowposition, "IN_WH_CD", data.UID_NO);
									this.ds_list_raw.setColumn(this.ds_list_raw.rowposition, "IN_WH_NAM", data.MINOR_NAM);
								}
								else
								{
									if( this.gfn_isNull(this.ds_list_raw.getColumn(this.ds_list_raw.rowposition, "IN_WH_NAM")) )
									{
										// 코드명이 없는 경우 null 설정
										this.ds_list_raw.setColumn(this.ds_list_raw.rowposition, "IN_WH_CD", null);
										this.ds_list_raw.setColumn(this.ds_list_raw.rowposition, "IN_WH_NAM", null);
									}
								}
								// 팝업 닫은 후 포커스를 지정
								if(this.getFocus().name != 'grd_List')
								{
									this.grd_List.setFocus();
									this.grd_List.setCellPos(this.grd_List.getBindCellIndex("body", "IN_WH_CD"));
								}
							}
		});

			//행추가
	this.grd_carPlanMaster.commonAdd.setOpts({
		pre : function (){
// 			if( this.ds_list.rowcount < 1) return false;
// 			
// 			if( ! this.gfn_isValidReq(this.div1) ) return false;
		}
		,post : function (grid, ds, idx){
			// 디테일 기본값 설정
// 			ds.set_enableevent(false);
// 			
// 			ds.set_enableevent(true);
// 			
// 			// 포커스 설정
// 			this.grd_list2.setFocus();
// 			this.grd_list2.setCellPos(this.grd_list2.getBindCellIndex("body", "ITEM_MAT"));
		}
	});
	
	//행삭제
	this.grd_carPlanMaster.commonDelete.setOpts({
		pre : function (){
			
		}
	});

	//행복사
	this.grd_carPlanMaster.commonCopy.setOpts({
		pre : function (){
			
		}
	});
	*/
};
//------------------------------------------------------------------------------------------------
// 공통 - 초기값 세팅
//------------------------------------------------------------------------------------------------
this.fn_init = function ()
{
	/* ds_cond 기본값 세팅
        this.ds_cond.clearData();
        this.ds_cond.addRow();
        this.ds_cond.setColumn(0, "SDATE", this.gfn_addDay(this.gfn_getToday(), -1, "S"));
        this.ds_cond.setColumn(0,"CRT_USER",nexacro.getApplication().gds_user.getColumn(0, "wrkId"));
	*/
};
//------------------------------------------------------------------------------------------------
// 공통 - 조회
//------------------------------------------------------------------------------------------------
this.fn_find = function()
{
	/* 탭페이지 형식
	 	switch(this.tab_Content.tabindex) {
	 	case 0:
	 		this.tab_Content.Tabpage1.form.fn_find();
	 		break;
	 	case 1:
	 		this.tab_Content.Tabpage2.form.fn_find();
	 		break;
	 	default:
	*/
	
	/* select pkg 호출
			var obj = this.parent.parent.parent;
			// 항목이 비면 false를 반환함
			var isCopySuccess = this.ds_cond.copyRow(0, obj.ds_cond, 0, 
													"SDATE=SDATE, " +
													"EDATE=EDATE, " +
													"OUT_WH_CD=OUT_WH_CD," +
													"IN_WH_CD=IN_WH_CD, " +
													"ITEM_MAT=ITEM_MAT," +
													"ITEM_CD=ITEM_CD, " +
													"ST_CD=ST_CD," +
													"MK_CD=MK_CD"
													);
			if(isCopySuccess)
			{
				trace(this.ds_cond.saveXML());
				var tranParams = 
								{
									id      :   "PKG_TM_040_010.SP_TM_040_010_GET_002"
									,inDs   :   "input1=ds_cond"
									,outDs  : 	"ds_list=output1"
									,method : 	"callProc"
									,sqlId  :  	"PKG_TM_040_010.SP_TM_040_010_GET_002"
									,callback : function ()
									{
										if(this.ds_list.rowcount > 0) 
										{
											if (this.ds_list.getColumn(0, 'MSG_TYPE') == 'N')
											{
												alert(this.ds_list.getColumn(0, 'MSG_TEXT'));
												return;
											}
											else // 정상획득
											{
												trace("ds_list : " + this.ds_list.rowcount);
												// 김효부장님취향존중
												this.grd_list.set_autosizebandtype("allband");
												this.grd_list.set_autosizingtype("col");

												// 탭에서 다른탭의 함수를 호출

													var p_obj = this.parent.parent.parent;
													p_obj.tab_Content.set_tabindex(0);
													p_obj.tab_Content.Tabpage1.form.fn_find();
													this.fn_find();

											}
										}
									}
								}
				this.gfn_transaction(tranParams);
			}
			else
			{ 
				this.alert("ds_cond copy exception");
				return;
			}
	*/

	/* pkg호출 : ds_cond 없는 아규먼트 사용할때, 마스터디테일경우 마스터키값으로 디테일조회경우
		var carPlanNo = this.gfn_nvl(this.ds_CarPlan.getColumn(this.ds_CarPlan.rowposition, "CAR_PLAN_NO"), "");
		var tranParams = {
		id : 		"PKG_TM_030_010.SP_TM_030_010_GET_003"
        ,outDs: 	"ds_CarPlanD=output1"
        ,method : 	"callProc"
        ,sqlId :  	"PKG_TM_030_010.SP_TM_030_010_GET_003"
		,arg :		{ CAR_PLAN_NO : carPlanNo }
		,callback : function(){
		}
	}
	this.gfn_transaction(tranParams);
	*/
	
	/*  그리드 합치기
    	this.grd_List.setCellProperty("Body",6,"suppress",1);
    */
};
//------------------------------------------------------------------------------------------------
// 공통 - 신규
//------------------------------------------------------------------------------------------------
this.fn_add = function ()
{
    /*
		var visitNo = this.gfn_getAutoNo("SM_SVR", this.gfn_getToday());
		
		g_Time = new Date();
		
		this.setTimer(1,1000);
		this.killTimer(1);

		var hh = g_Time.getHours();
		var mm = g_Time.getMinutes();
		
		var strhh = hh.toString();
		var strmm = mm.toString();
		
		if(strhh.length != 2)
		{
			strhh = "0" + strhh;
		}
		
		if(strmm.length != 2)
		{
			strmm = "0" + strmm;
		}
		
		var time = strhh+":"+strmm;

		var newRow = this.ds_List.addRow();	
		this.ds_List.setColumn(newRow, "VISIT_NO", visitNo);
		this.ds_List.setColumn(newRow, "VISIT_DATE", this.gfn_getToday());
		this.ds_List.setColumn(newRow, "STIME", time);	
		this.ds_List.setColumn(newRow, "CRUD", "IU");
    */
};

//------------------------------------------------------------------------------------------------
// 펑션 - essential 검증 (save 이전에 수행)
//------------------------------------------------------------------------------------------------
this.fn_isValidSave = function()
{
//  	if (!this.gfn_isUpdateCheckUnmsg(this.ds_list) && !this.gfn_isUpdateCheckUnmsg(this.ds_listPerson) && !this.gfn_isUpdateCheckUnmsg(this.ds_listDeliv) )	
// 	{
//  		return 0;
//  	}
//  	if (!this.gfn_isValidReq(this.div_detail) || !this.gfn_isValidReq(this.ds_listPerson) || !this.gfn_isValidReq(this.ds_listDeliv) )	
// 	{
//  		return -1;
//  	}
}

//------------------------------------------------------------------------------------------------
// 공통 - 저장
//------------------------------------------------------------------------------------------------
this.fn_save = function ()
{
	/* essential 검증
		var vRtn	= this.fn_isValidSave();
	if (vRtn == 0)	{
		this.alert( this.app.gv_msgNotChange );
		return;
	}else if (vRtn == -1)	{
		return;
	}
	*/




	/* 패키지 iud 컬럼사용
		this.ds_save_car_planM.clearData();
		this.ds_save_car_planD.clearData();
		
		var nRow_M = "";
		var nRow_D = "";
		
		var isSuccess = false;
		
		// 마스터데이터
		for(var i = 0 ; i < this.ds_CarPlan.rowcount ; i ++)
		{
			if(this.ds_CarPlan.getRowType(i) == Dataset.ROWTYPE_INSERT)
			{
				nRow_M = this.ds_save_car_planM.addRow();
				isSuccess = this.ds_save_car_planM.copyRow(nRow_M, this.ds_CarPlan, i);
				this.ds_save_car_planM.setColumn(nRow_M,'IUD' ,'I');
				this.ds_save_car_planM.setColumn(nRow_M,'WRKID' ,nexacro.getApplication().gds_user.getColumn(0, "wrkId"));
			}
			else if (this.ds_CarPlan.getRowType(i) == Dataset.ROWTYPE_UPDATE)
			{
				nRow_M = this.ds_save_car_planM.addRow();
				isSuccess = this.ds_save_car_planM.copyRow(nRow_M, this.ds_CarPlan, i);
				this.ds_save_car_planM.setColumn(nRow_M,'IUD' ,'U');
				this.ds_save_car_planM.setColumn(nRow_M,'WRKID' ,nexacro.getApplication().gds_user.getColumn(0, "wrkId"));
			}
		}
		for (var i = 0; i < this.ds_CarPlan.getDeletedRowCount() ; i ++ )
		{
			nRow_M = this.ds_save_car_planM.addRow();
			this.ds_save_car_planM.setColumn(nRow_M,'IUD' ,'D');
			this.ds_save_car_planM.setColumn(nRow_M,'CAR_PLAN_NO' ,this.ds_CarPlan.getDeletedColumn(i,'CAR_PLAN_NO'));
			this.ds_save_car_planM.setColumn(nRow_M,'WRKID' ,nexacro.getApplication().gds_user.getColumn(0, "wrkId"));
		}

		if(this.ds_save_car_planM.rowcount > 0 )
		{
			this.gfn_save({
			id : "PKG_TM_030_010" + nexacro.getApplication().gv_userId
			,inDs : "input1=ds_save_car_planM"
			,outDs : "ds_rtn_car_planM=output1"
			//,method : "callProc"		
			,sqlId :  "PKG_TM_030_010.SP_TM_030_010_PUT_001"
			,useIudSql : "N"
			,async : false
			,saveConfirm : false // 확인메시지처리
			,callback : function(){
				if (this.ds_rtn_car_planM.rowcount > 0)	{
					if (this.ds_rtn_car_planM.getColumn(0, 'MSG_TYPE') == 'N')
					{
						alert(this.ds_rtn_car_planM.getColumn(0, 'MSG_TEXT'));
						return;
					}
				}
				if (this.ds_rtn_car_planD.rowcount > 0)	{
					if (this.ds_rtn_car_planD.getColumn(0, 'MSG_TYPE') == 'N')
					{
						alert(this.ds_rtn_car_planD.getColumn(0, 'MSG_TEXT'));
						return;
					}
				}
				this.fn_find();
				}
			});	
		}
		<ColumnInfo>
  <Column id="MSG_TYPE" type="STRING" size="256"/>
  <Column id="MSG_TEXT" type="STRING" size="256"/>
  <Column id="MSG_CODE" type="STRING" size="256"/>
</ColumnInfo>
	*/

    /* 저장여부 확인 메시지, gfn_save() 사용하면 불필요 공통함수에서 처리함
		if(!nexacro.getApplication().confirm('운행정보를 저장하시겠습니까?', '확인', 'question'))
		{
			return;
		}
    */
};
//------------------------------------------------------------------------------------------------
// 공통 - 삭제
//------------------------------------------------------------------------------------------------
this.fn_delete = function ()
{
    /*
		var visitNo = '';
		if(this.ds_List.rowposition > -1)
		{
			visitNo = this.ds_List.getColumn(this.ds_List.rowposition,"VISIT_NO"); // del pk
			
			if(nexacro.getApplication().confirm('삭제하시겠습니까? (저장버튼 필수)', '확인', 'question'))
			{
				this.ds_List_Save.clearData()
				var delRow = this.ds_List_Save.addRow();
				this.ds_List_Save.setColumn(delRow, 'CRUD', 'D');
				this.ds_List_Save.setColumn(delRow, 'VISIT_NO', visitNo);
				
				this.ds_List.deleteRow(this.ds_List.rowposition);
			}
		}
    */
};
//------------------------------------------------------------------------------------------------
// 출력
//------------------------------------------------------------------------------------------------
this.fn_print = function ()
{
	/*
	trace( this.gfn_saveCSV( this.ds_list ));

	for(var i = 0 ; i < this.ds_list.rowcount ; i ++)
	{
		if(this.ds_list.getColumn(i, "CHK") == "1")
		{
			var new_row = this.ds_print.addRow();
			this.ds_print.copyRow(new_row, this.ds_list, i);
		}
	}
//  trace(this.ds_print.saveXML());	
	var data = this.gfn_saveCSV( this.ds_print );
//	this.gfn_report( "TM010_030", "","",["DATA", "ARG"],[ data, this.fn_getArg() ]);
	this.gfn_report( "TM010_030", "","",["DATA", "ARG"],[ data ]);
	*/
};
//------------------------------------------------------------------------------------------------
// 펑션 - 출력물 조회조건 가져오기
//------------------------------------------------------------------------------------------------
this.fn_getArg = function()
{
	/*
	var arg = this.gfn_getRowData( this.ds_cond );
	var div = " ,";
	var rtn = "";
	
	rtn = this.gfn_addStr( arg.SAP_CD, div, rtn, "사업장 : " + this.div_cond.form.cmb_sapCd.text );

	if ( arg.YMD_CLS == "1" ){
		rtn = this.gfn_addStr( arg.YMD_CLS, div, rtn, "주문일 : " );
	}else{
		rtn = this.gfn_addStr( arg.YMD_CLS, div, rtn, "납품일 : " );
	}
	
	rtn += this.gfn_formatMask( arg.YMD_FROM, "####-##-##") +"~" + this.gfn_formatMask( arg.YMD_TO, "####-##-##");
	rtn = this.gfn_addStr( arg.ORD_STAT, div, rtn, "출하지시상태 : " + this.div_cond.form.cmb_ordStat.text );
	rtn = this.gfn_addStr( arg.SHP_STAT, div, rtn, "출하상태 : " + this.div_cond.form.cmb_shpStat.text );
	rtn = this.gfn_addStr( arg.CUS_NAM, div, rtn, "거래처 : " + arg.CUS_NAM );
	rtn = this.gfn_addStr( arg.USR_NAM, div, rtn, "납품처 : " + arg.USR_NAM );
	rtn = this.gfn_addStr( arg.USR_NAM, div, rtn, "납품처 : " + arg.USR_NAM );
	rtn = this.gfn_addStr( arg.ITEM_NAM, div, rtn, "품번/품명 : " + arg.ITEM_NAM );
	rtn = this.gfn_addStr( arg.ITEM_CLS, div, rtn, "품목 : " + this.div_cond.form.cmb_itemCls.text );
	rtn = this.gfn_addStr( arg.TOPCAT_CD, div, rtn, "대분류 : " + this.div_cond.form.cmb_topcat.text );
	rtn = this.gfn_addStr( arg.MIDCAT_CD, div, rtn, "중분류 : " + this.div_cond.form.cmb_midcat.text );
	
	return rtn;
	*/
}
//------------------------------------------------------------------------------------------------
// 펑션 - 버튼공통처리
//------------------------------------------------------------------------------------------------
this.fn_common_btn_onclick = function (obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
	/*
 	switch(obj.name) {
 	case "":
 		break;
 	case "":
 		break;
 	default:
 	}
	*/
};
//------------------------------------------------------------------------------------------------
// 트랜잭션 - XXXXX
//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------
// 펑션 - XXXXX
//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------
// 이벤트 - XXXXX
//------------------------------------------------------------------------------------------------

/*	dataset 필터링
	//------------------------------------------------------------------------------------------------
	// 이벤트 에디트 - DS 필터링
	//------------------------------------------------------------------------------------------------
	this.common_edt_onkeyup = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
	{
		var edtValue = "";
		if(!this.gfn_isNull(obj.value))
		{
			edtValue = obj.value.toUpperCase();
		}
		if(e.keycode == this.keycode.enter)
		{
			switch(obj.name) {
				case "edt_bd_no":
					this.ds_list_prod.filter("String(BD_NO).indexOf('" + edtValue +"')>=0");
					break;
				case "edt_bar_cd":
					this.ds_list_prod.filter("String(BAR_CD).indexOf('" + edtValue +"')>=0");
					break;
				case "edt_ht_no":
					this.ds_list_prod.filter("String(HEAT_NO).indexOf('" + edtValue +"')>=0");
					break;
				case "edt_ord_no":
					this.ds_list_prod.filter("String(ORD_NO).indexOf('" + edtValue +"')>=0");
					break;
			default:
			}
		}
	}
	//------------------------------------------------------------------------------------------------
	// 이벤트 콤보 - DS 필터링
	//------------------------------------------------------------------------------------------------
	this.common_combo_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
	{
		switch(obj.name) {
			case "cmb_box_flg":
				if(this.gfn_isNull(obj.value))
				{
					this.ds_list_prod.filter("");
				}
				else
				{
					this.ds_list_prod.filter("BOX_FLG==" + "'" + obj.value + "'");
				}
				break;
			case "cmb_box_knd":
				if(this.gfn_isNull(obj.value))
				{
					this.ds_list_prod.filter("");
				}
				else
				{
					this.ds_list_prod.filter("BOX_KND==" + "'" + obj.value + "'");
				}
				break;
			case "cmb_proc_yn":
				if(this.gfn_isNull(obj.value))
				{
					this.ds_list_prod.filter("");
				}
				else
				{
					this.ds_list_prod.filter("PROC_YN==" + "'" + obj.value + "'");
				}
				break;
			case "cmb_cop":
				if(obj.value == '%')
				{
					this.ds_list_prod.filter("");
				}
				else
				{
					this.ds_list_prod.filter("COP_CD==" + "'" + obj.value + "'");
				}
		default:
		}
	};
*/
/*
	부모 ---> 자식 
	
	부모폼
	if(objForm.ds_List_Save.getColumn(0, "ST_DIS_DRIV") != '')
	    {
	        var carOP = this.ds_List_DrivePlan.getColumn(this.ds_List_DrivePlan.rowposition,"운행번호");
	        this.gfn_popupOpen("detail"
	                       ,{
	                            ARG1 : carOP
	                            ,callback : function(id, rtn){
	                                           if ( !this.gfn_isNull( rtn )){
	                                                
	                                            }
	                                       }
	                        }
	                        ,"TM031::TM031_010_POP_003.xfdl"
	                      );
	    }
	팝업폼
	this.TM031_010_POP_003_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
	{
	    this.gfn_initMobile(obj);
	    
	    var arg = this.popup.params;
	    g_CaropNo = arg.ARG1;
*/

/*
	자식 ---> 부모

	팝업폼
	this.btn_Save_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
	{
	    this.gfn_closePopup( { VAL1 : this.msk_endDistanse.value, VAL2 : this.msk_oil.value } );
	};

	부모폼
	this.btn_DriveEnd_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
	{
	    isDriving = false;
	    this.btn_driveStart.set_text("운행시작");
	    this.gfn_popupOpen("endDrive"
	                       ,{
	                            ARG1 : ""
	                            ,callback : function(id, rtn){
	                                            if ( !this.gfn_isNull( rtn ))
	                                            {
	                                                this.ds_List_Save.setColumn(0,"END_DIS_DRIV",rtn.VAL1);
	                                                this.ds_List_Save.setColumn(0,"OIL_QTY",rtn.VAL2);
	                                            }
	                                        }
	                        }
	                        ,"TM031::TM031_010_POP_002.xfdl"
	                      );                      
	};	
	this.tab_Content_onchanged = function(obj:nexacro.Tab,e:nexacro.TabIndexChangeEventInfo)
{
	switch(e.postindex) {
	case 0:
		this.div_Top_Cond.form.edt_OutWH_CD.set_cssclass("");
		this.div_Top_Cond.form.edt_item_cd.set_cssclass("");
		this.div_Top_Cond.form.edt_ST_CD.set_cssclass("");
		break;
	case 1:
		this.div_Top_Cond.form.edt_OutWH_CD.set_cssclass("essential");
		this.div_Top_Cond.form.edt_item_cd.set_cssclass("essential");
		this.div_Top_Cond.form.edt_ST_CD.set_cssclass("essential");
		this.div_Top_Cond.form.edt_cust_cd.set_cssclass("");
		this.div_Top_Cond.form.edt_it_cd.set_cssclass("");
		break;
	case 2:
		this.div_Top_Cond.form.edt_OutWH_CD.set_cssclass("essential");
		this.div_Top_Cond.form.edt_cust_cd.set_cssclass("essential");
		this.div_Top_Cond.form.edt_it_cd.set_cssclass("essential");
		this.div_Top_Cond.form.edt_item_cd.set_cssclass("");
		this.div_Top_Cond.form.edt_ST_CD.set_cssclass("");
		break;
	default:
	}
};



*/