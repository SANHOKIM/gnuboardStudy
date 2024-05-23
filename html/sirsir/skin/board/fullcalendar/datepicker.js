  $(function() {
    $(".datepicker").datepicker({
		dateFormat:"yy-mm-dd",
		monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
		dayNamesMin:["일","월","화","수","목","금","토"],
		changeMonth:true, // 월변경가능
		changeYear:true,  // 년변경가능
		showMonthAfterYear:true // 년 뒤에 월표시
	});

  });