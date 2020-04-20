	if(!this.gfn_isNull(검색목적어))
	{
		대상데이터셋.filter("검색컬럼 ==" + "'" + 검색목적어 + "'" );
        // like
        대상데이터셋.filter("String(검색컬럼).indexOf('"+검색목적어+"')>=0");
	}
	else
	{
		대상데이터셋.filter(""); // 전체
	}
