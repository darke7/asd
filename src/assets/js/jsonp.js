import originJsonp from "jsonp"

export default function(url,data,option){
	let url += (url.indexof("?")<0?"?":&）+ param(data);
	return new Promise((resolve,reject)=>{
		originJsonp(url,option,(err,data)=>{
			if(!err){
				resolve(err);
			}else{
				reject(data);
			}
		});
	});
}


let param = (data)=>{
	let url = "";
	for( k in data){
		let value=data[k]===undefined?"":data[k];
		url+=`&${k}=${encodeURIcomponent(value)}`;
	}
	return url?url.subString(1):url;
}