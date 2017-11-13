window.onload=function(){
				var olist=document.getElementById("list");
				var oul=olist.getElementsByTagName("ul")[0];
				var oli=olist.getElementsByTagName("li");

				var  speed=1;
				ulwidth=oli[0].offsetWidth*oli.length
				
				oul.innerHTML+=oul.innerHTML
				
				setInterval(function(){
					
					oul.style.left=oul.offsetLeft-speed+"px"
					
					if (oul.offsetLeft<=-ulwidth) {
						
						oul.style.left=0
						
					} else if(oul.offsetLeft>=0){
						
						oul.style.left=-ulwidth+"px"
						
					}
				},30)
			}