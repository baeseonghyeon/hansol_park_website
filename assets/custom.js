$(document).ready(()=>{
    let list = [
		{ 	
			img_title : "침착맨",
			img_url : "https://i.ytimg.com/vi/Fx_w9jTxkBQ/maxresdefault.jpg" ,
			img_desc : "트위치 일류 스트리머 침착맨" 
		},
		{ 	
			img_title : "주펄",
			img_url : "http://img.etnews.com/news/article/2018/08/22/article_22184131884300.jpg" ,
			img_desc : "쌍천만 작가 주펄" 
		},
	];

	let list2 = [
		{ 	
			img_title : "침착맨",
			img_url : "https://i.ytimg.com/vi/wD9kz57Amrw/maxresdefault.jpg" ,
			img_desc : "트위치 일류 스트리머 침착맨" 
		},
		{ 	
			img_title : "침착맨 주호민",
			img_url : "http://file3.instiz.net/data/file3/2018/03/17/2/c/4/2c4f2ae41e728e97d9dafad91bae472c.jpg" ,
			img_desc : "프로페시아x침버린" 
		},
	];
	
    list.map((item , idx) =>{
		let copied_thumb = $('.mockup').clone().removeClass('mockup');
		copied_thumb.find('.item-thumb_img').attr({'src': item.img_url , 'data-type-idx' : idx});
		$("#contents1-1").append(copied_thumb);

		$('[data-type-idx ='+idx+']').on("click", function(){
			$("#contents1-3").find('.item-img').attr('src' , item.img_url);
			$("#contents1-3").find('.item-img_desc').text(item.img_desc);
			$("#guidebox1-3").find('.guidetext').text(item.img_title);
		});
	});
	
	list2.map((item , idx) =>{
		let copied_thumb = $('.mockup').clone().removeClass('mockup');
		copied_thumb.find('.item-thumb_img').attr({'src': item.img_url , 'data-type-idx2' : idx});
		$("#contents1-2").append(copied_thumb);

		$('[data-type-idx2 ='+idx+']').on("click", function(){
			$("#contents1-3").find('.item-img').attr('src' , item.img_url);
			$("#contents1-3").find('.item-img_desc').text(item.img_desc);
			$("#guidebox1-3").find('.guidetext').text(item.img_title);
		});
	});
});