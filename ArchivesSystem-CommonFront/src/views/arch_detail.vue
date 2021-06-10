<template>
	
	  <div>
		 <Headerbar></Headerbar>
		 <div class="one_row_line"></div>
		 
	      <div class="main_detail"   >
			 <p style="color:#409EFF;font-size: 20px;">{{archData.title}}</p>
			 <p style="color: #BBBBBB">来源  {{archData.departName}}</p>
			 <br>
			<p style="font-family:'楷体';font-size:15px">全宗号：{{archData.departId}}  <i style="font-style:normal;color:blue">|</i> 档号：{{archData.fileId}} </p>
			 <p style="font-family:'楷体';font-size:15px"><i style="color:blue" class="el-icon-tickets"></i>描述: <i style="font-style:normal"  v-html="archData.description">{{archData.description}}</i>     </p>
			 <p style="font-family:'楷体';font-size:15px"><i  style="color:blue" class="el-icon-date"></i>归档时间：{{archData.createdTime}} </p>
			 <p style="font-size:15px"> <i style='color:blue' class="el-icon-document"></i> <i  class="el-icon-d-arrow-left"  v-html="archData.oldFilename"> {{archData.oldFilename}} </i> <i class="el-icon-d-arrow-right"></i></p>
			 <p style="font-family:'楷体';font-size:15px">附件大小：<i style="font-style:normal"> {{archData.fileSize}} </i> <i style="font-style:normal;color:blue">KB</i></p> 
			 <p>借阅状态：{{archData.borrowState}} </p>
			 <p style="font-family:'楷体';font-size:15px"> <i icon="el-icon-office-building"></i>所属部门：<i style="font-style:normal;font-family:'宋体';color:blue" >  {{archData.departName}}</i></p>
			
			 <br>
			  <el-button type="primary"  @click="filePreview()"
			  
			    v-loading.fullscreen.lock="isloading"
			    element-loading-text="拼命加载中"
			    element-loading-spinner="el-icon-loading"
			    element-loading-background="rgba(0, 0, 0, 0.8)"
			   >
			   预览附件
			  </el-button>   
			  
			  <el-button type="success"  @click="downloadEnclosure()">下载附件</el-button>
			  <el-button type="primary" v-if="archData.borrowState ==='可借' " @click="goToBorrowArch()">借阅档案</el-button>  
			  <el-button type="primary" v-if="archData.borrowState==='已借出' " @click="goToOrderArch()">预约档案</el-button>  
		 </div>
		 
		 <div class="bottom_div" ></div>
		 
		 
	  </div>
	  
	  
</template>

