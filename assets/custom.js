$(document).ready(()=>{
    let list = [
		{ 	
			img_title : "title1",
			img_url : "3.jpg" ,
			img_desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ratione ipsum ipsa mollitia vel deserunt nulla dolores. Consequuntur, eum pariatur vitae laboriosam earum iure amet minus nisi dolorum in suscipit?"
		},
		{ 	
			img_title : "title2",
			img_url : "3.jpg" ,
			img_desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim voluptatum quasi blanditiis cum dolore numquam eaque praesentium reprehenderit itaque veniam ipsam possimus qui, ab quo quas, at similique inventore."
		},
	];

	let list2 = [
		{ 	
			img_title : "title3",
			img_url : "3.jpg" ,
			img_desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam unde temporibus est veritatis dicta iure repellat aliquam velit quae earum hic fugit totam, optio corporis illum ratione? Placeat, et perspiciatis."
		},
		{ 	
			img_title : "title4",
			img_url : "3.jpg" ,
			img_desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptas quis quaerat natus commodi tempora ad illo minus amet sit nemo eligendi quibusdam illum maxime, unde officiis dignissimos! Voluptatem, maxime!"
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