<script>
	import Headerbar from './headerbar.vue' 
	
	
	   export default{
	      data(){ 
	          return {
	              archData:{},  
	              editPage:{},   
			      isloading:false,
				  
	            };
	        },
	      methods: {
			     //预约申请
				 goToOrderArch() 
				 {
					 var arch_id = this.archData.id
					 // this.$router.push("/borrow?arch_id="+arch_id)
					 this.$router.push({path:'/arch_order',query:{arch_id,arch_id}}) 
					 
				 },
			         //借阅操作开始，首先得登录系统，方可，然后直接在系统中进行提交即可
					 goToBorrowArch()	 
					 {
						var arch_id = this.archData.id
						
						// this.$router.push("/borrow?arch_id="+arch_id)
					    this.$router.push({path:'/borrow',query:{arch_id,arch_id}})
					 },
					  //下载附件的操作，若为视频文件则直接使用a标签进行下载即可
					       downloadEnclosure(){
							  
					            //alert(id); 这个id为 编号，也是独一无二的
					           //直接进行访问这样也能进行下载
					           //groupName,remoteFilePath
					           //http://123.56.127.215/
					          this.editPage = this.archData
							  
					 
					           if(this.editPage.fileType == "mp4")
					           {
					             console.log("这里是视频的操作")
					             let a = document.createElement('a')
					             a.href="http://123.56.127.215/"+this.editPage.groupName+"/"+this.editPage.remoteFilePath;
					             a.click(); 
					             
					           }
					           else {
					           
					           this.$axios({
					             method:'GET',
					             url:this.dbURL+'/common-users/download?arch_id='+this.editPage.id,
					             // headers:{"Authorization":localStorage.getItem("token")},
					             responseType: 'blob'
					           }).then(res=>{
					                 console.log("excute  downloadFile ...")
					                
					                 console.log(res.data)
					                 let a = document.createElement('a');
					                 let blob = new Blob([res.data],{
					                    type:'application/octet-stream'
					                 }); 
					                 let objectUrl = URL.createObjectURL(blob);
					                 a.setAttribute("href",objectUrl);
					                 a.setAttribute("download", this.editPage.oldFilename);
					                 a.click()
		
					           })
					           }
					           
					  
					 
					 
					       },
						   
			         //若为 mp4等视频文件，则直接进行访问其路径即可group,remotepath即可
			         filePreview(){
			           
			             this.editPage = this.archData
			          
			             if(this.editPage.fileType == "mp4")
			             {
			               console.log("这里是浏览视频的操作")
			               let a = document.createElement('a')
			               a.href="http://123.56.127.215/"+editPage.groupName+"/"+editPage.remoteFilePath;
			               a.click();
			             }
						else if(this.editPage.fileType === 'jpg')
					    {
							let a = document.createElement('a')
							a.href="http://123.56.127.215/"+this.editPage.groupName+"/"+this.editPage.remoteFilePath;
							a.click();
						}
			            else {
						 this.isloading = true;
						 
			             this.$axios({
			               method:'GET',
			               url:this.dbURL+'/document/previewPdfFile?arch_id='+this.editPage.id,
			               // headers:{"Authorization":localStorage.getItem("token")},
			               //responseType: 'arraybuffer'
			               responseType: 'blob'
			             }).then(res=>{
			                  
							   console.log("正在执行预览文件的操作......")
			                   console.log(res)
			                  
			                   let a = document.createElement('a');
			                  
							   let blob = new Blob([res.data],{
			                      //type:'application/pdf'   //也是必不可少的
			                      type:res.data.type
			                   }); 
							  
			                   let objectUrl = window.URL.createObjectURL(blob);
			                   window.open(objectUrl)
			                   
							   this.isloading = false;
							   
			             })
			   
			             }
			             
			    
			         },
			  
			       //获取到该档案的详细信息
				   getDetailForOne(){
					     let archid = this.$route.query.archid;
						
						 this.$axios({
						   method:'GET',
						   url:this.dbURL+'/common-users/arch_one?archid='+archid,
						   // headers:{"Authorization":localStorage.getItem("token")},
				           
						  }).then(res=>{
						         console.log(res)
						         this.archData = res.data.data
								 
						 })
						 
						 
				   },
	                getUrl(){
	                  let routeData = this.$router.resolve({ path: '/main_show' });
	                  window.open(routeData.href, '_blank');
	                },  
	       },
	      created(){
	             this.getDetailForOne();
				 
	       },
	      components:{
	          Headerbar,
	        }
	   }
</script>

<style>
	 .main_detail{
		 width: 65%;
		 height: 300px;
		 margin-left: 8%;
		 margin-top: -2%;
		/* background-color:#DFE4ED; */
	 }
	 
	 .one_row_line{
	 	  position: absolute;
	 	  width:100%;
	 	  height: 1px;
	 	  margin-top:-4.5%;
	 	 /* border-top: solid #ACC0D8 1px; */
	 	/*  margin: -190px 0 0 -175px; */
	 	  border-radius: 5px;
	 	  background: rgba(218, 218, 218, 0.9);
	 }
	 
	 p{
	   line-height: 24.3px;
	 }
	 
	 .bottom_div{
		 height:400px;
		 
	 }
</style>
